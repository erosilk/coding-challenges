/* ===== Edit Function ===== */

function daysUntil(date) {

  // We match the argument's year with our current.
  var date = date.year(moment().year());
  var now = moment().dayOfYear();

  // If the date has already passed, we add another year.
  if (date.diff(moment(),'days') < 0){
    date.year(moment().year()+1);
  }

  //We add 1 to diff because number has been rounded down.
  diff = date.diff(moment(), 'days')+1;


  if (date.dayOfYear() === now){
    return "cake";
  } else if (diff == 66){
    return 66;
  } else if (diff > 300) {
    return diff;
  }


  return null;
}

/* ===== End Function ===== */
