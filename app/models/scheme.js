import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  "payout_limit": DS.attr(),
  excess: DS.attr(),
  premium: DS.attr(),
});
