import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scheme-detail')
  this.route('schemes', function() {
    this.route('new');
  });
  this.route('scheme',{ path: 'scheme/:id'}, function() {
    this.route('edit');

  });
  this.route('login')
});

export default Router;
