import React from 'react'
import styled from 'styled-components';

export default function Navbar() {
  return (
    <NavbarStyled>
        <div className='heading'>Logo</div>
        <div className='icons'>Icons</div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  border: 2px solid red;
  font-size: 24px;
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



  .heading{
    border: 1px solid yellow;
  }
  .icons{
    border: 1px solid yellow;
    display: flex;
    justify-content: center;
  }
`;