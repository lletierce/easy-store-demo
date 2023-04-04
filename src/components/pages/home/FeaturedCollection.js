import styled from 'styled-components'
import { theme } from '../../../theme';

export default function FeaturedCollection() {
  return (
    <FeaturedCollectionStyled>
      <h2>New Releases</h2>
      <div className='featuredContent'>
          FeaturedContent FeaturedContent FeaturedContent FeaturedContent FeaturedContent FeaturedContent
          FeaturedContent FeaturedContent FeaturedContent FeaturedContent FeaturedContent FeaturedContent
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
  }

  @media screen and (max-width: 749px) {
    padding: 0px 15px 75px 15px;

    h2{
      font-size: 30px;
    }
  }
  
`;
