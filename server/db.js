const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "8et7#PE8Jg2!",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;