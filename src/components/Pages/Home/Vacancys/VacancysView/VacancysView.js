import React from 'react';

// IMPORTS...
import { Card } from 'antd';

const VacancysView = ({
  title,
  PostedDate,
  CompanyName,
  City,
  CompanyEmail,
  Description,
  Phone,
}) => {
  return (
    <Card title={title} bordered={true} hoverable>
      <h4>{CompanyName}</h4>

      <span>{PostedDate}</span>

      <div className="d-flex">
        <h5 className="mr-2">{CompanyEmail}</h5>
        <h5 className="mr-2">{Phone}</h5>
      </div>

      <p>{Description}</p>
    </Card>
  );
};

export default VacancysView;
