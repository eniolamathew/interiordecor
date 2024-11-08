import React from 'react';
import ClientStats from './ClientStats';
import WeeklyProgress from './WeeklyProgress';

const DashboardCard: React.FC = () => {
  const progressData = [
    { day: 'Monday', infoProgress: 34, dangerProgress: 78 },
    { day: 'Tuesday', infoProgress: 56, dangerProgress: 94 },
    { day: 'Wednesday', infoProgress: 12, dangerProgress: 67 },
    { day: 'Thursday', infoProgress: 43, dangerProgress: 91 },
    { day: 'Friday', infoProgress: 22, dangerProgress: 73 },
    { day: 'Saturday', infoProgress: 53, dangerProgress: 82 },
    { day: 'Sunday', infoProgress: 9, dangerProgress: 69 },
  ];

  return (
    <div className="col-sm-6">
      <div className="row">
        <ClientStats title="New Users" value="231" borderColor="border-start-info" />
        <ClientStats title="Recurring Users" value="976" borderColor="border-start-danger" />
      </div>
      <hr className="mt-0" style={{marginBottom:"2rem"}}/>
      <WeeklyProgress progressData={progressData} />
    </div>
  );
};

export default DashboardCard;