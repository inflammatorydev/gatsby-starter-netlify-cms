import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    //const { edges: posts } = data.allMarkdownRemark


    console.log('Data d is ', data);

    const newData = data.allMarkdownRemark.edges[0].node;


    return (
      <Layout>

  
    <section className="hero">
      <div className="background-image"></div>
      <div className="blockquote-container">
      <blockquote>The body achieves what the mind believes</blockquote>
      <cite>Ann Trason</cite>
      </div>
      <h2></h2>
    </section>


    <section>
      <div className="item-container">

      <div className="flex-container">
      
      <div>
      <img className="index-image" src={newData.frontmatter.slot1image.childImageSharp.resize.src} />
      <h2>{newData.frontmatter.slot1title}</h2>
        <p>{newData.frontmatter.slot1desc}</p>

      </div>

      <div>
      <img className="index-image" src={newData.frontmatter.slot2image.childImageSharp.resize.src} />
        <h2>{newData.frontmatter.slot2title}</h2>
        <p>{newData.frontmatter.slot2desc}</p></div>

      <div>
      <img className="index-image" src={newData.frontmatter.slot3image.childImageSharp.resize.src} />
        <h2>{newData.frontmatter.slot3title}</h2>
        <p>{newData.frontmatter.slot3desc}</p>
      </div>
      
      </div>

      </div>


    </section>
    





        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {/* {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #333', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))} */}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const aboutDocumentsQuery = graphql`
query IndexQuery{
  allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/pages/index/"} }) {
    edges {
      node {
        id
        fileAbsolutePath
        html
        frontmatter {
          title
          slot1title
          slot1desc
          slot1image  {
            childImageSharp {
                resize(width: 100, height: 100){
                  src
                  }
            }
          }
          slot2title
          slot2desc
          slot2image  {
            childImageSharp {
                resize(width: 100, height: 100){
                  src
                  }
            }
          }
          slot3title
          slot3desc
          slot3image  {
            childImageSharp {
                resize(width: 100, height: 100){
                  src
                  }
            }
          }
        }
      }
    }
  } 
  }`

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `
