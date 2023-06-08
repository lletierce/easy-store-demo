import React from 'react'
import Header from './pages/home/Header'
import Footer from './pages/home/Footer'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      {children}
      <Footer />
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:  "header"
                        "maincontent"
                        "footer";
  grid-template-rows:    64px 1fr 132px;


  @media screen and (min-width: 990px) {
    grid-template-rows: 84px 1fr 132px;
  }  
`;

export default Layout;