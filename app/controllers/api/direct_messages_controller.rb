class Api::DirectMessagesController < ApplicationController
    def index
        @direct_messages = DirectMessage.all
        render :index
    end

    def show
        @direct_message = DirectMessage.find(params[:id])
        render :show
    end

    def create #refactor with actioncable
        @direct_message = DirectMessage.new(direct_message_params)
        @conversation = Conversation.find(params[:conversation_id])
        @direct_message.sender_id = current_user.id
        @direct_message.conversation_id = @conversation.id
        if @direct_message.save
            render 'api/direct_messages/show'
        else
            render json: @direct_message.errors.full_messages, status: 422
        end
    end

    def update
        @direct_message = DirectMessage.find(params[:id])
        if @direct_message && @direct_message.sender_id == current_user.id && @direct_message.update(direct_message_params)
            render 'api/direct_messages/show'
        else
            render json: @direct_message.errors.full_messages, status: 422
        end
    end

    def destroy
        @direct_message = DirectMessage.find(params[:id])
        if @direct_message.sender_id == current_user.id && @direct_message.destroy
            render 'api/direct_messages/show'
        else
            render json: @direct_message.errors.full_messages, status: 422
        end
    end

    private
    def direct_message_params
        params.require(:direct_message).permit(:body)
    end
end