import Ember from 'ember';

var questions = [{
  content: "why did i do that again?",
  author: "that voice in my head",
  notes: "will i ever learn?"
}, {
  content: "what should i eat for lunch",
  author: "hr williams",
  notes: "nothing sounds good"
}, {
  content: "why bother?",
  author: "N. Ihilist",
  notes: "lol"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
