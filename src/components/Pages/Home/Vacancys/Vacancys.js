import React, { useState } from 'react';

// IMPORTS ...
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { firestorage } from '../../../../firebase/config';
import { vacancyNotification } from '../../../../store/action/index'
import VacancysView from './VacancysView/VacancysView';

// SCSS...
import './vacancys.scss';

const Vacancys = () => {
  const initailState = {
    rasume: '',
    isLoading: false,
    firstName: '',
    lastName: ''
  };

  const [state, setState] = useState(initailState);

  const dispatch = useDispatch();

  const vacancys = useSelector(
    (state) => state && state.companyReducer && state.companyReducer.vacancys
  );

  useSelector((stateFul) => {
    if (stateFul && stateFul.authReducer && stateFul.authReducer.student && !state.isLoading) {
      const { firstName, lastName } = stateFul.authReducer.student.data;
      setState({
        ...state,
        isLoading: true,
        firstName: firstName,
        lastName: lastName
      })
    }
  });

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      setState({
        ...state,
        rasume: e.target.files[0],
      });
    }
  };


  const handleUpload = (userId) => {

    const name = `rasume/${new Date()}-${state.rasume.name}`
    const metaDate = {
      contenetType: state.rasume.type
    }

    try {
      const uploadTask = firestorage.ref().child(name).put(state.rasume, metaDate);

      uploadTask.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
          const notification = {
            url,
            userId,
            firstName: state.firstName,
            lastName: state.lastName,
            visited: false
          }

          dispatch(vacancyNotification(notification))

        })

    } catch (error) {
      console.log(error)
    }
  };

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
              <VacancysView
                {...v.vacancy.vacancy}
                handleChangeFile={handleChangeFile}
                handleUpload={handleUpload}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Vacancys;
