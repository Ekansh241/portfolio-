/* eslint-disable @typescript-eslint/no-require-imports */
const { YoutubeTranscript } = require('youtube-transcript');

YoutubeTranscript.fetchTranscript('CxGFuDRbHV8').then(console.log).catch(console.error);
