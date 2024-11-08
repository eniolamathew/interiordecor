import React from 'react';
import CardHeader from './CardHeader';
import ChartUI from './ChartUI';
import CardFooter from './CardFooter';

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
}

const Card: React.FC<CardProps> = ({ title, dateRange, chartId, chartHeight, stats, options, chartType, chartClassname,
  chartlabels,
 }) => {
  
  return (
    <div className="card mb-4">
      <div className="card-body">
        <CardHeader title={title} dateRange={dateRange} options={options} />
        <ChartUI 
          chartId={chartId} 
          chartHeight={chartHeight}         
          chartData={{
            labels: chartlabels,
            datasets: [
              {
                label: '', 
                data: [45, 245, 260, 278, 390, 402, 620, 554, 489, 432],
                borderColor: 'rgba(100, 92, 255, 1)', 
                borderWidth: 2,
                fill: true, 
                backgroundColor: 'rgba(100, 92, 255, 0.1)', 
                tension: 0.4, 
                pointRadius: 0, 
                pointHoverRadius: 7,
              },
              {
                label: '', 
                data: [345, 212, 76, 188, 397, 432, 520, 454, 629, 545],
                borderColor: 'rgba(3, 250, 30, 1)', 
                borderWidth: 2,
                fill: true, 
                backgroundColor: 'rgba(3, 250, 24, 0.1)', 
                tension: 0.4, 
                pointRadius: 0, 
                pointHoverRadius: 7,
              },
            ],
        }}
        chartConfig={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false, 
            },
            tooltip: {
              enabled: true,
              callbacks: {
                title: (context: any) => chartlabels[context[0].dataIndex], 
                label: (context: any) => `Value: ${context.raw}`,
              },
            },
          },
        }}
        chartType= {chartType}
        chartClassname={chartClassname}
      />
      </div>
      <CardFooter stats={stats} />
    </div>
  );
};

export default Card;