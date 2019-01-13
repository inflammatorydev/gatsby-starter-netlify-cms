import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
        content={data.allMarkdownRemark.edges[0].node.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

// export const aboutDocumentsQuery = graphql`
//   query DocumentsPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title2
//       }
//     }
//   }
// `

export const aboutDocumentsQuery = graphql`
query DocumentsPage{
  allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/pages/about/"} }) {
    edges {
      node {
        id
        fileAbsolutePath
        html
        frontmatter {
          title
        }
      }
    }
  } 
  }`


  // query AssetsPhotos {
  //   allFile(filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "photos"}}) {
  //     edges {
  //       node {
  //         id
  //         name
  //         relativePath
  //       }
  //     }
  //   }
  // }

// export const aboutDocumentsQuery = graphql`
// query DocumentsPage()
// {
//   allMarkdownRemark(
//         filter: { fileAbsolutePath: {regex : "\/pages/index/"} },
//       ) {
//     edges {
//       node {
//         id
//         fileAbsolutePath
//         html
//       }
//     }
//   } 
//   }`

