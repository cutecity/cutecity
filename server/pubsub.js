Meteor.publish('blocks', function () {
  return Blocks.find({}, {
    sort: {x: -1, y: -1, z: 1}
  });
});
