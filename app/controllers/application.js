import Ember from 'ember';

// a controller is a place to define 'actions', such as the things that should happen
// when a user clicks a button to create/read/edit/delete a record

export default Ember.Controller.extend({
  actions: {
  saveNewBoardGame() {
    // get the input value from the .hbs template
    let newBoardGame = this.get('newBoardGame')
    // create a record in Ember Data (locally, would not survive page refresh)
    let newRecord = this.store.createRecord('boardgame', {
      name: newBoardGame
    })
    // save the record to the API endpoint specified in your adapter.
    // Expected to fail because this example does not hit a real API.
    // But, you can look at the network tab in Chrome console to see
    // the request. The API should return the full record, formatted as defined
    // in your adapter. See adapaters/application.js
    newRecord.save()
  },
  getBoardGames() {},
  getBoardGame() {},
  editBoardGame() {},
  destroyBoardGame() {}
  }
});
