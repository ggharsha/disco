# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  server_id    :integer
#  channel_name :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
