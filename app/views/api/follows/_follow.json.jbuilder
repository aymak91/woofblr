json.set! :followings do
    json.array! @user.followings.pluck(:id)
end

json.set! :followers do
    json.array! @user.followers.pluck(:id)
end