package utils

import (
	"fmt"
	"net/url"
	"strconv"
	"strings"
)

type Paging struct {
	PageSize int
	PageNo   int
}

type Sorting struct {
	SortBy        string
	SortAscending bool
}

type Filter struct {
	Column     string
	Comparator string
	Value      string
}

// Property structure to define additional filters
type Property struct {
	Name  string
	Value interface{} 
}

// QueryOptions structure to define query options
type QueryOptions struct {
	TableName  string
	Columns    []string
	Filters    []Filter
	Properties []Property
	Sorting    Sorting
	Paging     Paging
}

// DataActions structure to represent sorting, pagination, filters, and properties
type DataActions struct {
	SortBy        string
	SortAscending bool
	Paging        Paging
	Filters       []Filter
	Properties    []Property
}

// ParseDataActions parses query parameters into a DataActions structure
func ParseDataActions(queryParams url.Values) (*DataActions, error) {
	// Default sorting options
	sortBy := queryParams.Get("sortBy")
	if sortBy == "" {
		sortBy = "id"
	}

	sortAscending := queryParams.Get("sortAscending")
	sortAsc := true
	if sortAscending == "false" {
		sortAsc = false
	}

	// Default pagination options
	pageSizeStr := queryParams.Get("paging.pageSize")
	pageSize, err := strconv.Atoi(pageSizeStr)
	if err != nil || pageSize <= 0 {
		pageSize = 25
	}

	pageNoStr := queryParams.Get("paging.pageNo")
	pageNo, err := strconv.Atoi(pageNoStr)
	if err != nil || pageNo <= 0 {
		pageNo = 1
	}

	// Parsing filters
	var filters []Filter
	for i := 0; ; i++ {
		column := queryParams.Get("filters[" + strconv.Itoa(i) + "].column")
		if column == "" {
			break
		}
		comparator := queryParams.Get("filters[" + strconv.Itoa(i) + "].comparator")
		value := queryParams.Get("filters[" + strconv.Itoa(i) + "].value")

		filters = append(filters, Filter{
			Column:     column,
			Comparator: comparator,
			Value:      value,
		})
	}

	// Parsing properties
	var properties []Property
	for i := 0; ; i++ {
		name := queryParams.Get("properties[" + strconv.Itoa(i) + "].name")
		if name == "" {
			break
		}
		valueStr := queryParams.Get("properties[" + strconv.Itoa(i) + "].value")

		// Convert value based on type or keep as string
		var value interface{}
		if intValue, err := strconv.Atoi(valueStr); err == nil {
			value = intValue
		} else if floatValue, err := strconv.ParseFloat(valueStr, 64); err == nil {
			value = floatValue
		} else if valueStr == "true" || valueStr == "false" {
			value = valueStr == "true"
		} else {
			value = valueStr
		}

		properties = append(properties, Property{Name: name, Value: value})
	}

	return &DataActions{
		SortBy:        sortBy,
		SortAscending: sortAsc,
		Paging: Paging{
			PageSize: pageSize,
			PageNo:   pageNo,
		},
		Filters:    filters,
		Properties: properties,
	}, nil
}

// BuildQuery constructs the SQL query based on provided options
func BuildQuery(options QueryOptions) string {
	// Build the SELECT clause
	columns := "*"
	if len(options.Columns) > 0 {
		columns = strings.Join(options.Columns, ", ")
	}

	query := fmt.Sprintf("SELECT %s FROM %s", columns, options.TableName)

	// Add the WHERE clause if filters or properties are provided
	if len(options.Filters) > 0 || len(options.Properties) > 0 {
		conditions := make([]string, 0)

		// Process filters
		for _, filter := range options.Filters {
			switch filter.Comparator {
			case "=":
				conditions = append(conditions, fmt.Sprintf("%s = '%s'", filter.Column, filter.Value))
			case "startswith":
				conditions = append(conditions, fmt.Sprintf("%s ILIKE '%s%%'", filter.Column, filter.Value))
			case "contains":
				conditions = append(conditions, fmt.Sprintf("%s ILIKE '%%%s%%'", filter.Column, filter.Value))
			case "endswith":
				conditions = append(conditions, fmt.Sprintf("%s ILIKE '%%%s'", filter.Column, filter.Value))
			case ">", "<", ">=", "<=":
				conditions = append(conditions, fmt.Sprintf("%s %s '%s'", filter.Column, filter.Comparator, filter.Value))
			default:
				// Handle other comparators if needed
			}
		}
		// Process properties
		for _, property := range options.Properties {
			switch value := property.Value.(type) {
			case string:
				conditions = append(conditions, fmt.Sprintf("%s = '%s'", property.Name, value))
			case int, float64:
				conditions = append(conditions, fmt.Sprintf("%s = %v", property.Name, value))
			default:
				// Handle other types if needed
			}
		}

		if len(conditions) > 0 {
			query += " WHERE " + strings.Join(conditions, " AND ")
		}
	}

	// Add the ORDER BY clause if sorting is provided
	if options.Sorting.SortBy != "" {
		order := "ASC"
		if !options.Sorting.SortAscending {
			order = "DESC"
		}
		query += fmt.Sprintf(" ORDER BY %s %s", options.Sorting.SortBy, order)
	}

	// Add the LIMIT and OFFSET clauses for paging
	if options.Paging.PageSize > 0 {
		offset := (options.Paging.PageNo - 1) * options.Paging.PageSize
		query += fmt.Sprintf(" LIMIT %d OFFSET %d", options.Paging.PageSize, offset)
	}

	return query
}

func ParseFilters(queryParams url.Values) []Filter {
	var filters []Filter
	for i := 0; ; i++ {
		column := queryParams.Get(fmt.Sprintf("filters[%d].column", i))
		comparator := queryParams.Get(fmt.Sprintf("filters[%d].comparator", i))
		value := queryParams.Get(fmt.Sprintf("filters[%d].value", i))
		if column == "" {
			break
		}
		// Normalize the comparator
		comparator = strings.ToLower(comparator)
		switch comparator {
		case "greaterthan":
			comparator = ">"
		case "lessthan":
			comparator = "<"
		case "equalto":
			comparator = "="
		case "startswith", "contains", "endswith":
			// Leave as is for these cases since they're handled specially in BuildQuery
		}

		filters = append(filters, Filter{
			Column:     column,
			Comparator: comparator,
			Value:      value,
		})
	}
	return filters
}

func ParseProperties(queryParams url.Values) []Property {
	var properties []Property
	for i := 0; ; i++ {
		name := queryParams.Get(fmt.Sprintf("properties[%d].name", i))
		if name == "" {
			break
		}
		value := queryParams.Get(fmt.Sprintf("properties[%d].value", i))
		properties = append(properties, Property{
			Name:  name,
			Value: value,
		})
	}
	return properties
}

func ParseInt(value string, defaultValue int) int {
	if parsed, err := strconv.Atoi(value); err == nil {
		return parsed
	}
	return defaultValue
}
