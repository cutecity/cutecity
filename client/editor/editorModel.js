var rectSize = 10;

Template.editorModel.helpers({
  modelSizeX: function () {
    return 0.707 * (Session.get('gridSizeX') * rectSize) + 0.707 * (Session.get('gridSizeY') * rectSize);
  },

  modelSizeY: function () {
    return window.innerHeight;
  }
});

Template.editorModel.onRendered(function () {
  var iso = window.iso = new Isomer(this.firstNode, {
    scale: 8.1,
    originY: window.innerHeight - $('.editor-grid').offset().top
  });
});
