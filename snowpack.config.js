module.exports = {
  mount: {
    build: { url: '/', static: true },
    'src/public': { url: '/' }
  },
  plugins: ['@snowpack/plugin-postcss'],
  buildOptions: {
    out: 'dist'
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020'
  }
}
