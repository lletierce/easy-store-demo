import styled from 'styled-components'
import { sampleProducts2 } from "../../../../sampleData/sampleProduct"
import Title from '../../../reusable-ui/Title'
import FeaturedContent from './FeaturedContent'
import { theme } from '../../../../theme'

export default function FeaturedCollection() {

  return (
    <FeaturedCollectionStyled>
      <Title value={"NEW RELEASES"}/>
      <FeaturedContent content={sampleProducts2} />
    </FeaturedCollectionStyled>
  )
}

const FeaturedCollectionStyled = styled.div`  
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  
  /* vertical | horizontal */
  padding: ${theme.spacing.xxl} calc(${theme.spacing.sm} * 1.5);
  padding-top: 0px;
  margin: 0 auto;

  @media screen and (min-width: 750px) {
    padding: calc(${theme.spacing.xl} * 2) ${theme.spacing.xl};
    padding-top: 0px;
  }
  
`;
