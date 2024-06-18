import sqlite3

# Insert
def insert():
    # 連接到 SQLite 資料庫
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()
    # 插入 User 資料
    cursor.execute('INSERT INTO Users (UserName, money, HP) VALUES (?, ?, ?)', ('Alice', 0, 100))
    cursor.execute('INSERT INTO Users (UserName, money, HP) VALUES (?, ?, ?)', ('Bob', 0, 100))

    # 插入 Account 資料
    cursor.execute('INSERT INTO Account (account, pwd, user_id) VALUES (?, ?, ?)', ('alice_account', 'alice_pwd', 1))
    cursor.execute('INSERT INTO Account (account, pwd, user_id) VALUES (?, ?, ?)', ('bob_account', 'bob_pwd', 2))

    # 插入 Sprites 資料
    cursor.execute('INSERT INTO Sprites (Type, Name, Image, Info) VALUES (?, ?, ?, ?)',
                   ('攻擊型', '可達壓力很大啊', 'images/sprite/sprite1.png','攻擊時額外造成15點傷害'))
    cursor.execute('INSERT INTO Sprites (Type, Name, Image, Info) VALUES (?, ?, ?, ?)',
                   ('攻擊型', '帝牙齒對朗造盧卡', 'images/sprite/sprite2.png','攻擊時額外獲得10塊錢'))
    cursor.execute('INSERT INTO Sprites (Type, Name, Image, Info) VALUES (?, ?, ?, ?)',
                   ('防禦型', '妙挖種子~種子', 'images/sprite/sprite3.png','減輕受到10點攻擊'))
    cursor.execute('INSERT INTO Sprites (Type, Name, Image, Info) VALUES (?, ?, ?, ?)',
                   ('防禦型', '超跑情人夢', 'images/sprite/sprite4.png','減少10塊被搜刮的錢'))
    cursor.execute('INSERT INTO Sprites (Type, Name, Image, Info) VALUES (?, ?, ?, ?)',
                   ('普通型', '喵喵', 'images/sprite/sprite5.png', '攻擊時額外造成5點傷害,減少3塊被搜刮的錢'))
    cursor.execute('INSERT INTO Sprites (Type, Name, Image, Info) VALUES (?, ?, ?, ?)',
                   ('普通型', '你超胖丁', 'images/sprite/sprite6.png', '攻擊時額外獲得3塊錢,減輕受到3點攻擊'))
    cursor.execute('INSERT INTO Sprites (Type, Name, Image, Info) VALUES (?, ?, ?, ?)',
                   ('攻擊型', '比克提尼老哥', 'images/sprite/sprite7.png', '把你全家骨灰都給楊了'))


    # 插入 Social 資料
    cursor.execute('INSERT INTO Social (Friend, user_id) VALUES (?, ?)', ('Friend1', 1))
    cursor.execute('INSERT INTO Social (Friend, user_id) VALUES (?, ?)', ('Friend2', 2))

    # 插入 Item 資料
    cursor.execute('INSERT INTO Item (name, info, price) VALUES (?, ?, ?)',
                   ('遊戲機', '迴避+(level*2)%', 200))
    cursor.execute('INSERT INTO Item (name, info, price) VALUES (?, ?, ?)',
                   ('衣櫥', '防禦值+(Level*5)點', 300))
    cursor.execute('INSERT INTO Item (name, info, price) VALUES (?, ?, ?)',
                   ('運動用品', '攻擊速度+Level%', 100))
    cursor.execute('INSERT INTO Item (name, info, price) VALUES (?, ?, ?)',
                   ('浴缸', '反傷+level點', 100))
    cursor.execute('INSERT INTO Item (name, info, price) VALUES (?, ?, ?)',
                   ('書桌', '降低損失資金level*10元', 400))
    cursor.execute('INSERT INTO Item (name, info, price) VALUES (?, ?, ?)',
                   ('我有一台法拉利', '他人攻擊數值-(Level*2)點', 500))

    # 插入 Shop 資料
    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('精靈蛋蛋', 500, 'images/product1.png'))
    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('魔法藥水', 300, 'images/product2.png'))
    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('我們一起', 400, 'images/product3.png'))
    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('去太空旅行', 500, 'images/product4.png'))

    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('遊戲機', 200, 'images/furnitures/nintendo-switch.png'))
    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('衣櫥', 300, 'images/furnitures/furniture.png'))
    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('運動用品', 100, 'images/furnitures/sport.png'))
    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('浴缸', 100, 'images/furnitures/bath-tub.png'))
    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('書桌', 400, 'images/furnitures/workspace.png'))
    cursor.execute('INSERT INTO Shop (name, price, image) VALUES (?, ?, ?)',
                   ('我有一台法拉利', 500, ' images/furnitures/racing-car.png'))

    # 提交變更
    conn.commit()

    # 關閉連接
    conn.close()

# Insert UserSprites
def UserSprites():
    # 連接到 SQLite 資料庫
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()

    # 插入 UserSprites 資料
    cursor.execute('INSERT INTO UserSprites (UserID, UserName,SpriteID, Experience) VALUES (?, ?, ?, ?)', (1, 'Alice', 1, 0))
    cursor.execute('INSERT INTO UserSprites (UserID, UserName,SpriteID, Experience) VALUES (?, ?, ?, ?)', (2, 'Bob', 3, 100))
    cursor.execute('INSERT INTO UserSprites (UserID, UserName,SpriteID, Experience) VALUES (?, ?, ?, ?)', (1, 'Alice', 2, 50))


    # 提交變更
    conn.commit()
    # 關閉連接
    conn.close()
# 查詢,取得想要的value
def a_select(function, table):
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()
    # 查詢 User 表格中的所有資料
    cursor.execute(function)
    data = cursor.fetchall()
    print(f"{table} 表格中的資料：")
    for row in data:
        print(row)
    # 關閉連接
    conn.close()
def User_select(name):
    # 連接到 SQLite 資料庫
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()
    # 查詢 User 表格中的所有資料
    cursor.execute('''
        SELECT *
        FROM Users
        WHERE Users.UserName = ?
    ''', (name,))
    user_data = cursor.fetchall()
    user_data = [user[1:] for user in user_data]
    # print("User 表格中的資料：")
    # for row in user_data:
    #     print('name:', row[1])
    #     print('money:', row[2])
    #     print('HP:', row[3])
    # 關閉連接
    conn.close()
    return user_data
def UserSprites_select(name):
    # 連接到 SQLite 資料庫
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()
    # 查詢 User 表格中的所有資料
    cursor.execute('''
         SELECT *
         FROM UserSprites
         WHERE UserSprites.UserName = ?
     ''', (name,))
    user_data = cursor.fetchall()
    print("UserSprites 表格中的資料：")
    for row in user_data:
        print('user_ID:', row[1])
        print('name:', row[2])
        print('sprites_ID:', row[3])
        print('EXP:', row[4])

    # 關閉連接
    conn.close()
def sprite():
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()
    cursor.execute('''SELECT * FROM Sprites''')
    sprite_data = cursor.fetchall()
    print(sprite_data)
    conn.close()
    return sprite_data
# 取得與其他表所對應的key value
def social(friend):
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()
    # 查詢 Social 表格中的 Friend1 的資料以及其對應的用戶名稱
    cursor.execute('''
        SELECT Social.Friend, Users.UserName
        FROM Social
        JOIN Users ON Social.user_id = Users.UserID
        WHERE Social.Friend = ?
    ''', (friend,))
    friend_data = cursor.fetchone()

    if friend_data:
        print(f"Friend1 和 {friend_data[1]} 有關聯。")
    else:
        print("找不到 Friend1 和任何用戶的關聯。")
    # 關閉連接
    conn.close()
def account(account):
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()
    # 查詢 Social 表格中的 Friend1 的資料以及其對應的用戶名稱
    cursor.execute('''
        SELECT Account.account, Users.UserName
        FROM Account
        JOIN Users ON Account.user_id = Users.UserID
        WHERE Account.account = ?
    ''', (account,))
    friend_data = cursor.fetchone()

    if friend_data:
        print(f"alice_account 和 {friend_data[1]} 有關聯。")
    else:
        print("找不到 Friend1 和任何用戶的關聯。")
    # 關閉連接
    conn.close()

def update_Sprites(EXP,user_name, spriteID):
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE UserSprites SET Experience = ?
        WHERE UserName = ? AND SpriteID = ?;
    ''',(EXP, user_name, spriteID))

    # 提交變更
    conn.commit()
    # 關閉連接
    conn.close()
def update_User(user_name, money, HP):
    conn = sqlite3.connect('MY.db')
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE Users SET money = ?, HP = ?
        WHERE UserName = ?;
    ''',(money, HP, user_name))

    # 提交變更
    conn.commit()
    # 關閉連接
    conn.close()

# if __name__ == '__main__':
    # ------ insert區塊 ------
    # insert()
    # UserSprites()
    # a_select('SELECT * FROM UserSprites', 'UserSprites')

    # ------ 功能區塊 ------
    # social('Friend1')                                     # 找出社交關係
    # account('alice_account')                              # 判斷帳號是否存在
    # update_Sprites(10,'Alice', 1)                         # 更新使用者擁有的精靈資訊
    UserSprites_select('Alice')                           # 顯使使用者擁有的精靈資訊

    # update_User('Alice', 0, 100)                          # 更新使用者資訊
    # User_select('Alice')                                    # 顯示使用者資訊
<<<<<<< HEAD
    # sprite()
=======
    # pass
>>>>>>> ffb3be07da2bf43b667a87c100077e32d0e06c39
