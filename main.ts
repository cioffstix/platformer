scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.bottom < location.y) {
        touching_ground = true
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playMelody("F C5 B B A B B F ", 150)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (touching_ground) {
        Jumper.setVelocity(0, -125)
        touching_ground = false
    }
})
let touching_ground = false
let Jumper: Sprite = null
tiles.setTilemap(tilemap`level1`)
Jumper = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Jumper, tiles.getTileLocation(0, 14))
scene.cameraFollowSprite(Jumper)
Jumper.ay = 150
let Gound_Jump_ability = true
touching_ground = true
let item = sprites.create(assets.image`smallStrawberry`, SpriteKind.Food)
game.onUpdate(function () {
    Jumper.x += controller.dx()
})
