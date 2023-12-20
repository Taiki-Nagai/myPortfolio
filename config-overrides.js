const path = require("path");

module.exports = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      // エイリアスにするパスをココに書く
      storybook: path.resolve(__dirname, "./storybook/"),
      "@": path.resolve(__dirname, "./src/"),
    },
  };

  return config;
};
