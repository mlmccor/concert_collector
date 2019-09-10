class Concert < ApplicationRecord
  has_many :user_concerts
  belongs_to :artist
end
