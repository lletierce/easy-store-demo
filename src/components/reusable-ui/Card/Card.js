import styled from 'styled-components'
import { theme } from '../../../theme'
import CardMedia from './CardMedia';

export default function Card({imageSource, title, price_regular, price_sale}) {
  return (
    <CardStyled>
      <CardMedia 
        imageSource={imageSource} 
        title={title}
      />
      {/* <div className="card-media">
        <img
          src={imageSource}
          alt={title}
          size="885px"
        />
      </div> */}
      <div className="card-info">
        <div className="title"><h3>{title}</h3></div>
        <div className="price">
          <span className="price_regular">€{price_regular} EUR</span>
          <span className="price_sale">€{price_sale} EUR</span>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background: ${theme.colors.background_whiteSecondary};

  margin-bottom: 8px;

  cursor: pointer;
  &:hover {
      .card-info{.title{text-decoration:underline;}}
    }

  /* .card-media {
    max-width: 885px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    } */
  
  .card-info{
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
  }
    
  @media screen and (min-width: 990px) {
    margin-bottom: 0;
        
    /* .card-media {
        max-width: 359px;
      } */
  }

  @media screen and (max-width: 749px) {
    /* .card-media {
      max-width: 715px;
    } */

    .card-info{
      padding-top: 23px;
      padding-bottom: 23px;
    }
  }    
`;
