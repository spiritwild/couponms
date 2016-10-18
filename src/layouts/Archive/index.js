import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import Link from "react-router/lib/Link"

import BaseLayout from "../BaseLayout"
import TagDisplay from "../../components/TagDisplay"
// const Archive = ({ collection }) => {
//   const latestPosts = enhanceCollection(collection, {
//     filter: { layout: "Post" },
//     sort: "date",
//     reverse: true,
//   })
//   return (
//     <BaseLayout
//       className="home" { ...this.props }
//     >
//       <div className="posts">
//         <div className="title">
//           <h1>{ "Bài viết" }</h1>
//         </div>
//         {
//           latestPosts.map((post) => (
//             <div
//               key={ post.__url }
//               className="post-teaser"
//             >
//               <header>
//                 <h2>
//                   <Link
//                     to={ post.__url }
//                     className="post-link"
//                   >
//                     { post.title }
//                   </Link>
//                 </h2>
//                 <p className="meta">
//                   {
//                     post.tags && (
//                       post.tags.map((tag) => (
//                         <TagDisplay key={ tag } tag={ tag } />
//                       ))
//                     )
//                   }
//                   <span>{ new Date(post.date).toDateString() }</span>
//                 </p>
//               </header>
//             </div>
//           ))
//         }
//       </div>
//     </BaseLayout>
//   )
// }
//
// Archive.contextTypes = {
//   collection: PropTypes.array.isRequired,
// }

class Archive extends React.PureComponent {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true,
    })

    return (
      <BaseLayout
        className="home" { ...this.props } head={ {
          title: "Bai viet",
        } }
      >
        <div className="posts">
          <div className="title">
            <h1>{ "Bài viết" }</h1>
          </div>
          {
            latestPosts.map((post) => (
              <div
                key={ post.__url }
                className="post-teaser"
              >
                <header>
                  <h2>
                    <Link
                      to={ post.__url }
                      className="post-link"
                    >
                      { post.title }
                    </Link>
                  </h2>
                  <p className="meta">
                    {
                      post.tags && (
                        post.tags.map((tag) => (
                          <TagDisplay key={ tag } tag={ tag } />
                        ))
                      )
                    }
                    <span>{ new Date(post.date).toDateString() }</span>
                  </p>
                </header>
              </div>
            ))
          }
        </div>
      </BaseLayout>
    )
  }
}

export default Archive