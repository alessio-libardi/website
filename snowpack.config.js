module.exports = {
  mount: {
    dist: { url: '/', static: true },
    'src/public': { url: '/' }
  },
  plugins: [
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch'
      }
    ]
  ],
  buildOptions: {
    out: 'dist'
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020'
  }
}
