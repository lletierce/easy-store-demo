import styled from 'styled-components';
import Logo from '../Logo';
import NavbarRightSide from './NavbarRightSide';
import NavbarLeftSide from './NavbarLeftSide';

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarLeftSide />
      <div className='heading'><Logo /></div>
      <NavbarRightSide />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  max-width: 1100px; 
  display: grid;
  grid-template-areas: "search heading icons";
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  column-gap: 1.5rem;
  
  /* top | right | bottom | left */
  padding: 10px 15px 10px 15px;
  margin: 0 auto;

  .heading{
    display: flex;
    justify-content: center;
  }

  @media (min-width: 750px) and (max-width: 989px) { 
    padding: 10px 50px 10px 50px;
   }


  @media screen and (min-width: 990px) {
    display: grid;
    grid-template-areas: "heading icons";
    grid-template-columns: 2fr 1fr;

    padding: 20px 50px 20px 50px;

    .heading{
      justify-content: flex-start;
    }
  }
`;