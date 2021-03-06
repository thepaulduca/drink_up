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
   var innerWheel = document.getElementById("inner-wheel");
   innerWheel.style.transform = 'rotate(' + degree + 'deg)';
   setTimeout(this.findWinner.bind(this), 6000);
 }

 findWinner() {
   var sectors = document.getElementsByClassName('sec'),
       l = sectors.length,
       selected = sectors[0].childNodes[0];

   for(var i = 1; i < l; i++){
     var currentSector = sectors[i].childNodes[0];
         currentTop = $(currentSector).offset().top;
         selectedTop = $(selected).offset().top;
     if(currentTop < selectedTop) {
       selected = currentSector;
     }
   }
   this.props.gameHandler(selected.parentNode.getAttribute('name'));
 }

  render(){

    let games = [
      {
        gameName: "Trivia",
        gameIcon: "fa fa-question-circle"
      },
      {
        gameName: "NeverHaveIEver",
        gameIcon: "fa fa-times"
      },
      {
        gameName: "WildCard",
        gameIcon: "fa fa-bomb"
      },
      {
        gameName: "WouldURather",
        gameIcon: "fa fa-arrows-v"
      },
      {
        gameName: "TruthDare",
        gameIcon: "fa fa-star-half-o"
      },
      {
        gameName: "Trivia",
        gameIcon: "fa fa-lightbulb-o"
      }
    ]

    return(
      <div id="wheel">
        <div id="inner-wheel">
          {games.map( (game, i) => <Sector data={game} key={i}/>)}
        </div>
        <div onClick={this.handleSpin}>
          <Spinner/>
        </div>
      </div>
    )
  }
}
