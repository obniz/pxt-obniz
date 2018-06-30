# Potentiometer


Display potentiometer value.

```blocks
loops.forever(function () {
    display.clear()
    display.print_num(sensor.potentiometerValue(ObnizIo.io0, ObnizIo.io1, ObnizIo.io2))
    loops.pause(100)
})

```