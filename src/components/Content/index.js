import React, {PropTypes} from "react"
import site from "../../config.yml"
import Link from "phenomic/lib/Link"
import MailChimp from "../../widgets/MailChimp"

const Content = (props) => {
  return (
    <div id="wrap_content">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8 pull-right">
            <Link to="http://click.accesstrade.vn/adv.php?rk=0001tj000dds" target="_blank">
              <img width="600" height="60" src="http://imp.accesstrade.vn/img.php?rk=0001tj000dds"/>
            </Link>
          </div>
        </div>
        <div className="page">
          <div className="content">
            <article className="article col-md-8 col-xs-12">
              { props.children }
            </article>
            <aside className="sidebar col-md-4 hidden-small">
              <div id="sidebar" className="g">
                <div className="sidebar">
                  <ul className="sidebar_list">
                    <li className="widget widget-sidebar" id="widget-mailchimp">
                      <h3>Bản tin khuyến mãi</h3>
                      <p>Đăng kí nhận coupon mới qua email</p>
                      <MailChimp />
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    // <div className={ styles.content }>
    //   { props.children }
    // </div>
  )
}

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
