import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroy(scheme) {
      scheme.destroyRecord()
    }
  }
});
