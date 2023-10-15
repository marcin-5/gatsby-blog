import { Link } from "gatsby"
import React from "react"
// components
import BgImage from "components/BgImage"
// hooks
import useBannerQuery from "hooks/useBannerQuery"
// styles
import { BannerWrapper, TextWrapper } from "./HomeBanner.styles"

const HomeBanner = () => {
  const {
    bannerImage,
    bannerImageText,
    bannerImageBtnText,
    bannerImageBtnLink,
  } = useBannerQuery()
  return (
    <BannerWrapper>
      <BgImage title="Banner Image" fluid={bannerImage.childImageSharp.fluid}>
        <TextWrapper>
          <h2>{bannerImageText}</h2>
          <Link to={bannerImageBtnLink}>
            <button>{bannerImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BgImage>
    </BannerWrapper>
  )
}

export default HomeBanner
