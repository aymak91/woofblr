import React from 'react';
import UserMini from '../avatar/user_mini';


class ExplorerIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }

        this.postBody = this.postBody.bind(this);
    }

    postBody(post) {

        switch (post.post_type) {
            case "text":
                return (
                    <div className="text-post">
                        <h3>{this.props.post.title}</h3>
                        <p className="content-post">{this.props.post.content}</p>
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
                        <h3>"{post.title}"</h3>
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

                return (
                    <div className="text-post">
                        <h3 className="link-post"><a href={link}>{post.title}</a></h3>
                        <p className="content-post">{post.content}</p>
                    </div>
                )
        }
    }


    render() {
        const post = this.props.post;
        const currentUser = this.props.currentUser;
        const author = this.props.post.author;
        let likes = <div></div>;
        let likers = post.likers.length;

        let likeBtn = !post.likers.includes(currentUser.id) ?
            (<button className="like-btn" onClick={() => this.props.likePost(post.id, currentUser.id)}>
                <i className="fas fa-heart unclicked post-index-like"></i>
            </button>)
            :
            (<button onClick={() => this.props.unlikePost(post.id)}>
                <i className="fas fa-heart clicked post-index-like"></i>
            </button>);

        let settings;
        if (this.props.currentUser.id === this.props.authorId) {
            settings = (
                <li>
                    <button className="settings-button" onClick={this.showMenu}>
                        <i className="fas fa-cog"></i>
                    </button>

                    {this.state.showMenu
                        ? (
                            <div className="settings-dropdown" ref={(element) => { this.dropdownMenu = element }}>
                                {this.postSetting(post)}
                                <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
                            </div>
                        )
                        : (null)
                    }
                </li>
            )
        } else {
            settings = (
                <li>
                    {likeBtn}
                </li>
            )
        };

        if (likers > 0) {
            likes = (
                <div className="">
                    <p className="note">{`${likers} ${likers === 1 ? "like" : "likes"}`}</p>
                </div>
            )
        }

        return (
            <div className="explore-index-item-container">
                <div className="explore post-author-container">
                    < UserMini
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        currentUser={this.props.currentUser}
                        otherUser={author}
                    />
                </div>
                <div className="post-body-container">
                    {this.postBody(post)}
                </div>
                <div className="explore post-action-container">
                    {likes}
                    <ul className="explore post-action-actions">
                        {settings}
                    </ul>
                </div>
            </div>
        )
    };
}

export default ExplorerIndexItem;