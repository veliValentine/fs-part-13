const app = require('./src/app.js');
const config = require('./src/utils/config.js');

const port = config.PORT
app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})
