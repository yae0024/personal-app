class Tag < ApplicationRecord
  has_many :pictures_tags
  has_many :pictures, through: :pictures_tags
end
