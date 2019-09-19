import React from 'react';
import Card from './Card';
import styled from 'styled-components';
const CardStyled = styled.div`
  margin-top: -160px;
`;
const content = () => (
  <CardStyled>
    <section className="section">
      <div className="container">
        <div class="columns">
          <div class="column">
            <Card classy="fas fa-layer-group" title="PERFECTLY DESIGN" />
          </div>
          <div class="column">
            <Card title="CAREFULLY PLANNED" classy="fas fa-drafting-compass" />
          </div>
          <div class="column">
            <Card title="SMARTLY EXECUTE" classy="fas fa-layer-group" />
          </div>
        </div>
      </div>
    </section>
  </CardStyled>
);
export default content;
