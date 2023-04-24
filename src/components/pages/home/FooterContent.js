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
  column-gap: ${theme.spacing.md};

  padding: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.lg};

  p{
    font-family: ${theme.fonts.family.primary};
    font-size: calc(${theme.fonts.size.P0} + 0.1rem);
    font-weight: ${theme.fonts.weights.regular};

    /* vertical | horizontal */
    margin: ${theme.spacing.xxs} 0;

    cursor: pointer;
    &:hover {
      color: ${theme.colors.white};
    }
  }
`;