// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-directus',
      options: {
        apiUrl: 'http://localhost:8080/',
        project: 'test-project',
        email: 'email@example.com',
        password: 'd1r3ctu5',
        collections: [
          {
            name: 'test',
            status: 'published',
            fields: '*.*'
          }
        ]
      }
    }
  ]
}
