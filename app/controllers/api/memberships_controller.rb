class Api::MembershipsController < ApplicationController
    def create
        @membership = Membership.new(membership_params)
        @server = Server.find(params[:membership][:server_id])
        @c_user = current_user
        if @membership.save
            render 'api/memberships/show'
        else
            render json: @membership.errors.full_messages, status: 422
        end
    end

    def destroy # to be refactored at future date
        @membership = Membership.find_by(membership_params)
        @current_user = current_user
        if @membership.user_id == current_user.id && @membership.destroy
            render 'api/memberships/show'
        else
            render json: @membership.errors.full_messages, status: 422
        end
    end

    private
    def membership_params
        params.require(:membership).permit(:user_id, :server_id)
    end
end
