const parseMs = ms => ({
  days: Math.floor(ms / 8.64e+7),
  hours: Math.floor(ms / 3.6e+6) % 24,
  minutes: Math.floor(ms / 60000) % 60,
  seconds: Math.floor(ms / 1000) % 60,
  milliseconds: Math.floor(ms) % 1000,
  microseconds: Math.floor(ms * 1000) % 1000,
  nanoseconds: Math.floor(ms * 1e+6) % 1000,
});

export {
  parseMs,
};
