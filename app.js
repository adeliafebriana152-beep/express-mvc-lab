const express = require('express'); 
const app = express(); 
const pageRoutes = require('./routes/page.route'); // 1. Import Router

app.set('view engine', 'ejs'); 
app.use(express.static('public'));

// 2. Pasang router ke pipeline Express (Hapus app.get('/') lama) 
app.use('/', pageRoutes);
app.use((req, res) => { res.status(404).send('404 Not Found'); }); 
app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server MVC Aktif!');
});