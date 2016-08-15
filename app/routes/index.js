import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rental: this.store.findAll('rental'),
      announcement: this.store.findAll('announcement')
    });
  },
  actions: {
    save3(params) {
     var newRental = this.store.createRecord('rental', params);
     newRental.save();
     this.transitionTo('index');
    },
    destroyRental(rental) {
     rental.destroyRecord();
     this.transitionTo('index');
   },
   save3(params) {
     var newAnnouncement = this.store.createRecord('announcement', params);
     newAnnouncement.save();
     this.transitionTo('index')
   },
 }
});
