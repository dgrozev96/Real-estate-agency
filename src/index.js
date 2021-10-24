const express = require('express');

const app = express();
const { PORT } = require('./constants');
const routes = require('./routes');

//routes
//controllers
//services
//add database
//add model
//auth 
//authorization

require('./config/express-config')(app);
require('./config/hbs-config')(app);
app.use(routes)



app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
