import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import Link from "phenomic/lib/Link"

const Page = (
  {
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  invariant(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div id="content_box">
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <div className="single_post">
        <div id="content_bg" className="singleCon">
          <div className="breadcrumb">
            <Link to="/" title="">{ "Trang chủ" }</Link>
            { "&nbsp;&nbsp;&raquo;&nbsp;&nbsp;" }
          </div>
          <header>
            <h1 className="title single-title">
              { head.title }
            </h1>
            <div className="tablePost">
              { new Date(head.date).toDateString() } { "&nbsp;&nbsp;" }
            </div>
          </header>
          <div className="post-single-content box mark-links">
            <BodyContainer>{ body }</BodyContainer>
          </div>
        </div>
      </div>

      { children }
      { footer }
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
