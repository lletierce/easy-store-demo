import styled from 'styled-components'
import Banner from '../Banner'
import FeaturedCollection from './FeaturedCollection'

export default function MainContent() {
    return (
        <MainContentStyled>
            <Banner />
            <FeaturedCollection />
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
  /* border: 2px solid blue; */
  display: grid;
  grid-template-areas: "banner"
                        "collection";
  grid-template-rows: 720px 1fr;

  @media screen and (max-width: 749px) {
    grid-template-rows: 390px 1fr;
  }
`;
