export const imports = {
  'button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "button" */ 'button.mdx'
    ),
}
