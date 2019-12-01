function show() {
  let showdate;
  let showParagraph = "To Show Time And Date In Big Size Tab The Button";
  showdate = Date();
  document.getElementById('date-time').innerHTML = showdate;
  document.getElementById('show-content').innerHTML = showParagraph;
}

function font_big() {
  let incrSize;
  incrSize = Date();
  document.getElementById('incr-size').innerHTML = incrSize;
}