import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://colorlib.com/preview/theme/square/images/bg_1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .nav {
    margin-top: 2rem;
  }
  .quote {
    background: #2e9e5b;
    border-radius: 7px;
  }
  .let {
    margin-top: -1rem;
  }
  .lik {
    margin-top: 2rem;
  }
  .navbar-item {
    margin-left: 1rem;
  }
  .tim {
    line-height: 1.2;
  }
  .button {
    background-color: Transparent;
    outline: none;
    margin-bottom: 1rem;
  }
  .navbar-burger {
    color: #fff;
  }
`;
class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  MobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive
    });
  }
  render() {
    const { isActive } = this.state;
    return (
      <Section className="hero  is-fullheight">
        <div className="hero-head">
          <nav className={isActive ? 'navbar' : 'navbar'}>
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item has-text-weight-semibold is-size-4 has-text-white is-family-sans-serif">
                  SQUARE.
                </a>
                <span
                  className={
                    isActive
                      ? 'navbar-burger burger mobile is-active'
                      : 'navbar-burger burger mobile'
                  }
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={() => this.MobileMenu()}
                  data-target="navbarMenuHeroB"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div
                id="navbarMenuHeroB"
                className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}
              >
                <div className="navbar-end">
                  <a className="navbar-item has-text-success">Home</a>
                  <a className="navbar-item has-text-success">About</a>
                  <a className="navbar-item has-text-success">Project</a>
                  <a className="navbar-item has-text-success">Team</a>
                  <a className="navbar-item has-text-success">Testimony</a>
                  <a className="navbar-item has-text-success">Bolg</a>
                  <a className="navbar-item has-text-success">Contact</a>
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
                  <span>WATCHED VEDIO</span>
                </a>
                <p className=" is-size-1 has-text-left has-text-white tim">
                  We have a passion in creating new and unique spaces
                </p>
                <p className="subtitle has-text-left lik has-text-grey-lighter">
                  Travel to the any corner of the world, without going around in
                  circles
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default header;
