import React from "react"
// styles
import { Wrapper, WrapperBgImage, Content } from "./BgImage.styles"

const BgImage = ({ fluid, title, className, children }) => {
  return (
    <Wrapper>
      <WrapperBgImage title={title} fluid={fluid} />
      <Content className={className}>{children}</Content>
    </Wrapper>
  )
}

export default BgImage
