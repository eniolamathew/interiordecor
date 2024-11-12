import React from 'react';
import Card from '../UI/Card';
import FormInput from '../UI/FormInput';
import Icon from '../UI/Icon';

const Traffic: React.FC = () => {
  const options = (
    <>
      <div className="btn-group btn-group-toggle mx-3" data-coreui-toggle="buttons">
        <FormInput className="btn-check" id="option1" type="radio" name="options" autoComplete="off" />
        <label className="btn btn-outline-secondary" style={{borderRadius: "4px 0px 0px 4px"}}> Day</label>
        <FormInput className="btn-check" id="option2" type="radio" name="options" autoComplete="off" defaultChecked />
        <label className="btn btn-outline-secondary active"> Month</label>
        <FormInput className="btn-check" id="option3" type="radio" name="options" autoComplete="off" />
        <label className="btn btn-outline-secondary"> Year</label>
      </div>
      <button className="btn btn-primary" type="button">
        <Icon id="cil-cloud-download" width={24} height={24} />
      </button>
    </>
  );

  const stats = [
    { label: 'Visits', value: '1,036 Users (40%)', percentage: 40, color: 'success' },
    { label: 'Unique', value: '1,208 Users (20%)', percentage: 20, color: 'info' },
    { label: 'Pageviews', value: '906 Views (60%)', percentage: 60, color: 'warning' },
    { label: 'New Users', value: '806 Users (80%)', percentage: 80, color: 'danger' },
    { label: 'Bounce Rate', value: '40.15%', percentage: 40, color: '' },
  ];

  const chartlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October']

  return (
    <div >
      <Card
        title="Traffic"
        dateRange="January - October 2024"
        chartId="main-chart"
        chartHeight={300}
        stats={stats}
        options={options}
        chartClassname={'mt-3 mx-3'}
        chartType={'line'}
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
        chartlabels = {chartlabels}
      />
    </div>
  );
};

export default Traffic;