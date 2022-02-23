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
        handle_check_username = current_user.username
        handle_check_tag = current_user.tag
        if params[:conversation][:handles].include?("#{handle_check_username}##{handle_check_tag}")
            render json: ["You can't add yourself!"], status: 422
        else
            @conversation = Conversation.new
            @conversation.owner_id = current_user.id
            begin
                @conversation.transaction do
                    @conversation.save
                    ConversationMembership.create(member_id: current_user.id, conversation_id: @conversation.id)
                    params[:conversation][:handles].each do |handle|
                        username = handle.split("#").first
                        tag = handle.split("#").last
                        user_id = User.find_by(username: username, tag: tag).id
                        ConversationMembership.create(member_id: user_id, conversation_id: @conversation.id)
                    end
                end
                render 'api/conversations/show'
            rescue
                render json: ['Could not find a user, please try again'], status: 422
            end
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
