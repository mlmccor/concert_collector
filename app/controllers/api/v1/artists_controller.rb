module Api
  module V1
    class ArtistsController < ApplicationController
      def index
        render json: Artist.all, status: 201
      end
      def show
      end
      def create
        @artist = Artist.create(artist_params)
        current_user.artists.push(@artist)
        render json: @artist, status:201
      end




      private

      def artist_params
        params.require(:artist).permit(:name, :image_url)
      end



    end
  end
end
