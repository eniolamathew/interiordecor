import React from 'react'

interface ProgressBarProps {
    color: string;
    value: number;
  }
  
  const ProgressBar: React.FC<ProgressBarProps> = ({ color, value }) => (
    <div className="progress progress-thin">
      <div
        className={`progress-bar ${color}`}
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );

export default ProgressBar