# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Live Site

This app is deployed on Heroku <a href="concert-collection.herokuapp.com">here</a>

# Installation

After cloning the repo to your local device, run the following commands in the root folder:

bundle install
yarn install
rake db:migrate

To run the app, have two terminals running in the root folder and enter the following commands:

./bin/webpack-dev-server
rails s

then travel to localhost:3000 (depending on what port you set it to) in a browser window

# More Info

