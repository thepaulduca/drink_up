class App extends React.Component {
  constructor(){
    super();
    this.state = {
      activeGame: null
    }
  }

  activeGameHandler(newGame){
    this.setState({
      activeGame: newGame
    })
  }

  render(){
    let activeGame = this.state.activeGame
    if(activeGame){
      return(
        <Game game={activeGame} gameHandler={this.activeGameHandler.bind(this)}/>
      )
    } else {
      return(
        <div id="wrapper">
          <Wheel gameHandler={this.activeGameHandler.bind(this)}/>
          <div id="txt"></div>
        </div>
      )
    }
  }
}
