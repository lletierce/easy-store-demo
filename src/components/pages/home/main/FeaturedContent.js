import { useState } from 'react'
import styled from 'styled-components'
import Card from '../../../reusable-ui/Card'

export default function FeaturedContent({ content }) {

    const [product, setProduct] = useState(content)

    return (
        <FeaturedContentStyled>
            {product.map(({ id, title, price }) => {
                return (
                    <Card
                        key={id}
                        title={title}
                        price={price}
                    />
                )
            })}
        </FeaturedContentStyled>
    )
}

const FeaturedContentStyled = styled.div`
  background: yellow;
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  gap : 8px; 
`;
