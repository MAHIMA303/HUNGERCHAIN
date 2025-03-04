import 'react-native-polyfill-globals/auto';

// Manually define setImmediate if still missing
if (typeof global.setImmediate === 'undefined') {
  global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
}
