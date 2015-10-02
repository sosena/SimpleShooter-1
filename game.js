
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var player;
var enemy;
var rock;
var ship;
var wasd;

function preload () {
  game.load.image('player' , 'player.png');
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
    game.load.image('view' , 'view.png');
}

function create() {

    game.add.tileSprite(0, 0, game.width, game.height, 'view');

    player = new Player(game , game.world.centerX , game.world.centerY);
    ship = new Ship(game , 50 , 50);
    enemies = game.add.group();
    rocks = game.add.group();

    for(var i = 0 ; i < 10 ; i++){
        enemy = new Enemy(game , game.world.randomX , game.world.randomY);
    }

    for(var i = 0 ; i < 5 ; i++){
        rock = new Rock(game , game.world.randomX, game.world.randomY);
    }

    this.cursors = game.input.keyboard.createCursorKeys();
}


function update() {
  console.log("in UPDATE!")
   var bool =  game.physics.arcade.overlap(player, enemies, killPlayer, null, this);
   console.log(bool);
   var update = game.physics.arcade.overlap(ship, rocks, destroyRock, null, this);
    console.log(update);
}


/*

function update() {

    console.log("IN UPDATE!")

   enemies.forEach(function(item) {

     game.physics.arcade.collide();
     game.physics.arcade.overlap(player, item, killPlayer, null , this);
    });

    rocks.forEach(function(item) {
       game.physics.arcade.overlap(ship, item, distroyRock, null , this);
    });
}
*/
function killPlayer(player, collider) {
  console.log("in killPlayer");
    player.collide();
}

function destroyRock(ship, collider) {
  console.log("in distroyRock")
    collider.collide();
}



