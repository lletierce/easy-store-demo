import styled from 'styled-components';
import Header from './Header';
import MainContent from './MainContent';

export default function HomePage() {
  return (
    <HomePageStyled>
      <Header/>
      <MainContent />
      {/* <div className='mainContent'>MainContent</div> */}
      <div className='footer'>Footer</div>
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

  .mainContent{
    border: 1px solid purple;
  }
  .footer{
    background: pink;
  }
`;
