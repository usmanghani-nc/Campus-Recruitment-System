import React, { useState } from 'react';

// IMPORTS ...
import { useSelector } from 'react-redux';
import VacancysView from './VacancysView/VacancysView';
import { Container, Row, Col } from 'react-bootstrap';
import { firestorage } from '../../../../firebase/config';

// SCSS...
import './vacancys.scss';

const Vacancys = () => {
  const initailState = {
    rasume: '',
  };

  const [state, setState] = useState(initailState);

  const vacancys = useSelector(
    (state) => state && state.companyReducer && state.companyReducer.vacancys
  );


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
            userId
          }

          console.log(notification)
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
