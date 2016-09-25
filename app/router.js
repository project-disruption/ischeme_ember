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
    this.route('edit');
  });
  this.route('scheme',{ path: '/scheme/:id'});
});

export default Router;
