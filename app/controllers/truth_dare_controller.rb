class TruthDareController < ApplicationController

  def random
    arry = random_truth_dare
    render :json => {truth1: arry[0], truth2: arry[1], dare1: arry[2], dare2: arry[3]}
  end

end
