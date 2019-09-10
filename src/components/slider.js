import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components"
import Slidercard from "./slidercard"

const Stled=styled.div`
background: #f8f9fa !important;
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
.word{
  color: #999999;
    font-size: 16px;
    font-weight: 400;
    font-family: "Rubik", Arial, sans-serif;
    margin-bottom: 3rem;
}
`;

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
    };
    return (
      <Stled>
          <section class="section ">
        <p className="has-text-centered color">ACCOMPLISHMENTS</p>
        <p className="has-text-centered our">Our Projects</p>
        <p className="has-text-centered word">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <Slider {...settings}>
          <div>
            <Slidercard img="https://colorlib.com/preview/theme/square/images/project-1.jpg" title="Office Interior Design" subtitle="Interior Design"/>
          </div>
          <div>
          <Slidercard img="https://colorlib.com/preview/theme/square/images/project-2.jpg" title="Office Interior Design" subtitle="Interior Design"/>
          </div>
          <div>
          <Slidercard img="https://colorlib.com/preview/theme/square/images/project-3.jpg" title="Office Interior Design" subtitle="Interior Design"/>
          </div>
          <div>
          <Slidercard img="https://colorlib.com/preview/theme/square/images/project-4.jpg" title="Office Interior Design" subtitle="Interior Design"/>
          </div>
          <div>
          <Slidercard img="https://colorlib.com/preview/theme/square/images/project-5.jpg" title="Office Interior Design" subtitle="Interior Design"/>
          </div>
          <div>
          <Slidercard img="https://colorlib.com/preview/theme/square/images/project-6.jpg" title="Office Interior Design" subtitle="Interior Design"/>
          </div>
        </Slider>
        </section>
      </Stled>
    );
  }
}