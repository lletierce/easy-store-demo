import styled from 'styled-components'
import Logo from '../Logo'
import { Link } from 'react-router-dom';

export default function HeadingContent() {
  return (
    <HeadingContentStyled>
        <Link to={"/"}>
          <Logo />
        </Link>
    </HeadingContentStyled>
  )
}

const HeadingContentStyled = styled.div`
  display: flex;
  justify-content: center;

  a{
    color: inherit;
    text-decoration: none;
  }

  @media screen and (min-width: 990px) {
    display: flex;
    justify-content: flex-start;
  }
`;