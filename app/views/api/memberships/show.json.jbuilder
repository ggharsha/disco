json.extract! @membership, :id, :user_id, :server_id

json.server do 
    json.partial! 'api/servers/server', server: @server
end

json.current_user do
    json.partial! 'api/users/user', user: @c_user
end