const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// metro.config.js
module.exports = {
    reporter: {
      update: (event) => {
        if (event.type === 'warning') {
          return; // Ignore todos os warnings
        }
        console.log(event);
      },
    },
  };
  

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
