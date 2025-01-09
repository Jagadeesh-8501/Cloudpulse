const express = require('express');
const router = express.Router();
const path = require('path');

// Controllers (optional: create a controllers folder for better structure)
// const homeController = require('../controllers/homeController');
const servicesData = require(path.join(__dirname, '../public', 'services.json'));

// Home Page
router.get('/', (req, res) => {
    const services = Array.isArray(servicesData) ? servicesData : servicesData.services; // Adjust if necessary
    const limitedServices = services.slice(0, 4); // Get the first 4 services
    res.render('index', { 
      pageTitle: 'About Us', 
      services: limitedServices 
    });
});

// About Us
router.get('/about', (req, res) => {
    const services = Array.isArray(servicesData) ? servicesData : servicesData.services; // Adjust if necessary
    const limitedServices = services.slice(0, 4); // Get the first 4 services
    res.render('about', { 
      pageTitle: 'About Us', 
      services: limitedServices 
    });
  });

// Services
router.get('/services', (req, res) => {
    // Load the services.json file
    const servicesData = require(path.join(__dirname, '../public', 'services.json'));
  
    // Render the 'service' view and pass the services data
    res.render('service', {
      pageTitle: 'Our Services',
      services: servicesData.services, // Pass the services data to the view
    });
  });

  router.get('/service/:slug', (req, res) => {
    const slug = req.params.slug;
    const servicesData = require(path.join(__dirname, '../public', 'services.json'));
  
    // Find the service by slug
    const service = servicesData.services.find(service => service.slug === slug);
  
    if (service) {
      // Render the service details page and pass the service data
      res.render('services-details', {
        pageTitle: service.name,
        service: service,
      });
    } else {
      res.status(404).send('Service not found');
    }
  });
  
  
// Service Details
router.get('/services/:id', (req, res) => {
  const serviceId = req.params.id;
  res.render('service-details', { pageTitle: 'Service Details', serviceId });
});

// Blogs
router.get('/blog', (req, res) => {
  res.render('blogs', { pageTitle: 'Blogs' });
});

// Blog Details
router.get('/blog-details', (req, res) => {
  const blogId = req.params.id;
  res.render('blog-details', { pageTitle: 'Blog Details', blogId });
});

// Contact Us
router.get('/contact', (req, res) => {
  res.render('contact', { pageTitle: 'Contact Us' });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Process contact form submission
  res.redirect('/contact');
});

// Careers
router.get('/careers', (req, res) => {
  res.render('careers', { pageTitle: 'Careers' });
});

router.post('/careers', (req, res) => {
  const { name, email, resume } = req.body;
  // Process career application
  res.redirect('/careers');
});

module.exports = router;
