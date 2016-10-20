import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import BaseLayout from "../BaseLayout"
import PostList from "../../components/PostList"
import site from "../../config.yml"

const Archive = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
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
        <PostList posts={ latestPosts }/>
      </div>
    </BaseLayout>
  )
}

Archive.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Archive
