import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit: function(data) {
      console.log("hello",data)
    }
  }
});
