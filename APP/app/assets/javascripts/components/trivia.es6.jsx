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
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        let data = {
          question: "Who is 3rd floor bartender at whitehorse",
          choices: ['Roman', 'Tom', 'Derek', 'Alisa'],
          correctChoice: "Tom"
        }
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
