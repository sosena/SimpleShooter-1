

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
Player.prototype.force = {x:0.0, y:0.0};

var wasd;

function Player(game, x, y) {

    Phaser.Sprite.call(this, game, x, y, 'player');
    this.scale.set(0.5, 0.5);
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

     this.collide = function(){
        this.destroy();
    }

}

Player.prototype.update = function() {

    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;

    if (wasd.up.isDown ) {
      //  player stays in bound
        if(player.y >= 0){
             player.y -= 3;
        }     
    }
    if (wasd.down.isDown) {
        //game.physics.arcade.moveToXY(this , player.x , player.y - 3 );
    if(player.y < game.height - player.height){
         player.y += 3;
     }
   }
    if (wasd.left.isDown) {
       //player stays in boud
     if(player.x >= 0){
         player.x -= 3;
     }
    }
    if (wasd.right.isDown) {
        //player stays in bound
        if(player.x < game.width - player.width){
             player.x +=3;
         }
    }

}



