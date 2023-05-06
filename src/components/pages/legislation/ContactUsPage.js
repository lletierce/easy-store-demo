import styled from 'styled-components'
import TextInput from '../../reusable-ui/TextInput'
import Title from '../../reusable-ui/Title'

export default function ContactUsPage() {
  return (
    <ContactUsPageStyled>
        <Title value={"Contact"} />
        <TextInput type={'text'} label={'Phone number'}/>
        <TextInput type={'password'} label={'Password'}/>
        <TextInput label={'Name'}/>
    </ContactUsPageStyled>
  )
}

const ContactUsPageStyled = styled.div`
    /* background: orange; */
    
    min-height: 405px;
    max-width: 726px;
    
    margin: 100px auto;
`;