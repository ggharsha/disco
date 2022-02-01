json.conversation do
    json.partial! 'api/conversations/conversation', conversation: @conversation
end

json.direct_messages do
    @conversation.direct_messages.each do |direct_message|
        json.set! direct_message.id do
            json.partial! 'api/direct_messages/direct_message', direct_message: direct_message
        end
    end
end

json.users do
    @conversation.users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end
end