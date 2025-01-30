const express = require('express');
const app = express();
const port = 3000;


app.set('views', '/views');
app.set('view engine', 'ejs');

app.get('/hime', (req, res) => { 
    res.render('index');
 });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});