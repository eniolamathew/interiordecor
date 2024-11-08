import React from 'react'
import ProgressGroup from './ProgressGroup';

interface WeeklyProgressProps {
    progressData: Array<{
      day: string;
      infoProgress: number;
      dangerProgress: number;
    }>;
  }
  
  const WeeklyProgress: React.FC<WeeklyProgressProps> = ({ progressData }) => (
    <div>
      {progressData.map(({ day, infoProgress, dangerProgress }) => (
        <ProgressGroup key={day} day={day} infoProgress={infoProgress} dangerProgress={dangerProgress} />
      ))}
    </div>
  );

export default WeeklyProgress