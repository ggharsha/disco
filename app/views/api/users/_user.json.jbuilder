json.extract! user, :id, :username, :tag, :email
json.photoUrl url_for(user.avatar)