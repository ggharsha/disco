class Api::FriendshipsController < ApplicationController
    # def index
    #     @user = current_user
    #     render 'api/friendships/index'
    # end

    # def create
    #     friend = User.find_by(username: params[:username], tag: params[:tag])
    #     if !friend
    #         render json: ["Could not find user"], status: 422
    #     else 
    #         @friendship = Friendship.new(user_id: current_user.id, friend_id: friend.id)
    #         if @friendship.save
    #             render :show
    #         else
    #             render json: ["Could not complete request"], status: 422
    #         end
    #     end
    # end

    # def update
    #     @friendship = Friendship.find(params[:id])
    #     if current_user.id == @friendship.user_id 
    # end

    # def destroy
    #     @friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
    #     if @friendship.user_id == current_user.id && @friendship.destroy
    #         render 'api/friendships/show'
    #     else
    #         render json: @friendship.errors, status: 422
    #     end
    # end

    # private
    # def friendship_params
    #     params.require(:friendship).permit(:user_id, :friend_id)
    # end
end
