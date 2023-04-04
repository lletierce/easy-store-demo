import styled from 'styled-components';
import { theme } from '../../theme';

export default function Card() {
  return (
    <CardStyled>Card</CardStyled>
  )
}

const CardStyled = styled.div`
    border: 1px solid orange;
    
    height: 469px;
    width: 361px;
    background: ${theme.colors.background_whiteSecondary}
`;
