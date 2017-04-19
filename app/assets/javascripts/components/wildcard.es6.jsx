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
  }

  render(){
    return(
      <div className="container">
        <h2>Wild Card!</h2>
        <h4>{this.state.card}</h4>
      </div>
    )
  }

}
