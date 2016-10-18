import React, {PropTypes} from "react"
import {Link} from "react-router"
import enhanceCollection from "phenomic/lib/enhance-collection"
import site from "../../config.yml"

const Header = (props, {metadata: {pkg}, collection}) => {
  const categories = enhanceCollection(collection, {
    filter: {type: "Category"},
    sort: "title",
    reverse: true,
  })
  const rootCategories = categories.filter(category => (!category.parent))
  return (
    <header className="navbar navbar-default navbar-fixed-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand site" to="/">
            { site.theme_settings.header_text }
          </Link>
        </div>
        <div className="navbar-collapse collapse hidden-md hidden-sm hidden-xs">
          <ul className="nav navbar-nav pull-right">
            <li>
              <Link to="/">
                  <span>
                    <i className="fa fa-home"></i> Trang chủ
                  </span>
              </Link>
            </li>
            <li>
              <Link to="/archive">
                  <span>
                    <i className="fa fa-list"></i> Bài viết
                  </span>
              </Link>
            </li>
            {
              rootCategories.map((category) => (
                <li className="dropdown primary-menu" key={ category.__url }>
                  <Link key={ category.__url } to={ category.__url } className="dropdown-toggle" data-toggle="dropdown">
                    { category.title }
                  </Link>
                  <ul className="dropdown-menu">
                    {
                      categories.map((child) => (
                        child.parent === category.code &&
                        <li role="presentation" key={ child.__url }>
                          <Link to={ child.__url }>{ child.title }</Link>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </header>
  )
}

// import styles from "./index.css"
// import Svg from "react-svg-inline"
// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"

// const Header = (props, { metadata: { pkg } }) => (
//   <header className={ styles.header }>
//     <nav className={ styles.nav }>
//       <div className={ styles.navPart1 }>
//         <Link
//           className={ styles.link }
//           to="/"
//         >
//           { "Home" }
//         </Link>
//       </div>
//       <div className={ styles.navPart2 }>
//         { pkg.twitter &&
//           <a
//             href={ `https://twitter.com/${pkg.twitter}` }
//             className={ styles.link }
//           >
//             <Svg svg={ twitterSvg } cleanup />
//               { "Twitter" }
//           </a>
//         }
//         { pkg.repository &&
//           <a
//             href={ pkg.repository }
//             className={ styles.link }
//           >
//             <Svg svg={ gitHubSvg } cleanup />
//             { "GitHub" }
//           </a>
//         }
//       </div>
//     </nav>
//   </header>
// )

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
  collection: PropTypes.array.isRequired,
}

export default Header
