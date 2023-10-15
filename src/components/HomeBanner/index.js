import React from "react"
import { Link } from "gatsby"
// hooks
import useBannerQuery from "hooks/useBannerQuery"

const HomeBanner = () => {
  const {
    bannerImage,
    bannerImageText,
    bannerImageBtnText,
    bannerImageBtnLink,
  } = useBannerQuery()
  return (
    <div>
      <div>
        <div>
          <h2>{bannerImageText}</h2>
        </div>
        <Link to={bannerImageBtnLink}>
          <button>{bannerImageBtnText}</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeBanner
