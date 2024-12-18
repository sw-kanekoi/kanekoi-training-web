const { Pool } = require("pg");

// PostgreSQL 接続プールの作成
const pool = new Pool({
    host: '127.0.0.1',
    port: 5433,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    close: () => Pool.end(),
};