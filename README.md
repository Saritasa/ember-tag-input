# ember-tag-input

ember-tag-input is a simple Ember addon that converts a user's typing into tags. New tags are created when the user types a comma, space, or hits the enter key. Tags can be removed using the backspace key or by clicking the x button on each tag.

![](http://i.imgur.com/aVRvs7z.png)

## Usage

In the simplest case, just pass a list of tags to render and actions for adding and removing tags. The component will never change the tags list for you, it will instead call actions when changes need to be made.

```handlebars
{{tag-input
  tags=tags
  addTag=(action 'addTag')
  removeTagAtIndex=(action 'removeTagAtIndex')
}}
```

## Options

### tags
- An array of tags to render.
- **default: null**

### removeConfirmation
- Whether or not it takes two presses of the backspace key to remove a tag. When enabled, the first backspace press will add the class `emberTagInput-tag--remove` to the element that is about to be removed.
- **default: true**

### allowDuplicates
- If duplicates tags are allowed in the list.
- **default: false**

### showRemoveButtons
- If 'x' removal links should be displayed at the right side of each tag.
- **default: true**

### placeholder
- The placeholder text to display when the user hasn't typed anything.
- **default: ''**

## Actions

### addTag
- This action will get called when the user is trying to add a new tag. Your implementation should either add the tag to the tags array or return false if the tag wasn't added.
- **parameters: tag**

### removeTagAtIndex
- This action will get called when the user is trying to remove a tag. Your implementation should remove the element from the tags array at the specified index.
- **parameters: index**
