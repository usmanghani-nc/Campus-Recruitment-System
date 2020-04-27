import React from 'react';

// IMPORTS ...
import { useSelector } from 'react-redux';
import VacancysView from './VacancysView/VacancysView';
import { Container, Row, Col } from 'react-bootstrap';

// SCSS...
import './vacancys.scss';

const Vacancys = () => {
  const vacancys = useSelector(
    (state) => state && state.companyReducer && state.companyReducer.vacancys
  );

  return (
    <div className="Vacancys">
      <Container>
        <Row>
          <div className="welcom_text">
            <h3>
              Vacancys <span>latest vacancy</span>
            </h3>
          </div>
          {vacancys.map((v) => (
            <Col sm={6} md={12} key={v.id} className="col">
              <VacancysView {...v.vacancy.vacancy} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Vacancys;
