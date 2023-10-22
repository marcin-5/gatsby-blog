const path = require("path")

// create slug for posts and pages
const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const content = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              published
            }
            fields {
              slug
            }
          }
        }
      }
      pages: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "page" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (content.error) return
  const allPosts = content.data.posts.edges
  const allPages = content.data.pages.edges

  // create the individual posts and pages
  allPosts.forEach(({ node }) => {
    if (node.frontmatter.published) {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/Post.js"),
        context: {
          // data passed to context is available in page queries as graphql variables
          slug: node.fields.slug,
        },
      })
    }
  })
  allPages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/Page.js"),
      context: {
        // data passed to context is available in page queries as graphql variables
        slug: node.fields.slug,
      },
    })
  })
}

// Absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
