import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'


export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { togglingNav: true };
    this.toggleNav = e => {
      this.setState({ togglingNav: !this.state.togglingNav});
    };

    // window.innerWidth <= 760}
  }

  componentDidMount() {
    if (window.innerWidth <= 800) {
      this.setState({ togglingNav: false});
    }
  }


  render() {
    const { data } = this.props
    //const { edges: posts } = data.allMarkdownRemark

    const newData = data.allMarkdownRemark.edges[0].node;

    return (
      <Layout toggleNav={this.toggleNav}>

  
    <section className="hero">
      <div className="background-image"></div>
      <div className="blockquote-container">
      <blockquote>The body achieves what the mind believes</blockquote>
      <cite>Ann Trason</cite>
      </div>
      <h2></h2>
    </section>


{this.state.togglingNav && 
      <div className="item-container">

      <div className="flex-container">




      
      <div className="test2">

      <Link to="/profile">
      
        
      
      <h2 style={{fontFamily: 'Open Sans', padding: '15px 0', backgroundColor: '#14a76c'}}>{newData.frontmatter.slot1title}</h2>
      <p style={{padding: '10px 20px 20px', fontSize: '14px'}}>An example text that goes over two lines to describe what this is.</p>
        </Link>
      </div>


      <div className="test2">
      <Link to="/coaching">
      
        <h2 style={{fontFamily: 'Open Sans', padding: '15px 0', backgroundColor: '#d83f87'}}>{newData.frontmatter.slot2title}</h2>
        <p style={{padding: '10px 20px 20px', fontSize: '14px'}}>An example text that goes over two lines to describe what this is.</p>
        </Link>
        </div>

      <div className="test2">
      <Link to="/odyessy">
      
        <h2 style={{fontFamily: 'Open Sans', padding: '15px 0', backgroundColor: '#ff652f'}}>{newData.frontmatter.slot3title}</h2>
        <p style={{padding: '10px 20px 20px', fontSize: '14px'}}>An example text that goes over two lines to describe what this is.</p>
        </Link>
      </div>


      <div className="test2">
      
        <h2 style={{fontFamily: 'Open Sans', padding: '15px 0', backgroundColor: '#ffe400'}}>{newData.frontmatter.slot4title}</h2>
        
        <p style={{padding: '10px 20px 20px', fontSize: '14px'}}>An example text that goes over two lines to describe what this is.</p>
        
        </div>

      
      </div>

      </div>

}






        {/* <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {posts
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
              ))} 
          </div>
        </section> */}
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
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slot2title
          slot2desc
          slot2image  {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slot3title
          slot3desc
          slot3image  {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slot4title
          slot4desc
          slot4image  {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
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
