class TruthDareController < ApplicationController

  def random_td
    arry = random_truth_dare
    render :json => {truth: arry[0], dare: arry[1]}
  end

end
