import React from 'react'
import styled from 'styled-components';

export default function Banner() {
  return (
    <BannerStyled>
      <img 
        src="/images/homeBanner.png"
        srcSet="/images/banner/homeBanner375w.png 375w,
                    /images/banner/homeBanner550w.png 550w,
                    /images/banner/homeBanner1500w.png 1500w,
                    /images/banner/homeBanner1778w.png 1778w"
        alt="banner-easy-store"
        loading="lazy"
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
