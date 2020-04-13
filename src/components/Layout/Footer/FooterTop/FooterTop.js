import React from 'react';

// IMPORTS...
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/logo-footer.png';

// SCSS...
import classes from '../footer.module.scss';

const FooterTop = () => {
  return (
    <div className={classes.footerTop}>
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <img src={logo} alt="Footer Logo"></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit voluptatem
                pariatur architecto vero porro aspernatur facilis alias eaque quo!
              </p>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end align-items-end">
            <Link to="https://www.facebook.com/usman.ghani.jaffri" className={classes.media}>
              <div className={classes.mediaIcon}>
                <span>
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </div>
            </Link>
            <Link to="https://www.facebook.com/usman.ghani.jaffri" className={classes.media}>
              <div className={classes.mediaIcon}>
                <span>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </div>
            </Link>
            <Link to="https://twitter.com/16_jafri" className={classes.media}>
              <div className={classes.mediaIcon}>
                <span>
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </div>
            </Link>
            <Link to="https://github.com/usmanGhani16" className={classes.media}>
              <div className={classes.mediaIcon}>
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterTop;
