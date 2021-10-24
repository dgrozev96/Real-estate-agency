const express = require('express');

const app = express();
const port = 5000;

require('./config/express-config')(app);
require('./config/hbs-config')(app);


app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port, () => console.log(`App is running on http://localhost:${port}`));
