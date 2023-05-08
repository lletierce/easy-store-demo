import styled from 'styled-components'
import { theme } from '../../theme'

export default function PrimaryButton({ label, className }) {
  return (
    <PrimaryButtonStyled className={className}><span>{label}</span></PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-align: center;

  appearance: none;
  cursor: pointer;

  min-width: 121px;
  min-height: 47px;

  background: ${theme.colors.primary_dark};

  padding: 0 ${theme.spacing.lg};
  border: 0;
  
  font-family: ${theme.fonts.family.primary};
  font-size: ${theme.fonts.size.SM};
  letter-spacing: 1px;
  line-height: ${theme.fonts.size.P1};
  color: ${theme.colors.white};

  &:hover {
        transform: scale(1.025);
    }

`;