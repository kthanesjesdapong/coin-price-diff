import React from 'react';
import styled from 'styled-components';

const ExchangeStyles = styled.div`
  .exchange__container {
    border: 1px solid black;
    height: 60vh;
    width: 25%;
  }
  .exchange__wrapper {
    display: flex;
    border: 1px solid blue;
    flex-direction: column;
  }
  .exchange__title {
    border: 1px solid red;
    text-align: center;
  }
`;

export default function Exchange({ name }) {
  return (
    <ExchangeStyles>
      <div className='exchange__container'>
        <div className='exchange__wrapper'>
          <div className='exchange__title'>
            <h1 className='title'>{name}</h1>
          </div>
        </div>
      </div>
    </ExchangeStyles>
  );
}
