// Server-side startup code

Meteor.startup(function () {
  // code to run on server at startup
});

// only one collection to publish
Meteor.publish("testData", getTestData);

