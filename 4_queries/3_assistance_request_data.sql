SELECT teachers.name AS teacher, students.name AS student, assignments.name AS assignment, (assistance_requests.completed_at - assistance_requests.started_at) as duration
FROM assignments
JOIN assistance_requests ON assignments.id = assistance_requests.assignment_id
JOIN students ON assistance_requests.student_id = students.id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
ORDER BY duration;