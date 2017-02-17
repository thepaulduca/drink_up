class Choice extends React.Component {

  // handleClick(){

  // }
  endGame(){
    this.props.gameHandler(null);
  }

  render(){
    return(
      <div onClick={this.endGame()}>
        {this.props.choiceText}
      </div>
    )
  }
}
