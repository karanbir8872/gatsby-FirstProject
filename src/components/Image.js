import React from 'react';
import styled from 'styled-components';
const Img = styled.div`
  .container {
    position: relative;
    width: 100%;
  }

  .image {
    width: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #008cba;
  }

  .container:hover .overlay {
    opacity: 1;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
const image = props => (
  <Img>
    <div class="container">
      <img src={props.img} alt="Avatar" class="image" />
      <div class="overlay">
        <div class="text">Hello World</div>
      </div>
    </div>
  </Img>
);
export default image;
