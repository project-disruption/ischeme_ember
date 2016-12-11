import DS from 'ember-data';

export default DS.Model.extend({
  schemes: DS.hasMany('user'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string')
});
