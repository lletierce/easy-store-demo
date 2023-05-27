import styled from 'styled-components'
import Title from '../../../reusable-ui/Title'
import Header from '../../home/Header'
import Footer from '../../home/Footer'
import { theme } from '../../../../theme'
import ContactUsForm from './ContactUsForm'

export default function ContactUsPage() {

    // rendering
    return (
        <ContactUsPageStyled>
            <Header/>
            <div className="content">
                <Title value={"Contact"} className={"title-contactUs"} />
                <ContactUsForm />
            </div>
            <Footer/>
    </ContactUsPageStyled>
  )
}

const ContactUsPageStyled = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas:"header"
                        "maincontent"
                        "footer";
    grid-template-rows:    64px 1fr 132px;

    .content{        
        max-width: 1200px;
        width: 100%;
        box-sizing: border-box;
        height: max-content;

        margin: 0 auto 100px;
        padding: 75px 15px 0;
    }

    .content .title-contactUs{
            margin: 0 0 ${theme.spacing.lg};
            font-size: calc(${theme.fonts.size.P2}*2);
            text-transform: capitalize;
            letter-spacing: 0.6px;
        
            @media screen and (max-width: 749px) {
                font-size: calc(${theme.fonts.size.P2}*1.5);
                margin-bottom: calc(${theme.spacing.sm}*2);
                line-height: calc(${theme.fonts.size.XXS}*3.9);
            }
    }


    @media screen and (min-width: 750px) {
        .content{
            padding: 100px 90px 0;
        }
    }

    @media screen and (min-width: 990px) {
        grid-template-rows: 84px 1fr 132px;

        .content{
            max-width: 726px;
            padding: 100px 0 0;
        }

        .content .title-contactUs{
            margin-bottom: ${theme.spacing.lg};
        }
  }
`;