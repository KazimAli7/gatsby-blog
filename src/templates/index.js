import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pager from "../pages/pager"

const BlogArchive = ({ data, pageContext, location }) => {
  const siteTitle = `All Post`
  const posts = data.swapi.getAllPost

 const JsonView = value => {
  const jsonValue = JSON.parse(value)
  if(jsonValue){
      return(
          <p className="description">
              {
                  jsonValue[0].content ?
                  jsonValue[0].content.map((item) => (
                      <>
                          {item.text}
                      </>
                  ))
                  :
                  null
              }
          </p>
      )
  } else {
      return <div>
          Nothing found
      </div>
  }
}
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.result.map(post => {
          const title = post.title || post.slug

          return (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={`/posts/${post.slug}`} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.subtitle ? post.subtitle : ''}</small>
                </header>
                <section>
                  {
                    post.content ?
                    JsonView(post.content)
                    :
                    null
                  }
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default BlogArchive

export const pageQuery = graphql`
  query($humanPageNumber: Int! $limit: Int!) {
    swapi {
      getAllPost(page: $humanPageNumber, limit:$limit) {
        result{
          _id
          slug
          title
          subtitle
          content
        }
      }
    }
  }
`
