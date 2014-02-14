require "bundler"
Bundler.require
require "sinatra"
require "sinatra/config_file"
require "pp"
require "uri"
require "yaml"
require "logger"
require 'fileutils'

class LolServer < Sinatra::Base
  helpers Sinatra::UrlForHelper
  register Sinatra::ConfigFile
  config_file 'config.yml'

  configure do
    $log = Logger.new('output.log','weekly')

    set :logging, false

  end

  get '/' do
  	puts "moin nodes"
  end

  get '/lols' do
  	puts "hey hey hey, immer langsam"
  end

  post '/uplol' do
  	puts "not yet implemented"
  end
end