json.partial! 'api/users/user', user: @user 

json.servers do
    @user.servers_joined.each do |server|
        json.set! server.id do
            json.extract! server, :id, :name, :owner_id, :public
        end
    end
end 

json.owned_servers do 
    @user.owned_servers.each do |server|
        json.set! server.id do
            json.extract! owned_server, :id, :name, :public
        end
    end
end