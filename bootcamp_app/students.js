let cohort = '%' + process.argv[2] + '%';
let limit = process.argv[3];


const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});
pool.query(`SELECT students.id, students.name, cohorts.name as cohort 
            FROM students JOIN cohorts ON students.cohort_id = cohorts.id 
            WHERE cohorts.name LIKE $1
            LIMIT $2;`, [cohort, limit])
  .then(res => {
    console.table(res.rows);
  })
  .catch(err => console.error('Query error', err.stack));