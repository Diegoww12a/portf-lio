export default defineConfig(({ mode }) => ({
  base: mode === 'github'
    ? '/portf-lio/'
    : '/',
  server: {
    port: 5173,
    open: true
  }
}))
