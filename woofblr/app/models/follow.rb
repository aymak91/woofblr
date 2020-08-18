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
class Follow < ApplicationRecord
    validates :follower_id, uniqueness: {scope: :following_id, message: "You cannot follow yourself."}

    belongs_to :follower
        foreign_key: :follower_id,
        class_name: :User

    belongs_to :following
        foreign_key: :following_id,
        class_name: :User
end
