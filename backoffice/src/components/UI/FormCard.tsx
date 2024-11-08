import React, { useEffect, useRef } from 'react';
import Chart, { ChartData, ChartOptions } from 'chart.js/auto';
import Icon from './Icon';

interface FormCardProps {
  title: string;
  value: string;
  bgColor: string;
  percentage: number;
  chartId: string;
  chartHeight: number;
  chartOptions?: React.ReactNode;
  chartData?: ChartData; 
  chartConfig?: ChartOptions; 
  chartType?: string
  chartClassname: string
}

const FormCard: React.FC<FormCardProps> = ({
  title,
  value,
  bgColor,
  percentage,
  chartId,
  chartHeight,
  chartOptions,
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

  const arrowDirection = percentage >= 0 ? 'cil-arrow-top' : 'cil-arrow-bottom';
  const percentageClass = percentage >= 0 ? 'text-success' : 'text-danger';

  return (
    <div className="col-sm-6 col-xl-3 mb-4">
      <div className={`card text-white ${bgColor}`}>
        <div className="card-body pb-0 d-flex justify-content-between align-items-start">
          <div>
            <div className="fs-4 fw-semibold">
              {value}{' '}
              <span className="fs-6 fw-normal">
                ({percentage > 0 ? '+' : ''}
                {percentage}%{' '}
                <div style={{display: "inline-block"}}><Icon id={`${arrowDirection}`} width={14} height={14} /></div>)
              </span>
            </div>
            <div>{title}</div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-transparent text-white p-0"
              type="button"
              data-coreui-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Icon id={'cil-options'} width={24} height={24} />
            </button>
            <div className="dropdown-menu dropdown-menu-end">{chartOptions}</div>
          </div>
        </div>
        <div className={`c-chart-wrapper ${chartClassname}`} style={{ height: chartHeight, overflow: 'hidden' }}>
          <canvas ref={chartRef} className="chart" id={chartId} height={chartHeight}></canvas>
        </div>
      </div>
    </div>
  );
};

export default FormCard;