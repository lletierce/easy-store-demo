import styled from 'styled-components'
import { HiCheckCircle } from 'react-icons/hi'
import Icon from '../../reusable-ui/Icon'
import { theme } from '../../../theme'

export default function SuccessFormMessage() {
    return (
        <SuccessFormMessageStyled>
            <Icon icon={<HiCheckCircle />} className={"icon"} />
            <span className="text">Thanks for contacting us. We'll get back to you as soon as possible.</span>
        </SuccessFormMessageStyled>
    )
}

const SuccessFormMessageStyled = styled.div`
    
    display: flex;
    flex-direction: row;

    box-sizing: border-box;

    margin-top: calc(${theme.spacing.sm}*2);
    margin-bottom: calc(${theme.spacing.sm}*4);


    .icon{
        height: 14px;
        width: 14px;
        
        margin-top: ${theme.spacing.xs};
        margin-right: ${theme.spacing.xs};

        color: #428445;

        cursor: auto;
        &:hover{transform:none}
    }

    .text{
        font-family: ${theme.fonts.family.primary};
        font-size: ${theme.fonts.size.P0};
        font-weight: ${theme.fonts.weights.regular};
        letter-spacing: 0.6px;
        line-height: ${theme.fonts.size.P2};
        color: ${theme.colors.primary_dark};
    }

    @media screen and (min-width: 750px) {
        align-items: center;
        
        .icon{
            margin-top: 0;
        }
    }
`;