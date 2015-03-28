var rectSize = 10;

Template.editorModel.helpers({
  modelSizeX: function () {
    return 0.707 * (Session.get('gridSizeX') * rectSize) + 0.707 * (Session.get('gridSizeY') * rectSize);
  },

  modelSizeY: function () {
    return window.innerHeight;
  }
});

Template.editorModel.rendered = function () {
  var iso = window.iso = new Isomer(this.firstNode, {
    scale: 8,
    originY: window.innerHeight - $('.editor-grid').offset().top
  });

  // Base
  iso.add(Isomer.Shape.Prism(Isomer.Point.ORIGIN, Session.get('gridSizeX'), Session.get('gridSizeY'), 1), new Isomer.Color(200, 200, 200), true);
  iso.draw();
}
