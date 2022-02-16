class Api::ConversationsController < ApplicationController
    def index
        @conversations = current_user.conversations
        render :index
    end
    
    def show
        @conversation = Conversation.find(params[:id])
        render :show
    end

    def create
        @conversation = Conversation.new
        @conversation.owner_id = current_user.id
        begin
            @conversation.transaction do
                @conversation.save
                params[:conversation][:handles].each do |handle|
                    username = handle.split("#").first
                    tag = handle.split("#").last
                    user_id = User.find_by(username: username, tag: tag).id
                    ConversationMembership.create(member_id: current_user.id, conversation_id: @conversation.id)
                    ConversationMembership.create(member_id: user_id, conversation_id: @conversation.id)
                end
            end
            render 'api/conversations/show'
        rescue
            render json: ['Could not find a user, please try again'], status: 422
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
        params.require(:conversation).permit(:handles)
    end
end
