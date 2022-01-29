json.server do
    json.partial! 'api/servers/server', server: @server
end

json.channels do
    @server.channels.each do |channel|
        json.set! channel.id do
            json.extract! channel, :id, :server_id, :channel_name
        end
    end
end

json.users do 
    @server.users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end
end