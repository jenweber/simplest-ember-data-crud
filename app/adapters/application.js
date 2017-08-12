import DS from 'ember-data';

// Create this file with `ember g adapter application`

export default DS.JSONAPIAdapter.extend({
  // host: 'http://api-for-most-minimal-ember-app-ever.com',
  namespace: 'api'

  // ^^^^ this is where you put the URL to your API.
  // This is not a real API endpoint so I am leaving it commented out.
  // Requests will hit my fake server instead, using http-mock.
  // You can see the requests by looking at the Chrome console's Network tab.

});

// An adapter tells Ember Data where to send API requests, how to format them,
// and what to do with the responses.
// All outgoing API requests will use this adapter by default because it is named 'application'.
// The ember cli generates a JSONAPI Adapter. Other common adapter types are REST and JSON.
// JSONAPI is a special, standardized format for requests. See http://jsonapi.org/
// Ember Data will do all the hard work of making requests follow that specification.
