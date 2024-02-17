var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
  // db.collection('info').find().toArray((err, result) => {
  //   if (err) return console.log(err)
  // db.collection('exams').findOne((err, exams) => {
  //   console.log(trackNeeds, 'here')
  //   res.render('profile.ejs', {
  //     u : req.user,
  //     vehicles: result,
  //     trackNeeds: trackNeeds
  //   })
  // })
  // })
});

/* GET admin page. */
router.get('/admin', function(req, res, next) {
  res.send('API is working properly!');
});

/* GET Patient Details  page. */
router.get('/PatientDetails', function(req, res, next) {
  res.send('API is working properly!');
});

/* GET Exam Details page. */
router.get('/ExamDetails', function(req, res, next) {
  res.send('API is working properly!');
});


module.exports = router;
