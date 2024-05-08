module.exports = {
  async redirects() {
    return [
      {
        source: '/todo/calendar',
        destination: '/todo/calendar/week',
        permanent: true,
      },
    ]
  },
}