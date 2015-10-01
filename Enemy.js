


Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


var enemy;

function Enemy(group, game, x, y) {

   var enemyGroup = game.add.group();
    enemyGroup.position.x = x;
    enemyGroup.position.y = y;

    enemy = enemyGroup.create(0, 0, 'enemy');
    game.physics.arcade.enable(enemy);
    enemy.scale.setTo(0.09, 0.09);
    enemy.anchor.setTo(0.5, 0.5);

    group.add(enemyGroup);
    /*enemy.collide = function(){
        this.destroy();
    }*/

}

Enemy.collide = function(){
    this.destroy();
}


Enemy.prototype.update = function() {

    enemies.forEach(function(item) {

        item.angle++;
    });
	
    console.log("IN update enemy");
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /* look at the mouse */
    this.angle ++;
   // this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;

   // game.physics.arcade.moveToPointer(this, 60, player.input.activePointer, 500);
    console.log("The coor are %d %d ", this.x , this.y);
    //game.physics.arcade.accelerateToXY(this , player.x , player.y )
//    this.angle++;

}