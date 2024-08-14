import React from "react";
import { Carousel } from "react-bootstrap";

const BootCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img width= "100%" src="https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235_1280.jpg" alt="image" />
      </Carousel.Item>
      <Carousel.Item>
        <img width= "100%" src="https://cdn.pixabay.com/photo/2017/10/03/17/53/nature-2813487_1280.jpg" alt="image" />
      </Carousel.Item>
      <Carousel.Item>
        <img width= "100%" src="https://cdn.pixabay.com/photo/2016/08/01/19/07/banner-1561790_1280.jpg" alt="image" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BootCarousel;
