loops.forever(function () {
    led.output(ObnizIo.io0, ObnizIo.io1, false)
    loops.pause(500)
    led.output(ObnizIo.io0, ObnizIo.io1, true)
    loops.pause(500)
})
display.print("Hello World!")
