
class Wheel extends React.Component {

  spinWheel(){
    var degree = 1800;
    //number of clicks = 0
    var clicks = 0;

    /*WHEEL SPIN FUNCTION*/

      //add 1 every click
    clicks ++;

    /*multiply the degree by number of clicks
    generate random number between 1 - 360,
    then add to the new degree*/
    var newDegree = degree*clicks;
    var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    totalDegree = newDegree+extraDegree;

    /*let's make the spin btn to tilt every
    time the edge of the section hits
    the indicator*/
    function spin(){
      c++;
      if (c === n) {
        var selected = t.find('span');
        $("#wheel .sec span").each(function(){
          var currentSector = $(this);
          if(currentSector.offset().top < selected.offset().top) {
            selected = currentSector;
          }
        });
        this.props.gameHandler(selected.parent().attr('name'));
        clearInterval(interval);
      }

      var aoY = t.offset().top;
      $("#txt").html(aoY);
      // console.log(aoY);

      /*23.7 is the minumum offset number that
      each section can get, in a 30 angle degree.
      So, if the offset reaches 23.7, then we know
      that it has a 30 degree angle and therefore,
      exactly aligned with the spin btn*/
      if(aoY < 23.89){
        $('#spin').addClass('spin');
        setTimeout(function () {
          $('#spin').removeClass('spin');
        }, 100);
      }
    }
    var sectors = $('#wheel .sec');
      for(var i=0; i<sectors.length; i++){
        var t = $(sectors[i]),
            noY = 0,
            c = 0,
            n = 700,
            interval = setInterval(spin.bind(this), 10);

        $('#inner-wheel').css({
          'transform' : 'rotate(' + totalDegree + 'deg)'
        });

      noY = t.offset().top;
    }
  }

  render(){
    // We'll probably have games database, and get games from there with an ajax, for now I'll hardcode some stuff for practice
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
        <div onClick={this.spinWheel.bind(this)} id="spin">
            <div id="inner-spin"></div>
        </div>

        <div id="shine"></div>
      </div>
    )
  }
}
