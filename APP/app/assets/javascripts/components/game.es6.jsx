class Game extends React.Component {
  endGame(){
    this.props.gameHandler(null);
  }

  render(){
    return(
      <div>
        <h1>{this.props.game}</h1>
        <button onClick={this.endGame.bind(this)}>End game</button>
      </div>
    )
  }
}
