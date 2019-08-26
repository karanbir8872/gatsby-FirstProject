import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components"
const Stled=styled.div`
.color{
  font-size: 16px;
  color: #2e9e5b;
  letter-spacing: 2px;
  margin-bottom: 5px;
  font-family: unset;
}
.our{
  font-size:35px;
  font-weight:500;
    margin-bottom: 2rem;
}
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Stled>
      <div>
        <p className="has-text-centered color">ACCOMPLISHMENTS</p>
        <p className="has-text-centered our">Our Projects</p>
        <p className="has-text-centered">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <Slider {...settings}>
          <div>
            <img src="https://colorlib.com/preview/theme/square/images/project-1.jpg"/>
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/square/images/project-2.jpg"/>
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/square/images/project-3.jpg"/>
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/square/images/project-4.jpg"/>
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/square/images/project-5.jpg"/>
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/square/images/project-6.jpg"/>
          </div>
        </Slider>
      </div>
      </Stled>
    );
  }
}