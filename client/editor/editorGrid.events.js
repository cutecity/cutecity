var randomByte = function () {
  return Math.random() * 256 | 0;
};

Template.editorGrid.events = {
  'mouseover .editor-grid rect': function () {
    console.log('Added block.', 'x:', this.x, 'y:', this.y, 'paths:', iso.scene.length);
    var color = new Color(randomByte(), randomByte(), randomByte());
    var sliceZ = Session.get('sliceZ');
    var gridX = Session.get('gridSizeX');
    var gridY = Session.get('gridSizeY');

    var rotIndex = Session.get('rotationIndex');
    var rotsX = [0, gridX + 1, gridX + 1, 0];
    var rotsY = [0, 0, gridY + 1, gridY + 1];
    var rotX = rotsX[rotIndex];
    var rotY = rotsY[rotIndex];

    var prev = Blocks.find({
      x: rotX - this.x,
      y: rotY - this.y,
      z: sliceZ
    }).fetch();

    if (prev.length) {
      prev.forEach(function (block) {
        Blocks.remove(block._id);
      });
    }

    var id = Blocks.insert({
      x: rotX - this.x,
      y: rotY - this.y,
      z: sliceZ,
      color: color.toHex()
    });

    isoDrawScene();
  }
};
