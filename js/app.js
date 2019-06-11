// Enemies our player must avoid.
// Variables applied to each of our instances go here
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies
  this.sprite = 'images/enemy-bug.png';
};


//  Enemy's position is updated, required method for game
// Parameter: dt, a time delta between ticks
var collisioncnt = 0;
Enemy.prototype.update = function(dt) {
  // this is used t0 get the speed to the bug
  // multiply the movement by the dt parameter which will ensure the game runs at the same speed for all computers.
  this.x = this.x + this.speed * dt;
  if (this.x >= 505) {
    this.x = 0;
  }
  // condition for collision
  if (this.x < player.x + 40 && this.x + 75 > player.x &&
    this.y < player.y + 40 && this.y + 40 > player.y) {
    player.x = 200;
    player.y = 400;
    // incrementing collision count
    collisioncnt += 1;
    // displays a message if the number of collisions are 4
    if (collisioncnt == 4) {
      var modal1 = document.getElementById("popup1");
      var span = document.getElementsByClassName("close")[0];
      modal1.style.display = "block";
      span.onclick = function() {
        modal1.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal1) {
          modal1.style.display = "none";
        }
      }
    }
  };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// instantiation of objects takes here.
//  enemy objects are placed in an array called allEnemies
var allEnemies = [];
var enemyPosition = [60, 140, 230]
// random method is used here for the random movement of the enemy bugs
enemyPosition.forEach(function(mango) {
  var enemy = new Enemy(0, mango, Math.random() * 400);
  allEnemies.push(enemy);

})
//  player object is placed in a variable called player
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-pink-girl.png';
}
// player object is placed in a variable named player
// player class has an update(), render() and a handleInput() method.

var player = new Player(200, 400);
Player.prototype.update = function(dt) {

};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keys) {
  if (keys === 'left') {
    if (this.x > 85) {
      this.x -= 100;
    }
  }
  if (keys === 'right') {
    if (this.x < 350) {
      this.x += 100;
    }
  }

  if (keys === 'up') {
    if (this.y > 35) {
      this.y -= 80;
    }
  }

  if (keys === 'down') {
    if (this.y < 350) {
      this.y += 90;
    }
  }
  if (this.y < 40) {

    setTimeout(gameFinished, 300);
  }
}
// this function displays thre pop up message using modal box

function gameFinished() {

  var modal = document.getElementById("popup");

  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
// this function is used to reload the window
function restartGame() {
  window.location.reload();
};


// This listens for key presses and sends the keys to your Player.handleInput() method.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
