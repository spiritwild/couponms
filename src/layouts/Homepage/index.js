import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import BaseLayout from "../BaseLayout"
import PostList from "../../components/PostList"
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
        <div className="home-middle widget-area">
          <section className="widget featured-content featured-post">
            <div className="widget-wrap">
              <h4 className="widget-title widgettitle">
                { "Review mua sắm" }
              </h4>
              <p className="more-from-category">
                <Link to="/review" title="review mua hàng">
                  { 'Xem thêm review khác' }
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </BaseLayout>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
