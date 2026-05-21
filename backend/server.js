import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 4567;

app.listen(PORT, () => {
  console.log(`Server successfully running at http://localhost:${PORT}`);
});