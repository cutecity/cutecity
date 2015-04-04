Shape = Isomer.Shape;
Point = Isomer.Point;
Color = Isomer.Color;

hexToRgb = function (hex) {
  hex = hex.replace(/[^0-9A-F]/gi, '');
  var bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

isoColor = function (hex) {
  var rgb = hexToRgb(hex);
  return new Color(rgb.r, rgb.g, rgb.b);
}

isoDrawScene = function () {
  iso.scene = [];
  iso.add(Shape.Prism(Point.ORIGIN, Session.get('gridSizeX'), Session.get('gridSizeY'), 1), new Color(200, 200, 200), true);

  var blocks = Blocks.find({}, {
    sort: {x: -1, y: -1, z: -1}
  }).fetch();

  blocks.map(function (block) {
    iso.add(Shape.Prism(new Point(block.x, block.y, 0)), isoColor(block.color), true);
  });

  iso.canvas.clear();
  iso.draw();
}
