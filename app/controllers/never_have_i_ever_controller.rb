class NeverHaveIEverController < ApplicationController

  def random_NHIE
    nhie_id = rand(1..NeverHaveIEver.all.length)
    nhie = NeverHaveIEver.find(nhie_id)
    render :json => {never_have_i_ever: nhie}
  end

end
