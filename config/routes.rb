# frozen_string_literal: true

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :recipes, except: %i[new edit update]
    end
  end

  root 'homepage#index'
  get '*path', to: 'homepage#index'
end
