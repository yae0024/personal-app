class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.text       :picture, null: false
      # t.integer    :type, null: false
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
