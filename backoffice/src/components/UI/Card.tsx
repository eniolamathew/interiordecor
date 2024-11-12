import React from 'react';
import CardHeader from './CardHeader';
import ChartUI from './ChartUI';
import CardFooter from './CardFooter';
import Chart, { ChartData, ChartOptions } from 'chart.js/auto';


interface CardProps {
  title: string;
  dateRange: string;
  chartId: string;
  chartHeight: number;
  stats: {
    label: string;
    value: string;
    percentage: number;
    color: string;
  }[];
  options: React.ReactNode;
  chartType: string;
  chartClassname: string;
  chartlabels: string[];
  chartData: ChartData;
  chartConfig: ChartOptions;
}

const Card: React.FC<CardProps> = ({ title, dateRange, chartId, chartHeight, stats, options, chartType, chartClassname,
  chartlabels, chartData, chartConfig
 }) => {
  
  return (
    <div className="card mb-4">
      <div className="card-body">
        <CardHeader title={title} dateRange={dateRange} options={options} />
        <ChartUI 
          chartId={chartId} 
          chartHeight={chartHeight}         
          chartData={chartData}
          chartConfig={chartConfig}
          chartType= {chartType}
          chartClassname={chartClassname}
      />
      </div>
      <CardFooter stats={stats} />
    </div>
  );
};

export default Card;