import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './Img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Carousel.module.css'; 

function Carousell() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItem) => {
          return <img src={imageItem} />;
        })}
      </Carousel>
      <div className={styles.hero__img}></div>
    </div>
  );
}

export default Carousell
