export const likePost = (postId, userId) => {
    return $.ajax({
        method: "POST",
        url: "/api/likes",
        data: { postId, userId}
    })
}

export const unlikePost = (postId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/posts/${postId}/like`
    })
}