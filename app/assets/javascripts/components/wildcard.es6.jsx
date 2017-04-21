class WildCard extends React.Component {
  constructor() {
    super();
    this.state = {
      card: ''
    }
  }

  componentDidMount(){
    this.getWildCard();
  }

  getWildCard(){
    return fetch('/wild_card',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.updateWildCard(responseJson);
    }).catch((error) => {
      console.error(error);
    });
  }

  updateWildCard(data){
    this.setState({
      card: data.card.content
    });
    setTimeout(function(){
      this.props.gameHandler(null)
    }.bind(this), 4000);
  }

  render(){
    return(
      <div className="container">
        <h2 className="center gameheader">Wild Card!</h2>
        <h2 classname="center gameheader">{this.state.card}</h2>
      </div>
    )
  }

}
