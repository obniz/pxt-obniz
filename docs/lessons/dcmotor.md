# DCMotor

Rotate DCMotor when embedded switch pushed.


```blocks
button.switchChangeEvent(SwitchEvent.push, function () {
    motor.move(ObnizIo.io0, ObnizIo.io1, MotorDirection.forward)
})
button.switchChangeEvent(SwitchEvent.none, function () {
    motor.stop(ObnizIo.io0, ObnizIo.io1)
})
motor.power(ObnizIo.io0, ObnizIo.io1, 50)


```