import React from 'react';
import StatCard from './StatCard';
import ProgressContainer from './ProgressContainer';

const AnalyticsSection = () => {
  return (
  <div className="col-sm-6">
    <div className="row">
      <StatCard title="Pageviews" value="163" borderClass="border-start-warning" />
      <StatCard title="Organic" value="123" borderClass="border-start-success" />
    </div>
    <hr className="mt-0 mb-3" />

    <ProgressContainer
      iconHref="cil-user"
      label="Male"
      value="43%"
      percentage={43}
      progressBarClass="bg-warning"
    />
    <ProgressContainer
      iconHref="cil-user-female"
      label="Female"
      value="37%"
      percentage={37}
      progressBarClass="bg-warning"
    />
    <ProgressContainer
      iconHref="cib-google"
      label="Organic Search"
      value="191,235"
      percentage={56}
      progressBarClass="bg-success"
    />
    <ProgressContainer
      iconHref="cib-facebook-f"
      label="Facebook"
      value="51,223"
      percentage={15}
      progressBarClass="bg-success"
    />
    <ProgressContainer
      iconHref="cib-twitter"
      label="Twitter"
      value="37,564"
      percentage={11}
      progressBarClass="bg-success"
    />
    <ProgressContainer
      iconHref="cib-linkedin"
      label="LinkedIn"
      value="27,319"
      percentage={8}
      progressBarClass="bg-success"
    />
  </div>
  )
};

export default AnalyticsSection;