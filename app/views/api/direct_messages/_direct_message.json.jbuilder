json.extract! direct_message, :id, :sender_id, :conversation_id, :body, :created_at, :user
json.photoUrl url_for(direct_message.user.avatar)