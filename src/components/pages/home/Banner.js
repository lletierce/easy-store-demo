import React from 'react'
import styled from 'styled-components';

export default function Banner() {
  return (
    <BannerStyled>
      <img 
        src="/images/homeBanner.png"
        srcSet="/images/homeBanner375w.png 375w,
                    /images/homeBanner550w.png 550w,
                    /images/homeBanner1500w.png 1500w,
                    /images/homeBanner1778w.png 1778w"
        alt="banner-easy-store"
      />
    </BannerStyled>
  )
}

const BannerStyled = styled.div`
    /* border: 2px solid red; */

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;
