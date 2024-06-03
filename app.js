const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
// Set up middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 建立資料庫連線
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'game_store'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// 讀取所有商品
app.get('/api/products', (req, res) => {
    let sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});

// 記錄交易
app.post('/api/transactions', (req, res) => {
    const { product_id } = req.body;
    let sql = 'INSERT INTO transactions (product_id) VALUES (?)';
    db.query(sql, [product_id], (err, result) => {
        if (err) {
            throw err;
        }
        res.json({ message: 'Transaction recorded', transactionId: result.insertId });
    });
});

// Set up routes
app.use('/', routes);

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});