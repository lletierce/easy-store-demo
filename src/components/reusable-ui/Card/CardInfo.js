import styled from 'styled-components'
import { theme } from '../../../theme';

export default function CardInfo({ title, price_regular, price_sale, className }) {
    return (
        <CardInfoStyled>
            <div className={className}>
                <div className="title"><h3>{title}</h3></div>
                <div className="price">
                    <span className="price_regular">€{price_regular} EUR</span>
                    <span className="price_sale">€{price_sale} EUR</span>
                </div>
            </div>
        </CardInfoStyled>
    )
}

const CardInfoStyled = styled.div`
    color: ${theme.colors.primary_dark};
    
    font-family: ${theme.fonts.family.primary};
    
    padding: 27px 20px 27px 20px;

    h3{
      font-weight: normal;
      font-size: 13px;
      letter-spacing: 0.6px;
      margin-top: 0;
    }

    .price{
      font-size: 16px;
      letter-spacing: 1px;

      .price_regular{
        color:rgba(18, 18, 18, 0.75);
        font-size: 13px;
        text-decoration: line-through;
        margin-right: 10px;
      }
    }

    @media screen and (max-width: 749px) {
        padding-top: 23px;
        padding-bottom: 23px;
    }
`;
