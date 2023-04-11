import styled from 'styled-components'
import { theme } from '../../../theme';

export default function Footer() {
  return (
    <FooterStyled>
        <div className='footer-content'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Shipping & Refunds</p>
            <p>Legal Mentions</p>
            <p>F.A.Q</p>
            <p>Contact Us</p>
        </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`

    display: flex;
    justify-content: center;
    
    background: ${theme.colors.primary_dark};
    color: ${theme.colors.whiteSecondary};

    .footer-content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 24px;

        /* top | right | bottom | left */
        padding: 25px 25px 30px 25px;

        p{
            margin-top: 0;
            margin-bottom: 0;
            font-family: ${theme.fonts.family.primary};
            font-size: 16px;
            font-weight: 400;
        }
    }
`;