import styled from 'styled-components'
import { theme } from '../../theme';

export default function Title({ value }) {
  return (
    <TitleStyled>{value}</TitleStyled>
  )
}

const TitleStyled = styled.h2`
    border: 1px solid green;
    font-family: ${theme.fonts.family.primary};
    color: ${theme.colors.primary_dark};
    
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    
    @media screen and (max-width: 749px) {
        font-size: 30px;
    }
`;