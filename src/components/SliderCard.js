import React from "react"
import styled from "styled-components"
const Center=styled.div`
padding:1rem;
.tie{
    color: 000000;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 4px;
    font-weight: 500;
}
.bit{
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(0,0,0,0.2);
}
`;
const slidercard =(props)=>(
<Center>
<img src={props.img}/>
<p className="has-text-left tie">{props.title}</p>
<p className="has-text-left bit">{props.subtitle}</p>
</Center>
);
export default slidercard;
