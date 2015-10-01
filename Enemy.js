


Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


function Enemy(game, group, x, y) {

    var enemy = group.create(0, 0, 'enemy');
    enemy.position.x = x;
    enemy.position.y = y;
    enemy.scale.setTo(0.05, 0.05);
    enemy.anchor.setTo(0.5, 0.5);

    game.physics.enable(enemy, Phaser.Physics.ARCADE)
   // game.add.existing(this);
    
    enemy.collide = function() {
        this.destroy();
    };
}

Enemy.prototype.update = function() {

    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /* look at the mouse */
    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;

    game.physics.arcade.moveToXY(this , this.x - 10 , this.y )
//    this.angle++;

}