Rails.application.routes.draw do
  Rails.application.routes.draw do
    root "greetings#index"

    namespace :api do
      namespace :v1 do
        resources :greettings, only: [:index]
      end
    end

    get "*path", to: "greetings#index", via: :all
  end
end
