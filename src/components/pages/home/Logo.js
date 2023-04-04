import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme/index';

export default function Logo() {
  return (
    <LogoStyled>easy-store</LogoStyled>
  )
}

const LogoStyled = styled.span`
    font-size: ${theme.fonts.size.P3};
    font-family: ${theme.fonts.family.primary};
    text-transform: uppercase;
    letter-spacing: 0.6px;

    cursor: pointer;
    &:hover {
      color: #FFFFFF;
    }
`;
