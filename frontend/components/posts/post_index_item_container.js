import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { openModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/entities/post_actions';
// import { follow, unfollow, fetchFollows } from '../../actions/entities/follow_actions';
// import { fetchPosts } from '../../actions/entities/post_actions';
import { likePost, unlikePost } from '../../actions/entities/like_actions';
// import { fetchComments, createComment } from '../../actions/entities/comment_actions';

const mSTP = (state, ownProps) => {
    const post = ownProps.post
    const posts = state.entities.posts
    const currentUser = state.entities.users[state.session.id];
    const authorId = ownProps.post.author.id;

    // let followingStatus = false;
    // if (currentUser.followings ) {
    //     followingStatus = currentUser.followings.includes(authorId)
    // };

    
    return ({
        post: post,
        posts,
        // originalPost,
        // followingStatus: followingStatus,
        authorId: authorId,
        currentUser: currentUser,
        // followings: currentUser.followings,
        // reblogs,
        // comments,
        users: state.entities.users

    })
}

const mDTP = (dispatch) => {
    return ({
        openModal: (modal, postId) => dispatch(openModal(modal, postId)),
        deletePost: (id) => dispatch(deletePost(id)),
        // follow: (user) => dispatch(follow(user)),
        // unfollow: (user) => dispatch(unfollow(user)),
        // fetchFollows: (userId) => dispatch(fetchFollows(userId)),
        likePost: (postId, userId) => dispatch(likePost(postId, userId)),
        unlikePost: (postId) => dispatch(unlikePost(postId)),
    });
}

export default connect(mSTP, mDTP)(PostIndexItem)