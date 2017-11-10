/* ===== Edit Function ===== */

async function dribbleShots(cb) {
  const request = await fetch(
    "https://kiteapi.herokuapp.com/dribbble/shots/Creativedash"
  );
  const json = await request.json();

  const shots = json.shots.filter(shot => shot.images.hidpi).map(shot => {
    return { title: shot.title, link: shot.link, image: shot.images.hidpi };
  });

  cb(shots);
}
/* ===== End Function ===== */
