class WildCardController < ApplicationController

  def get_wild_card
    card = random_wild_card
    render :json => {card: card}
  end

end
