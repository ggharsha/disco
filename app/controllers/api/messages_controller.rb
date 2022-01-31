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
        @channel = Channel.find_by(id: params[:channel_id])
        @message.sender_id = current_user.id
        @message.channel_id = @channel.id

        if @message.save
            ChannelsChannel.broadcast_to(@channel, {
                id: @message.id,
                senderId: @message.sender_id,
                user: User.find_by(id: @message.sender_id),
                channelId: @message.channel_id,
                body: @message.body,
                createdAt: @message.created_at
                
            })
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