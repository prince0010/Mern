// routes/api/students.js

const express = require('express');
const router = express.Router();

// Load Student model
const Student = require('../../models/Student');

// @route GET api/students/test
// @description tests students route
// @access Public
router.get('/test', (req, res) => res.send('student route testing!'));

// @route GET api/students
// @description Get all students
// @access Public
router.get('/', (req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(404).json({ nostudentsfound: 'No Students found' }));
});
// @route GET api/students/:id
// @description Get single student by id
// @access Public
router.get('/:id', (req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(404).json({ nostudentfound: 'No Student found' }));
});

// @route GET api/students
// @description add/save student
// @access Public
router.post('/', (req, res) => {
    Student.create(req.body)
        .then(student => res.json({ msg: 'Student added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this student' }));
});

// @route GET api/students/:id
// @description Update student
// @access Public
router.put('/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body)
        .then(student => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/students/:id
// @description Delete student by id
// @access Public
router.delete('/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, req.body)
        .then(student => res.json({ mgs: 'Student entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a student' }));
});

module.exports = router;
