class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:index, :destroy]
    before_action :require_logged_out, only: [:create]

    def index
        @users = User.all 
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        if @user && @user.is_password?(params[:user][:password]) && @user.update(user_params) 
            render :show
        else
            errors = @user.errors.full_messages.length > 0 ? @user.errors.full_messages : ["Incorrect password."] 
            render json: errors, status: 422
        end
    end

    def destroy #leaving this method not working on frontend for now
        @user = User.find(params[:id])
        if !@user.is_password?(user_params[:password])
            render json: ['Incorrect password.'], status: 422
        elsif @user.id == current_user.id
            @user.destroy
            render :show
        else
            render json: ['You cannot destroy someone else\'s account.'], status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :username, :tag, :avatar)
    end
end
