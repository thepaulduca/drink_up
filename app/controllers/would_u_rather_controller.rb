class WouldURatherController < ApplicationController

  def random_would_u_return
    would_U = random_would_u
    render :json => {choice1: would_U.choice1, choice2: would_U.choice2}
  end


end
