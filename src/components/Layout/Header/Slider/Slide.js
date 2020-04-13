import React from 'react';

// IMPORTS..
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import slide1 from '../../../../assets/img/slide1.jpg';
import slide2 from '../../../../assets/img/slide2.jpg';
import slide3 from '../../../../assets/img/slide3.jpg';

// SCSS..
import classes from './slide.module.scss';
import 'antd/dist/antd.css';

const Slide = () => {
  return (
    <div className={classes.slider}>
      <Carousel autoplay>
        <div className={classes.slideConetn}>
          <img src={slide1} alt="Slide 1" className="img-fluid" />
          <div className={classes.tablecell}>
            <h1>Are You ready to?</h1>
            <p>
              Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo.
              Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo.
              <br />
              Nunc quis sapien in arcu pharetra volutpat.Morbi nec vulputate dolor.
            </p>
            <div className={classes.slideBtn}>
              <Link to="#">READ MORE</Link>
              <Link to="#">GET STARTED NOW</Link>
            </div>
          </div>
        </div>
        <div className={classes.slideConetn}>
          <img src={slide2} alt="Slide 2" className="img-fluid" />
          <div className={classes.tablecell}>
            <div className={classes.tablecell}>
              <h1>Are You ready to?</h1>
              <p>
                Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie
                justo. Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec
                molestie justo.
                <br />
                Nunc quis sapien in arcu pharetra volutpat.Morbi nec vulputate dolor.
              </p>
              <div className={classes.slideBtn}>
                <Link to="#">READ MORE</Link>
                <Link to="#">GET STARTED NOW</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.slideConetn}>
          <img src={slide3} alt="Slide 3" className="img-fluid" />
          <div className={classes.tablecell}>
            <div className={classes.tablecell}>
              <h1>Are You ready to?</h1>
              <p>
                Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie
                justo. Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec
                molestie justo.
                <br />
                Nunc quis sapien in arcu pharetra volutpat.Morbi nec vulputate dolor.
              </p>
              <div className={classes.slideBtn}>
                <Link to="#">READ MORE</Link>
                <Link to="#">GET STARTED NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slide;
