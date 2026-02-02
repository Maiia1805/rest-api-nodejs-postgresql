const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/index'));


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
