# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string
#  content    :text             not null
#  post_type  :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :post_type, :author_id, presence: true
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    
    has_one_attached :photo
    
    has_many :likes,
        foreign_key: :post_id,
        class_name: :Like
    
end
