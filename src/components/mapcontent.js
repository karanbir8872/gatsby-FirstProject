import React from 'react';
import styled from 'styled-components';
const Map = styled.div`
  margin-top: 12rem;
  .col {
    color: #2e9e5b;
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 0rem;
    font-family: 'Rubik', Arial;
  }
  .colo {
    font-size: 34px;
    font-weight: 500;
    font-family: 'Rubik', Arial, sans-serif;
  }
  .colot {
    color: #999999;
    font-size: 18px;
  }
  .type1 {
    margin-bottom: 1rem;
    margin-top: 7rem;
  }
  .type2 {
    margin-bottom: 1rem;
  }
  .type3 {
    margin-bottom: 1rem;
  }
  .button1 {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 4rem;
    background: transparent;
    color: #fff;
    background-color: #fcb72c;
    font-family: serif;
    :hover {
      background: transparent;
      color: #fcb72c;
    }
  }
`;
const mapcontent = () => (
  <Map>
    <section className="section">
      <div className="container">
        <p class="has-text-centered col">CONTANT</p>
        <p class="has-text-centered colo">Contact Us</p>
        <p class="has-text-centered colot ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div class="columns">
          <div class="column">
            <figure class="image is-1by1">
              <img src="https://colorlib.com/preview/theme/square/images/image_1.jpg" />
            </figure>
          </div>
          <div class="column">
            <div class="control type1">
              <input
                class="input is-medium"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div class="control type2">
              <input
                class="input is-medium"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div class="control type3">
              <input
                class="input is-medium"
                type="text"
                placeholder="Your Subject"
              />
            </div>
            <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="Message"></textarea>
              </div>
            </div>
            <a class="button button1">Send Message</a>
          </div>
        </div>
      </div>
    </section>
  </Map>
);
export default mapcontent;
