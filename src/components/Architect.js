import React from 'react';
import styled from 'styled-components';
const Mystyle = styled.div`
  margin-top: 12rem;
  .col {
    color: #2e9e5b;
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 0rem;
    font-family: 'Rubik', Arial, sans-serif;
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
`;
const picture = () => (
  <Mystyle>
    <p class="has-text-centered col">ARCHITECT</p>
    <p class="has-text-centered colo">Behind those Beautiful Works</p>
    <p class="has-text-centered colot ">
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia
    </p>
  </Mystyle>
);
export default picture;
