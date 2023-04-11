import styled from 'styled-components'
import { theme } from '../../../theme'
import CardMedia from './CardMedia';
import CardInfo from './CardInfo';

export default function Card({imageSource, title, price_regular, price_sale}) {
  return (
    <CardStyled>
      <CardMedia 
        imageSource={imageSource} 
        title={title}
      />
      <CardInfo
        title={title}
        price_regular={price_regular}
        price_sale={price_sale}
        className="card-info"
      />
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
    
  @media screen and (min-width: 990px) {
    margin-bottom: 0;
  }  
`;
