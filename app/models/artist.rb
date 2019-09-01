class Artist < ApplicationRecord
  has_many :user_artists
  has_many :concerts
end
