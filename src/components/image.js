import React from "react"
import styled from "styled-components"
const Img=styled.div`
.container {
    position: relative;
    width: 90%;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #008CBA;
    overflow: hidden;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }
  
  .container:hover .overlay {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
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
const image=(props)=>(
    <Img>
    <div class="container">
  <img src={props.img} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
    </Img>

);
export default image;