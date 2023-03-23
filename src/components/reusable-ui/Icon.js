import React from 'react'
import styled from 'styled-components';



export default function Icon({icon, className}) {
    return (
        <IconStyled className={className}>
            {icon}
        </IconStyled>
    )
}

const IconStyled = styled.span`
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    &:hover {
        color: #FFFFFF;
        transform: scale(1.2);
    }
`;