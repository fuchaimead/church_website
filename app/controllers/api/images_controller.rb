require 'pry'
class Api::ImagesController < ApplicationController


  def create
    auth = {
      cloud_name: ENV['CLOUDINARY_CLOUD_NAME'],
      api_key: ENV['CLOUDINARY_API_KEY'],
      api_secret: ENV['CLOUDINARY_API_SECRET']
    }

    uploaded_image_name = params.keys.first
    uploaded_file = params[uploaded_image_name]
    announcement_id = params[:announcement_id].blank? ? nil : params[:announcement_id]
    
    begin
      cloud_image = Cloudinary::Uploader.upload(uploaded_file, auth)
      image = Image.create(url: cloud_image['url'], announcement_id: announcement_id)
      render json: image
    rescue => e
      render json: { errors: e }, status: :bad_request
    end
  end

end
