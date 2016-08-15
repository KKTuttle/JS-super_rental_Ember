import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rental:this.store.findAll('rental'),
      announcement: this.store.findAll('announcement')
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'rental', model.rental);
    Ember.set(controller, 'announcement', model.announcement);
  }
});
  actions: {
    save3(params) {
     var newRental = this.store.createRecord('rental', params);
     newRental.save();
     this.transitionTo('index');
    },
    destroyRental(rental) {
     rental.destroyRecord();
     this.transitionTo('index');
   }
 }
});
