json.extract! user, :id, :username, :tag, :email
json.photoUrl url_for(user.avatar)
json.servers_joined user.servers_joined_ids
json.conversations user.conversation_ids