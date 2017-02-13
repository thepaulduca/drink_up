class Wheel extends React.Component {

constructor(props) {
   super(props);
   this.state = {
     clicks: 0,
     degree: 1800
   };
   this.handleSpin = this.handleSpin.bind(this);
 }

 handleSpin() {
   this.state.clicks ++;
   clicks = this.state.clicks;
   var degree = (1800 * clicks) + (Math.floor(Math.random() * 360)+ 1);
   var innerWheel = document.getElementById("inner-wheel")
   innerWheel.style.transform = 'rotate(' + degree + 'deg)'
 }


  render(){
    return(
      <div id="wheel">
          <InnerWheel/>
        <div onClick={this.handleSpin}>
          <Spinner/>
        </div>
      </div>
    )
  }
}
