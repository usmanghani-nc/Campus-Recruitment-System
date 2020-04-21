import React from 'react';

// IMPORTS..
import { useSelector } from 'react-redux';
import CompanyView from './ComapanyView/CompanyView';
import { Container, Row } from 'react-bootstrap';
// SCSS..
import classes from './company.module.scss';

const Companys = () => {
  const company = useSelector((state) => state.companyReducer.companyData);

  return (
    <div className={classes.Companys}>
      <Container>
        <Row>
          {company.map((e) => (
            <CompanyView key={e.id} {...e.company.data} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Companys;
