import { graphql } from "gatsby"
import React from "react"

// components
import BlogPostCard from "components/BlogPostCard"
import HomeBanner from "components/HomeBanner"
import Layout from "components/Layout"
import PageNavigation from "components/PageNavigation"
import Seo from "components/SEO"

const IndexPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <HomeBanner />
      <main>
        <PageNavigation
          currentPage={pageContext.currentPage}
          numPages={pageContext.numPages}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <BlogPostCard
              key={node.fields.slug}
              slug={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text}
              excerpt={node.excerpt}
              image={node.frontmatter.image.childImageSharp.fluid}
            />
          )
        })}
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
