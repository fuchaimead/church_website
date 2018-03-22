class Api::AnnouncementsController < ApplicationController
  before_action :set_announcement, only: [ :destroy, :update, :show ]
  
  def index
    render json: Announcement.all
  end

  def show
    render json: @announcement
  end

  def update
    if @announcement.update(announcement_params)
      render json: @announcement
    else
      json_error(@announcement)
    end
  end


  def create
    announcement = Announcement.new(announcement_params)
    if announcement.save
      render json: announcement
    else
      json_error(announcement)
    end
  end

  def destroy
    @announcement.destroy
  end

  private
  
  def announcement_params
    params.require(:announcement).permit(:title, :body, :image)
  end

  def set_announcement
    @announcement = Announcement.find(params[:id])
  end

end
