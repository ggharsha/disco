class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
    before_action :require_logged_out, only: [:create]

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render :show
        else
            render json: ['Invalid credentials.'], status: 422
        end
    end

    def destroy
        logout!
        redirect_to api_session_url
    end
end
