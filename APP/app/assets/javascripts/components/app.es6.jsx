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
        <div id="wrapper">
          <Wheel/>
          <div id="txt"></div>
        </div>
      )
    } else {
      return(
        <Game game={activeGame}/>
      )
    }
  }
}
