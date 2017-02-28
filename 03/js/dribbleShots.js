/* ===== Edit Function ===== */

function dribbleShots(cb) {
  var shots = [];
  $.get('https://kiteapi.herokuapp.com/dribbble/shots/Creativedash', function(t) {
    for (var i = 0; i < t.shots.length; i++) {
      shots.push(t.shots[i]);
      shots[i].image = t.shots[i].images.hidpi;
      delete shots[i].images;
    }
    cb(shots);
  });

}
/* ===== End Function ===== */
