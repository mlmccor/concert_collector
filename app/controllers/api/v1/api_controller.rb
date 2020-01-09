module Api
  module V1
    class ApiController < ApplicationController
      def search_artist
        url = "https://api.songkick.com/api/3.0/search/artists.json?apikey=#{ENV['APP_ID']}&query=#{params[:query]}"
        binding.pry
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

      def retrieve_artist

      end
      def fetch_concerts
        response = Faraday.get("https://rest.bandsintown.com/artists/#{params[:query]}/events?app_id=#{ENV['APP_ID']}")
        data = JSON.parse(response.body)
        render json: data
      end
    end
  end
end
