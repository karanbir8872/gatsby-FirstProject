import React from "react"
import styled from "styled-components";

const Section=styled.div`
background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://colorlib.com/preview/theme/square/images/bg_1.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position: center center;


.nav{
    margin-top:2rem;
}
.quote{
  background: #2E9E5B;
  border-radius: 7px;
}
.let{
  margin-top: -1rem;
}
.lik{
  margin-top: 2rem;
}
.navbar-item{
  margin-left:1rem;
}
.tim{
  line-height: 1.2;
}
.button{
  background-color: Transparent;
  outline:none;
  margin-bottom: 1rem;
`;
const header = () => (
  
  <Section className="hero  is-fullheight">
  <div className="hero-head">
    <nav className="navbar nav">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item has-text-weight-semibold is-size-4 has-text-white is-family-sans-serif">
            SQUARE.
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item has-text-success">
              Home
            </a>
            <a className="navbar-item has-text-white">
              About
            </a>
            <a className="navbar-item has-text-white">
              Project
            </a>
            <a className="navbar-item has-text-white">
              Team
            </a>
            <a className="navbar-item has-text-white">
              Testimony
            </a>
            <a className="navbar-item has-text-white">
              Bolg
            </a>
            <a className="navbar-item has-text-white">
              Contact
            </a>
            <a className="navbar-item quote has-text-white">
               Request a quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div className="hero-body">
    <div className="container">
    <div className="columns">
  <div className="column is-three-fifths ">
  <a className="button is-medium has-text-white-ter button">
    <span className="icon">
    <i className="fas fa-play"></i>
    </span>
    <span>WATCH VEDIO</span>
  </a>
  <p className=" is-size-1 has-text-left has-text-white tim">
      We have a passion in creating new and unique spaces
      </p>
      <p className="subtitle has-text-left lik has-text-grey-lighter">
      Travel to the any corner of the world, without going around in circles
      </p>
  </div>
  </div>
    </div>
  </div>
</Section>
);
export default header;
