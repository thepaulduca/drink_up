class WouldURather extends React.Component {

  constructor(){
    super();
    this.state = {
      choice1: "",
      choice2: ""
    }
  }

  componentDidMount(){
    this.getChoices();
  }

  getChoices(){
    var csrfToken = document.querySelectorAll('[name="csrf-token"]')[0].getAttribute("content");

    return fetch('/would_u_rather', {
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
      this.updateChoices(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  updateChoices(data){
    this.setState({
      choice1: data.choice1,
      choice2: data.choice2
    })
      setTimeout(function(){
        this.props.gameHandler(null)
      }.bind(this), 5500);
    }

  render(){
      return(
        <div className='container'>
          <h2 className="center gameheader">Would you rather</h2>
          <h3 className="center altgameheader">{this.state.choice1}</h3>
          <h2 className="center banner">or</h2>
          <h3 className="center altgameheader">{this.state.choice2}</h3>
          <h2 className="center banner">?</h2>
        </div>
      )
  }

}
