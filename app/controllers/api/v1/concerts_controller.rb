module Api
  module V1
    class ConcertsController < ApplicationController
      def index
        if user_signed_in?
          render json: current_user.concerts
        else
          render json: {}, status: 201
        end
      end

      def create
        concert = Concert.new(concert_params)
        concert.venue_name = params[:venue][:name]
        concert.venue_city = params[:venue][:city]
        concert.venue_region = params[:venue][:region]
        concert.venue_country = params[:venue][:country]
        if user_signed_in?
          current_user.concerts.push(concert)
          render json: concert, status: 201
        end
      end

      def destroy
        concert = Concert.find(params[:id])
        concert.destroy
        render json: concert, status: 201
      end





      private


      def concert_params
        params.require(:concert).permit(:id, :on_sale_datetime, :datetime, :venue_name, :venue_country, :venue_region, :venue_city)
      end
    end
  end
end
