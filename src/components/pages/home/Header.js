import styled from 'styled-components';
import Navbar from './Navbar';

export default function Header() {
  return (
    <HeaderStyled>
        <Navbar />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
    background:#121212;
    color: rgba(255, 255, 255, 0.7);
`;