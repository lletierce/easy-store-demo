import styled from 'styled-components'
import Header from '../../home/Header'
import Footer from '../../home/Footer'
import { theme } from '../../../../theme'
import TextInput from '../../../reusable-ui/TextInput'
import PrimaryButton from '../../../reusable-ui/PrimaryButton'
import Title from '../../../reusable-ui/Title'

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Header/>
      <div className="content">
        <Title value={"Login"} className={"login-title"}/>
        <div className="login-form">
          login-form
          {/* <form>
            <TextInput label={'Email'} />
            <TextInput label={'Password'} type={"Password"} className={"last-field"}/>
            <div className="recover-link">Forget your password?</div>
            <PrimaryButton label={"Sign in"} className={"btn_signin"} />
          </form> */}
        </div>
      </div>
      <Footer/>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:"header"
                        "maincontent"
                        "footer";
  grid-template-rows:    64px 1fr 132px;

  .content{
    background: gray;
    
    max-width: 334px;
    box-sizing: border-box;
    width: 100%;
    height: max-content;

    margin: 60px auto 90px;
    padding: 0 15px;
  }

  .content .login-form{
    background: orange;
  }

  .content .login-title{
    display: flex;
    justify-content: center;

    margin: 0 auto 20.1px;

    text-transform: capitalize;
    letter-spacing: 0.6px;
  }

  .content .login-form .last-field{
    margin-bottom: 10px;
  }

  .content .login-form .btn_signin{
    /* margin-top: calc(${theme.spacing.sm}*4); */
    margin: calc(${theme.spacing.sm}*4) auto 15px;

  }

  @media screen and (min-width: 750px) {

    .content{
      max-width: 478px;
    }

    .content .login-title{
      margin: 0 auto 26.8px;
    }
  }

  @media screen and (min-width: 990px) {
      grid-template-rows: 84px 1fr 132px;
  }
`;
