const theme = {
    breakpoints: {
        xs: 320,
        sm: 568,
        md: 800,
        lg: 1280,
        xl: 1528,
        xxl: 1920
    },
    borderWidth: "1px",
    borderRadius: "10px",
    bodyTextSize: "1rem",
    bodySmTextSize: "0.875rem",
    body: {
        size:"0.938rem",
        weight: "400",
        color: "#313131",
        lineHeight:"1.563rem",
        backgroundColor: "#000",
    },
    button: {
        size:"0.938rem",
        weight: "400",
        bold: "bold",
        color: "#313131",
        backgroundColor: "#fff",
        reverse: {
            size:"0.938rem",
            weight: "400",
            color: "#fff",
            backgroundColor: "black"
        }
    },
    headings: {
        h1: {
            size:"1.5rem",
            textTransform: "uppercase",
            weight: "700",
            color: "#313131",
            lineHeight:"2.375rem"
        },
        h2: {
            size:"1.3125rem",
            textTransform: "uppercase",
            weight: "700",
            color: "#313131",
            lineHeight:"2.0rem"
        },
        h3: {
            size:"1.5rem",
            textTransform: "uppercase",
            weight: "400",
            color: "#313131"
        },
        h4: {
            size:"0.9rem",
            textTransform: "none",
            weight: "600",
            color: "#313131"
        },
        h5: {
            size:"1.5rem",
            textTransform: "uppercase",
            weight: "600",
            color: "#313131"
        },
        h6: {
            size:"1.5rem",
            textTransform: "uppercase",
            weight: "600",
            color: "#313131"
        }
    },
    headingSize: "1.2rem",
    heading3Size: "1rem",
    boxShadow: "0 0.5rem 1rem 0 #E2E2E2",
    lightMode:{
        backgroundColor: "rgb(255,255,255)",
        color: "rgb(1, 1, 1)",
    },
    darkMode:{
        backgroundColor: "rgb(25,25,25)",
        color: "rgb(1,1,1)",
    },
    colors: {
        backgroundColor: "white",
        lighterGrey: "#F8F8F8",
        lightGrey: "#CCC",
        midGrey: "#828282",
        darkGrey: "#707070",
        black: "#313131",
        white: "#fff",
        textColor: "#313131",
        inputColor: "#646464",
        greyFrame: "#F5F5F5",
        greyBorder: "#DDD",
        buttonBorder: "#cccccc",
        success: "#015329",
        danger: "#F00",
        error: "#F00",
        information: "#015329",
        warning : "#fcdedc",
        quiet: "#EEE",
        shadow: "#F5F5F5",
        imageBackground: "#DDD",
        menuHighlight:"#CCC",
        disabled:"#CCC"
    },
    sectionPadding: "0rem",
    fonts: {
        default: {
            size: "0.9rem",
            weight: "200",
            bold: "600",
            family:"lato"
        },
        search: {
            size: "1.1rem",
            weight: "200",
            family:"lato"
        },
        listheader: {
            size: "0.938rem",
            weight: "700"
        },
        heading: {
            size: "1.4rem",
            weight: "400"
        },
        error: {
            size: "0.9rem",
            weight: "400"
        },
        mouseOverOpacity: 0.8
    }
}

export default theme;