import React from 'react'
import { MdError } from 'react-icons/md'
import Icon from '../../reusable-ui/Icon'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function ErrorFormMessage() {
  return (
    <ErrorFormMessageStyled>
        <div className="error-message-title">
            <Icon icon={<MdError/>} className={"error-message-icon"}/>
            <h2> Please adjust the following :</h2>
        </div>
        <div className="error-message-list">
            <ul>
                <li>Email is invalid</li>
            </ul>
        </div>
    </ErrorFormMessageStyled>
  )
}

const ErrorFormMessageStyled = styled.div`
    margin-top: ${theme.spacing.sm};

    .error-message-title{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .error-message-title h2{
        margin: 0;
        font-family: ${theme.fonts.family.primary};
        font-size: ${theme.fonts.size.P0};
        font-weight: ${theme.fonts.weights.regular};
        letter-spacing: 0.4px;
        line-height: ${theme.fonts.size.P3};
        color: ${theme.colors.primary_dark};
    }

    .error-message-title .error-message-icon{
        height: 13px;
        width: 13px;
        margin-right: ${theme.spacing.xs};

        color: #EB001B;

        cursor: auto;
        &:hover{transform:none}
    }

    .error-message-list{
        margin-top: calc(${theme.spacing.sm}*2);
        margin-bottom: calc(${theme.spacing.sm}*4);

        ul{
            
            padding-left: calc(${theme.spacing.sm}*2);
            margin: 0;

            font-family: ${theme.fonts.family.primary};
            font-size: calc(${theme.fonts.size.SM}*0.9);
            font-weight: ${theme.fonts.weights.regular};
            letter-spacing: 0.4px;
            line-height: calc(${theme.fonts.size.P3}*0.9);
            color: rgba(18, 18, 18, 0.75);
        }
    }

`;