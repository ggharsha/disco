json.partial! 'api/channels/channel', channel: @channel

json.messages do
    @channel.messages.each do |message|
        json.set! message.id do
            json.partial! 'api/messages/message', message: message
        end
    end
end