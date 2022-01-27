class Api::FriendshipsController < ApplicationController
    def index
        user = User.find(current_user.id)
        @incoming_friend_requests = user.incoming_friend_requests
        @outgoing_friend_requests = user.outgoing_friend_requests
        @friendships = user.friends
        render :index
    end

    def create
        friend = User.find_by(username: params[:username], tag: params[:tag])
        if !friend
            render json: ["Could not find user"], status: 422
        else 
            @friendship = Friendship.new(user_id: current_user.id, friend_id: friend.id)
            if @friendship.save
                render :show
            else
                render json: ["Could not complete request"], status: 422
            end
        end
    end

    def update
        # unsure for this
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        @friendship.destroy
        render :index
    end
end
