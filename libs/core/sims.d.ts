// Auto-generated from simulator. Do not edit.
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}
declare namespace console {
    /**
     * Print out message
     */
    //%
    //% shim=console::log
    function log(msg: string): void;

}
declare namespace display {
    /**
     * Write text on embedded display
     * @param text text to write the display, eg: "Hello World!"
     */
    //% blockId=display_print_text block="print text %text"
    //% shim=display::print
    function print(text: string): void;

    /**
     * Write number on embedded display
     * @param num number to write the display, eg: 100
     */
    //% blockId=display_print_num block="print number %text"
    //% text=display_print_num
    //% shim=display::print_num
    function print_num(num: number): void;

    /**
     * Clear display
     */
    //% blockId=display_clear block="clear"
    //% shim=display::clear
    function clear(): void;

}
declare namespace io {
    /**
     * output 5v(true) or 0v(false)
     * @param pin target io pin, eg: ObnizIo.io0
     * @param value output voltage, eg: true
     */
    //% blockId=io_output block="output %pin %value"
    //% pin.fieldEditor="gridpicker"
    //% value.fieldEditor=toggleonoff
    //% shim=io::output
    function output(pin: ObnizIo, value: boolean): void;

    /**
     * get input value
     * @param pin target io pin, eg: ObnizIo.io0
     */
    //% blockId=io_input_wait block="input %pin"
    //% pin.fieldEditor="gridpicker"
    //% shim=io::inputAsync promise
    function input(pin: ObnizIo, value: boolean): boolean;

    /**
     * change input value
     * @param pin target io pin, eg: ObnizIo.io0
     * @param event target io pin, eg: IoInputEvent.high
     */
    //% blockId=io_input_event block="input %pin on change to %event"
    //% pin.fieldEditor="gridpicker"
    //% shim=io::inputTrigerOnEvent
    function inputTrigerOnEvent(pin: ObnizIo, event: IoInputEvent, handler: () => void): void;

}
declare namespace LED {
    /**
     * LED light
     * @param anode target io pin, eg: ObnizIo.io0
     * @param cathode target io pin, eg: ObnizIo.io1
     * @param value output voltage, eg: true
     */
    //% blockId=LED_output block="LED  %anode %cathode turn %value"
    //% anode.fieldEditor="gridpicker"
    //% cathode.fieldEditor="gridpicker"
    //% value.fieldEditor=toggleonoff
    //% shim=LED::output
    function output(anode: ObnizIo, cathode: ObnizIo, value: boolean): void;

    /**
     * LED blink
     * @param anode target io pin, eg: ObnizIo.io0
     * @param cathode target io pin, eg: ObnizIo.io1
     * @param ms interval (ms), eg: 500
     */
    //% blockId=LED_blink block="LED %anode %cathode blink with interval %ms (ms)"
    //% anode.fieldEditor="gridpicker"
    //% cathode.fieldEditor="gridpicker"
    //% shim=LED::blink
    function blink(anode: ObnizIo, cathode: ObnizIo, ms: number): void;

}
declare namespace motor {
    /**
     * Rotate motor forward
     * @param forward motor pin no to forward, eg: ObnizIo.io0
     * @param back motor pin no to back, eg: ObnizIo.io1
     */
    //% blockId=motor_forward block="motor %forward %back forward"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    //% shim=motor::forward
    function forward(forward: ObnizIo, back: ObnizIo): void;

    /**
     * Rotate motor back
     * @param forward motor pin no to forward, eg: ObnizIo.io0
     * @param back motor pin no to back, eg: ObnizIo.io1
     */
    //% blockId=motor_reverse block="motor %forwpard %back reverse"
    //% forward.fieldEditor="gridpicker" forward.default=io0
    //% back.fieldEditor="gridpicker" forward.default=io1
    //% shim=motor::reverse
    function reverse(forward: ObnizIo, back: ObnizIo): void;

    /**
     * Stop motor
     * @param forward motor pin no to forward, eg: ObnizIo.io0
     * @param back motor pin no to back, eg: ObnizIo.io1
     */
    //% blockId=motor_stop block="motor %forward %back stop"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    //% shim=motor::stop
    function stop(forward: ObnizIo, back: ObnizIo): void;

    /**
     * Rotate motor to you want
     * @param forward motor pin no to forward, eg: ObnizIo.io0
     * @param back motor pin no to back, eg: ObnizIo.io1
     * @param dir motor rotate direction, eg: true
     */
    //% blockId=motor_move block="motor %forward %back move to %dir"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    //% shim=motor::move
    function move(forward: ObnizIo, back: ObnizIo, dir: boolean): void;

    /**
     * Change motor power
     * @param forward motor pin no to forward, eg: ObnizIo.io0
     * @param back motor pin no to back, eg: ObnizIo.io1
     * @param value motor power, eg: 50
     */
    //% blockId=motor_power block="motor %forward %back set power  %power"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    //% value.min="0" value.max=100
    //% shim=motor::power
    function power(forward: ObnizIo, back: ObnizIo, value: number): void;

}
declare namespace switch_ {
    //% blockId=switch_event block="on switch change to %event"
    //% shim=switch_::switchChangeEvent
    function switchChangeEvent(event: SwitchEvent, handler: () => void): void;

}

// Auto-generated. Do not edit. Really.
