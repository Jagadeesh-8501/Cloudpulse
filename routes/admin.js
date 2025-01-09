const express = require('express');
const router = express.Router();

// Admin Dashboard
router.get('/', (req, res) => {
  res.render('admin/dashboard', { pageTitle: 'Admin Dashboard' });
});

// Manage Blogs
router.get('/blogs', (req, res) => {
  res.render('admin/blogs', { pageTitle: 'Manage Blogs' });
});

// Appointments
router.get('/appointments', (req, res) => {
  res.render('admin/appointments', { pageTitle: 'Manage Appointments' });
});

// Applicant Details
router.get('/applicants', (req, res) => {
  res.render('admin/applicants', { pageTitle: 'Manage Applicants' });
});

module.exports = router;
