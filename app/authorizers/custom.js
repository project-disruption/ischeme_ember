// app/authorizers/custom.js
import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';
import { jwt_decode } from 'ember-cli-jwt-decode';

export default Base.extend({
  session: Ember.inject.service(),
  authorize(data, block) {
    const { token } = data
    var decoded = jwt_decode(token);
    console.log(decoded);
    if (this.get('session.isAuthenticated') && token) {
      block('Authorization', `Bearer ${token}`);
    }
  }
});
