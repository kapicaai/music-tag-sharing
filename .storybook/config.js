import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/now-playing-song/stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);
