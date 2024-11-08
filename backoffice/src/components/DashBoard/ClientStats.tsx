import React from 'react'

interface ClientStatsProps {
    title: string;
    value: string;
    borderColor: string;
  }
  
  const ClientStats: React.FC<ClientStatsProps> = ({ title, value, borderColor }) => (
    <div className={`col-6`}>
      <div className={`border-start border-start-4 ${borderColor} px-3 mb-3`}>
        <div className="small text-body-secondary text-truncate">{title}</div>
        <div className="fs-5 fw-semibold">{value}</div>
      </div>
    </div>
  );

export default ClientStats