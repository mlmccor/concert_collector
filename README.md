# Concert Collector
A web app that quickly allows a user to search the confirmed concert dates for their favorite artists and musical groups. Searched concerts can be collected for calendar input, and searched artists are collected for quick searching of future concert dates.

# Frameworks used

I built the front-end using the React Javascript Framework and Redux for state management.

The back-end is an API built using Ruby on Rails.

Ruby Gems used:

* Webpacker
* Devise
* Faraday
* Active Model Serializers

Used PostGresql for Production database

# Live Site

This app is deployed on Heroku <a href="concert-collection.herokuapp.com">here</a>

# Video Demo

Here is walkthrough <a href="https://youtu.be/zmf3_vcye-g">video</a> for the app

# Installation

After cloning the repo to your local device, run the following commands in the root folder:

bundle install
yarn install
rake db:migrate

To run the app, have two terminals running in the root folder and enter the following commands:

./bin/webpack-dev-server

rails s

then travel to localhost:3000 (depending on what port you set it to) in a browser window

# API Reference

I used the Bandsintown API for artist and concert data. Documentation for that can be found <a href="https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0">here.</a>

# Credits

Special thanks for <a href="https://github.com/dakotalmartinez/rails-react-devise-tutorial">this guide</a> for setting up the Devise gem.

# License

MIT © mlmccor


