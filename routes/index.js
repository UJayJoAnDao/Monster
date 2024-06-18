const express = require('express');
const router = express.Router();
const getUserInfo = require('../api/api_user'); // Import the getUserInfo function

// Login route
router.get('/login', (req, res) => {
    res.send('Login page');
});

// // Home page route
// router.get('/:username', (req, res) => {
//     const username = req.params.username;
//     console.log("使用者:",getUserInfo(username));
//     res.render('home',{ user: username});
// });
// Home page route
router.get('/:username', async (req, res, next) => {
    const username = req.params.username;
    if (username.endsWith('.png') || username.endsWith('.jpg') || username.endsWith('.jpeg') || username.endsWith('.gif')){
        // 如果URL是圖片的路徑，則跳過getUserInfo並繼續處理其他中間件或路由
        next();
    } else {
        try {
            const userInfo = await getUserInfo(username);
            console.log("使用者:", userInfo,"進入");
            res.render('home'); 
            //可用後端取得的資料對使用者頁面進行渲染，例如：res.render('home', { user: userInfo });。這次沒有使用該方式，但是你可以在這裡使用。，需要配合views/home.ejs與api/api_user.js。
            // 目前方式是直接渲染home.ejs，不帶任何資料，在home.ejs中使用JavaScript從後端獲取資料。
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
});
module.exports = router;