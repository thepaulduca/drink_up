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
  }

  render(){
    return(
      <div className="container">
        <h1>{this.state.haveIEver}</h1>
      </div>
    )
  }

}
