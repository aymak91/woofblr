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

    postBody(post){

        switch (post.post_type) {
            case "text":
                return (
                    <div className="text-post">
                        <h3>{this.props.post.title}</h3>
                        <p className = "content-post">{this.props.post.content}</p>
                    </div>
                );

            case "photo":
                return (
                    <div>
                        <img className="photo-post" src={post.photoUrl} />
                        <p className="content-post">{post.content}</p>
                    </div>
                )

            case "quote":
                return (
                    <div className="quote-post">
                        <h3>{post.title}</h3>
                        <p className="content-post"><span>-</span> {post.content}</p>
                    </div>
                )
            case "link":
                let link;
                if (post.title.includes("https://")) {
                    link = post.title
                } else {
                    link = "http://" + post.title;
                }

            //     return (
            //         <div className="text-post">
            //             <h3 className="link-post"><a  href={link}>{post.title}</a></h3>
            //             <p className="content-post">{post.content}</p>
            //         </div>
            //     )
        }
    }


    render() {  
        const post = this.props.post;


        let photoUrl;    
        if (this.props.post.author.photoUrl) {
            
            photoUrl = 
                <Avatar 
                    photoUrl={this.props.post.author.photoUrl} 
                    klass={"author-avatar"}
                    user={this.props.post.author}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentUser={currentUser}
                />
        } else {
            photoUrl = <img className="author-avatar" src={window.brentURL}></img>
        }


        // let settings;
        // if (this.props.currentUser.id === this.props.authorId) {
        //     settings = (
        //         <li>
        //             <button className="settings-button" onClick={this.showMenu}>
        //                 <i className="fas fa-cog"></i>
        //             </button>

        //             {this.state.showMenu
        //                 ? (
        //                     <div className="settings-dropdown" ref={(element) => { this.dropdownMenu = element }}>
        //                         {this.postSetting(post)}
        //                         <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
        //                     </div>
        //                 )
        //                 : (null)
        //             }
        //         </li>
        //     )
        // } else {
        //     settings = (
        //         <li>
        //             <button className="" onClick={this.showCommentForm}>
        //                 <i className="fas fa-comments"></i>
        //             </button>

        //             {this.state.showCommentForm
        //                 ? (
        //                     <div className="comments-dropdown" ref={(element) => { this.dropdownCommentForm = element }}>
        //                         {<CommentForm postId={this.props.post.id} closeCommentForm={this.closeCommentForm} />}
        //                         <ul>{comments}</ul>
        //                     </div>
        //                 )
        //                 : (null) 
        //             }
        //             <i className="fas fa-retweet" onClick={() => this.props.openModal('Create Reblog', this.props.post.id)}></i>
        //             {likeBtn}
        //         </li>
        //         )
        //     };

        return (
            <div className="post-index-item-container">
                {/* {photoUrl} */}
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
                        {this.postBody(post)}
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