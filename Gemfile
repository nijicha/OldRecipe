# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.3'

# == Core ==
# = Framework
gem 'puma', '~> 3.11'
gem 'rails', '~> 6.0.0'

# Database Adapter
gem 'pg', '>= 0.18', '< 2.0'
# gem 'redis', '~> 4.0'

# == Application ==
# = Front-end
gem 'haml'
gem 'haml-rails'
gem 'html2haml'
gem 'react-rails'
gem 'sass-rails', '~> 5'
gem 'turbolinks', '~> 5' # https://github.com/turbolinks/turbolinks
gem 'webpacker', '~> 4.0' # https://github.com/rails/webpacker

# = Back-end
# Authentication
# gem 'devise'
# gem 'omniauth-facebook'
# gem 'omniauth-google-oauth2'

# Rails active things
# gem 'bcrypt', '~> 3.1.7' # Use Active Model has_secure_password
# gem 'image_processing', '~> 1.2' # Use Active Storage variant

# = Object
gem 'jbuilder', '~> 2.7' # https://github.com/rails/jbuilder

# == Extension ==

# == Miscellaneous ==
# Administrator
gem 'awesome_print'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'dotenv-rails'
end

group :development do
  gem 'foreman'

  # Linter
  gem 'rubocop'
  gem 'rubocop-performance'
  gem 'rubocop-rails'

  # Debugger
  gem 'better_errors'
  gem 'binding_of_caller'

  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
