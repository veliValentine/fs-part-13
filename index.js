import app from './src/app.js';
import config from './src/utils/config.js';

const port = config.PORT
app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})
