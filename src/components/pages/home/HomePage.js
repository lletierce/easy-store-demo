import styled from 'styled-components'
import Header from './Header'
import MainContent from './main/MainContent'
import Footer from './Footer'

export default function HomePage() {
  return (
    <HomePageStyled>
      <Header/>
      <MainContent />
      <Footer/>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
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
