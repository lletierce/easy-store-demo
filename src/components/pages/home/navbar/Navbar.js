import styled from 'styled-components'
import NavbarRightSide from './NavbarRightSide'
import NavbarLeftSide from './NavbarLeftSide'
import HeadingContent from './HeadingContent'
import { theme } from '../../../../theme'


export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarLeftSide />
      <HeadingContent/>
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
  column-gap: ${theme.spacing.md};
  
  /* vertical | horizontal */
  padding: ${theme.spacing.sm} calc(${theme.spacing.sm} * 1.5);
  margin: 0 auto;

  @media (min-width: 750px) and (max-width: 989px) { 
    padding: ${theme.spacing.sm} ${theme.spacing.xl};
   }

  @media screen and (min-width: 990px) {
    display: grid;
    grid-template-areas: "heading icons";
    grid-template-columns: 2fr 1fr;

    padding: calc(${theme.spacing.sm} * 2) ${theme.spacing.xl};
  }
`;