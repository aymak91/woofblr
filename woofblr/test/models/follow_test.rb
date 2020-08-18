# == Schema Information
#
# Table name: follows
#
#  id         :bigint           not null, primary key
#  title      :string
#  content    :text             not null
#  type       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
