import { theme } from "../../../theme";
import Footer from "../../pages/home/Footer";
import Header from "../../pages/home/Header";
import Title from "../Title"
import styled from 'styled-components'

export default function FooterLegislationPage({ title, content }) {
  return (
    <FooterLegislationPageStyled>
        <Header/>
        <div className="content">
            <Title value={title} className={"title-page"}/>
            {content}
        </div>
        <Footer/>
    </FooterLegislationPageStyled>
  )
}

const FooterLegislationPageStyled = styled.div`
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

    .title-page{
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