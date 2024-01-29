scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.bottom < location.y) {
        L_A_S_T = location.y
        touching_ground = true
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    item = sprites.create(assets.image`smallStrawberry`, SpriteKind.Food)
})
function Make_food () {
    CRAZY = sprites.create(assets.image`smallApple`, SpriteKind.Food)
    tiles.placeOnTile(CRAZY, tiles.getTileLocation(2, 10))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (touching_ground) {
        Jumper.setVelocity(0, -125)
        touching_ground = false
        if (H_I_G_H_I_S_T > L_A_S_T) {
            info.changeScoreBy(1)
            H_I_G_H_I_S_T = L_A_S_T
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Jumper.setImage(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `)
})
controller.C.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Jumper.setImage(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.playMelody("C5 A G E B F G C ", 300)
    info.changeScoreBy(100)
})
let CRAZY: Sprite = null
let item: Sprite = null
let L_A_S_T = 0
let H_I_G_H_I_S_T = 0
let touching_ground = false
let Jumper: Sprite = null
tiles.setTilemap(tilemap`level6`)
scene.setBackgroundColor(9)
Jumper = sprites.create(assets.image`Ducky`, SpriteKind.Player)
tiles.placeOnTile(Jumper, tiles.getTileLocation(0, 30))
scene.cameraFollowSprite(Jumper)
Jumper.setStayInScreen(true)
Jumper.ay = 150
let Gound_Jump_ability = true
touching_ground = true
info.setScore(0)
H_I_G_H_I_S_T = 600
L_A_S_T = 78
Make_food()
game.onUpdate(function () {
    Jumper.x += controller.dx()
})
