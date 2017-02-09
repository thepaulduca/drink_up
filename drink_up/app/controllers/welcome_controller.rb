class WelcomeController < ActionController::Base
  def index
    render component: 'App'
  end
end
