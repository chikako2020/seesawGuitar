let 傾きX = 0
let 音 = [
262,
294,
330,
349,
392,
440,
494,
523
]
basic.forever(function () {
    傾きX = pins.map(
    input.acceleration(Dimension.X),
    -1023,
    1023,
    0,
    7
    )
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(音[傾きX])
        basic.showIcon(IconNames.EigthNote)
    } else {
        music.ringTone(0)
        basic.clearScreen()
    }
})
