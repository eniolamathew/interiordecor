import React from 'react';

interface ProgressBarProps {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, percentage, color }) => {
  return (
    <div className="col">
      <div className="text-body-secondary">{label}</div>
      <div className="fw-semibold text-truncate">{value}</div>
      <div className="progress progress-thin mt-2">
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;