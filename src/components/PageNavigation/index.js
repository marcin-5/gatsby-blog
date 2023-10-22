import { Link } from "gatsby"
import React from "react"

// icons
import LeftIcon from "images/arrow-left.svg"
import RightIcon from "images/arrow-right.svg"

// styles
import {
  Current,
  ImgWrapper,
  PageNavigationWrapper,
} from "./PageNavigation.styles"

const PageNavigation = ({ currentPage, numPages }) => {
  return (
    <PageNavigationWrapper>
      <ImgWrapper>
        {currentPage > 1 && (
          <Link to={`/${currentPage === 2 ? "" : currentPage - 1}`}>
            <input type="image" alt="left-nav" src={LeftIcon} />
          </Link>
        )}
      </ImgWrapper>
      <Current>
        <p>{currentPage}</p>
      </Current>
      <ImgWrapper>
        {currentPage !== numPages && (
          <Link to={`/${currentPage + 1}`}>
            <input type="image" alt="right-nav" src={RightIcon} />
          </Link>
        )}
      </ImgWrapper>
    </PageNavigationWrapper>
  )
}

export default PageNavigation
