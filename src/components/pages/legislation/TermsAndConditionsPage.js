import styled from 'styled-components'
import Header from '../home/Header'
import Footer from '../home/Footer'

export default function TermsAndConditionsPage() {
  return (
    <TermsAndConditionsPageStyled>
      <Header/>
      <div className='content'>
        <p>
          <strong>OVERVIEW</strong>
          <br/>
          This website is operated by ViRUS Project SARL. Throughout the site, the terms “we”, “us” and “our” refer to ViRUS Project SARL. ViRUS Project SARL offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
        </p>
      </div>
      <Footer/>
    </TermsAndConditionsPageStyled>
  )
}

const TermsAndConditionsPageStyled = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:  "header"
                        "maincontent"
                        "footer";
  grid-template-rows:    64px 1fr 132px;

  .content{
    /* background: pink; */
    
    max-width: 1200px;
    height: max-content;
    
    margin: 0 auto;
    padding: 21px 15px;
  }

  @media screen and (min-width: 750px) {
    grid-template-rows: 84px 1fr 132px;

    .content{
      padding: 28px 90px;
    }
  }

  @media screen and (min-width: 990px) {
    grid-template-rows: 84px 1fr 132px;

    .content{
      max-width: 726px;
      padding: 28px 0;
    }
  }
`;
