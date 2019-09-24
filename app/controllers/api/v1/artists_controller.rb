module Api
  module V1
    class ArtistsController < ApplicationController
      def index
        if user_signed_in?
          render json: current_user.artists.uniq, status: 201
        end
      end

      def show
        artist = Artist.find(params[:id])
        if artist
          render json: artist, status: 201
        end
      end
      def create
        @artist = Artist.find_or_create_by(artist_params)
        current_user.artists.push(@artist)
        render json: @artist, status:201
      end

      def destroy
        artist = Artist.find(params[:id])
        if user_signed_in?
          current_user.artists.delete(artist)
        end
        render json: artist, status: 201
      end






      private

      def artist_params
        params.require(:artist).permit(:id,:name, :image_url)
      end




    end
  end
end
