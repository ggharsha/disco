class Api::FriendshipsController < ApplicationController
    def index
        @friendships = Friendship.where(user_id: current_user.id)
        render 'api/friendships/index'
    end

    def create
        @friendship_outgoing = Friendship.new(
            user_id: current_user.id, 
            friend_id: params[:friendship][:friend_id],
            status: "outgoing"
        )
        friendship_incoming = Friendship.new(
            user_id: params[:friendship][:friend_id],
            friend_id: current_user.id,
            status: "incoming"
        )
        if @friendship_outgoing.save && friendship_incoming.save
            render 'api/friendships/index'
        else
            render json: @friendship_outgoing.errors.full_messages, status: 422
        end
    end

    def update
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        if @friendship.destroy
            render 'api/friendships/index'
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    private
    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end
end
