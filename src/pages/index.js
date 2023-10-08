import * as React from "react"

// components
import Seo from "components/SEO"

const IndexPage = () => <Layout>Home Page</Layout>

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
