class UsersController < ApplicationController
  before_action :set_user, only: [:show, :media]

  def new
  end

  def show
  end

  def media
    @pictures = Picture.where(user_id: current_user.id)
  end

  private
  def set_user
    @user = User.find(current_user.id)
  end
end
