import { Link } from "gatsby";
import React from "react";

// styles
import { Nav, OverrideGlobalStyle, Wrapper } from "./MobileMenu.styles";

const MobileMenu = ({ menuOpen, items }) => {
  return (
    <>
      <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <Nav>
          {items.map(item => (
            <li key={item.id}>
              <Link to={item.link} activeClassName="active">
                {item.name}
              </Link>
            </li>
          ))}
        </Nav>
      </Wrapper>
    </>
  )
}

export default MobileMenu
