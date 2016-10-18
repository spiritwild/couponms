import React from "react"

const MailChimp = () => (
  <div id="mc_embed_signup">
    <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
      className="validate" target="_blank"
      noValidate method="post"
      action="//couponmuasam.us9.list-manage.com/subscribe/post?u=925d1993ae4d84d2fd8293ae8&id=4c87ca3b5a">
      <div id="mc_embed_signup_scroll">
        <div className="mc-field-group">
          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email của bạn" />
        </div>
        <div className="mc-field-group">
          <input type="text" name="FNAME" className="required" id="mce-FNAME" placeholder="Tên bạn"/>
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{display: "none"}}></div>
          <div className="response" id="mce-success-response" style={{display: "none"}}></div>
        </div>
        <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
          <input type="text" name="b_12e14925f89267c6b22beb8b2_222be69fa6" tabIndex="-1" />
        </div>
        <div className="clear">
          <input type="submit" value="Nhận tin khuyến mãi!" name="subscribe" id="mc-embedded-subscribe" className="button" />
        </div>
      </div>
    </form>
  </div>
)

export default MailChimp