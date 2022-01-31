class Api::FriendshipsController < ApplicationController
    def index
        @friendships = Friendship.where(user_id: current_user.id)
        render 'api/friendships/index'
    end

    private
    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end
end
