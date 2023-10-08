import React from "react"
import { ThemeProvider } from "styled-components"

// hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  console.log(data)
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div>index</div>
      {children}
    </ThemeProvider>
  )
}

export default Layout
