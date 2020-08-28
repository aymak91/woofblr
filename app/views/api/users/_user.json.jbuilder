
json.extract! user, :id, :username, :email

# json.set! :likes do
#     json.array! user.likes.pluck(:post_id)
# end

if user.avatar.attached?
    json.photoUrl url_for(user.avatar)
end


json.set! :followings do
    json.array! user.followings.pluck(:id)
end


json.set! :followers do
    json.array! user.followers.pluck(:id)
end
