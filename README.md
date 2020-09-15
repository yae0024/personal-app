# App Title
My Works

# Description  
既存サイトを参考に作成した画像投稿サイトです。  
Photoshop Illustrator などで作った作品をポートフォリオとして  
アップロードしていこうと思います。  

# Features

### 実装したもの  
ユーザー登録機能  
ログイン／ログアウト機能  
画像アップロード機能  
画像のサムネイル表示  
画像へのタグ付  
コメント機能  
簡単ログイン機能  

### これから実装していくもの  
画像のダウンロード   
サイトのシェア機能  
お気に入り機能  
いいね！機能  
フォロー機能  
関連画像の表示機能  
画像の種類指定  
画像のサイズ指定  

# Image
### TOPページ  
ログインしていない時  
<img src="https://i.gyazo.com/b860cfde221302970867b9cbf6646f71.jpg" width="480px">  
ログインしている時  
<img src="https://gyazo.com/c48f98e1612954d559ea1056925e9d0d.jpg" width="480px">  
jQueryを使用したMenuの表示/非表示の切り替え  
<img src="https://i.gyazo.com/3688b01821ea6e4905e12e04e682c4eb.gif" width="480px">  
### UPloadページ  
画像のプレビュー表示  
<img src="https://i.gyazo.com/bcf9e01fca62bba21336eb28c51482ea.gif" width="480px">  
画像へのタグ付  
<img src="https://i.gyazo.com/ab78b64c6126c8c9afe189621d44aaee.gif" width="480px">  

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

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|comment|text|null: false|
|user|references|null: false, foreign_key: true|
|picture|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :picture
