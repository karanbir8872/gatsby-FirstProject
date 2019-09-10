import React from 'react';
import styled from 'styled-components';
const Some = styled.div`
  .button2 {
    background: transparent;
    background-color: #fcb72c;
    color: #fff;
    font-family: serif;
    :hover {
      background: transparent;
      color: #fcb72c;
    }
  }
`;
const room = props => (
  <Some>
    <div class="card-image">
      <img src={props.img} alt="Placeholder image" />
    </div>
    <div class="card-content">
      <p class="title is-5">{props.title}</p>
      <p class="subtitle is-6">{props.subtitle}</p>
      <div class="media">
        <div class="media-left">
          <a class="button button2">Read More</a>
        </div>
      </div>
    </div>
  </Some>
);
export default room;
