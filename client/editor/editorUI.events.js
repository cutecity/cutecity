$(window).load(function() {
  $(window).on('keydown', function(evt) {
    console.log(evt.which);

    if (evt.which === 38) { // down arrow
      var sliceZ = Session.get('sliceZ');
      sliceZ = Math.min(Math.max(sliceZ + 1, 1), Session.get('gridSizeZ'));
      Session.set('sliceZ', sliceZ);
      console.log('slice down', sliceZ);
    }

    if (evt.which === 40) { // up arrow
      var sliceZ = Session.get('sliceZ');
      sliceZ = Math.min(Math.max(sliceZ - 1, 1), Session.get('gridSizeZ'));
      Session.set('sliceZ', sliceZ);
      console.log('slice up', sliceZ);
    }
  });
});
