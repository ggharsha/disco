class Api::ServersController < ApplicationController
    def index
        @servers = Server.where(public: true)
        render :index
    end

    def show
        @server = Server.find(params[:id])
        render :show
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        # debugger
        if @server.save!
            @membership = Membership.create(user_id: current_user.id, server_id: @server.id)
            @channel = Channel.create(server_id: @server.id, channel_name: 'general')
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def update
        @server = Server.find(params[:id])
        if @server && @server.update(server_params)
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        @server = Server.find(params[:id])
        if current_user.id == @server.owner_id
            @server.destroy
        else
            render json: ['You cannot destroy someone else\'s server.'], status: 422
        end
    end

    private

    def server_params
        params.require(:server).permit(:server_name, :public)
    end
end
