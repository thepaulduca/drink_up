
class Wheel extends React.Component {
  render(){
    let games = ["fa fa-bell-o", "fa fa-comment-o", "fa fa-smile-o", "fa fa-heart-o", "fa fa-star-o", "fa fa-lightbulb-o"]
    return(
      <div id="wheel">
        <div id="inner-wheel">
          {games.map( (game, i) => <Sector data={game} key={i}/>)}
        </div>
        <div id="spin">
            <div id="inner-spin"></div>
        </div>

        <div id="shine">Shine</div>
      </div>
    )
  }
}
