# == Schema Information
#
# Table name: reblogs
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ReblogTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
