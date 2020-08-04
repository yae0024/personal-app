class CreatePicturesTags < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures_tags do |t|
      t.references  :picture,null: false, foreign_key: true
      t.references  :tag,null: false, foreign_key: true
      t.timestamps
    end
  end
end
