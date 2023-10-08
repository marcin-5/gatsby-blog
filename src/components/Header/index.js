import React from "react"
import { Link } from "gatsby"

// hooks
import { useConfigQuery } from "hooks/useConfigQuery"

//styles
import { Wrapper, Logo } from "./Header.styles"

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useConfigQuery()
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
    </Wrapper>
  )
}

export default Header
