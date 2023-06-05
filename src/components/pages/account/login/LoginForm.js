import styled from 'styled-components'
import TextInput from '../../../reusable-ui/TextInput';
import PrimaryButton from '../../../reusable-ui/PrimaryButton';
import { theme } from '../../../../theme';
import { useState } from 'react';
import ErrorFormMessage from '../../error/ErrorFormMessage';

export default function LoginForm() {
  // state
  const [isError, setIsError] = useState(true)

  // comportement
  const handleSubmit = (event) => { 
    event.preventDefault()
    setIsError(!isError)
 }
  
  // rendering
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        {isError && <ErrorFormMessage className={"error-message"}/>}
        <TextInput label={'Email'} />
        <TextInput label={'Password'} type={"Password"} className={"last-field"}/>
        <a className="recover-link" href="#">Forgot your password?</a>
        <PrimaryButton label={"Sign in"} className={"btn_signin"} />
        <div className="register-link-wrap"><a className="register-link" href="#">Create account</a></div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  margin-top: calc(${theme.spacing.sm}*4);

  a{
    text-decoration: none;
  }

  .last-field{
    margin-bottom: ${theme.spacing.sm};
  }

  .recover-link, .register-link{
    color: rgba(18, 18, 18, 0.85);
    
    font-family: ${theme.fonts.family.primary};
    font-size: 14px;
    letter-spacing: 0.6px;
    line-height: 25px;

    &:hover {
      color: ${theme.colors.primary_dark};
      text-decoration-thickness: 0.2rem;
    }
  }

  .btn_signin{
    margin: calc(${theme.spacing.sm}*4) auto 15px;
  }

  .register-link-wrap{
    display: flex;
    justify-content: center;
  }

  .error-message{
    h2{
      font-size: 18px;
      letter-spacing: 0.6px;
    }

    .error-message-icon{
      height: 15px;
      width: 15px;
      margin-right: 10px;
    }
    
    li{
      font-size: 15px;
      letter-spacing: 0.6px;
    }
  }

  @media screen and (min-width: 750px) {
    .error-message{
      h2{font-size: 22px;}
      li{font-size: 16px;}
    }
  }
`;
