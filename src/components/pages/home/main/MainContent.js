import styled from 'styled-components'
import Banner from '../Banner'
import FeaturedCollection from './FeaturedCollection'
import { theme } from '../../../../theme'

export default function MainContent() {
    return (
        <MainContentStyled>
            <Banner />
            <FeaturedCollection />
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
  display: grid;
  grid-template-areas: "banner"
                        "collection";
  grid-template-rows: 720px 1fr;

  margin-bottom: ${theme.spacing.xxl};

  @media screen and (max-width: 749px) {
    grid-template-rows: 390px 1fr;
  }
`;
