class Api::SermonsController < ApplicationController
  before_action :set_sermon, only: [ :destroy, :update, :show ]
  
  def index
    render json: Sermon.all
  end

  def show
    render json: @sermon
  end

  def update
    if @sermon.update(sermon_params)
      render json: @sermon
    else
      json_error(@sermon)
    end
  end


  def create
    sermon = Sermon.new(sermon_params)
    if sermon.save
      render json: sermon
    else
      json_error(sermon)
    end
  end

  def destroy
    @sermon.destroy
  end

  private
  
  def sermon_params
    params.require(:sermon).permit(:content)
  end

  def set_sermon
    @sermon = Sermon.find(params[:id])
  end

end
