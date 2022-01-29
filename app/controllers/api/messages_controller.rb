class Api::MessagesController < ApplicationController
    def index
        @message = Message.all 
        render :index
    end

    def show
        @message = Message.find(params[:id])
        render :show
    end

    def create
    end

    def update
    end

    def destroy
    end

    private
    def message_params
    end
end
