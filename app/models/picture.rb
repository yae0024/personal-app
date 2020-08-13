class Picture < ApplicationRecord
  belongs_to :user
  mount_uploader :picture, ImageUploader
  has_many :pictures_tags, dependent: :destroy
  has_many :tags, through: :pictures_tags
  has_many :comments

  def save_tags(tag_list)
    tag_list.each do |tag|
      unless find_tag = Tag.find_by(name: tag.downcase)
        begin
          self.tags.create!(name: tag)
        rescue
          nil
        end
      else
        PictureTagRelation.create!(picture_id: self.id, tag_id: find_tag.id)
      end
    end
  end
end
