import React from 'react';
import PostIndexItemContainer from '../posts/post_index_item_container';
import NavbarContainer from '../navbar/navbar_container';

class LikesIndex extends React.Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const currentUser = this.props.currentUser;

        let posts = this.props.posts.map(post => {
            if (post.likers.includes(currentUser.id)) {
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
            <div className="main">
                <NavbarContainer />
                <h1 className="likes-title">Your Likes</h1>
                <div className="dashboard">
                    <ul className="">
                        {posts}
                    </ul>
                </div>
                {console.log(this.props)}
            </div>
        )
    }
}

export default LikesIndex;