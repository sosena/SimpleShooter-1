


Rock.prototype = Object.create(Phaser.Sprite.prototype);
Rock.prototype.constructor = Rock;
Rock.prototype.force = {x:0.0, y:0.0};

var rock;




function Rock(game, x, y) {
    console.log("Creating rock.....");
    Phaser.Sprite.call(this, game, x, y, 'rock');
    game.physics.arcade.enable(this);
    this.scale.setTo(0.09, 0.09);
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
}

Rock.prototype.collide = function(){
    console.log("rock collided detected...");
    this.destroy();
}

Rock.prototype.update = function() {
    console.log("Updating...");
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





function Rock(game, x, y) {

    
    
    var rockGroup = game.add.group();
    rockGroup.position.x = x;
    rockGroup.position.y = y;

    rock = rockGroup.create(0, 0, 'rock');
    game.physics.arcade.enable(rock);
    rock.scale.setTo(0.09, 0.09);
    rock.anchor.setTo(0.5, 0.5);


//    group.add(rockGroup);

    console.log("IN rock  create");
    this.cursors = game.input.keyboard.createCursorKeys();

    rock.collide = function(){
        this.destroy();
    }
}

   


