class Sector extends React.Component {
  render(){
    return(
      <div name={this.props.data.gameName} className="sec"><span className={this.props.data.gameIcon}></span></div>
    )
  }
}
