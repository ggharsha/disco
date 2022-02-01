class Api::ConversationsController < ApplicationController
    def index
        @conversations = Conversation.all
        render :index
    end
    
    def show
        @conversation = Conversation.find(params[:id])
        render :show
    end

    def create
        @conversation = Conversation.new
        @conversation.owner_id = current_user.id
        if @conversation.save
            render 'api/conversations/show'
        else
            render json: @conversation.errors.full_messages, status: 422
        end
    end

    def update
        @conversation = Conversation.find(params[:id])
        if @conversation && @conversation.update(conversation_params)
            render 'api/conversations/show'
        else
            render json: @conversation.errors.full_messages, status: 422
        end
    end

    def destroy
        @conversation = Conversation.find(params[:id])
        if @conversation && @conversation.destroy
            render 'api/conversations/show'
        else
            render json: @conversation.errors.full_messages, status: 422
        end
    end

    private
    def conversation_params
        params.require(:conversation).permit(:owner_id)
    end
end
