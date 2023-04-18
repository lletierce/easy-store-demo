import styled from 'styled-components'
import { theme } from '../../../theme'
import FooterContent from './FooterContent'

export default function Footer() {
  return (
    <FooterStyled>
        <FooterContent/>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`

    display: flex;
    justify-content: center;
    
    background: ${theme.colors.primary_dark};
    color: ${theme.colors.whiteSecondary};
`;