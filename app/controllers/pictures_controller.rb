class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
  end

  def new
    @picture = Picture.new
  end

  def create
    @picture = Picture.new(picture_params)
    if @picture.save
      tag_list = tag_params[:name].split(/[[:blank:]]+/).select(&:present?)
      @picture.save_tags(tag_list)                   
      flash.now[:alert] = '画像を保存しました'
      render :new
    else
      flash.now[:alert] = '保存できませんでした'
      render :new
    end
  end

  def show
    @picture = Picture.find(params[:id])
    @comment = Comment.new
    @comments = @picture.comments.includes(:user)
    @provider = User.find(@picture.user_id)
  end

  def edit
  end

  def update
  end

  def destroy
  end
  
  private
    def picture_params
      params.require(:picture).permit(:picture).merge(user_id: current_user.id)
    end

    def tag_params
      params.require(:picture).permit(:name)
    end
end
