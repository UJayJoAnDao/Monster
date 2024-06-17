const axios = require('axios');

async function getUserInfo(username) {
    console.log(`Starting request for ${username}`);
    if (username.endsWith('.png') || username.endsWith('.jpg') || username.endsWith('.jpeg') || username.endsWith('.gif')){ // 如果URL是圖片的路徑，則返回null
        return null;
    }
    try {
        const response = await axios.get(`http://127.0.0.1:5000/user?name=${username}`);
        // console.log(response.data[0]);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = getUserInfo;