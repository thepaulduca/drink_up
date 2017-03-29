class NeverHaveIEverController < ApplicationController

  def random_NHIE
    random_NHIE = find_random_NHIE
    render :json => {never_have_i_ever: random_NHIE}
  end

  

end
