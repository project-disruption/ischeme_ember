//
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';
//
// import Ember from 'ember';
// import JSONAPIAdapter from 'ember-data/adapters/json-api';
//
// const { String: { pluralize, underscore } } = Ember;
//
// export default JSONAPIAdapter.extend(DataAdapterMixin, {
//
//   pathForType(type) {
//     return pluralize(underscore(type));
//   },
//   host: `${config.host}`,
//   authorizer: 'authorizer:custom'

// });

import DS from 'ember-data';

export default DS.RESTAdapter.extend(DataAdapterMixin,{
  // namespace: 'api/1'
    host: `${config.host}`,
    authorizer: 'authorizer:custom'
});
