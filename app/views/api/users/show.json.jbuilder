json.user do
    json.partial! 'api/users/user', user: @user 
end

json.servers do
    @user.servers_joined.each do |server|
        json.set! server.id do
            json.extract! server, :id, :server_name, :owner_id, :public
        end
    end
end 