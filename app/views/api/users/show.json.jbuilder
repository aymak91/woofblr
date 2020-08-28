json.extract! @user, :username, :id, :email, :followings, :followers

# json.followings do
#     json.array! @user.followings do |follow|
#         json.id follow.id
#         json.username follow.username
#     end
# end


# json.followers do
#     json.array! @user.followers do |follow|
#         json.id follow.id
#         json.username follow.username
#     end
# end
