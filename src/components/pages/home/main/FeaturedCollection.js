import styled from 'styled-components'
import { sampleProducts2 } from "../../../../sampleData/sampleProduct"
import Title from '../../../reusable-ui/Title'
import FeaturedContent from './FeaturedContent'

export default function FeaturedCollection() {

  return (
    <FeaturedCollectionStyled>
      <Title value={"NEW RELEASES"}/>
      <FeaturedContent content={sampleProducts2} />
    </FeaturedCollectionStyled>
  )
}

const FeaturedCollectionStyled = styled.div`
  /* border: 2px solid red; */
  
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  
  /* top | right | bottom | left */
  padding: 0px 50px 100px 50px;
  margin: 0 auto;

  @media screen and (max-width: 749px) {
    padding: 0px 15px 75px 15px;
  }
  
`;
