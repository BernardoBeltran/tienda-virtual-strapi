module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cedp2t1a6gdgn5f1etg0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarco_qgq9'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'ERwVfvMK3BX4JSmrmTIhdGDO7BwbFapS'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
