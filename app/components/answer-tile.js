import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('answer.author', 'answer.content', function() {
    return this.get('answer.content') + ' - ' + this.get('answer.author');
  }),
});
