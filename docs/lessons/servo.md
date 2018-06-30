# Servo Motor

Control servo motor angle with potentiometer.

```blocks
loops.forever(function () {
    display.clear()
    display.print_num(sensor.potentiometerValue(ObnizIo.io0, ObnizIo.io1, ObnizIo.io2))
    motor.angle(
    ObnizIo.io9,
    ObnizIo.io10,
    ObnizIo.io11,
    sensor.potentiometerValue(ObnizIo.io0, ObnizIo.io1, ObnizIo.io2) * 90
    )
    loops.pause(100)
})


```