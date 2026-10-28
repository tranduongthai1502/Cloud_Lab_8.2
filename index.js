const express = require('express');
const app = express();

// Middleware parse JSON
app.use(express.json());

// Route GET đơn giản
app.get('/hello', (req, res) => {
  res.json({ message: 'Welcome to Firebase Functions with Express' });
});

// Route POST ví dụ
app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Express API đang chạy tại http://localhost:${port}`);
  });
}

module.exports = app;
