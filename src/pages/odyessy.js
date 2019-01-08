import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import USAMap from "react-usa-map";



// export const CoachingPageTemplate = ({ title, content, contentComponent }) => {
export default class OdyessyPage extends React.Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  statesCustomConfig = () => {
    return {
      "OR": {
        fill: "green",
        clickHandler: (event) => console.log('Custom handler for OR', event.target.dataset)
      },
      "TX": {
        fill: "green",
        clickHandler: (event) => console.log('Custom handler for TX', event.target.dataset)
      },
    };
  };


  render() {
    console.log('Data d isdddd ', this.props.data.test1);
    const { data } = this.props;
    const { edges: posts } = data.test1;


    console.log('Data d is ', data);

    const newData = data.test1.edges[0].node;


    return (
      <Layout>
    <section className="hero">
      <div className="background-image"></div>
      <div className="blockquote-container">
      </div>
      <h2></h2>
    </section>





        <section className="section odyessy">
          <div className="container main">
            <div className="content">

<h2>{data.test2.edges[0].node.frontmatter.title}</h2>




<USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />


<HTMLContent className="content" content={data.test2.edges[0].node.html} />

              <h1 className="has-text-weight-bold is-size-2">Latest Posts</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ borderBottom: '1px solid #333', padding: '2em 4em' }}
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
        </section>
      </Layout>
    )
  }
}

OdyessyPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

// export const odyessyQuery = graphql`
// query OdyessyQuery{
//   allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/pages/index/"} }) {
//     edges {
//       node {
//         id
//         fileAbsolutePath
//         html
//         frontmatter {
//           title
//           slot1title
//           slot1desc
//           slot1image  {
//             childImageSharp {
//               fluid(maxWidth: 400, maxHeight: 250) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           slot2title
//           slot2desc
//           slot2image  {
//             childImageSharp {
//               fluid(maxWidth: 400, maxHeight: 250) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           slot3title
//           slot3desc
//           slot3image  {
//             childImageSharp {
//               fluid(maxWidth: 400, maxHeight: 250) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   } 
//   }`

export const odyessyQuery = graphql`
  query OdyessyQuery {
    test1: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    test2: allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/pages/odyessy/"} }) {
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
  }
`



// test1: allMarkdownRemark(
//   sort: { order: DESC, fields: [frontmatter___date] },
//   filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
// ) {
//   edges {
//     node {
//       excerpt(pruneLength: 400)
//       id
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         templateKey
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// }
// test2: allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/pages/coaching/"} }) {
//   edges {
//     node {
//       id
//       fileAbsolutePath
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// }
