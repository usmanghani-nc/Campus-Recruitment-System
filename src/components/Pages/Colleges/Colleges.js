import React, { useEffect } from 'react';

// IMPORTS...
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import CollegesView from './CollegesView/CollegesView';
import { data_reset } from '../../../store/action/index';

// SCSS...
import './colleges.scss';

const Colleges = () => {
  const dispatch = useDispatch();
  const collegeDate = useSelector((state) => state && state.colleges && state.colleges.colleges);

  useEffect(() => {
    dispatch(data_reset());
  }, [dispatch]);

  return (
    <div className="Colleges">
      <Container>
        <Row>
          {collegeDate.map((college) => (
            <CollegesView key={college.id} {...college} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Colleges;
