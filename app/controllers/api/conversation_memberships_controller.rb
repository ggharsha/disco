class Api::ConversationMembershipsController < ApplicationController
    def create
        user = User.find_by(handle: params[:handle])
        @conversation_membership = ConversationMembership.new(member_id: user.id, conversation_id: params[:conversation_id])
        @conversation = Conversation.find(params[:conversation_id])
        if @conversation_membership.save
            render 'api/conversations/show'
        else
            render json: @conversation_membership.errors.full_messages, status: 422
        end
    end

    def destroy
        @conversation_membership = ConversationMembership.find_by(conversation_membership_params)
        if @conversation_membership.member_id == current_user.id && @conversation_membership.destroy
            render 'api/conversations/index'
        else
            render json: @conversation_membership.errors.full_messages, status: 422
        end
    end

    private
    def conversation_membership_params
        params.require(:conversation_membership).permit(:handle, :conversation_id)
    end
end
