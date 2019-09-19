import React from 'react';
import styled from 'styled-components';
const Footer = styled.div`
  background: #000000;
  .mgg {
    margin-right: 15px;
  }
  .mar {
    margin-bottom: 2rem;
    margin-top: 6rem;
  }
  .trr {
    margin-bottom: 2rem;
  }
`;
const footer = () => (
  <Footer>
    <section className="section">
      <div className="container">
        <div class="columns">
          <div class="column">
            <h1 class="is-size-4 has-text-white trr">Square</h1>
            <p class="has-text-grey-light">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="column">
            <h2 class="is-size-4 has-text-white trr">Links</h2>
            <ul class="has-text-grey-light">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
          </div>
          <div class="column ">
            <h2 class="is-size-4 has-text-white trr">Services</h2>
            <ul class="has-text-grey-light">
              <li>Architectural Design</li>
              <li>Interior Design</li>
              <li>Exterior Design</li>
              <li>Lighting Design</li>
              <li>AutoCAD Service</li>
            </ul>
          </div>
          <div class="column">
            <h2 class="is-size-4 has-text-white trr">have a question?</h2>
            <ul>
              <li>
                <p class="has-text-grey-light">
                  <i class="fas fa-map-marker-alt mgg"></i>203 Fake St. Mountain
                  View, San Francisco, California, USA
                </p>
                <p class="has-text-grey-light">
                  <i class="fas fa-phone mgg"></i> +2 392 3929 210
                </p>
                <p class="has-text-grey-light">
                  <i class="fas fa-envelope mgg"></i>info@yourdomain.com
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="content has-text-centered has-text-grey-light mar">
          <p>
            Copyright ©2019 All rights reserved | This template is made with by
            Colorlib.
          </p>
        </div>
      </div>
    </section>
  </Footer>
);
export default footer;
