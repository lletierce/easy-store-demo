import { useState } from "react"
import TextInput from "../../../reusable-ui/TextInput"
import TextAreaInput from "../../../reusable-ui/TextAreaInput"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"
import ErrorFormMessage from "../../error/ErrorFormMessage"
import SuccessFormMessage from "../SuccessFormMessage"
import styled from 'styled-components'
import { theme } from "../../../../theme"
import axios from 'axios'

export default function ContactUsForm() {
    // state
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [inputs, setInputs] = useState({});
    
    // comportement
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => { 
        event.preventDefault()
        // setIsError(!isError)
        // setIsSuccess(!isSuccess)
        axios.post('https://localhost:44323/api/Mail', {message: inputs})
            .then(response => {
                // Handle the response data
                console.log(response.statusText);
        })
        .catch(error => {
            // Handle the error
            console.error(error);
  });

     }

    const handleSubmit2 = (event) => 
    { 
        event.preventDefault()
        SendAsync();
        //console.log(inputs.username);
        //console.log(inputs);
    }

    async function SendAsync() {
        const message = JSON.stringify(inputs);
        try {
          const response = await axios.post('https://localhost:44323/api/Mail', message);
          // Handle the response data
          console.log("Ok");
          setIsSuccess(!isSuccess)
        } catch (error) {
          // Handle the error
          console.error(error);
          setIsError(!isError)
        }
    }

    // rendering
    return (
        <ContactUsFormStyled>
            {isError && <ErrorFormMessage />}
            {isSuccess && <SuccessFormMessage />}
            <form action="submit" onSubmit={handleSubmit}>
                <div className='contact_fields'>
                    <TextInput label={'Name'} name={"username"} value={inputs.username || ""} onChange={handleChange}/>
                    <TextInput label={'Email'} name={"email"} value={inputs.email || ""} onChange={handleChange}/>
                </div>
                <TextInput label={'Phone number'} name={"phone"} value={inputs.phone || ""} onChange={handleChange}/>
                <TextAreaInput label={"Comment"} name={"comment"} value={inputs.comment || ""} onChange={handleChange}/>
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