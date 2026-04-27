/* eslint-disable @typescript-eslint/no-require-imports */
const { YoutubeTranscript } = require('youtube-transcript');
const fs = require('fs');

YoutubeTranscript.fetchTranscript('CxGFuDRbHV8').then(transcript => {
  const text = transcript.map(t => t.text).join(' ');
  fs.writeFileSync('transcript.txt', text);
}).catch(console.error);
