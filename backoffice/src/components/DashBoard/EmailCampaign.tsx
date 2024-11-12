import React from 'react';
import Card from '../UI/Card';
import FormInput from '../UI/FormInput';
import Icon from '../UI/Icon';

const EmailCampaign: React.FC = () => {
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

  const chartlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October']

  const stats = [
    { label: 'Open Rate', value: '1,233 Opens (85%)', percentage: 85, color: 'success' },
    { label: 'Click-Through Rate (CTR)', value: '814 clicks (66%)', percentage: 66, color: 'info' },
    { label: 'Sharing/Forwarding Rate', value: '370 forwards (30%)', percentage: 30, color: 'warning' },
    { label: 'Spam Complaint', value: '3 complaints (0.2%)', percentage: 0.2, color: 'danger' },
    { label: 'Bounce Rate', value: '40.15%', percentage: 40, color: 'secondary' },
  ];

  return (
    <div >
      <Card
        title="Email Campaign Statistics"
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
                data: [123, 212, 276, 288, 257, 272, 320, 454, 629, 545],
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

export default EmailCampaign;