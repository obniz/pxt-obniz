# Switch

Use embedded switch.

```blocks
button.switchChangeEvent(SwitchEvent.push, function () {
    display.clear()
    display.print("Pushed!")
})
button.switchChangeEvent(SwitchEvent.none, function () {
    display.clear()
    display.print("Released")
})
display.print("Push switch!")

```