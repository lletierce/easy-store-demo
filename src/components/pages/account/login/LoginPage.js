import styled from 'styled-components'
import Header from '../../home/Header'
import Footer from '../../home/Footer'
import Title from '../../../reusable-ui/Title'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <LoginPageStyled>
      {/* <Header/> */}
      <div className="content">
        <Title value={"Login"} className={"login-title"}/>
        <LoginForm />
      </div>
      {/* <Footer/> */}
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  /* height: 100vh;
  display: grid;
  grid-template-areas:"header"
                        "maincontent"
                        "footer";
  grid-template-rows:    64px 1fr 132px; */

  .content{
    max-width: 334px;
    box-sizing: border-box;
    width: 100%;
    height: max-content;

    margin: 60px auto 190px;
    padding: 0 15px;
  }

  .content .login-title{
    display: flex;
    justify-content: center;

    margin: 0 auto 20.1px;

    text-transform: capitalize;
    letter-spacing: 0.6px;
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
      /* grid-template-rows: 84px 1fr 132px; */
  }
`;
