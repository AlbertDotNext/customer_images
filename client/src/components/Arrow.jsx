import React from 'react';
import styled from 'styled-components';


const Slidearrow = styled.div`
  color: #5ca1e1;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  `;
const Arrow = ({ direction, clickFunction, glyph }) => (
  <Slidearrow
    onClick={clickFunction}>
    {glyph}
  </Slidearrow>
);

export default Arrow;