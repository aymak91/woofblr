import React from 'react';
// import Avatar from '../avatar/avatar';
// import UserMini from '../avatar/user-mini';
// import Comments from '../comments/comments';
// import CommentForm from '../comments/comment_form_container';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.postBody = this.postBody.bind(this);

    }

    postBody(){

        // switch (post.post_type) {
        //     case "text":
                return (
                    <div className="text-post">
                        <h3>{this.props.post.title}</h3>
                        <p className = "content-post">{this.props.post.content}</p>
                    </div>
                );

            // case "photo":
            //     return (
            //         <div>
            //             <img className="photo-post" src={post.photoUrl} />
            //             <p className="content-post">{post.content}</p>
            //         </div>
            //     )

            // case "quote":
            //     return (
            //         <div className="quote-post">
            //             <h3>{post.title}</h3>
            //             <p className="content-post"><span>-</span> {post.content}</p>
            //         </div>
            //     )
            // case "link":
            //     let link;
            //     if (post.title.includes("https://")) {
            //         link = post.title
            //     } else {
            //         link = "http://" + post.title;
            //     }

            //     return (
            //         <div className="text-post">
            //             <h3 className="link-post"><a  href={link}>{post.title}</a></h3>
            //             <p className="content-post">{post.content}</p>
            //         </div>
            //     )
        // }
    }


    render() {  
        return (
            <div className="post-index-item-container">
                {/* {photoUrl} */} Photo
                <div className="post-container">
                    <div className="post-author-container">
                        {/* < UserMini
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            currentUser={this.props.currentUser}
                            otherUser={author}
                        /> {reblogSymbol} {originalAuthor} */}
                        Mini popup
                    </div>
                    <div className="post-body-container">
                        {this.postBody()}
                    </div>
                    <div className="post-action-container">
                        {/* {notes} */} Notes here
                        <ul className="post-action-actions">
                            {/* {settings}  */} Settings
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

export default PostIndexItem;