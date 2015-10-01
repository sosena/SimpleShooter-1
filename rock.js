


Rock.prototype = Object.create(Phaser.Sprite.prototype);
Rock.prototype.constructor = Rock;
Rock.prototype.force = {x:0.0, y:0.0};

var wasd;

function Rock(group, x, y) {

var rockGroup = game.add.group();
    rockGroup.position.x = x;
    rockGroup.position.y = y;

    rock = rockGroup.create(0, 0, 'rock');
    game.physics.arcade.enable(rock);
    rock.scale.setTo(0.09, 0.09);
    rock.anchor.setTo(0.5, 0.5);

    group.add(rockGroup);

    console.log("IN rock  create");
    this.cursors = game.input.keyboard.createCursorKeys();

    rock.collide = function(){
        this.destroy();
    }

}

Rock.prototype.update = function() {

    
console.log("IN rock  enemy");


}
   


