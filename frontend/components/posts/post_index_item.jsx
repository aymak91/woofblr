import React from 'react';
// import Avatar from '../avatar/avatar';
// import UserMini from '../avatar/user-mini';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }

        this.postBody = this.postBody.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
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
                        <h3 className="link-post"><a  href={link}>{post.title}</a></h3>
                        <p className="content-post">{post.content}</p>
                    </div>
                )
        }
    }
    
    
    postSetting(post){
        switch (post.post_type) {
            case "text":
                return (
                    <button onClick={() => this.props.openModal('Edit Text Form', post.id)}>Edit</button>
                )
            case "photo":
                return (
                    <button onClick={() => this.props.openModal('Edit Photo Form', post.id)}>Edit</button>
                )
            case "quote":
                return (
                    <button onClick={() => this.props.openModal('Edit Quote Form', post.id)}>Edit</button>
                )
            case "link":
                return (
                    <button onClick={() => this.props.openModal('Edit Link Form', post.id)}>Edit</button>
                )
        }
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu)
        });
    }

    closeMenu(e) {
        if (this.dropdownMenu && !this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });  
        }
    }


    render() {  
        const post = this.props.post;
        const currentUser = this.props.currentUser;


        // let photoUrl;    
        // if (this.props.post.author.photoUrl) {
            
        //     photoUrl = 
        //         <Avatar 
        //             photoUrl={this.props.post.author.photoUrl} 
        //             klass={"author-avatar"}
        //             user={this.props.post.author}
        //             follow={this.props.follow}
        //             unfollow={this.props.unfollow}
        //             currentUser={currentUser}
        //         />
        // } else {
        //     photoUrl = <img className="author-avatar" src={window.brentURL}></img>
        // }

        let likeBtn = !post.likers.includes(currentUser.id) ? 
        (<button className="like-btn" onClick={() => this.props.likePost(post.id, currentUser.id)}>
            <i className="fas fa-heart unclicked post-index-like"></i>
        </button>)
        :
        (<button onClick={() => this.props.unlikePost(post.id)}>
            <i className="fas fa-heart clicked post-index-like"></i>
        </button>) ;

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
                            {settings} 
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

export default PostIndexItem;