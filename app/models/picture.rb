class Picture < ApplicationRecord
  belongs_to :user
  mount_uploader :picture, ImageUploader
  has_many :pictures_tags
  has_many :tag, through: :pictures_tags
  has_many :comments
end
