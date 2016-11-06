import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  payoutLimit: DS.attr(),
  excess: DS.attr(),
  premium: DS.attr(),
});
