import React, { Component } from 'react';
import { NowPlayingSongProps } from './interfaces';

class NowPlayingSong extends Component {
  render() {
    const { song } = this.props as NowPlayingSongProps;
    return (
      <div>
        <p>{song.title}</p>
        <p>{song.artist}</p>
      </div>
    );
  }
}

export default NowPlayingSong;
