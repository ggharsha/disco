class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:index, :destroy]
    before_action :require_logged_out, only: [:create]

    def index
    end

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
