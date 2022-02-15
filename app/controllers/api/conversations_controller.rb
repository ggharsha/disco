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
        # @conversation = Conversation.new
        # @conversation.owner_id = current_user.id
        # if @conversation.save
        #     render 'api/conversations/show'
        # else
        #     render json: @conversation.errors.full_messages, status: 422
        # end
        @conversation = Conversation.new
        @conversation.owner_id = current_user.id
        begin
            @conversation.transaction
                params[:handles].each do |handle|
                    ConversationMembership.save(member_id: User.find_by(handle: handle).id, conversation_id: @cconversation.id)
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
