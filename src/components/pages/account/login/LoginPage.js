import styled from 'styled-components'
import Header from '../../home/Header';
import Footer from '../../home/Footer';

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Header/>
      <div className="content">
        <h1>Login</h1>
        <div>LoginForm</div>
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

    
    @media screen and (min-width: 990px) {
        grid-template-rows: 84px 1fr 132px;
    }
`;
