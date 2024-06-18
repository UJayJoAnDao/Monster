# 軟體工程:Monster



## 我的環境(應該不會差太多，不一樣沒關係)

- Node.js (v18.14.2)
- npm (v9.5.0)
- pyhton (v3.11.3)

## 安装

1. clone此專案: `git clone https://github.com/UJayJoAnDao/Monster.git`
2. 進入項目目錄: `cd Monster`
3. 安装依賴項目: `npm install`

## 運行

- 啟動網頁應用: `nodemon app.js`，這時候你就可以使用`localhost:3000`查看網頁囉。
(如果無法執行該指令，可能是尚未安裝nodemon，也可以使用`node app.js`啟動伺服器，缺點是更改檔案需要重啟伺服器)

- 啟動資料庫API程式:請另外開一個 cmd 執行以下程式，<span style="color:red">先到 Monster 資料夾中</span>，執行以下命令:
    ```cmd
    cd flask_app
    python app.py
    ```
    如使用 python 有遇到問題，專案中會需要安裝flask、cors，請在`flask_app`資料夾中執行以下命令:
    ```
    pip install flask
    pip install flask_cors
    ```

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
│   ├── __pycache__
│   │   └── Database_function.cpython-311.py
│   ├── My.db
│   ├── Database_function.py
│   ├── Create_Database.py
│   └── app.py
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

- `flask_app/`：Flask 應用程式的所有文件和資料夾，在這專案中flask主要負責對資料庫操作的API。
    - `__pycache__/`：這個資料夾包含 Python 編譯的 .pyc 檔案，這些檔案是 Python 在執行時為了提高效能而自動產生的。
        - `Database_function.cpython-311.py`：這是 `Database_function.py` 的編譯版本。
    - `My.db`：這是 SQLite 數據庫檔案，用於儲存應用程式的數據。
    - `Database_function.py`：這個 Python 檔案包含與數據庫相關的所有函數。
    - `Create_Database.py`：這個 Python 檔案用於創建和初始化數據庫。
    - `app.py`：這是 Flask 應用程式的主要檔案，包含API相關處理與資訊。

## 其他

- `venv/`: Python 虛擬環境目錄,用於隔離專案的 Python 相依項。
- `README.md`: 專案的說明文件,包含專案的概述、安裝指南和使用說明等。