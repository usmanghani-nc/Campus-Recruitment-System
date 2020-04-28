import React from 'react';

// IMPORTS...
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhoneAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';

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

      <div className="d-flex my-2">
        <h5 className="mr-2">
          <FontAwesomeIcon icon={faBuilding} /> {City}
        </h5>
        <h5 className="mr-2">
          <FontAwesomeIcon icon={faPaperPlane} /> {CompanyEmail}
        </h5>
        <h5 className="mr-2">
          <FontAwesomeIcon icon={faPhoneAlt} /> {Phone}
        </h5>
      </div>

      <p>{Description}</p>
    </Card>
  );
};

export default VacancysView;
