import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit(model) {
      model.save()

    }
  }
});
