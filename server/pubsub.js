Meteor.publish('blocks', function () {
  return Blocks.find({});
});
