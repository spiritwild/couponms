import React, { PropTypes } from "react"
import Link from "phenomic/lib/Link"
import TagDisplay from "../TagDisplay"

const Post = ({ post }) => {
  return (
    <div className="entry col-xs-12" key={ post.__url }>
      <Link to={ post.__url } title={ post.title } rel="nofollow" className="alignleft">
        <img src={ post.__url + "/" + post.thumbnail }/>
      </Link>
      <header className="entry-header">
        <h2 className="entry-title">
          <Link to={ post.__url } title={ post.title } rel="nofollow">
            { post.title }
          </Link>
        </h2>
      </header>
    </div>
    // <div className="post excerpt" key={ post.__url }>
    //   <header>
    //     <h2 className="title">
    //       <Link to={ post.__url } title={ post.title }>{ post.title }</Link>
    //     </h2>
    //     <div className="tablePost">
    //       <span className="thecategories">
    //
    //       </span>
    //       {
    //         post.tags &&
    //           <span className="tags">
    //             { "Tags: " }
    //             {
    //               post.tags.map((tag) => (
    //                 <TagDisplay key={ tag } tag={ tag } />
    //               ))
    //             }
    //           </span>
    //       }
    //     </div>
    //     {
    //       post.thumbnail &&
    //       <div className="featured-thumbnail">
    //         <Link to={ post.__url } title={ post.title } rel="nofollow">
    //           <img src={ post.__url + "/" + post.thumbnail } />
    //         </Link>
    //       </div>
    //     }
    //     <div className="post-content image-caption-format-1">
    //       { post.description }
    //     </div>
    //     <div className="readMore">
    //       <Link to={ post.__url } title={ post.title }>
    //         { "Đọc tiếp" }
    //       </Link>
    //     </div>
    //   </header>
    //
    // </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post