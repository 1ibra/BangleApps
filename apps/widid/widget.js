(() => {
  function draw() {
    let settings = require("Storage").readJSON('setting.json', 1);
    g.reset().setFont("6x8", 2);
    let city = settings.city;
    g.drawString(city.toUpperCase().substr(0,3), this.x,4+this.y);
  }
  // add your widget
  WIDGETS["widcity"]={
    area:"tr", // tl (top left), tr (top right), bl (bottom left), br (bottom right), be aware that not all apps support widgets at the bottom of the screen
    width: 35, // how wide is the widget? You can change this and call Bangle.drawWidgets() to re-layout
    sortorder: 2,
    draw:draw // called to draw the widget
  };
})();
