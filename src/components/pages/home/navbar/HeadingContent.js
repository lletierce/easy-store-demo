import styled from 'styled-components'
import Logo from '../Logo'

export default function HeadingContent() {
  return (
    <HeadingContentStyled>
        <Logo />
    </HeadingContentStyled>
  )
}

const HeadingContentStyled = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 990px) {
    display: flex;
    justify-content: flex-start;
  }
`;