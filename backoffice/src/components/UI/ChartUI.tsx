import React, { useEffect, useRef } from 'react';
import Chart, { ChartData, ChartOptions } from 'chart.js/auto';

interface ChartProps {
  chartId: string;
  chartHeight: number;
  chartOptions?: React.ReactNode;
  chartData?: ChartData; 
  chartConfig?: ChartOptions; 
  chartType?: string
  chartClassname: string
}

const ChartUI: React.FC<ChartProps> = ({
  chartId,
  chartHeight,
  chartData,
  chartConfig,
  chartClassname,
  chartType
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current && chartData) {
      const chartInstance = new Chart(chartRef.current, {
        type: chartType === 'line'? 'line' : 'bar', 
        data: chartData,
        options: chartConfig,
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [chartData, chartType, chartConfig]);

  return (
      <div className={`c-chart-wrapper ${chartClassname}`} style={{ height: chartHeight, marginTop: "40px", overflow: 'hidden' }}>
        <canvas ref={chartRef} className="chart" id={chartId} height={chartHeight}></canvas>
      </div>
  );
};

export default ChartUI;