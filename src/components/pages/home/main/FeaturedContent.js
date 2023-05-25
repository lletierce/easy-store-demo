import { useState } from 'react'
import styled from 'styled-components'
import Card from '../../../reusable-ui/card/Card'
import { formatPrice} from "../../../../utils/maths"


export default function FeaturedContent({ content }) {

    const [product, setProduct] = useState(content)

    return (
        <FeaturedContentStyled>
            {product.map(({ id, imageSource, title, price_regular, price_sale }) => {
                return (
                    <Card
                        key={id}
                        imageSource={imageSource}
                        title={title}
                        price_regular={formatPrice(price_regular)}
                        price_sale={formatPrice(price_sale)}
                    />
                )
            })}
        </FeaturedContentStyled>
    )
}

const FeaturedContentStyled = styled.div`
    
    @media screen and (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        gap : 8px;
    }

`;
