class Post < ApplicationRecord
    validates :post_type, :author_id, presence: true
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    
    has_one_attached :photo
    
    has_many :likes
    
end
