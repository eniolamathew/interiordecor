import React from 'react'
import ProgressBar from './ProgressBar';

interface ProgressGroupProps {
    day: string;
    infoProgress: number;
    dangerProgress: number;
  }
  
  const ProgressGroup: React.FC<ProgressGroupProps> = ({ day, infoProgress, dangerProgress }) => (
    <div className="progress-group mb-4">
      <div className="progress-group-prepend">
        <span className="text-body-secondary small">{day}</span>
      </div>
      <div className="progress-group-bars">
        <ProgressBar color="bg-info" value={infoProgress} />
        <ProgressBar color="bg-danger" value={dangerProgress} />
      </div>
    </div>
  );

export default ProgressGroup