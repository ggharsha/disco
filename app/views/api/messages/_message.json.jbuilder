json.extract! message, :id, :sender_id, :channel_id, :body, :created_at, :user
json.photoUrl url_for(message.user.avatar)