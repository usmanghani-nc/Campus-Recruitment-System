import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Card, Modal, Button } from 'antd';

const StudentView = ({
  email,
  education,
  lastName,
  birthdate,
  gender,
  firstName,
  passingOutYear,
  totalMarks,
}) => {
  const [visible, setVisible] = useState(false);
  const { Meta } = Card;

  return (
    <React.Fragment>
      <Col md={4}>
        <Card className="mt-2" hoverable>
          <Meta title="Student" />
          <h3>
            {firstName} {lastName}
          </h3>
          <div className="text-right">
            <Button onClick={() => setVisible(true)}>Detail</Button>
          </div>
        </Card>
      </Col>
      <Modal visible={visible} onCancel={() => setVisible(false)} onOk={() => setVisible(false)}>
        <p>{email}</p>
        <p>{education}</p>
        <p>{birthdate}</p>
        <p>{gender}</p>
        <p>{passingOutYear}</p>
        <p>{totalMarks}</p>
      </Modal>
    </React.Fragment>
  );
};

export default StudentView;
