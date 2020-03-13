function roundMsValue(ms) {
  return (ms < 0) ? Math.ceil(ms) : Math.floor(ms);
}
const parseMs = ms => ({
  days: roundMsValue(ms / 8.64e+7),
  hours: roundMsValue(ms / 3.6e+6) % 24,
  minutes: roundMsValue(ms / 60000) % 60,
  seconds: roundMsValue(ms / 1000) % 60,
  milliseconds: roundMsValue(ms) % 1000,
  microseconds: roundMsValue(ms * 1000) % 1000,
  nanoseconds: roundMsValue(ms * 1e+6) % 1000,
});
export {
  parseMs,
};
