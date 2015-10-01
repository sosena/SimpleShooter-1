
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var player;
var wasd;

function preload () {
    game.load.image('player', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
    game.load.image('view' , 'view.png');
}

function create() {

    game.add.tileSprite(0, 0, game.width, game.height, 'view');

    player = new Player(game , game.world.centerX , game.world.centerY);
   // ship = new Ship(game , 50 , 50);
    enemies = game.add.group();
    rocks = game.add.group();

    for(var i = 0 ; i < 10 ; i++){
        enemy = new Enemy(enemies, game , game.world.randomX , game.world.randomY);
    }

    for(var i = 0 ; i < 5 ; i++){
        rock = new Rock(rocks, game.world.randomX, game.world.randomY);
    }
   // ship = game.add.sprite(50, 50, 'ship');

  //  ship.anchor.setTo(0.5, 0.5);
    this.cursors = game.input.keyboard.createCursorKeys();
}

function collisionHandler(player, collider) {
    console.log("collison");
    collider.collide();
}

function update() {
   // console.log("collison");
    game.physics.arcade.overlap(player, enemy, collisionHandler, null, this);
    //var mX = game.input.mousePointer.x;
    //var mY = game.input.mousePointer.y;
    /* look at the mouse */
   // ship.angle = Math.atan2(ship.position.x - mX, ship.position.y - mY)  * -57.2957795;
/*
    if (wasd.up.isDown) {
        ship.y -= 3;
    }
    if (wasd.down.isDown) {
        ship.y += 3;
    }
    if (wasd.left.isDown) {
        ship.x -= 3;
    }
    if (wasd.right.isDown) {
        ship.x += 3;
    }*/

}


