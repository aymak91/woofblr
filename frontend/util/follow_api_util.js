export const fetchFollows = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/follows`,
    })
}


export const follow = (followingId) => {
    return $.ajax({
        method: "POST",
        url: "/api/follows",
        data: { followingId }
    })
}


export const unfollow = (userId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/follows/${userId}`
    })
}