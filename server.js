const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bridge is live!'));
app.listen(process.env.PORT || 3000);
