
Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


var enemy;


function Enemy(game, x, y) {
    console.log("Creating enemy");
    Phaser.Sprite.call(this, game, x, y, 'enemy');
    game.physics.arcade.enable(this);
    this.scale.setTo(0.09, 0.09);
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
}

Enemy.prototype.collide = function(){
    console.log("Enemy collided detected");
    this.destroy();
}

Enemy.prototype.update = function() {
    console.log("Updating");
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    this.angle ++;
}

