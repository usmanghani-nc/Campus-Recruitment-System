import React from 'react';

// IMPORTS...
import { Card, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhoneAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Spin } from 'antd';

const VacancysView = ({
  title,
  PostedDate,
  CompanyName,
  City,
  CompanyEmail,
  Description,
  Phone,
  handleChangeFile,
  handleUpload,
  userId,
  id,
  spin
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

      <div className="uplado-btn">
        <input type="file" onChange={handleChangeFile} />

        <Button onClick={() => handleUpload(userId, id)}>
          <Spin spinning={spin} >Upload</Spin>
        </Button>

      </div>
    </Card>
  );
};

export default VacancysView;
