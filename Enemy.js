


Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


function Enemy(group, game, x, y) {

   var enemyGroup = game.add.group();
    enemyGroup.position.x = x;
    enemyGroup.position.y = y;

    enemy = enemyGroup.create(0, 0, 'enemy');
    game.physics.arcade.enable(enemy);
    enemy.scale.setTo(0.09, 0.09);
    enemy.anchor.setTo(0.5, 0.5);

    group.add(enemyGroup);



   /* var enemy = group.create(0, 0, 'enemy');
    enemy.position.x = x;
    enemy.position.y = y;
    enemy.scale.setTo(0.05, 0.05);
    enemy.anchor.setTo(0.5, 0.5);

    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    console.log("IN crete enemy");
   //game.add.existing(this);
   // this.body.allowRotation = false;

   // game.add.existing(this);
    
    enemy.collide = function() {
        this.destroy();
    };*/
}

Enemy.prototype.update = function() {

	console.log("IN update enemy");
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /* look at the mouse */
    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;

    game.physics.arcade.moveToPointer(this, 60, player.input.activePointer, 500);
    console.log("The coor are %d %d ", this.x , this.y);
    //game.physics.arcade.accelerateToXY(this , player.x , player.y )
//    this.angle++;

}