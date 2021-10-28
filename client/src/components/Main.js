import Exchange from './Exchange';
import React from 'react';
import styled from 'styled-components';

const MainStyles = styled.div``;

export default function Main() {
  return (
    <MainStyles>
      <div>
        <Exchange name='Kraken' />
      </div>
    </MainStyles>
  );
}
