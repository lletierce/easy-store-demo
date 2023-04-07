import { useState } from 'react'
import styled from 'styled-components'
import Card from '../../../reusable-ui/Card'

export default function FeaturedContent({ content }) {

    const [product, setProduct] = useState(content)

    return (
        <FeaturedContentStyled>
            {product.map(({ id, title, imageSource,  price }) => {
                return (
                    <Card
                        key={id}
                        title={title}
                        imageSource={imageSource}
                        price={price}
                    />
                )
            })}
        </FeaturedContentStyled>
    )
}

const FeaturedContentStyled = styled.div`
  background: yellow;
  /* display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap : 8px;
`;
