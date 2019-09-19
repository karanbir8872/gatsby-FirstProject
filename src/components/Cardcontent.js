import React from 'react';
import SmallCard from './SmallCard';
import styled from 'styled-components';
const Content = styled.div`
  padding: 8rem;
  margin-top: -21rem;
  @media only screen and (max-width: 600px) {
     {
      padding: 2rem;
      margin-top: -5rem;
    }
  }
`;

const Cardcontent = () => (
  <Content>
    <div class="columns">
      <div class="column is-one-third">hhfjhjk</div>
      <div class="column ">
        <SmallCard Title="30" subtitle="YEARS OF EXPERIENCE" />
      </div>
      <div class="column">
        <SmallCard Title="1000" subtitle="PROJECT DONE" />
      </div>
      <div class="column">
        <SmallCard Title="1000" subtitle="OUR ARCHITECT" />
      </div>
      <div class="column">
        <SmallCard Title="1,100" subtitle="HAPPY CUSTOMERS" />
      </div>
    </div>
  </Content>
);
export default Cardcontent;
