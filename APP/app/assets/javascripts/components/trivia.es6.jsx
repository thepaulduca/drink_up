class Trivia extends React.Component {

  constructor() {
    super();
    this.state = {
      question: "",
      choices: [],
      correctChoice: '',
      result: false
    }
  }

  componentDidMount(){
    this.getTriviaData();
  }

  getTriviaData(){
    var csrfToken = document.querySelectorAll('[name="csrf-token"]')[0].getAttribute("content");

    return fetch('/trivia_question', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      params: {
        authenticity_token: csrfToken
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      this.updateQuestion(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  updateQuestion(data){
    this.setState({
      question: data.question,
      choices: data.choices,
      correctChoice: data.correctChoice
    });
  }

  endGame(result){
    if(result){
      var text = "Congrats, take a shot!"
    }else{
      var text = "You, suck!!!"
    };
    this.setState({
      result: text
    });

    setTimeout(function(){
      this.props.gameHandler(null)
    }.bind(this), 3000);
  }

  render(){
    if(this.state.result){
      return(
        <Message text={this.state.result}/>
      )
    } else {
      return(
        <div>
          <h1>{this.state.question}</h1>
          {this.state.choices.map((choiceText, i) => <Choice key={i} choiceText={choiceText} correctChoice={this.state.correctChoice} endGame={this.endGame.bind(this)}/>)}
        </div>
      )
    }
  }
}
