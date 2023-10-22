import { Link } from "gatsby"
import React, { useContext, useState } from "react"

// components
import Hamburger from "components/Hamburger"
import Menu from "components/Menu"
import MobileMenu from "components/MobileMenu"
import ModeButton from "components/ModeButton"

// context
import { ModeContext } from "context/ModeProvider"

// hooks
import { useConfigQuery } from "hooks/useConfigQuery"

//styles
import { Logo, Wrapper } from "./Header.styles"

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useConfigQuery()
  const [darkMode, setDarkMode] = useContext(ModeContext)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Wrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Link to="/">
        <Logo
          src={
            darkMode ? siteConfig.logodm.publicURL : siteConfig.logolm.publicURL
          }
          alt={siteTitle}
        />
      </Link>
      <Menu items={siteConfig.menu} />
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  )
}

export default Header
