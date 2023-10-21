import * as React from "react"
import { graphql } from "gatsby"

// components
import Layout from "components/Layout"
import Seo from "components/SEO"
import HomeBanner from "components/HomeBanner"
import BlogPostCard from "components/BlogPostCard"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <HomeBanner />
      <main>
        {posts.map(({ node }, i) => {
          const title = node.frontmatter.title
          return (
            <BlogPostCard
              key={i}
              slug="/"
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
  query blogListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
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
