module.exports = function(api) {
  api.cache(true);
  return {
      presets: ['babel-preset-expo'],
//ADD CODE START
      env: { 
        production: {
          plugins: ['react-native-paper/babel'],
        },
      },
//ADD CODE END
  };
};
