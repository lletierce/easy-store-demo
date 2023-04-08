import styled from 'styled-components'
import { theme } from '../../theme'

export default function Card() {
  return (
    <CardStyled>
      <div className="card-media">
        <img
          src="/images/sampleProduct/product1FAT.png"
          alt="alt-img"
          size="885px"
        />
      </div>
      <div className="card-info">
        <div className="title">title</div>
        <div className="price">price</div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  /* border: 1px solid blue; */
  background: ${theme.colors.background_whiteSecondary};
  margin-bottom: 8px;

  .card-media {
    /* border: 2px solid magenta; */
    max-width: 885px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    
  @media screen and (min-width: 990px) {
    margin-bottom: 0;
        
    .card-media {
        max-width: 359px;
      }
  }

  @media screen and (max-width: 749px) {
    .card-media {
      max-width: 715px;
    }
  }    
`;
