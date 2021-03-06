const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});
