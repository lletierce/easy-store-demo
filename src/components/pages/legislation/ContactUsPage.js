import styled from 'styled-components'
import TextInput from '../../reusable-ui/TextInput'
import Title from '../../reusable-ui/Title'
import Header from '../home/Header'
import Footer from '../home/Footer'
import PrimaryButton from '../../reusable-ui/PrimaryButton'
import TextAreaInput from '../../reusable-ui/TextAreaInput'

export default function ContactUsPage() {
  return (
    <ContactUsPageStyled>
        <Header/>
        <div className="content">
            <Title value={"Contact"} className={"title-contactUs"} />
            <form action="">
                <div className='contact_fields'>
                    <TextInput label={'Name'}/>
                    <TextInput label={'Email'}/>
                </div>
                <TextInput label={'Phone number'}/>
                {/* <TextInput label={'Comment'} type={"text"}/> */}
                <TextAreaInput label={"Comment"}/>
                <PrimaryButton label={"Send"} className={"btn_send"}/>
            </form>
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
        /* background: orange; */
        
        max-width: 1200px;
        width: 100%;
        box-sizing: border-box;
        height: max-content;

        margin: 0 auto 100px;
        padding: 75px 15px 0;

        .title-contactUs{
            margin: 0 0 30px;
            font-size: 40px;
            text-transform: capitalize;
            letter-spacing: 0.6px;
        
            @media screen and (max-width: 749px) {
                font-size: 30px;
                margin-bottom: 20px;
                line-height: 39px;
            }
        }
    }

    .content .btn_send{
        margin-top: 30px;
    }

    .content .title-contactUs{
        margin-bottom: 20px;
    }

    @media screen and (min-width: 750px) {
        .content{
            padding: 100px 90px 0;
        }

        .content .contact_fields{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 20px;
        }

        .content .btn_send{
            margin-top: 40px;
        }
    }

    @media screen and (min-width: 990px) {
        grid-template-rows: 84px 1fr 132px;

        .content{
            max-width: 726px;
            padding: 100px 0 0;
        }

        .content .title-contactUs{
            margin-bottom: 30px;
        }
  }
`;