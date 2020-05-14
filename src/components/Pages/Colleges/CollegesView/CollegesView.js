import React from 'react';
import { Col } from 'react-bootstrap';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const CollegesView = ({ id, collegeName }) => {
  const { Meta } = Card;

  return (
    <React.Fragment>
      <Col md={4}>
        <Card className="mt-2" hoverable>
          <Meta title="Colleges" />
          <h3>{collegeName}</h3>
          <div className="text-right">
            <Link to={`/students/${id}`}>Detail</Link>
          </div>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CollegesView;
