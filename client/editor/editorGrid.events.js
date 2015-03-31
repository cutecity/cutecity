var randomByte = function () {
  return Math.random() * 256 | 0;
};

Template.editorGrid.events = {
  'mouseover .editor-grid rect': function () {
    console.log('Added block.', 'x:', this.x, 'y:', this.y, 'paths:', iso.scene.length);
    var color = new Color(randomByte(), randomByte(), randomByte());

    var prev = Blocks.find({
      x: this.x,
      y: this.y,
      z: 0
    }).fetch();

    if (prev.length) {
      prev.forEach(function (block) {
        Blocks.remove(block._id);
      });
    }

    var id = Blocks.insert({
      x: this.x,
      y: this.y,
      z: 0,
      color: color.toHex()
    });

    isoDrawScene();
  }
};
