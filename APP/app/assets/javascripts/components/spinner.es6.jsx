class Spinner extends React.Component {

  render(){
    return(
      <div id="spin" onClick={this.handleClick}>
        <div id="inner-spin"></div>
      </div>
    )
  }
}
