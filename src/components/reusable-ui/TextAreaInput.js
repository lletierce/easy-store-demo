import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export default function TextAreaInput( { label = "TextAreaLabel" }) {
    // state
    const [value, setValue] = useState('');

    // comportement
    function handleChange(e){
        setValue(e.target.value);
    }
    
    // rendering
    return (
    <TextAreaInputStyled>
        <textarea value={value} onChange={handleChange} />
        <label className={value && 'filled'}>
            {label}
        </label>
    </TextAreaInputStyled>
  )
}

const TextAreaInputStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    margin-bottom: calc(${theme.spacing.sm}*1.5 );
    @media screen and (min-width: 750px) {
        margin-bottom: calc(${theme.spacing.sm}*2);
    }

    :focus-within label, .filled{
        color: rgba(18, 18, 18, 0.75);
        font-size: ${theme.fonts.size.XXS};
        letter-spacing: 0.4px;
        line-height: ${theme.fonts.size.SM};
        top: calc(${theme.spacing.xxs}*2);
    }

    label{
        font-family: ${theme.fonts.family.primary};
        font-size: ${theme.fonts.size.P0};
        color: rgba(18, 18, 18, 0.75);
        
        letter-spacing: 1px;
        line-height: 1.5;
        
        position: absolute;
        top: 11px;
        left: 21px;
        margin-bottom: 0;
        
        pointer-events: none;
        transition: top .1s ease, font-size .1s ease;
    }
    
    textarea{
        min-height: 100px;
        width: 100%;
        box-sizing: border-box;
        resize: none;

        padding: 22px 15px 8px 20px;
        margin: 1px;

        appearance: none;
        font-family: ${theme.fonts.family.primary};
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary_dark};
        font-size: ${theme.fonts.size.P0};

        line-height: ${theme.fonts.size.P3};
        letter-spacing: 0.4px;

        border-radius: 0px;
        border-width: thin;
        border-style: solid;
    }

    textarea:focus{
        padding: 22px 15px 8px 20px;
        margin: 1px;

        box-shadow: 0 0 0 2px;
        outline: 0; 
        border-radius: 0px;
    }

    textarea:hover{
        border-color: ${theme.colors.primary_dark};
    }
`;
