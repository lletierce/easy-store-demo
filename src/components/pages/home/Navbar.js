import styled from 'styled-components';
import Logo from './Logo';
import NavbarIconsContainer from './NavbarIconsContainer';

export default function Navbar() {
  return (
    <NavbarStyled>
        <div className='heading'><Logo /></div>
        <NavbarIconsContainer />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  
  width: 1100px; 
  display: grid;
  grid-template-areas: "heading icons";
  grid-template-columns: 1fr 120px;
  column-gap: 1.5rem;
  
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: 0 auto;

  font-size: 24px;

  .heading{
    display: flex;
    align-items: center;
  }
`;