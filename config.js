module.exports = {
  development: {
    db: {
      client: 'pg',
      version: '10.4',
      connection: {
        host: 'ec2-54-217-250-0.eu-west-1.compute.amazonaws.com',
        port: 5432,
        user: 'fugbnhsekrbjvn',
        password: '0593a75636c9ad5d0c97c58cb29228d8d4ca9e9d9c0acb2a09b7f474242cede2',
        database: 'dee5k9hqo90l9n',
        ssl: true
      }
    }
  },
  production: {
    db: {
      client: 'pg',
      version: '10.4',
      connection: {
        host: 'ec2-54-217-250-0.eu-west-1.compute.amazonaws.com',
        port: 5432,
        user: 'fugbnhsekrbjvn',
        password: '0593a75636c9ad5d0c97c58cb29228d8d4ca9e9d9c0acb2a09b7f474242cede2',
        database: 'dee5k9hqo90l9n',
        ssl: true
      }
    }
  }
}
