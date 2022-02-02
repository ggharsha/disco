class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @conversation = Conversation.find_by(id: params[:id])
    stream_for @conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
