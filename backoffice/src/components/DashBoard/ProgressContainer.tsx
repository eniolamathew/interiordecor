import React from 'react'
import Icon from '../UI/Icon';

interface ProgressContainerProps {
    iconHref: string;
    label: string;
    value: string;
    percentage: number;
    progressBarClass: string;
}

const ProgressContainer: React.FC<ProgressContainerProps> = ({ iconHref, label, value, percentage, progressBarClass }) => {
  return (
    <div className="progress-group mb-4">
    <div className="progress-group-header">
    <div className="mr-2"> <Icon id={`${iconHref}`} width={24} height={24} /> </div>
      <div>{label}</div>
      <div className="ms-auto fw-semibold me-2">{value}</div>
      <div className="text-body-secondary small">({percentage}%)</div>
    </div>
    <div className="progress-group-bars">
      <div className="progress progress-thin">
        <div
          className={`progress-bar ${progressBarClass}`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  </div>
  )
}

export default ProgressContainer