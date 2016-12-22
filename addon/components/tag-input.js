import Ember from 'ember';
import layout from '../templates/components/tag-input';

const KEY_CODES = {
  BACK_BUTTON: 8,
  COMMA: 188,
  ENTER: 13,
  SPACE: 32
};

export default Ember.Component.extend({
  layout,

  classNames: ['emberTagInput'],

  tagName: 'ul',

  tags: Ember.A(),

  didInsertElement() {
    let tagInput = this.$('.js-ember-tag-input-new');

    tagInput.on('keydown', (e) => {
      let tags = this.get('tags'),
        tagInputVal = tagInput.val().trim();

      if (e.which === KEY_CODES.COMMA || e.which === KEY_CODES.SPACE || e.which === KEY_CODES.ENTER) {
        if (tagInputVal.length > 0) {
          tags.pushObject(tagInputVal);
          tagInput.val('');
          e.preventDefault();
        }
      } else if (e.which === KEY_CODES.BACK_BUTTON) {

      }
    });
  }
});