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
    color: #999999;
    font-size: 24px;
}
`;
const slidercard =(props)=>(
<Center>
<img src={props.img}/>
<p className="has-text-centered tie">{props.title}</p>
<p className="has-text-centered bit">{props.subtitle}</p>
</Center>
);
export default slidercard;
