import styled from 'styled-components'
import { theme } from '../../../theme'

export default function FooterContent() {
  return (
    <FooterContentStyled>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Shipping & Refunds</p>
        <p>Legal Mentions</p>
        <p>F.A.Q</p>
        <p>Contact Us</p>
    </FooterContentStyled>
  )
}

const FooterContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 25px;

  /* top | right | bottom | left */
  padding: 25px 25px 30px 25px;

  p{
    font-family: ${theme.fonts.family.primary};
    font-size: 1.1rem;
    font-weight: 400;

    margin-top: 3px;
    margin-bottom: 3px;

    cursor: pointer;
    &:hover {
      color: ${theme.colors.white};
    }
  }
`;