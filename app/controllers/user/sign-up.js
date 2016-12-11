import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    submit() {
      const user = {
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password'),
      }
      const newUser = this.store.createRecord('user', user)
      newUser.save().then((result) => {

        var credentials = {
          identification: user.email,
          password: user.password
        }

        let authenticator = 'authenticator:jwt';
        this.get('session')
          .authenticate(authenticator, credentials)
          .then(() => this.transitionToRoute('schemes'))
          .catch((reason)=>{
          this.set('errorMessage', reason.error || reason);
        });
      })
    }
  }
});
