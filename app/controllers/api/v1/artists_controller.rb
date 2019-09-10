module Api
  module V1
    class ArtistsController < ApplicationController
      def index
        render json: Artist.all, status: 201
      end
      def show
        artist = Artist.find(params[:id])
        if artist
          render json: artist, status: 201
        end
      end
      def create
        @artist = Artist.create(artist_params)
        current_user.artists.push(@artist)
        render json: @artist, status:201
      end




      private

      def artist_params
        params.require(:artist).permit(:id,:name, :image_url)
      end
      # TODO: allow API ids



    end
  end
end
