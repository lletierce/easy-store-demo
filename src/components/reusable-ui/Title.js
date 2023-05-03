import styled from 'styled-components'
import { theme } from '../../theme'

export default function Title({ value, className }) {
  return (
    <TitleStyled className={className}>{value}</TitleStyled>
  )
}

const TitleStyled = styled.h2`
    font-family: ${theme.fonts.family.primary};
    color: ${theme.colors.primary_dark};
    
    font-size: calc(${theme.fonts.size.P2} * 2);
    font-weight: ${theme.fonts.weights.regular};
    text-transform: uppercase;
    
    @media screen and (max-width: 749px) {
        font-size: calc(${theme.fonts.size.P2} * 1.5);
    }
`;