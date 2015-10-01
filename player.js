
// player.js
// SimpleShooter player file

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
Player.prototype.force = {x:0.0, y:0.0};

var wasd;

function Player(game, x, y) {

    Phaser.Sprite.call(this, game, x, y, 'player');
    this.scale.set(0.15, 0.15);
    //this.anchor.setTo(0.2, 0.2);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);

    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    }

}

Player.prototype.update = function() {

    // from Arthur's example code
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    // look at the mouse
    player.angle = Math.atan2(player.position.x - mX, player.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown) {
        player.y -= 4;
    }
    if (wasd.down.isDown) {
        player.y += 4;
    }
    if (wasd.left.isDown) {
        player.x -= 4;
    }
    if (wasd.right.isDown) {
        player.x += 4;
    }

}

function killPlayer(player, enemy) {

    kill.player();

}