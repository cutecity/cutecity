$(window).load(function() {
  $(window).on('keydown', function(evt) {
    console.log(evt.which);

    // slice down

    if (evt.which === 38) { // down arrow
      var sliceZ = Session.get('sliceZ');
      sliceZ = Math.min(Math.max(sliceZ + 1, 1), Session.get('gridSizeZ'));
      Session.set('sliceZ', sliceZ);
      console.log('slice down', sliceZ);
    }

    // slice up

    if (evt.which === 40) { // up arrow
      var sliceZ = Session.get('sliceZ');
      sliceZ = Math.min(Math.max(sliceZ - 1, 1), Session.get('gridSizeZ'));
      Session.set('sliceZ', sliceZ);
      console.log('slice up', sliceZ);
    }

    // rotate left

    if (evt.which === 37) {
      var currentRotationIndex = Session.get('rotationIndex');
      var newRotationIndex = (currentRotationIndex + 3) % 4
      Session.set('rotationIndex', newRotationIndex);
      console.log('rotate left', newRotationIndex);
    }

    // rotate right

    if (evt.which === 39) {
      var currentRotationIndex = Session.get('rotationIndex');
      var newRotationIndex = (currentRotationIndex + 5) % 4
      Session.set('rotationIndex', newRotationIndex);
      console.log('rotate right', newRotationIndex);
    }

  });
});
