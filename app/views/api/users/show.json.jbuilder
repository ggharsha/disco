json.user do
    json.partial! 'api/users/user', user: @user 
end

json.servers do
    @user.servers_joined.each do |server|
        json.set! server.id do
            json.partial! 'api/servers/server', server: server
        end
    end
end 