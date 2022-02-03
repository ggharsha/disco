json.user do
    json.partial! 'api/users/user', user: @user 
    json.servers_joined @user.servers_joined_ids
    json.conversations @user.conversation_ids
end

json.servers do
    @user.servers_joined.each do |server|
        json.set! server.id do
            json.partial! 'api/servers/server', server: server
        end
    end
end