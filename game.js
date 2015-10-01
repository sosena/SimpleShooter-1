
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
}

function create() {

    ship = new Ship(game , 50 , 50);
    enemies = game.add.group();

    for(i = 0 ; i < 10 ; i++){
        enemy = new Enemy(game, enemies, 200 + i*70 , 200);
    }

   // ship = game.add.sprite(50, 50, 'ship');

  //  ship.anchor.setTo(0.5, 0.5);
    this.cursors = game.input.keyboard.createCursorKeys();

    viewGroup = game.add.group();
    

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
}

function collisionHandler(player, collider) {
    console.log("collison");
    collider.collide();
}

function update() {
    console.log("collison");
    game.physics.arcade.overlap(ship, enemy, collisionHandler, null, this);
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


