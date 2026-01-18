const express = require('express');
const app = express();
const path = require('path');

// 讓 Node.js 讀取當前資料夾的靜態檔案 (HTML/CSS)
app.use(express.static(__dirname));

const PORT = 3000;
// 監聽 0.0.0.0 讓同 Wi-Fi 的手機可以連進來
app.listen(PORT, '0.0.0.0', () => {
    console.log(`伺服器啟動成功！`);
    console.log(`1. 電腦瀏覽請開: http://localhost:${PORT}`);
    console.log(`2. 手機瀏覽請輸入電腦 IP 地址加上 :${PORT}`);
});