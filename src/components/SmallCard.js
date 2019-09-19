import React from "react"
import styled from "styled-components"
const Scard=styled.div`
.foont{
  font-size: 24px;
    font-weight: 400;
    color: #2e9e5b;
    font-family: sans-serif;
}
.fonnt{
   color: rgba(0, 0, 0, 0.2);
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 1rem;
    margin-top: -18px;
    line-height: 1.7;
    letter-spacing: 1px;
}
.mit{
  border-radius:4px;
}
`;
const smallcard =(props)=>(
  <Scard>
<div class="card mit">
           <div class="card-content">
         <p class="title has-text-centered foont">
         {props.Title}
        </p>
       <p class="subtitle has-text-centered fonnt">
        {props.subtitle}
        </p>
       </div>
       </div>
       </Scard>
);
export default smallcard;
