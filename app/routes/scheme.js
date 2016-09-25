import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const data = this.store.findRecord('scheme', params.id)
    return data
  }
});
