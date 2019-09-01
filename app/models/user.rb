class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :user_concerts
  has_many :user_artists
  has_many :artists, through: :user_artists
  has_many :concerts, through: :user_concerts
end
