const express = require('express');
const app = express();
const PORT = 5000;
app.listen(5000, () => {
             console.log(`Server running on port ${PORT}`)
});  

app.get('/', (req, res) => {

    res.send('Hello World!');

});