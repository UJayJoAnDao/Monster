import sqlite3

# 連接到 SQLite 資料庫（如果不存在則會創建一個）
conn = sqlite3.connect('MY.db')
cursor = conn.cursor()

# 建立 User 表格

cursor.execute('''
    CREATE TABLE Users (
        UserID INTEGER PRIMARY KEY AUTOINCREMENT,
        UserName VARCHAR(255) NOT NULL,
        money INTEGER,
        HP INTEGER
        );
    ''')
# 建立 Sprites 表格
cursor.execute('''
    CREATE TABLE Sprites (
        SpriteID INTEGER  PRIMARY KEY AUTOINCREMENT,
        Type VARCHAR(255),
        Name VARCHAR(255) NOT NULL,
        Image VARCHAR(255),
        Info TEXT
    );  
''')
# 建立 UserSprites 表格
cursor.execute('''
    CREATE TABLE UserSprites (
            UserSpriteID INTEGER  PRIMARY KEY AUTOINCREMENT,
            UserID INTEGER ,
            UserName VARCHAR(255) NOT NULL,
            SpriteID INTEGER ,
            Experience INTEGER ,
            FOREIGN KEY (UserID) REFERENCES Users(UserID),
            FOREIGN KEY (SpriteID) REFERENCES Sprites(SpriteID)
        );
''')


# 建立 Account 表格
cursor.execute('''
    CREATE TABLE Account (
        account TEXT PRIMARY KEY,
        pwd TEXT,
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES Users(UserID)
    )
''')



# 建立 Social 表格
cursor.execute('''
    CREATE TABLE Social (
        Friend TEXT,
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES Users(UserID)
    )
''')

# 建立 Item 表格
cursor.execute('''
    CREATE TABLE Item (
        name TEXT PRIMARY KEY,
        info TEXT,
        price INTEGER
    )
''')

# 建立 Shop 表格
cursor.execute('''
    CREATE TABLE Shop (
        ItemID INTEGER  PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price INTEGER,
        image VARCHAR(255)
    )
''')


# 提交變更
conn.commit()

# 關閉連接
conn.close()
