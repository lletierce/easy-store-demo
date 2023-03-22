import styled from 'styled-components';
import Navbar from './Navbar';

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className='header'>
        <Navbar />
      </div>
      
      <div className='mainContent'>MainContent</div>
      <div className='footer'>Footer</div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:   "header"
                        "maincontent"
                        "footer";
  grid-template-rows:    84px 1fr 122px;

  

  .header{
    border: 1px solid cyan;
    background:#121212;
    color: rgba(255, 255, 255, 0.7);
  }
  .mainContent{
    border: 1px solid purple;
  }
  .footer{
    border: 1px solid purple;
  }
`;
