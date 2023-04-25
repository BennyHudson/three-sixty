/* eslint-disable */
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      allWpCaseStudy: { nodes: allCaseStudies },
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    {
      allWpCaseStudy(sort: { date: DESC }) {
        nodes {
          excerpt
          id
          title
          slug
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      allWpPost(sort: { date: DESC }) {
        nodes {
          excerpt
          id
          title
          slug
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  allCaseStudies.forEach((post) => {
    createPage({
      path: post.uri,
      component: slash(path.resolve(`./src/templates/CaseStudyTemplate.tsx`)),
      context: {
        id: post.id,
      },
    })
  })

  allPosts.forEach((post) => {
    createPage({
      path: post.uri,
      component: slash(path.resolve(`./src/templates/PostTemplate.tsx`)),
      context: {
        id: post.id,
      },
    })
  })
}
