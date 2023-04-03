import styled from 'styled-components';
import Banner from './Banner';

export default function MainContent() {
    return (
        <MainContentStyled>
            <Banner />
            <div className="featured-collection">Collection</div>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
  /* border: 1px solid blue; */
  display: grid;
  grid-template-areas: "banner"
                        "collection";
  grid-template-rows: 720px 1fr;

  @media screen and (max-width: 749px) {
    grid-template-rows: 390px 1fr;
  }

  .featured-collection{
    border: 1px solid green;
  }
`;
