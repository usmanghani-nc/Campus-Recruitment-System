import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Card, Modal, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faEnvelope, faCompass, faBook } from '@fortawesome/free-solid-svg-icons';

const CompanyView = ({ companyName, companyEmail, companyType, companyLocation }) => {
  const [visible, setVisible] = useState(false);
  const { Meta } = Card;

  return (
    <React.Fragment>
      <Col md={4}>
        <Card className="mt-2" hoverable>
          <Meta title="Company" />
          <h3>{companyName}</h3>
          <div className="text-right">
            <Button onClick={() => setVisible(true)}>Detail</Button>
          </div>
        </Card>
      </Col>
      <Modal visible={visible} onCancel={() => setVisible(false)} onOk={() => setVisible(false)}>
        <p>
          <FontAwesomeIcon icon={faGraduationCap} /> {companyName}
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> {companyEmail}
        </p>
        <p>
          <FontAwesomeIcon icon={faBook} /> {companyType}
        </p>
        <p>
          <FontAwesomeIcon icon={faCompass} /> {companyLocation}
        </p>
      </Modal>
    </React.Fragment>
  );
};

export default CompanyView;
