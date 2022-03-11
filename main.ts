scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.bottom < location.y) {
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
    }
})
controller.C.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`smallApple`, SpriteKind.Food)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let mySprite: Sprite = null
let item: Sprite = null
let touching_ground = false
let Jumper: Sprite = null
tiles.setTilemap(tilemap`level1`)
Jumper = sprites.create(assets.image`Ducky`, SpriteKind.Player)
tiles.placeOnTile(Jumper, tiles.getTileLocation(0, 14))
scene.cameraFollowSprite(Jumper)
Jumper.ay = 150
let Gound_Jump_ability = true
touching_ground = true
game.onUpdate(function () {
    Jumper.x += controller.dx()
})
