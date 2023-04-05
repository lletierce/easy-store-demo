import styled from 'styled-components';
import { theme } from '../../theme';

export default function Card({ title, price}) {
  return (
    <CardStyled>
      <div>{title}</div>
      <div>€{price} EUR</div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    border: 1px solid orange;
    
    height: 467px;
    width: 358px;
    background: ${theme.colors.background_whiteSecondary}
`;
