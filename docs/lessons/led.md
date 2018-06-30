# LED

Turn on LED with obniz embedded Switch.

```blocks

button.switchChangeEvent(SwitchEvent.push, function () {
    led.output(ObnizIo.io0, ObnizIo.io1, true)
})
button.switchChangeEvent(SwitchEvent.none, function () {
    led.output(ObnizIo.io0, ObnizIo.io1, false)
})
display.print("Push switch!")



```