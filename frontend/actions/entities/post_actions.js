import * as PostApiUtil from '../../util/post_api_utils';
import * as MediaApiUtil from '../../util/media_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receiveAllPosts = (posts) => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts
    }
}

export const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = (postId) => {
    return {
        type: REMOVE_POST,
        postId
    }
}

export const fetchPosts = () => (dispatch) => {
    return PostApiUtil.fetchPosts()
        .then((posts) => dispatch(receiveAllPosts(posts)));
};

export const fetchPost = (postId) => (dispatch) => {
    return PostApiUtil.fetchPost(postId)
        .then((post) => dispatch(receivePost(post)));
};

export const createPost = (post) => (dispatch) => {
    return PostApiUtil.createPost(post)
        .then((post) => {
            return dispatch(receivePost(post.post))
        });
};

export const updatePost = (post) => dispatch => {
    return PostApiUtil.updatePost(post)
        .then((post) => dispatch(receivePost(post)));
};

export const deletePost = (postId) => dispatch => {
    return PostApiUtil.deletePost(postId)
        .then( () => dispatch(removePost(postId)));
};

export const createMediaPost = (formData) => dispatch => {
    return MediaApiUtil.createMediaPost(formData).then((post) => {
        return dispatch(receivePost(post.post))
    })
}

export const editMediaPost = (formData, post) => dispatch => {
    return MediaApiUtil.editMediaPost(formData, post).then((post) => {
        return dispatch(receivePost(post))
    })
}