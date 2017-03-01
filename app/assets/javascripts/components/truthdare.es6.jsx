class TruthDare extends React.Component {
  constructor() {
    super();
    this.state = {
      playing_truth: false,
      playing_dare: false,
      truth: '',
      dare: ''
    };
    this.showTruth = this.showTruth.bind(this);
    this.showDare = this.showDare.bind(this);
  }

  componentDidMount(){
    this.getTruthDare();
  }

  getTruthDare(){
    var csrfToken = document.querySelectorAll('[name="csrf-token"]')[0].getAttribute("content");

    return fetch('/truth_dare',{
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
        this.updateTruthDare(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    }


  updateTruthDare(data){
    this.setState({
      truth: data.truth.content,
      dare: data.dare.content,
    });
  }

  showTruth(){
    this.setState({
      playing_truth: true
    })
  }

  showDare(){
    this.setState({
      playing_dare: true
    })
  }

  render(){
    let playing_dare = this.state.playing_dare
    let playing_truth = this.state.playing_truth
    if(playing_dare){
      return(
        <div className="wrapper">
          <h3>{this.state.dare}</h3>
        </div>
      )
    } else if (playing_truth) {
      return(
        <div className="wrapper">
          <h3>{this.state.truth}</h3>
        </div>
        )
    } else {
      return(
        <div className="container">
          <div className="Wrapper">
            <button onClick={this.showTruth}>Truth</button>
          </div>
          <div className="wrapper">
            <button onClick={this.showDare}>Dare</button>
          </div>
        </div>
      )
    }
  }
}
