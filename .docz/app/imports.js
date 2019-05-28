export const imports = {
  'src/button/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-button-button" */ 'src/button/button.mdx'
    ),
}
