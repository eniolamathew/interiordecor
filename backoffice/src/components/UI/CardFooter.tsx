import React from 'react';
import ProgressBar from './ProgressBar';

interface CardFooterProps {
  stats: {
    label: string;
    value: string;
    percentage: number;
    color: string;
  }[];
}

const CardFooter: React.FC<CardFooterProps> = ({ stats }) => {
  return (
    <div className="card-footer">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-5 g-4 mb-2 text-center">
        {stats.map((stat, index) => (
          <ProgressBar
            key={index}
            label={stat.label}
            value={stat.value}
            percentage={stat.percentage}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default CardFooter;