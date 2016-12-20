import React, { PropTypes } from "react"
import MailChimp from "../../widgets/MailChimp"

const Content = (props) => {
  return (
    <div id="wrap_content">
      <div className="container">
        <div className="page">
          <div className="content">
            <article className="article col-md-8 col-xs-12">
              { props.children }
            </article>
            <div className="sidebar col-md-4 hidden-small">
              <div id="sidebar" className="g">
                <div className="sidebar">
                  <MailChimp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
