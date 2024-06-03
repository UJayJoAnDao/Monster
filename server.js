const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// 設定靜態文件夾
app.use(express.static(path.join(__dirname, 'public')));

// 建立資料庫連線
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
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

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
