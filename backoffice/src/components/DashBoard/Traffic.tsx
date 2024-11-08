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
        chartlabels = {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October']}
      />
    </div>
  );
};

export default Traffic;