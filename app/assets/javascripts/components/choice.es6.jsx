class Choice extends React.Component {

  clickHandler(){
    var result = this.props.choiceText.answer === this.props.correctChoice;
    this.props.endGame(result);
  }

  render(){
    return(
      <div className="option trivia_answer" onClick={this.clickHandler.bind(this)}>
        {this.props.choiceText.answer}
      </div>
    )
  }
}
