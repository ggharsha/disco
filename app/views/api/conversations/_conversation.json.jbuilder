json.extract! conversation, :id, :owner_id
json.users do
    conversation.users.each do |user|
        json.set! user.id do
        json.partial! 'api/users/user', user: user
        end
    end
end