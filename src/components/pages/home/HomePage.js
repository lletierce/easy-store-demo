import styled from 'styled-components';

export default function HomePage() {
  return (
    <HomePageStyled>
      <div>Header</div>
      <div>MainContent</div>
      <div>Footer</div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
  background: red;
`;
