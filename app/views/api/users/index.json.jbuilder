json.user do
    json.partial! "api/users/user", user: @user

    if @user.avatar.attached?
        json.photoUrl url_for(@user.avatar)
    end

    
end