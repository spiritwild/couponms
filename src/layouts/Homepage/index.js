import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import BaseLayout from "../BaseLayout"
// import Link from "phenomic/lib/Link"
// import TagDisplay from "../../components/TagDisplay"
import PostList from "../../components/PostList"
// import Page from "../Page"
// import PagesList from "../../components/PagesList"
import site from "../../config.yml"

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
      {
        site.theme_settings.header_text &&
          <div
            className="call-out"
            style={ {
              backgroundImage: `url('/${ site.theme_settings.header_text_feature_image }')`,
            } }
            dangerouslySetInnerHTML={ { __html: site.theme_settings_header_text } }
          />
      }
      <div className="feature_box">
      </div>
      <div id="content_box">
        <div id="content_widget">
        </div>
        <PostList posts={ latestPosts } />
      </div>
    </BaseLayout>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
