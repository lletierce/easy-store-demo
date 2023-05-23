import styled from 'styled-components'
import TextInput from '../../reusable-ui/TextInput'
import Title from '../../reusable-ui/Title'
import Header from '../home/Header'
import Footer from '../home/Footer'
import PrimaryButton from '../../reusable-ui/PrimaryButton'
import TextAreaInput from '../../reusable-ui/TextAreaInput'
import ErrorFormMessage from '../error/ErrorFormMessage'
import { useState } from 'react'
import { theme } from '../../../theme'
import SuccessFormMessage from './SuccessFormMessage'

export default function ContactUsPage() {
    // state
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)  
    
    // comportement
    const handleSubmit = (event) => { 
        event.preventDefault()
        // setIsError(!isError)
        setIsSuccess(!isSuccess)
     }

    // rendering
    return (
        <ContactUsPageStyled>
            <Header/>
            <div className="content">
                <Title value={"Contact"} className={"title-contactUs"} />
                {isError && <ErrorFormMessage />}
                {isSuccess && <SuccessFormMessage />}
                <form action="submit" onSubmit={handleSubmit}>
                    <div className='contact_fields'>
                        <TextInput label={'Name'}/>
                        <TextInput label={'Email'}/>
                    </div>
                    <TextInput label={'Phone number'}/>
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
        max-width: 1200px;
        width: 100%;
        box-sizing: border-box;
        height: max-content;

        margin: 0 auto 100px;
        padding: 75px 15px 0;

        .title-contactUs{
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
    }

    .content .btn_send{
        margin-top: ${theme.spacing.lg};
    }

    .content .title-contactUs{
        margin-bottom: calc(${theme.spacing.sm}*2);
    }

    @media screen and (min-width: 750px) {
        .content{
            padding: 100px 90px 0;
        }

        .content .contact_fields{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: calc(${theme.spacing.sm}*2);
        }

        .content .btn_send{
            margin-top: calc(${theme.spacing.sm}*4);
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