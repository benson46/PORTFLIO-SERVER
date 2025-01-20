import app from './app.js'; 
import { config } from './config/appConfig.js';

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});