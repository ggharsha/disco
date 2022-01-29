class Api::MessagesController < ApplicationController
    def index
        @message = Message.where(channel_id: params[:channel_id]) 
        render :index
    end

    def show
        @message = Message.find(params[:id])
        render :show
    end

    def create
        @message = Message.new(message_params)
        @message.sender_id = current_user.id
        @message.channel_id = params[:channel_id]
        if @message.save
            render 'api/messages/show'
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def update
        @message = Message.find(params[:id])
        if @message && @message.sender_id == current_user.id && @message.update(message_params)
            render 'api/messages/show'
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find(params[:id])
        if @message.sender_id == current_user.id && @message.destroy
            render 'api/messages/show'
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private
    def message_params
        params.require(:message).permit(:body)
    end
end
