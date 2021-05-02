input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1000; index++) {
        basic.pause(10)
        led.plot(randint(0, 4), randint(0, 4))
        led.toggle(randint(0, 4), randint(0, 4))
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
basic.forever(function () {
	
})
