import React from 'react'

type StatCardProps = {
    title: string;
    value: string;
    borderClass: string;
  };
  
const StatCard: React.FC<StatCardProps> = ({ title, value, borderClass }) => (
    <div className="col-6">
      <div className={`border-start border-start-4 ${borderClass} px-3 mb-3`}>
        <div className="small text-body-secondary text-truncate">{title}</div>
        <div className="fs-5 fw-semibold">{value}</div>
      </div>
    </div>
);

export default StatCard