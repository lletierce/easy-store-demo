import styled from 'styled-components';
import { theme } from '../../../theme/index';
import Navbar from './navbar/Navbar';

export default function Header() {
  return (
    <HeaderStyled>
        {/* <Navbar /> */}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
    background: ${theme.colors.background_dark};
    color: ${theme.colors.whiteSecondary}
`;