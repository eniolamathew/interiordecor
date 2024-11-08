import React from 'react';

const Breadcrumb: React.FC = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb my-0">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item active">
          <span>Dashboard</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;