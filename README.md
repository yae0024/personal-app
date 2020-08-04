# App Title
My Works

# Description
既存サイトを参考に作成した画像投稿サイトです。
Photoshop Illustrator などで作った作品をポートフォリオとして
アップロードしていこうと思います。

# Features

## 実装したもの
ユーザー登録機能
ログインログアウト機能
画像アップロード機能
画像のサムネイル表示
コメント機能

## これから実装していくもの
画像のダウンロード
画像へのタグ付
サイトのシェア機能
お気に入り機能
いいね！機能
フォロー機能
関連画像の表示機能
画像の種類指定
画像のサイズ指定

# Database creation

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|
|admin|integer|null: false, foreign_key: true|
|email|string|null: false, unique: true|
|encrypted_password|string|null: false|
### Association
- has_many :pictures, dependent: :destroy

## picturesテーブル
|Column|Type|Options|
|------|----|-------|
|picture|text|null: false|
|user|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :pictures_tags
- has_many :tag, through: :pictures_tags

## tagsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :pictures_tags
- has_many :pictures, through: :pictures_tags

## pictures_tagsテーブル
|Column|Type|Options|
|------|----|-------|
|picture|references|null: false, foreign_key: true|
|tag|references|null: false, foreign_key: true|
### Association
- belongs_to :picture
- belongs_to :tag