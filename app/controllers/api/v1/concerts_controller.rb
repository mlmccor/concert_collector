module Api
  module V1
    class ConcertsController < ApplicationController
      def index
        if user_signed_in?
          today = Date.today
          current_user.concerts.each do |concert|
            if today >= concert.datetime
              concert.past_event = true
            end
          end
          render json: current_user.concerts
        else
          render json: {}, status: 201
        end
      end

      def show
        concert = Concert.find(params[:id])
        render json: concert
      end

      def create
        concert = Concert.new(concert_params)
        artist = Artist.find(params[:artist_id])
        concert.artist = artist
        concert.venue_name = params[:venue][:name]
        concert.venue_city = params[:venue][:city]
        concert.venue_region = params[:venue][:region]
        concert.venue_country = params[:venue][:country]
        concert.past_event = false
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
        params.require(:concert).permit(:on_sale_datetime, :datetime, :venue_name, :venue_country, :venue_region, :venue_city, :past_event)
      end
    end
  end
end
