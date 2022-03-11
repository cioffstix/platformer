scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.bottom < location.y) {
        L_A_S_T = location.y
        touching_ground = true
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    item = sprites.create(assets.image`smallStrawberry`, SpriteKind.Food)
})
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
controller.C.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`smallApple`, SpriteKind.Food)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(5)
})
let mySprite: Sprite = null
let item: Sprite = null
let L_A_S_T = 0
let H_I_G_H_I_S_T = 0
let touching_ground = false
let Jumper: Sprite = null
tiles.setTilemap(tilemap`level1`)
Jumper = sprites.create(assets.image`Ducky`, SpriteKind.Player)
tiles.placeOnTile(Jumper, tiles.getTileLocation(0, 14))
scene.cameraFollowSprite(Jumper)
Jumper.ay = 150
let Gound_Jump_ability = true
touching_ground = true
info.setScore(0)
H_I_G_H_I_S_T = 300
L_A_S_T = 78
game.onUpdate(function () {
    Jumper.x += controller.dx()
})
