import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import SongComp from './index';

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with some emoji', () => {
    const song = {
      title: 'Song title',
      artist: 'Song artist',
      album: 'album',
      duration: {
        hours: 0,
        minutes: 3,
        seconds: 42
      }
    };
    return (
      <Button>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
        <SongComp song={song} />
      </Button>
    );
  });
