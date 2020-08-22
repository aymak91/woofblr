import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
// import { openModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/entities/post_actions';
// import { follow, unfollow, fetchFollows } from '../../actions/entities/follow_actions';
// import { likePost, unlikePost } from '../../actions/entities/like_actions';
// import { fetchComments, createComment } from '../../actions/entities/comment_actions';

const msp = (state, ownProps) => {
  
    // let followingStatus = false;
    // if (currentUser.followings ) {
    //     followingStatus = currentUser.followings.includes(authorId)
    // };

    // const postsArray = Object.values(state.entities.posts);
    // const reblogs = postsArray.filter(post => post.reblog_post_id === ownProps.post.id)
        
    return ({
        post: ownProps.post,
        posts: state.entities.posts,
        authorId: ownProps.post.author.id,
        currentUser: state.entities.users[state.session.id],
        comments: Object.values(post.comments),
        users: state.entities.users
        
        // originalPost: posts[post.reblog_post_id],
        // followingStatus: followingStatus,
        // followings: currentUser.followings,
        // reblogs,
    })
}

const mdp = (dispatch) => {
    return ({
        deletePost: (id) => dispatch(deletePost(id)),



        
        // openModal: (modal, postId) => dispatch(openModal(modal, postId)),
        // follow: (user) => dispatch(follow(user)),
        // unfollow: (user) => dispatch(unfollow(user)),
        // fetchFollows: (userId) => dispatch(fetchFollows(userId)),
        // likePost: (postId, userId) => dispatch(likePost(postId, userId)),
        // unlikePost: (postId) => dispatch(unlikePost(postId)),
        // fetchComments: (postId) => dispatch(fetchComments(postId)),
        // createComment: (comment) => dispatch(createComment(comment))
    });
}

export default connect(msp, mdp)(PostIndexItem)