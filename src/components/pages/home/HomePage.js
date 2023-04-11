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
  grid-template-rows:    84px 1fr 122px;
`;
