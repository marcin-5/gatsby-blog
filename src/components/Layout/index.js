import React from "react"
import { ThemeProvider } from "styled-components"

// components
import Header from "components/Header"

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
      <Header siteTitle={data.title}/>
      {children}
    </ThemeProvider>
  )
}

export default Layout
