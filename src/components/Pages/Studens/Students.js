import React, { useEffect } from 'react';

// IMPORTS...
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import StudentView from './studentView/StudentView';
import { student_data } from '../../../store/action/index';

// SCSS...
import classes from './students.module.scss';

const Students = () => {
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    dispatch(student_data(id));
  }, [id, dispatch]);

  const studentDate = useSelector(
    (state) => state && state.studentReducer && state.studentReducer.studentData
  );

  return (
    <div className={classes.Student}>
      <Container>
        <Row>
          {studentDate.length > 0 ? (
            studentDate.map((e) => <StudentView key={e.id} {...e.student.data} />)
          ) : (
            <div>No User..!!</div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Students;
