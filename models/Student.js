// models/Student.js database attribute in entity or table
const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
            studentID: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            firstName: {
                type: String,
                required: true
            },
            course: {
                type: String
            },
            year: {
                type: String
            }         
});
//Ang Student gikan nas student.js kay pang kwaon niya ang req or requests then ibutang sa mongoose model na db which is ang student na table ipang butang niya dadto og ang studentschemaipang base niya tanan dadto sa mga data sa studentschema sa Student na functions na gikan sa student.js
module.exports = Student = mongoose.model('student', StudentSchema);


