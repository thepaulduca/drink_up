class Wheel extends React.Component {
  render(){
    return(
      <div id="wheel">
          <InnerWheel/>
          <div id="spin">
              <div id="inner-spin"></div>
          </div>
          <div id="shine"></div>
      </div>
    )
  }
}
