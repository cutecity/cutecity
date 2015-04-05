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
  var sliceZ = Session.get('sliceZ');
  var gridX = Session.get('gridSizeX');
  var gridY = Session.get('gridSizeY');
  var rots = [
    {
      sortX: 0,
      sortY: 0,
      modX: 0,
      modY: 0
    },
    {
      sortX: 2,
      sortY: 0,
      modX: gridX + 1,
      modY: 0
    },
    {
      sortX: 2,
      sortY: 2,
      modX: gridX + 1,
      modY: gridY + 1
    },
    {
      sortX: 0,
      sortY: 2,
      modX: 0,
      modY: gridY + 1
    }
  ];

  var rot = rots[Session.get('rotationIndex')];

  iso.scene = [];
  iso.add(Shape.Prism(new Point(0, 0, -sliceZ), gridX, gridY, 1), new Color(200, 200, 200), true);

  var blocks = Blocks.find({}, {
    sort: {
      x: -1 + rot.sortX,
      y: -1 + rot.sortY,
      z: 1
    }
  }).fetch();

  blocks.map(function (block) {
    iso.add(Shape.Prism(new Point(Math.abs(rot.modX - block.x), Math.abs(rot.modY - block.y), block.z - sliceZ)), isoColor(block.color), true);
  });

  iso.canvas.clear();
  iso.draw();
}
