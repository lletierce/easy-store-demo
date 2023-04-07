import styled from 'styled-components'
import { theme } from '../../theme'

export default function Card({ title, imageSource, price}) {
  return (
    <CardStyled>
      <div className='image'>
        <img 
          src={imageSource} alt={title}
          // sizes="(min-width: 1200px) 267px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
        />
      </div>
      <div className='info'>
        <div className='title'><h3>{title}</h3></div>
        <div className='price'>€{price} EUR</div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    /* border: 2px solid magenta; */
    
    max-width: 358px;
    max-height: 467px;
    
    background: ${theme.colors.background_whiteSecondary};

    cursor: pointer;
    &:hover {
        .info{.title{
          text-decoration: underline;
        }}
      }

    .image{
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .info{
      font-family: ${theme.fonts.family.primary};
      color: ${theme.colors.primary_dark};
      padding: 1.3rem 1rem;

      @media screen and (min-width: 750px) {
        padding-bottom: 1.7rem;
        padding-top: 1.7rem;
      }

      .title{
        
        h3{
          margin-top: 0;
          font-size: 13px;
          font-style: "normal";
          font-weight: 400;
        }
      }
    }
`;
