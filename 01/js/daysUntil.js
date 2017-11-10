/* ===== Edit Function ===== */

function daysUntil(date) {
  const now = moment().dayOfYear();
  const birthDate = date.dayOfYear();

  return now === birthDate
    ? "cake"
    : now > birthDate ? 365 - now + birthDate : birthDate - now;
}

/* ===== End Function ===== */
