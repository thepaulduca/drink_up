class TruthDare extends React.Component {
  constructor() {
    super();
    this.state = {
      truth1: '',
      truth2: '',
      dare1: '',
      dare2: ''
    }
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
      truth1: data.truth1.content,
      truth2: data.truth2.content,
      dare1: data.dare1.content,
      dare2: data.dare2.content
    });
  }

  render(){
    return(
      <div className="container">
        <h3>{this.state.truth1}</h3>
        <h3>{this.state.truth2}</h3>
        <h3>{this.state.dare1}</h3>
        <h3>{this.state.dare2}</h3>
      </div>
    )
  }
}
