import React from 'react';
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const currentUser = this.props.currentUser;

        let posts = this.props.posts.map(post => {
            if (currentUser.followings.includes(post.author_id) || post.author_id === currentUser.id) {
                return (
                    <PostIndexItemContainer
                        key={post.id}
                        post={post}
                        deletePost={this.props.deletePost}
                        currentUser={this.props.currentUser}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        openModal={this.props.openModal}
                    /> 
                )
            } 
            
        }).reverse();

        
        return (
            <div className="main-content">
                <ul className="posts-container">
                    {posts}
                </ul>
            </div>
        )
    }
}

export default PostIndex;