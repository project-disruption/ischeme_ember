import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    index(model) {
      console.log(model)
    }
  }
});
