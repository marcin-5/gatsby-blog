import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"

// components
import Header from "components/Header"

// context
import { ModeContext } from "context/ModeProvider"

// hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const [darkMode] = useContext(ModeContext)
  const data = useMetaDataQuery()
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
