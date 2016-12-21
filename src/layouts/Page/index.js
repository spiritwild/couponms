import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import Link from "phenomic/lib/Link"

const Page = ({
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
    }) => {
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
    <article className="hentry" id={ __url }>
      <Helmet title={ metaTitle } meta={ meta }/>
      <div id="breadcrumbs" className="breadcrumb">

      </div>
      <h1 className="entry-title">
        { head.title }
      </h1>
      <div className="share-container">
        <span className="label">
          { "Chia sẻ bài viết:" }

        </span>
        <ul className="rrssb-buttons rrssb-1 clearfix">
          <li className="rrssb-facebook">
            <Link to="https://www.facebook.com/sharer/sharer.php?u=" className="popup">
              <span className="rrssb-icon">
	              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29">
                  <path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"></path>
                </svg>
	            </span>
              <span className="rrssb-text">{ "facebook" }</span>
            </Link>
          </li>
        </ul>
      </div>
    </article>
    // <div id="content_box">
    //  <Helmet
    //    title={ metaTitle }
    //    meta={ meta }
    //  />
    //  <div className="single_post">
    //    <div id="content_bg" className="singleCon">
    //      <div className="breadcrumb">
    //        <Link to="/" title="">{ "Trang chủ" }</Link>
    //        { "\u00a0\u00a0\u00bb\u00a0\u00a0" }
    //      </div>
    //      <header>
    //        <h1 className="title single-title">
    //          { head.title }
    //        </h1>
    //        <div className="tablePost">
    //          { new Date(head.date).toDateString() } { "&nbsp;&nbsp;" }
    //        </div>
    //      </header>
    //      <div className="post-single-content box mark-links">
    //        <BodyContainer>{ body }</BodyContainer>
    //      </div>
    //    </div>
    //  </div>
    //
    //  { children }
    //  { footer }
    // </div>
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
