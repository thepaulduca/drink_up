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
      if(activeGame === "Trivia"){
        return(
        <Trivia game={activeGame} gameHandler={this.activeGameHandler.bind(this)}/>
        )
      } else if (activeGame === 'TruthDare') {
        return(
        <TruthDare game={activeGame} gameHandler={this.activeGameHandler.bind(this)}/>
        )
      } else if (activeGame === 'NeverHaveIEver') {
        return(
        <NeverHaveIEver game={activeGame} gameHandler={this.activeGameHandler.bind(this)}/>
        )
      } else if (activeGame == 'WouldURather') {
        return(
          <WouldURather game={activeGame} gameHandler={this.activeGameHandler.bind(this)}/>
        )
      } else if (activeGame == "WildCard") {
        return(
          <WildCard game={activeGame} gameHandler={this.activeGameHandler.bind(this)}/>
        )
      }
    }
      return(
        <div id="wrapper">
          <h1 className="center">Drink Up</h1>
          <Wheel gameHandler={this.activeGameHandler.bind(this)}/>
          <div id="txt"></div>
      </div>
      )
  }
}
