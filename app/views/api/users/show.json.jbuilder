json.partial! 'api/users/user', user: @user 

json.servers do
    @user.servers_joined.each do |server|
        json.set! server.id do
            json.extract! server, :id, :server_name, :owner_id, :public
        end
    end
end 