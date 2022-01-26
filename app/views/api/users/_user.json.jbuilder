json.extract! user, :id, :username, :tag
json.photoUrl url_for(user.avatar)