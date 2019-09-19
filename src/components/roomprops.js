import React from 'react';
import Room from '../components/Room';
import styled from 'styled-components';
const Photo = styled.div`
  background: #fafafa;
`;
const roomprops = () => (
  <Photo>
    <section className="section">
      <div className="container">
        <div class="columns">
          <div class="column ">
            <Room
              img="https://colorlib.com/preview/theme/square/images/image_1.jpg"
              title="Why Lead Generation is Key for Business Growth"
              subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
          </div>
          <div class="column">
            <Room
              img="https://colorlib.com/preview/theme/square/images/image_2.jpg"
              title="Why Lead Generation is Key for Business Growth"
              subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
          </div>
          <div class="column">
            <Room
              img="https://colorlib.com/preview/theme/square/images/image_3.jpg"
              title="Why Lead Generation is Key for Business Growth"
              subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
          </div>
        </div>
        <div class="columns">
          <div class="column ">
            <Room
              img="https://colorlib.com/preview/theme/square/images/image_4.jpg"
              title="Why Lead Generation is Key for Business Growth"
              subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
          </div>
          <div class="column">
            <Room
              img="https://colorlib.com/preview/theme/square/images/image_5.jpg"
              title="Why Lead Generation is Key for Business Growth"
              subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
          </div>
          <div class="column">
            <Room
              img="https://colorlib.com/preview/theme/square/images/image_6.jpg"
              title="Why Lead Generation is Key for Business Growth"
              subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
          </div>
        </div>
      </div>
    </section>
  </Photo>
);
export default roomprops;
