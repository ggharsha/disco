# == Schema Information
#
# Table name: direct_messages
#
#  id              :bigint           not null, primary key
#  sender_id       :integer          not null
#  conversation_id :integer          not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class DirectMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
