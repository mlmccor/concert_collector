module Api
  module V1
    class ArtistsController < ApplicationController
      def index
        binding.pry
      end
      def show
        binding.pry
      end
      def create
        binding.pry
      end




      private

      def artist_params
        params.require(:artist).permit(:name, :image_url)
      end



    end
  end
end
