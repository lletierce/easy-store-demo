import React from 'react'
import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoStyled>easy-store</LogoStyled>
  )
}

const LogoStyled = styled.span`
    font-size: 24px;
    text-transform: uppercase;
    font-family: 'Assistant', sans-serif;
    letter-spacing: 0.6px;

    cursor: pointer;
    &:hover {
            color: #FFFFFF;
    }
`;
