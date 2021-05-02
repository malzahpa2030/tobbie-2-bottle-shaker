input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1000; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), randint(1, 225))
        led.toggle(randint(0, 4), randint(0, 4))
        basic.pause(10)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
