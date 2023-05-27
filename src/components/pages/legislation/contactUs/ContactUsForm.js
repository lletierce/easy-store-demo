import { useState } from "react"
import TextInput from "../../../reusable-ui/TextInput"
import TextAreaInput from "../../../reusable-ui/TextAreaInput"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"
import ErrorFormMessage from "../../error/ErrorFormMessage"
import SuccessFormMessage from "../SuccessFormMessage"
import styled from 'styled-components'
import { theme } from "../../../../theme"

export default function ContactUsForm() {
    // state
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)  
    
    // comportement
    const handleSubmit = (event) => { 
        event.preventDefault()
        setIsError(!isError)
        // setIsSuccess(!isSuccess)
     }

    // rendering
    return (
        <ContactUsFormStyled>
            {isError && <ErrorFormMessage />}
            {isSuccess && <SuccessFormMessage />}
            <form action="submit" onSubmit={handleSubmit}>
                <div className='contact_fields'>
                    <TextInput label={'Name'} />
                    <TextInput label={'Email'} />
                </div>
                <TextInput label={'Phone number'} />
                <TextAreaInput label={"Comment"} />
                <PrimaryButton label={"Send"} className={"btn_send"} />
            </form>
        </ContactUsFormStyled>
    )
}

const ContactUsFormStyled = styled.div`

    form .btn_send{
        margin-top: ${theme.spacing.lg};
    }

    @media screen and (min-width: 750px) {
        form .contact_fields{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: calc(${theme.spacing.sm}*2);
        }

        form .btn_send{
            margin-top: calc(${theme.spacing.sm}*4);
        }
    }
    
`;