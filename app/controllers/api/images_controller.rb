class Api::ImagesController < ApplicationController


  def create
    auth = {
      cloud_name: ENV['CLOUD_NAME'],
      api_key: ENV['API_KEY'],
      api_secret: ENV['API_SECRET']
    }

    uploaded_image_name = params.keys.first
    uploaded_file = params[uploaded_image_name]

    begin
      cloud_image = Cloudinary::Uploader.upload(uploaded_file, auth, width: 200, height: 200)
      image = Image.create(url: cloud_image['url'])
      render json: image
    rescue => e
      render json: { errors: e }, status: :bad_request
    end
  end

end
