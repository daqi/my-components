import { css } from "docz-plugin-css";

export default {
  plugins: [
    css(),
    css({
      preprocessor: "less",
      loaderOpts: {
        javascriptEnabled: true
      }
    }),
    css({
      preprocessor: "sass"
    })
  ],
  modifyBabelRc: babelrc => {
    babelrc.plugins.unshift([
      "import",
      { libraryName: "antd", libraryDirectory: "es", style: "css" }
    ]);
    return babelrc;
  }
};
