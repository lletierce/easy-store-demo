import styled from 'styled-components'
import { theme } from '../../../theme'
import Card from '../../reusable-ui/Card'
import { sampleProducts2 } from "../../../sampleData/sampleProduct"
import { useState } from 'react'

export default function FeaturedCollection() {

  const [product, setProduct] = useState(sampleProducts2)

  return (
    <FeaturedCollectionStyled>
      <h2>New Releases</h2>
      <div className='featuredContent'>
          {product.map(({id, title, price}) =>{
            return(
              <Card
                key={id}
                title={title}
                price={price} 
              />
            )
          })}
      </div>
    </FeaturedCollectionStyled>
  )
}

const FeaturedCollectionStyled = styled.div`
  border: 2px solid red;
  
  display: flex;
  flex-direction: column;  
  max-width: 1100px;
  
  /* top | right | bottom | left */
  padding: 0px 50px 100px 50px;
  margin: 0 auto;

  h2{
    border: 1px solid green;
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: ${theme.fonts.family.primary}
  }

  .featuredContent{
    border: 1px solid green;
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    gap : 8px;    
  }

  @media screen and (max-width: 749px) {
    padding: 0px 15px 75px 15px;

    h2{
      font-size: 30px;
    }
  }
  
`;
