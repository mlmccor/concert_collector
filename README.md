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

response = RestClient::Request.execute(
        method: "GET",
        url: "https://api.nasa.gov/planetary/apod?api_key=" + ENV["api_key"]
    )   
    @results = JSON.parse(response.body)

   @todays_astronomy_picture = AstronomyPicture.create do |astro|
      astro["copyright"] = @results["copyright"]
      astro["date"] = @results["date"]
      astro["explanation"] = @results["explanation"]
      astro["hdurl"] = @results["hdurl"]
      astro["media_type"] = @results["media_type"]
      astro["service_version"] = @results["service_version"]
      astro["title"] = @results["title"]
      astro["url"] = @results["url"]
    end

    render json: @todays_astronomy_picture

    gem 'rest-client', '~> 2.1.0'
gem 'json', '~> 2.2.0'
