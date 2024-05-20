# 軟體工程:Monster



## 我的環境(應該不會差太多，不一樣沒關係)

- Node.js (v18.14.2)
- npm (v9.5.0)

## 安装

1. clone此專案: `git clone https://github.com/UJayJoAnDao/Monster.git`
2. 進入項目目錄: `cd Monster`
3. 安装依賴項目: `npm install`

## 運行

- 啟動網頁應用: `nodemon index.js`，這時候你就可以使用`localhost:3000`查看網頁囉。
(如果無法執行該指令，可能是尚未安裝nodemon，也可以使用`node index.js`啟動伺服器，缺點是更改檔案需要重啟伺服器)

## 資料夾說明
安裝步驟完成後，專案料夾會像以下:
```
專案資料夾
├── node_modules/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── views/
│   └── home.ejs
├── routes/
│   └── index.js
├── app.js
├── .gitignore
├── package-lock.json
├── package.json
│
├── flask_app/
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   ├── templates/
│   │   └── login.html
│   ├── __init__.py
│   ├── models.py
│   ├── routes.py
│   └── database.py
│
├── venv/
└── README.md
```
## Node.js 部分

- `node_modules/`: 存放 Node.js 的相依模組。
- `public/`: 存放 Node.js 部分的靜態資源。
    - `css/`: 存放 CSS 樣式表文件。
    - `js/`: 存放 JavaScript 文件。
    - `images/`: 存放圖片文件。
- `views/`: 存放 EJS 模板文件,用於渲染動態 HTML 頁面。
    - `home.ejs`: 主頁模板。
- `routes/`: 存放 Express.js 路由文件,定義應用程式的端點和請求處理邏輯。
    - `index.js`: 主要的路由文件。
- `app.js`: Express.js 應用程式的主要入口點,配置中間件和路由。
- `.gitignore`: 指定 Git 版本控制系統應該忽略的文件和目錄。
- `package-lock.json`: 記錄當前安裝的 npm 包的確切版本號,以確保可重複的構建。
- `package.json`: 包含專案的元數據和相依項列表,用於管理 Node.js 專案。

## Flask 部分

- `flask_app/`: 包含 Flask 應用程式的所有文件和資料夾。
    - `static/`: 存放 Flask 部分的靜態資源。
        - `css/`: 存放 CSS 樣式表文件。
        - `js/`: 存放 JavaScript 文件。
    - `templates/`: 存放 Jinja2 模板文件,用於渲染動態 HTML 頁面。
        - `login.html`: 登入頁面模板。
    - `__init__.py`: Flask 應用程式的初始化文件,創建 Flask 實例並進行相關配置。
    - `models.py`: 定義應用程式的數據模型,通常使用 Flask-SQLAlchemy 之類的擴展來處理數據庫操作。
    - `routes.py`: 定義 Flask 應用程式的路由和視圖函數,處理 HTTP 請求和響應。
    - `database.py`: 包含數據庫相關的配置和工具函數。

## 其他

- `venv/`: Python 虛擬環境目錄,用於隔離專案的 Python 相依項。
- `README.md`: 專案的說明文件,包含專案的概述、安裝指南和使用說明等。