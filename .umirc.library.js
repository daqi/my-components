export default {
  esm: "babel",
  cjs: "babel",
  doc: {},
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
      }
    ]
  ]
};
