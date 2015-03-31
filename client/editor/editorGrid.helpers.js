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
