import DS from 'ember-data';

// The model is where you say which fields should exist on a record.
// Create this file with `ember g model boardgame`
// It's best to make the field names match what's in your API and Database.

export default DS.Model.extend({
  name: DS.attr('string')
  // other common attr types are number, boolean, date
  // Or leave it blank to have a read-only array or object, like DS.attr()
  // This file is also where you would define your hasMany/belongsTo relationships.
});
