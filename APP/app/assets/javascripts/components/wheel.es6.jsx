
class Wheel extends React.Component {
  render(){
    // We'll probably have games database, and get games from there with an ajax, for now I'll hardcode some stuff for practice
    let games = [
      {
        gameName: "Hot or Not",
        gameIcon: "fa fa-bell-o"
      },
      {
        gameName: "Truth or Dare",
        gameIcon: "fa fa-comment-o"
      },
      {
        gameName: "Never have I ever",
        gameIcon: "fa fa-smile-o"
      },
      {
        gameName: "Trivia",
        gameIcon: "fa fa-heart-o"
      },
      {
        gameName: "Some more stuff",
        gameIcon: "fa fa-star-o"
      },
      {
        gameName: "Go directly to jail, do NOT pass go",
        gameIcon: "fa fa-lightbulb-o"
      }
    ]

    return(
      <div id="wheel">
        <div id="inner-wheel">
          {games.map( (game, i) => <Sector data={game} key={i}/>)}
        </div>
        <div id="spin">
            <div id="inner-spin"></div>
        </div>

        <div id="shine"></div>
      </div>
    )
  }
}
