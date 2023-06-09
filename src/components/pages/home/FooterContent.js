import styled from 'styled-components'
import { theme } from '../../../theme'
import { Link } from 'react-router-dom'

export default function FooterContent() {
  return (
    <FooterContentStyled>
        <Link to={"/terms-of-services"}>
          <p>Terms & Conditions</p>
        </Link>
        <Link to={"/privacy-policy"}>
          <p>Privacy Policy</p>
        </Link>
        <Link to={"/shipping-payment-info"}>
          <p>Shipping & Refunds</p>
        </Link>
        <Link to={"/legal-mentions"}>
          <p>Legal Mentions</p>
        </Link>
        <Link to={"/f-a-q"}>
          <p>F.A.Q</p>
        </Link>
        <Link to={"/contact"}>
          <p>Contact Us</p>
        </Link>
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

  a{
    color: inherit;
    text-decoration: none;
  }
`;