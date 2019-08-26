import React from "react"
import styled from "styled-components"
const Body = styled.div`
.tat{
  margin-top: 2rem;
    margin-bottom: 3rem;
    font-family:Rubik, Arial, sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 600;
}
.san{
  line-height: 1.8;
  font-weight: 600;
  color: #999999;
}
.tit{
  background: #2E9E5B;
      margin-bottom: 2rem;
}
`;


const Card = props => (
  <Body>
   <div className="card">
  <div className="card-content is-centered">
    <div className="media">
      <div className="media-content has-text-centered">
        <span class=" is-size-1 has-text-warning ">
         <i class={props.classy}></i>
         </span>
        <p className="title is-4 has-text-centered is-family-sans-serif tat">{props.title}</p>
        <p className="subtitle is-6 has-text-centered san">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
      </div>
    </div>
    <div className="content has-text-centered">
    <a className="button has-text-white tit">Read more</a>
    </div>
  </div>
</div>
</Body>
);
export default Card