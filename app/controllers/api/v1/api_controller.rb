module Api
  module V1
    class ApiController < ApplicationController
      def search_artist
        url = "https://api.songkick.com/api/3.0/search/artists.json?apikey=#{ENV['APP_ID']}&query=#{params[:query]}"
        response = Faraday.get("https://api.songkick.com/api/3.0/search/artists.json?apikey=#{ENV['APP_ID']}&query=#{params[:query]}")
        data = JSON.parse(response.body)
        if data['resultsPage']['totalEntries'] != 0
          # artist = Artist.find_or_create_by(id: data['id'])
          # artist.name = data['name']
          # artist.image_url = data['image_url']
          # current_user.artists.push(artist)
          # artist.save
          artist_results = data['resultsPage']['results']['artist']
          render json: artist_results
        else
          render json: {data: 'No Results Found'}
        end
      end

      def add_artist
        # saves artist to database
        # adds image
        # 
      end
      def fetch_concerts
        #
        response = Faraday.get("https://api.songkick.com/api/3.0/artists/#{params[:id]}/calendar.json?apikey=#{ENV['APP_ID']}")
        data = JSON.parse(response.body)
        render json: data
      end
    end
  end
end
