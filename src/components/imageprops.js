import React from 'react';
import Image from './Image';
const imageprops = () => (
  <div class="columns is-gapless is-multiline is-mobile">
    <div class="column">
      <Image img="https://colorlib.com/preview/theme/square/images/team-1.jpg" />
      <Image img="https://colorlib.com/preview/theme/square/images/team-4.jpg" />
    </div>
    <div class="column">
      <Image img="https://colorlib.com/preview/theme/square/images/team-3.jpg" />
      <Image img="https://colorlib.com/preview/theme/square/images/team-2.jpg" />
    </div>
    <div class="column">
      <Image img="https://colorlib.com/preview/theme/square/images/team-4.jpg" />
      <Image img="https://colorlib.com/preview/theme/square/images/team-3.jpg" />
    </div>
    <div class="column">
      <Image img="https://colorlib.com/preview/theme/square/images/team-2.jpg" />
      <Image img="https://colorlib.com/preview/theme/square/images/team-1.jpg" />
    </div>
  </div>
);
export default imageprops;
