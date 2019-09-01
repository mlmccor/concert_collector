class Concert < ApplicationRecord
  belongs_to :artist
  has_many :user_concerts
end
