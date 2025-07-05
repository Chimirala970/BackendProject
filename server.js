const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dummy SEO headlines
const headlines = [
  "Why {{name}} is {{location}}'s Sweetest Spot in 2025",
  "People in {{location}} Can't Get Enough of {{name}}!",
  "{{name}}: The New Favorite in {{location}}",
  "{{name}} is Making Waves in {{location}}"
];

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  const headline = headlines[0]
    .replace('{{name}}', name)
    .replace('{{location}}', location);

  res.json({
    rating: 4.3,
    reviews: 127,
    headline
  });
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  const random = Math.floor(Math.random() * headlines.length);
  const headline = headlines[random]
    .replace('{{name}}', name)
    .replace('{{location}}', location);

  res.json({ headline });
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
