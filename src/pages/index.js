import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {
  render() {
    let linksToRender = this._getLinks();
    //debugger;
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        
        <ul>
              {linksToRender.map((link, index) => (
               /*  <Link
                  key={link.id}
                  updateStoreAfterVote={this._updateCacheAfterVote}
                  index={index}
                  link={link}
                /> */
                <li key={link.node.id}>
                <a href={link.node.frontmatter.path}>{link.node.frontmatter.title}</a>
                </li>
              ))}
        </ul>
        
      </div>
    )
  }

  _getLinks = () => {
    //if (isNewPage) {
    return this.props.data.allMarkdownRemark.edges;
    /* }
    const rankedLinks = this.props.feedQueryx.feed.links.slice()
    rankedLinks.sort((l1, l2) => l2.votes.length - l1.votes.length)
    return rankedLinks */
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit:10
      sort: { fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: { eq: true}}}
    ) {
    edges {
      node {
        id
        frontmatter {
          title
          path
        }
      }
    }
  }
}
`

export default IndexPage
