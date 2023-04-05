let cohort = process.argv[2] || 'JUL02';


const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const query = `SELECT DISTINCT(teachers.name) AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;`;

pool.query(query, [cohort])
  .then(res => {
    console.table(res.rows);
  })
  .catch(err => console.error('Query error', err.stack));