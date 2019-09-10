import React from 'react';
import styled from 'styled-components';
const Blog = styled.div`
  margin-top: 10rem;
  .bol {
    color: #2e9e5b;
  }
  .bolo {
    font-family: 'Rubik', Arial, sans-serif;
    color: rgba(0, 0, 0, 0.9);
    font-size: 35px;
    font-weight: 500;
  }
  .bolt {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const stores = () => (
  <Blog>
    <p className="bol has-text-centered">BLOG</p>
    <p className="bolo has-text-centered">Read Our Stories</p>
    <p className="bolt has-text-centered">
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia
    </p>
  </Blog>
);
export default stores;
