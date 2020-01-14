class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :datetime, :venue_name, :venue_city, :venue_region, :venue_country, :past_event
  belongs_to :artist
end
