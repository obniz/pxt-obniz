# Distance Sensor

Display distance value.

```blocks
loops.forever(function () {
    display.clear()
    display.print_num(sensor.distanceValue(ObnizIo.io0, ObnizIo.io1, ObnizIo.io2))
    loops.pause(100)
})
display.print("Showing distance")


```