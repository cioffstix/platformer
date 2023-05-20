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
controller.C.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(5)
})
let CRAZY: Sprite = null
let item: Sprite = null
let L_A_S_T = 0
let H_I_G_H_I_S_T = 0
let touching_ground = false
let Jumper: Sprite = null
tiles.setTilemap(tilemap`level6`)
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
music.playMelody("C5 B C5 B C5 B A G ", 200)
game.onUpdate(function () {
    Jumper.x += controller.dx()
})
