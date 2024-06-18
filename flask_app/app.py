from flask import Flask, request
from flask_cors import CORS
import Database_function as db

app = Flask(__name__)
CORS(app)  # 允许所有域名访问

@app.route('/user', methods=['GET'])
def get_user():
    name = request.args.get('name')
    print(name)
    result = db.User_select(name)
    if result is None:
        return {'message': 'User not found'}, 404
    return result

@app.route('/user', methods=['POST'])
def update_user():
    data = request.get_json()
    name = data['name']
    money = data['money']
    HP = data['HP']
    db.update_User(name, money, HP)
    return {'message': 'User updated successfully'}
@app.route('/attack', methods=['POST'])
def update_hp():
    data = request.get_json()
    name = data['name']
    damage = data['damage']
    print("=============")
    print(data['damage'])
    res = db.User_select(name)[0]
    print(res)
    if res is None:
        return {'message': 'User not found'}, 404
    else:
        print(f'對{name}的攻擊，res:',res)
        HP = res[2] - damage
    db.update_User(name, None, HP)
    return {'message': 'Attack successfully'}
# 其他的路由和函式...

if __name__ == '__main__':
    app.run(debug=True)