import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.swapi.getPostById
  const siteTitle = `← Back`
  const { previous, next } = post

  const displayContent = (value) => {
    const jsonValue = JSON.parse(value)
    const result = jsonValue.filter((item) =>{
        if(item.content){
            return item
        }
        return null
    })
    return(
        <div>
            {
                result.map((item, index) =>(
                    <ul key={index}>
                    {
                        item.content
                        ? 
                        item.content.map((i, ind) =>(
                            <li key={ind} className="descriptionView">
                                {i.text ? i.text : null}
                            </li>
                        ))
                        :
                        null
                    }
                    </ul>
                ))
            }
        </div>
    )
}

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title ? post.title : 'Adding Post'}
        // description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 className="text-3xl font-bold" itemProp="headline">{post.title}</h1>
          <p>{post.subtitle}</p>
        </header>
        <section>
        {
                    post.content ?
                    displayContent(post.content)
                    :
                    null
                  }
        </section>
        <hr />
        <footer>
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← Back
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {post.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($id: ID!){
    swapi{
      getPostById(id: $id){
        title
        subtitle
        slug
        content
        tags
        metaRobots
        thumbnail
        status
      }
    }
  }
`
