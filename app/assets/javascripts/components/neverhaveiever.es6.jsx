class NeverHaveIEver extends React.Component {
  constructor(){
    super();
    this.state = {
      haveIEver: ''
    }
  }

  componentDidMount(){
    this.getHaveIEver();
  }

  getHaveIEver(){
    var csrfToken = document.querySelectorAll('[name="csrf-token"]')[0].getAttribute("content");

    return fetch('/never_have_i_ever', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      params: {
        authenticity_token: csrfToken
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      this.updateHaveIEver(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  updateHaveIEver(data){
    this.setState({
      haveIEver: data.never_have_i_ever.content
    });
    setTimeout(function(){
      this.props.gameHandler(null)
    }.bind(this), 3000);
  }

  render(){
    return(
      <div className="container">
        <h1>Never Have I ever </h1>
        <h2 className="center">{this.state.haveIEver}</h2>
      </div>
    )
  }

}
