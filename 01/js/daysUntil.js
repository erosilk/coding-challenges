/* ===== Edit Function ===== */

function daysUntil(date) {
  const now = moment().startOf("day");

  // Si no pongo esto se puede llega a calcular un dia menos al cambiar de año.
  date.startOf("day");

  // Seteamos el año de la fecha al año actual
  date.year(now.year());

  // Chequeamos si ya pasó, y le agregamos un año si es necesario.
  if (date.isBefore(now, "day")) date.add(1, "year");

  // Devolvemos "cake" si es hoy, o la diferencia de días.
  return now.isSame(date, "day") ? "cake" : date.diff(now, "days");
}

/* ===== End Function ===== */
