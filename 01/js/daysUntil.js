/* ===== Edit Function ===== */

function daysUntil(date) {

  // We match the argument's year with our current.
  var date = date.year(moment().year());
  var now = moment().dayOfYear();

  // If the date has already passed, we add another year.
  if (date.diff(moment(),'days') < 0){
    date.year(moment().year()+1);
  }

  diff = date.diff(moment(), 'days');


  if (date.dayOfYear() === now){
    return "cake";
  } else if (diff == 65){
    // We use diff == 65 instead of 66 because the number has been rounded down.
    return 66;
  } else if (diff > 300) {
    return diff;
  }


  return null;
}

/* ===== End Function ===== */
