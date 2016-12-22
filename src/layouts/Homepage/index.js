import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import BaseLayout from "../BaseLayout"
import PostList from "../../components/PostList"
import Reviews from "../../components/Reviews"
import Link from "phenomic/lib/Link"

const numberOfLatestPosts = 6

const Homepage = (props, { collection }) => {
  const latestGuides = enhanceCollection(collection, {
    filter: { type: "Guide" },
    sort: "date",
    reverse: true,
  }).slice(0, numberOfLatestPosts)
  const latestReviews = enhanceCollection(collection, {
    filter: { type: "Review" },
    sort: "date",
    reverse: true,
  }).slice(0, numberOfLatestPosts)
  return (
    <BaseLayout { ...props }>
      <div className="feature_box">
      </div>
      <div id="content_box">
        <div id="content_widget">
        </div>
        <div className="home-top">
          <div className="featured-content featured-post">
            <PostList posts={ latestGuides }/>
          </div>
        </div>
        <Reviews reviews={ latestReviews }/>
      </div>
    </BaseLayout>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
