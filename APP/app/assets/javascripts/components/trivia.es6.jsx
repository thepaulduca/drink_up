class Trivia extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      choices: [],
      correctChoice: ''
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
      authenticity_token: csrfToken
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      debugger
      this.updateState(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  updateState(data){
    this.setState({
      question: data.question,
      choices: data.choices,
      correctChoice: data.correctChoice
    });
  }

  answerHandler(){

  }

  render(){
    return(
      <div>
        <h1>{this.state.question}?</h1>
        {this.state.choices.map((choiceText, i) => <Choice key={i} choiceText={choiceText} correctChoice={this.state.correctChoice} />)}
      </div>
    )
  }
}
