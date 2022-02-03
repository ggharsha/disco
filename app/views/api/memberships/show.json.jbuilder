json.extract! @membership, :id, :user_id, :server_id

json.server do 
    json.partial! 'api/servers/server', server: @server
end