import * as React from 'react'
import { Link, graphql } from 'gatsby';
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
    return (
       <Layout pageTitle="Blog Posts">
        {
        data.allMdx.nodes.map((node) => (
            <article key={node.name}>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.datePublished}</p>
            </article>
        ))
        }    
       </Layout> 
    )
}

// export const query = graphql`
// query {
//     allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//         nodes {
//             name
//         }
//     }
// }
// `

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
      nodes {
        frontmatter {
          name
          author
          datePublished(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`  

export default BlogPage