/* ===== Edit Function ===== */

function dribbleShots(cb) {
  var shots = [];
  $.get('https://kiteapi.herokuapp.com/dribbble/shots/Creativedash', function(t) {
    for (var i = 0; i < t.shots.length; i++) {
      shots.push(t.shots[i]);
      shots[i].image = t.shots[i].images.hidpi;
      delete shots[i].images;
    }
    console.log(shots);
    console.log(shots[0]);
    cb(shots);
  });

}
/* ===== End Function ===== */
