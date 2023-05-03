import styled from 'styled-components'
import Header from '../home/Header'
import Footer from '../home/Footer'
import Title from '../../reusable-ui/Title'
import { theme } from '../../../theme'

export default function LegalMentionsPage() {
  return (
    <LegalMentionsPageStyled>
        <Header/>
        <div className="content">
        <Title value={"Legal Mentions"} className={"title-legalMentions"}/>
            <div>
            <p>
                <strong>Store Management</strong>
                <br/>
                Company Name : -
                <br/>
                Legal Status : -
                <br/>
                Head Office : -
                <br/>
                Siren : -
                <br/>
                N°TVA : -
                <br/>
                Contact : letierce.lo@gmail.com
            </p>
            <p>
                <strong>Website Host</strong>
                <br/>
                This website easy-store is hosted by : 
                <br/>
                Company Name : -
                <br/>
                Head Office : -
                <br/>
                Phone Number : -
            </p>
            </div>
        </div>
        <Footer/>
    </LegalMentionsPageStyled>
  )
}

const LegalMentionsPageStyled = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:  "header"
                        "maincontent"
                        "footer";
  grid-template-rows:    64px 1fr 132px;

  .content{
    max-width: 1200px;
    height: max-content;
    
    margin: 0 auto 100px;
    padding: 21px 15px;

    .title-legalMentions{
      margin: 0 0 40px;
      font-size: 52px;
      text-transform: capitalize;
      letter-spacing: 0.6px;

      @media screen and (max-width: 749px) {
        font-size: 40px;
        margin-bottom: 30px;
    }

    }

    p{
      font-family: ${theme.fonts.family.primary};
      color: rgba(18, 18, 18, 0.75);
      font-size: ${theme.fonts.size.SM};
      line-height: 27px;
      font-weight: ${theme.fonts.weights.regular};
      letter-spacing: 0.6px;

      margin-top: 0;

    }
  }

  @media screen and (min-width: 750px) {

    .content{
      padding: 28px 90px;
      
      p{
        font-size: ${theme.fonts.size.P0};
        line-height: 28.8px;
      }
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