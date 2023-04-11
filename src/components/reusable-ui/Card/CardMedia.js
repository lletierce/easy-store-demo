import styled from 'styled-components';

export default function CardMedia({ imageSource, title }) {
    return (
        <CardMediaStyled>
            <img
                src={imageSource}
                alt={title}
                size="885px"
            />
        </CardMediaStyled>
    )
}

const CardMediaStyled = styled.div`
 
    max-width: 885px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (min-width: 990px) {
        max-width: 359px;
    }

    @media screen and (max-width: 749px) {
        max-width: 715px;
    }
`;