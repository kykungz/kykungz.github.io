var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.onclick = function canvasClicked(pos) {
    alert("asdf");

};

window.addEventListener("keydown", handleKeyDown, false);
window.addEventListener("keyup", handleKeyUp, false);
window.addEventListener("onmove", handleMouseMove, false);

function handleMouseMove(pos) {
  hero.x = pos.clientX;
  hero.y = pos.clientY;
}

var fps = 20;
var generateEvery = 500; // ms
var count = 0;
var bullets = {};
var enemies = {};
var hero = new Hero();

setInterval(update, fps);





function handleKeyUp(e) {
    var keyCode = e.keyCode;
    switch (keyCode) {
        case 65: // A
            hero.left = false;
            break;
        case 83: // S
            hero.down = false;
            break;
        case 68: // D
            hero.right = false;
            break;
        case 87: // W
            hero.up = false;
            break;
        default:


    }
}

function handleKeyDown(e) {
    var keyCode = e.keyCode;
    switch (keyCode) {
        case 65: // A
            hero.left = true;
            break;
        case 83: // S
            hero.down = true;
            break;
        case 68: // D
            hero.right = true;
            break;
        case 87: // W
            hero.up = true;
            break;
        case 13: // ENTER
            console.log(hero.face);
            generateBullet();
            break;
        default:
            break;
    }
}

function update() {
    count++;
    if (count >= generateEvery / fps) {
        count = 0;
        generateEnemy();
    }
    updateHero();
    updateBullets();
    updateEnemies();
    render();
}

function updateEnemies() {
    for (var key in enemies) {
        var seta = Math.atan(disY(enemies[key], hero) / disX(enemies[key], hero));
        if (enemies[key].x < hero.x) {
            enemies[key].x += enemies[key].speed * Math.cos(seta);
            enemies[key].y += enemies[key].speed * Math.sin(seta);
        } else if (enemies[key].x > hero.x) {
            enemies[key].x -= enemies[key].speed * Math.cos(seta);
            enemies[key].y -= enemies[key].speed * Math.sin(seta);
        }
        for (var bulletkey in bullets) {
            if (isCollide(enemies[key], bullets[bulletkey])) {
                delete enemies[key];
                delete bullets[bulletkey];
                break;
            }
        }
    }
}


function updateBullets() {
    for (var key in bullets) {
        bullets[key].x += bullets[key].speedX;
        bullets[key].y -= bullets[key].speedY;

    }
}

function generateBullet() {
    var bullet = {};
    bullet.width = 10;
    bullet.height = 10;
    bullet.x = hero.x + hero.width / 2 - bullet.width / 2;
    bullet.y = hero.y + hero.height / 2 - bullet.height / 2;
    bullet.speed = 10;
    bullet.speedX = bullet.speed * Math.sin(hero.face * 45 * Math.PI / 180);
    bullet.speedY = bullet.speed * Math.cos(hero.face * 45 * Math.PI / 180);
    bullets[Math.random()] = bullet;


}

function generateEnemy() {
    enemies[Math.random()] = new Enemy();
}


function updateHero() {
    if (hero.up) {
        hero.y -= hero.speed;
    }
    if (hero.down) {
        hero.y += hero.speed;
    }
    if (hero.right) {
        hero.x += hero.speed;
    }
    if (hero.left) {
        hero.x -= hero.speed;
    }


    if (hero.up && hero.right) {
        hero.face = 1;
    } else if (hero.right && hero.down) {
        hero.face = 3;
    } else if (hero.down && hero.left) {
        hero.face = 5;
    } else if (hero.left && hero.up) {
        hero.face = 7;
    } else if (hero.right) {
        hero.face = 2;
    } else if (hero.up) {
        hero.face = 0;
    } else if (hero.down) {
        hero.face = 4;
    } else if (hero.left) {
        hero.face = 6;
    }

}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderEntity(hero);
    renderEntities(bullets);
    renderEntities(enemies);
}

function renderEntities(list) {
    for (var entity in list) {
        ctx.fillStyle = list[entity].color;
        ctx.fillRect(list[entity].x, list[entity].y, list[entity].width, list[entity].height);
    }
}

function renderEntity(entity) {
    ctx.fillStyle = entity.color;
    ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
    ctx.fillStyle = 'black';
    ctx.fillText(entity.hp, entity.x, entity.y);
}

function disX(a, b) {
    // return Math.abs(a.x - b.x);
    return a.x - b.x;
}

function disY(a, b) {
    //  return Math.abs(a.y - b.y);
    return a.y - b.y;
}

function dis(a, b) {
    // return Math.sqrt(disX(a, b) * disX(a, b) + disY(a, b) * disY(a, b));
    return disX(a, b) * disX(a, b) + disY(a, b) * disY(a, b);
}

function isCollide(a, b) {
    return (a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.height + a.y > b.y);
}


function Enemy() {

    var option = Math.floor(Math.random() * 3);
    switch (option) {
        case 0: // LEFT
            this.x = 0;
            this.y = Math.random() * canvas.height;
            break;
        case 1: // RIGHT
            this.x = canvas.width;
            this.y = Math.random() * canvas.height;
            break;
        case 2: // TOP
            this.x = Math.random() * canvas.width;
            this.y = 0;
            break;
        case 3: // BOTTOM
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            break;
        default:


    }

    this.width = 30;
    this.height = 30;
    this.speed = 2;
    this.color = 'red';
    this.hp = 1;
}

function Hero() {
    this.x = 200;
    this.y = 200;
    this.width = 50;
    this.height = 50;
    this.hp = 100;
    this.color = 'rgb(56, 52, 255)';
    this.speed = 6;
    this.up = false;
    this.down = false;
    this.right = false;
    this.left = false;
    this.face = 0;


}
