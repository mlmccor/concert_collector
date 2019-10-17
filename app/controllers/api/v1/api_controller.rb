module Api
  module V1
    class ApiController < ApplicationController
      def search_artist
        response = Faraday.get("https://rest.bandsintown.com/artists/#{params[:query]}?app_id=#{ENV['APP_ID']}")
        data = JSON.parse(response.body)
        if data['id']
          artist = Artist.find_or_create_by(id: data['id'])
          artist.name = data['name']
          artist.image_url = data['image_url']
          current_user.artists.push(artist)
          artist.save
          render json: artist
        else
          render json: data
        end
      end
      def fetch_concerts
        response = Faraday.get("https://rest.bandsintown.com/artists/#{params[:query]}/events?app_id=#{ENV['APP_ID']}")
        data = JSON.parse(response.body)
        render json: data
      end
    end
  end
end
