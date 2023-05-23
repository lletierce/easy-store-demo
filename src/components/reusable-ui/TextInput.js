import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export default function TextInput({type = "text", label }) {
    // state
    const [value, setValue] = useState('');

    // comportement
    function handleChange(e){
        setValue(e.target.value);
    }

    // rendering
    return (
    <TextInputStyled>
        <input type={type} value={value} onChange={handleChange} />
        <label className={value && 'filled'}>
            {label}
        </label>
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    font-family: ${theme.fonts.family.primary};

    margin-bottom: 15px;
    /* margin-bottom: calc(${theme.spacing.sm}*2); */

    @media screen and (min-width: 750px) {
        margin-bottom: 20px;
    }


    :focus-within label, .filled{
        color: rgba(18, 18, 18, 0.75);
        font-size: ${theme.fonts.size.XXS};
        letter-spacing: 0.4px;
        line-height: ${theme.fonts.size.SM};
        top: calc(${theme.spacing.xxs}*2);
    }


    label{
        font-size: 16px;
        left: 21px;
        top: 11px;
        margin-bottom: 0;
        pointer-events: none;
        position: absolute;
        transition: top .1s ease, font-size .1s ease;
        color: rgba(18, 18, 18, 0.75);
        letter-spacing: 1px;
        line-height: 1.5;
    }

    input{
        flex-grow: 1;
        text-align: left;
        padding: 22px 15px 8px 20px;
        margin: 1px;

        appearance: none;
        background-color: white;
        color: rgb(18, 18, 18);
        font-size: 16px;
        width: 100%;
        min-width:72px;
        box-sizing: border-box;
        height: 45px;
        position: relative;

        line-height: 24px;
        letter-spacing: 0.4px;

        border-radius: 0px;
        border-width: thin;
        border-style: solid;
        
    }

    input:focus{
        padding: 22px 15px 8px 20px;
        margin: 1px;

        box-shadow: 0 0 0 2px;
        outline: 0; 
        border-radius: 0px;
    }

    input:hover{
        border-color: rgb(18, 18, 18);
    }
`;