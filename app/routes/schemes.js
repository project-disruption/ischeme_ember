import Ember from 'ember';

// let schemes = [
//   {
//     id: 1,
//     name: 'scheme',
//     description: "scheme 1",
//     payoutLimit: 100,
//     excess: 5,
//     premium: 10
//   },
//   {
//     id: 2,
//     name: 'scheme2',
//     description: "scheme 2",
//     payoutLimit: 200,
//     excess: 6,
//     premium: 20
//   }
// ]

export default Ember.Route.extend({
  model() {
    // return schemes
    return this.store.findAll('scheme')
  }
});
