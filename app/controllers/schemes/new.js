import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const scheme = {
        name: this.get('name'),
        description: this.get('description'),
        excess: this.get('excess'),
        payoutLimit: this.get('payoutLimit'),
        premium: this.get('premium')
      }
      const newScheme = this.store.createRecord('scheme', scheme)
      newScheme.save()
    }
  }
});
