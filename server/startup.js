// Server-side startup code

Meteor.startup(function () {
  // code to run on server at startup
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        username: 'test@test.com',
        email: 'test@test.com',
        password: 'password',
        profile: {
            first_name: 'test',
            last_name: 'user',
            company: 'Test Inc.',
        }
    });
  }
});

// only one collection to publish
Meteor.publish("testData", getTestData);

// and the users collection
Meteor.publish("users", function() {
  return Meteor.users.find();
});

