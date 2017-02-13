class Spinner extends React.Component {


  constructor(props) {
     super(props);
     this.state = {
       clicks: 0,
       degree: 1800
     };
     this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
     this.state.clicks ++;
     clicks = this.state.clicks;
     var degree = (1800 * clicks) + (Math.floor(Math.random() * 360)+ 1);
     console.log(degree)
   }


  render(){
    return(
      <div id="spin" onClick={this.handleClick}>
        <div id="inner-spin"></div>
      </div>
    )
  }
}
