import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const scheme = {
        name: this.get('name'),
        description: this.get('description'),
        excess: this.get('excess'),
        "payout_limit": this.get('payoutLimit'),
        premium: this.get('premium')
      }
      const newScheme = this.store.createRecord('scheme', scheme)
      newScheme.save()
    }
  }
});
