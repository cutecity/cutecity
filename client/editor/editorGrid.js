var rectSize = 10;

Template.editorGrid.helpers({
  grid: function () {
    return _.range(Session.get('gridSizeY')).map(function (y) {
      return _.range(Session.get('gridSizeX')).map(function (x) {
        return {
          x: Session.get('gridSizeX') - x,
          y: Session.get('gridSizeY') - y,
          xdim: x * rectSize,
          ydim: y * rectSize,
          size: rectSize
        };
      });
    });
  },

  gridWidth: function () {
    return 0.707 * (Session.get('gridSizeX') * rectSize) + 0.707 * (Session.get('gridSizeY') * rectSize);
  },

  gridHeight: function () {
    return 0.409 * (Session.get('gridSizeX') * rectSize) + 0.409 * (Session.get('gridSizeY') * rectSize);
  },

  gridOffset: function () {
    return ((Session.get('gridSizeY') * rectSize) / 2) / 0.707;
  }
});

var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;

var randomByte = function () {
  return Math.random() * 256 | 0;
};

Template.editorGrid.events = {
  'mouseover .editor-grid rect': function () {
    console.log(this.x, this.y);
    var color = new Color(randomByte(), randomByte(), randomByte());

    iso.canvas.clear();
    iso.add(Shape.Prism(new Point(this.x, this.y, 0)), color, true);
    iso.draw();

    var id = Blocks.insert({
      x: this.x,
      y: this.y,
      z: 0,
      color: color.toHex()
    });
  }
};

function hexToRgb(hex) {
    hex = hex.replace(/[^0-9A-F]/gi, '');
    var bigint = parseInt(hex, 16);
    return [
      (bigint >> 16) & 255, // R
      (bigint >> 8) & 255, // G
      bigint & 255 // B
    ];
}

var throttledDraw = _.throttle(function () {
  iso.canvas.clear();
  iso.draw();
}, 100);

var render = function (block) {
  rgb = hexToRgb(block.color)
  iso.add(Shape.Prism(new Point(block.x, block.y, block.z)), new Color(rgb[0], rgb[1], rgb[2]), true);
  throttledDraw();
}

Template.editorGrid.rendered = function () {
  var cursor = Blocks.find({});

  cursor.observe({
    added: function (block) {
      render(block);
    }
  });

  var data = cursor.fetch();
};
