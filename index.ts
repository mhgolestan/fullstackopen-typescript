import express from 'express';
const app = express();

app.get('/ping', (__req, res) => {
  res.send('pong');
});

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});