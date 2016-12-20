import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import BaseLayout from "../BaseLayout"
import PostList from "../../components/PostList"

const numberOfLatestPosts = 6

const Homepage = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
    .slice(0, numberOfLatestPosts)
  return (
    <BaseLayout { ...props }>
      <div className="feature_box">
      </div>
      <div id="content_box">
        <div id="content_widget">
        </div>
        <div className="home-top">
          <div className="featured-content featured-post">
            <PostList posts={ latestPosts }/>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
