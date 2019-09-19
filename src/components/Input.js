import React from "react"
import styled from "styled-components"
const Title = styled.div`
.test-my{
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://colorlib.com/preview/theme/square/images/about.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.text1{
  color: rgba(255,255,255,0.9);
  font-weight: 700;
  line-height: 1.7;
  margin-bottom: 3px;
  font-size: 35px;
}
.text2{
  color: rgba(255, 255, 255, 0.9);
  margin-top: 2rem;
}
.mytext{
  background: transparent !important;
  border: transparent !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4) !important;
  color: rgba(255, 255, 255, 0.9) !important;
  height: 54px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.9);
    opacity: 1;
  }
}
.kop{
  font-family: "Rubik", Arial, sans-serif;
  color: rgba(0, 0, 0, 0.9);
}
.b1{
margin-top:2rem;
font-family: "Rubik", Arial, sans-serif;
font-size:16px;
color:#999999;
line-height:1.8
}
.b2{
  margin-top:1rem;
  font-family: "Rubik", Arial, sans-serif;
  font-size:16px;
  color:#999999;
  line-height:1.8
}
.b3{
  margin-top:1rem;
  font-family: "Rubik", Arial, sans-serif;
  font-size:16px;
  color:#999999;
 line-height:1.8
}
.button1{
  width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 4rem;
    background: transparent;
    color: #ffff;
    background-color: #FCB72C;
    font-family: serif;
    :hover {
      background: transparent;
    }
}
.div{
padding: 2rem;
}
.wel{
  letter-spacing: 2px;
}
`;
const input =()=>(
    <Title>
         <section class="section">
         <div class="container">
        <div class="columns ">
          <div className="column is-one-third test-my">
           <div className="column is-full">
             <p class="text2">BE PART OF OUR BUSINESS</p>
             <p class="text1">Request A Quote</p>
            <input class="input mytext" type="text" placeholder="First Name"/>
            <input class="input mytext" type="text" placeholder="Last Name"/>
            <input class="input mytext" type="text" placeholder="Renovation"/>
            <input class="input mytext" type="text" placeholder="Phone"/>
            <input class="input mytext" type="text" placeholder="Message"/>
            <a class="button button1">Request A Quote</a>
          </div>
        </div>
          <div class="column div">
          <p class="is-size-6 has-text-success has-text-weight-bold  is-family-sans-serif wel">WELCOME</p>
          <p class="is-size-2 kop">Since we started work in 1980</p>
          <p class="b1">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <p class="b2">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          <p class="b3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
       </div>
       </div>
     </section>
    </Title>

);
export default input;
