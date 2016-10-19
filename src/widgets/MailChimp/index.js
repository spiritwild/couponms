import React from "react"

const MailChimp = () => (
  <aside id="bloomwidget-3" className="widget widget_bloomwidget et_bloom">
    <div className="widget_content widget_option widget_option_7">
      <div className="widget_form_container">
        <div className="widget_form_container_wrapper clearfix">
          <div className="mc_widget_header_outer">
            <div className="mc_widget_form_header mc_header_text_light">
              <div className="mc_widget_form_text">
                <h2 className="mc_widget_caption">
                  { "Bản tin Coupon" }
                </h2>
                <p className="mc_widget_lead">
                  { "Đăng ký nhận khuyến mại hấp dẫn nhất qua email" }
                </p>
              </div>
            </div>
          </div>
          <div className="mc_widget_form_content widget_fields widget_stacked">
            <form method="post"
                  action="//couponmuasam.us9.list-manage.com/subscribe/post?u=925d1993ae4d84d2fd8293ae8&id=4c87ca3b5a"
                  target="_blank" noValidate id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
              <p className="widget_form_input mc_widget_subscribe_name">
                <input placeholder={ "Tên của bạn" } type="text" name="FNAME" className="required"
                       id="mce-FNAME"/>
              </p>
              <p className="widget_form_input mc_widget_subscribe_email">
                <input placeholder={ "Email" } type="text" name="EMAIL" className="required"
                       id="mce-EMAIL"/>
              </p>
              <button type="submit" className="mc_widget_subscription btn">
                <span className="widget_form_button_text mc_widget_button_text">
                  { "Đăng kí ngay" }
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </aside>
  // <aside id="bloomwidget-3" className="widget widget_bloomwidget et_bloom">
  //   <div className="et_bloom_widget_content et_bloom_optin et_bloom_optin_7">
  //     <div className="et_bloom_form_container  with_edge zigzag_edge et_bloom_rounded et_bloom_form_text_dark">
  //       <div className="et_bloom_form_container_wrapper clearfix">
  //         <div className="et_bloom_header_outer">
  //           <div className="et_bloom_form_header et_bloom_header_text_light">
  //             <div className="et_bloom_form_text">
  //               <h2>{ "Bản Tin Coupon" }</h2>
  //               <p>{ "Đăng ký nhận khuyến mại hấp dẫn nhất qua email" }</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </aside>
  // <div id="mc_embed_signup">
  //   <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
  //         className="validate" target="_blank"
  //         noValidate method="post"
  //         action="//couponmuasam.us9.list-manage.com/subscribe/post?u=925d1993ae4d84d2fd8293ae8&id=4c87ca3b5a"
  //   >
  //     <div id="mc_embed_signup_scroll">
  //       <div className="mc-field-group">
  //         <input type="email" name="EMAIL" className="required email"
  //                id="mce-EMAIL" placeholder="Email của bạn"
  //         />
  //       </div>
  //       <div className="mc-field-group">
  //         <input type="text" name="FNAME" className="required"
  //                id="mce-FNAME" placeholder="Tên bạn"
  //         />
  //       </div>
  //       <div id="mce-responses" className="clear">
  //         <div className="response" id="mce-error-response" style={ { display: "none" } }>
  //         </div>
  //         <div className="response" id="mce-success-response" style={ { display: "none" } }>
  //         </div>
  //       </div>
  //       <div style={ { position: "absolute", left: "-5000px" } } aria-hidden="true">
  //         <input type="text" name="b_12e14925f89267c6b22beb8b2_222be69fa6" tabIndex="-1" />
  //       </div>
  //       <div className="clear">
  //         <input type="submit" value="Nhận tin khuyến mãi!" name="subscribe" id="mc-embedded-subscribe" className="button" />
  //       </div>
  //     </div>
  //   </form>
  // </div>
)

export default MailChimp