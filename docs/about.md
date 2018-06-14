# About obniz block programing

Block programing editor of [obniz](https://obniz.io).
It use editor platform:  [Microsoft MakeCode](https://makecode.com/).



```blocks
loops.forever(function () {
    LED.output(ObnizIo.io0, ObnizIo.io1, true)
    loops.pause(500)
    LED.output(ObnizIo.io0, ObnizIo.io1, false)
    loops.pause(500)
})
```

