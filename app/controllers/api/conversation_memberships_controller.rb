class Api::ConversationMembershipsController < ApplicationController
    def create
        @conversation_membership = ConversationMembership.new(conversation_membership_params)
        if @conversation_membership.save
            render 'api/conversation_memberships/show'
        else
            render json: @conversation_membership.errors.full_messages, status: 422
        end
    end

    def destroy
        @conversation_membership = ConversationMembership.find_by(conversation_membership_params)
        if @conversation_membership.member_id == current_user.id && @conversation_membership.destroy
            render 'api/conversation_memberships/show'
        else
            render json: @conversation_membership.errors.full_messages, status: 422
        end
    end

    private
    def conversation_membership_params
        params.require(:conversation_membership).permit(:member_id, :conversation_id)
    end
end
