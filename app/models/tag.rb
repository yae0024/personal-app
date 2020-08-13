class Tag < ApplicationRecord
  before_save :downcase_tag_name
  has_many :pictures_tags, dependent: :destroy
  has_many :pictures, through: :pictures_tags

  private
    def downcase_tag_name
      self.name.downcase!
    end
end
