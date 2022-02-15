class Api::ConversationMembershipsController < ApplicationController
    def create
        @conversation = Conversation.new(owner_id: current_user.id)
        conversation_membership = ConversationMembership.new(conversation_id: @conversation.id, member_id: current_user.id)
        other_conversation_membership = ConversationMembership.new(conversation_id: @conversation.id, member_id: User.find_by(handle: params[:handle]))
        if conversation_membership.save && other_conversation_membership.save
            render 'api/conversations/show'
        else
            render json: conversation_membership.errors.full_messages, status: 422
        end
    end

    def destroy
        @conversation_membership = ConversationMembership.find(params[:id])
        if @conversation_membership.member_id == current_user.id && @conversation_membership.destroy
            render 'api/conversations/index'
        else
            render json: @conversation_membership.errors.full_messages, status: 422
        end
    end

    private
    def conversation_membership_params
        params.require(:conversation_membership).permit(:handle)
    end
end
