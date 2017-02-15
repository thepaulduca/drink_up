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
   innerWheel.style.transform = 'rotate(' + degree + 'deg)'
 }


 // logic for finding which pieace is being pointed to
 //  $("#wheel .sec span").each(function(){
 //    var currentSector = $(this);
 //    if(currentSector.offset().top < selected.offset().top) {
 //      selected = currentSector;
 //    }
 //  });
 //  this.props.gameHandler(selected.parent().attr('name'));


  render(){

    let games = [
      {
        gameName: "Hot or Not",
        gameIcon: "fa fa-bell-o"
      },
      {
        gameName: "Truth or Dare",
        gameIcon: "fa fa-comment-o"
      },
      {
        gameName: "Never have I ever",
        gameIcon: "fa fa-smile-o"
      },
      {
        gameName: "Trivia",
        gameIcon: "fa fa-heart-o"
      },
      {
        gameName: "Some more stuff",
        gameIcon: "fa fa-star-o"
      },
      {
        gameName: "Go directly to jail, do NOT pass go",
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
