import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      margin: 3rem auto;
      ${theme.fonts.bold16};
    `;
  }}
`;

const Test = () => {
  return <Wrapper>This is Test File</Wrapper>;
};

export default Test;
