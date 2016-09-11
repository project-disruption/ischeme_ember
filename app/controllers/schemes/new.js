import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit(data) {
      console.log("hello",data)
    }
  }
});
