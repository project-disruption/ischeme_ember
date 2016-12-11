import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const user = {
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password'),
      }
      const newUser = this.store.createRecord('user', user)
      newUser.save()
    }
  }
});
