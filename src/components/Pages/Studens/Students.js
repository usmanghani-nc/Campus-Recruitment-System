import React from 'react';

// IMPORTS...
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import StudentView from './studentView/StudentView';

// SCSS...
import classes from './students.module.scss';

const Students = () => {
  const studentDate = useSelector((state) => state.studentReducer.studentData);

  console.log(studentDate);

  return (
    <div className={classes.Student}>
      <Container>
        <Row>
          {studentDate.map((e) => (
            <StudentView key={e.id} {...e.student.data} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Students;
