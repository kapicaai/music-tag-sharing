export interface Duration {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Song {
  title: string;
  artist: string;
  album: string;
  duration: Duration;
}
