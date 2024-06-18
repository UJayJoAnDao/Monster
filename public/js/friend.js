// const dbAPI = 'http://127.0.0.1:5000';
class Player {
    constructor(name, health = 100) {
        this.name = name;
        this.health = health;
        this.friends = [];
    }

    addFriend(friend) {
        if (!this.friends.includes(friend)) {
            this.friends.push(friend);
        }
    }

    attack(other) {
        const damage = 10;
        other.health -= damage;
        document.getElementById('friend-list').innerHTML = `${this.name} 攻擊了 ${other.name}，造成 ${damage} 點傷害。${other.name} 現在剩餘 ${other.health} 點血量。`;
    }
}


async function attackTo(username, damage) {
    console.log(`Attack to ${username}`);
    if (username.endsWith('.png') || username.endsWith('.jpg') || username.endsWith('.jpeg') || username.endsWith('.gif')){ // 如果URL是圖片的路徑，則返回null
        return null;
    }
    try {
        const response = await fetch(dbAPI+'/attack', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username,
                damage: damage
            }),
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

// 創建一些玩家
let players = [
    new Player("Ethan"),
    new Player("Bob"),
    new Player("Charlie"),
    new Player("Diana"),
    new Player("Tim"),
    new Player("Frank"),
    new Player("Alice")
];

// 以玩家0當作主要玩家，加入一些好友
players[1].addFriend(players[0]);
players[1].addFriend(players[4]);
players[1].addFriend(players[5]);
players[0].health = 10;  // 測試用，將玩家0的血量設為10
// 當頁面加載時，顯示好友清單
document.addEventListener('DOMContentLoaded', function() {
    displayFriends(players[1]);
});

function displayFriends(player) {
    const output = document.getElementById('friend-list');
    output.innerHTML = '';
    player.friends.forEach((friend, index) => {
        // alert("更新好友列表");
        output.innerHTML += `
            <p>姓名：${friend.name}</p>
            <p>血量：${friend.health}</p>
            <button onclick="attackFriend(${index}, '${player.name}')">攻擊</button>
            <hr>
        `;
    });
}

function attackFriend(index, playerName) {
    const player = players.find(p => p.name == playerName);
    const friend = player.friends[index];
    if (friend.health > 0) {
        friend.health -= 10; // 每次攻擊減少10點血量
        alert(`${friend.name} 受到攻擊, 剩餘血量：${friend.health}`);
        displayFriends(player); // 更新好友列表以顯示新的血量
    } else {
        alert(`${friend.name} 已經被擊敗`);
        attackTo('Bob', 10);//對資料庫進行攻擊
        // alert(document.querySelector('.player-money').textContent.split('$'))
        // document.querySelector('.player-money').textContent = parseInt() + 10;
    }
}

// document.querySelector('.btn_attack').addEventListener('click', function() {
//     alert('攻擊成功');
// displayStrangerDetails();
// });

function displayStrangerDetails() {
    const outputSTG = document.getElementById('outputSTG');
    // 篩選非好友且非當前玩家自己的其他玩家
    const nonFriends = players.filter(p => !players[0].friends.includes(p) && p !== players[0]);
    if (nonFriends.length === 0) {
        outputSTG.innerHTML = '沒有更多的陌生玩家了。';
        return;
    }
    const randomIndex = Math.floor(Math.random() * nonFriends.length);
    const stranger = nonFriends[randomIndex];

    // 直接顯示隨機玩家的詳細信息
    outputSTG.innerHTML = `
        <h3>隨機玩家資料</h3>
        <p>玩家名稱: ${stranger.name}</p>
        <p>剩餘血量: ${stranger.health}</p>
        <button onclick="addFriend(${players.indexOf(stranger)})">添加好友</button>
        <button onclick="players[0].attack(stranger)">攻擊</button>
    `;
}


function showStrangerDetails(strangerId) {
    const stranger = players.find(p => p.name === strangerId);
    const outputSTG = document.getElementById('outputSTG');
    // 顯示玩家名稱、剩餘血量，並提供添加好友和攻擊的按鈕
    outputSTG.innerHTML = `
        玩家名稱: ${stranger.name}<br>
        剩餘血量: ${stranger.health}<br>
        <button onclick="players[0].attack(stranger)">攻擊</button>
        <button onclick="addStrangerFriend('${stranger.name}')">添加好友</button>
    `;
}

function addStrangerFriend(strangerName) {
    const stranger = players.find(p => p.name === strangerName);
    // 調用 Player 類的 addFriend 方法來添加好友
    players[0].addFriend(stranger);
    alert(`${stranger.name} 已被添加到好友列表`);
    displayFriends(players[0]);  // 更新好友列表顯示
}
