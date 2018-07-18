// Auto-generated from simulator. Do not edit.
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever  afterOnStart=true blockAllowMultiple=1
    //% blockId=device_forever block="forever"
    //% shim=loops::foreverAsync promise
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% weight=100
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
declare namespace button {
    //% blockId=switch_event block="on switch change to %event"
    //% group="embedded switch"
    //% shim=button::switchChangeEvent
    function switchChangeEvent(event: SwitchEvent, handler: () => void): void;

    /**
     *
     * @param  signal signal pin, eg: ObnizIo.io0
     * @param  gnd  gnd pin, eg: ObnizIo.io1
     * @returns Promise<boolean>
     */
    //% blockId=button_is_pressed block="button (signal pin:%signal, gnd pin:%gnd) is pressed"
    //% signal.fieldEditor="gridpicker"
    //% gnd.fieldEditor="gridpicker"
    //% group="button"
    //% shim=button::isPressedAsync promise
    function isPressed(signal: ObnizIo, gnd: ObnizIo): boolean;

    /**
     *
     * @param  signal signal pin, eg: ObnizIo.io0
     * @param  gnd  gnd pin, eg: ObnizIo.io1
     */
    //% signal.fieldEditor="gridpicker"
    //% gnd.fieldEditor="gridpicker"
    //% blockId=button_event block="on button (signal pin:%signal, gnd pin:%gnd) change to %event"
    //% group="button"
    //% shim=button::onChangeEvent
    function onChangeEvent(signal: ObnizIo, gnd: ObnizIo, event: ButtonEvent, handler: () => void): void;

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
    //% group="digital"
    //% shim=io::output
    function output(pin: ObnizIo, value: boolean): void;

    /**
     * get input value
     * @param pin target io pin, eg: ObnizIo.io0
     */
    //% blockId=io_input_wait block="input %pin"
    //% pin.fieldEditor="gridpicker"
    //% group="digital"
    //% shim=io::inputAsync promise
    function input(pin: ObnizIo, value: boolean): boolean;

    /**
     * change input value
     * @param pin target io pin, eg: ObnizIo.io0
     * @param event target io pin, eg: IoInputEvent.high
     */
    //% blockId=io_input_event block="input %pin on change to %event"
    //% pin.fieldEditor="gridpicker"
    //% group="digital"
    //% shim=io::inputTrigerOnEvent
    function inputTrigerOnEvent(pin: ObnizIo, event: IoInputEvent, handler: () => void): void;

    //% blockId=ad_get block="get %pin analog voltage "
    //% pin.fieldEditor="gridpicker"
    //% group="analog"
    //% shim=io::getAsync promise
    function get(pin: ObnizIo): number;

}
declare namespace led {
    /**
     * LED light
     * @param anode target io pin, eg: ObnizIo.io0
     * @param cathode target io pin, eg: ObnizIo.io1
     * @param value output voltage, eg: true
     */
    //% blockId=led_output block="LED (anode pin: %anode , cathod pin: %cathode ) turn %value=toggleOnOff"
    //% anode.fieldEditor="gridpicker"
    //% cathode.fieldEditor="gridpicker"
    //% shim=led::output
    function output(anode: ObnizIo, cathode: ObnizIo, value: boolean): void;

    /**
     * LED blink
     * @param anode target io pin, eg: ObnizIo.io0
     * @param cathode target io pin, eg: ObnizIo.io1
     * @param ms interval (ms), eg: 500
     */
    //% blockId=led_blink block="LED (anode pin: %anode , cathod pin: %cathode )  blink with interval %ms ms"
    //% anode.fieldEditor="gridpicker"
    //% cathode.fieldEditor="gridpicker"
    //% shim=led::blink
    function blink(anode: ObnizIo, cathode: ObnizIo, ms: number): void;

}
declare namespace LED {
    /**
     * LED light
     * @param anode target io pin, eg: ObnizIo.io0
     * @param cathode target io pin, eg: ObnizIo.io1
     * @param value output voltage, eg: true
     */
    //% blockId=LED_output block="LED (anode pin:%anode , cathod pin: %cathode ) turn %value"
    //% anode.fieldEditor="gridpicker"
    //% cathode.fieldEditor="gridpicker"
    //% value.fieldEditor="toggleonoff"
    //% deprecated=true
    //% shim=LED::output
    function output(anode: ObnizIo, cathode: ObnizIo, value: boolean): void;

    /**
     * LED blink
     * @param anode target io pin, eg: ObnizIo.io0
     * @param cathode target io pin, eg: ObnizIo.io1
     * @param ms interval (ms), eg: 500
     */
    //% blockId=LED_blink block="LED (anode pin:%anode , cathod pin: %cathode )  blink with interval %ms ms"
    //% anode.fieldEditor="gridpicker"
    //% cathode.fieldEditor="gridpicker"
    //% deprecated=true
    //% shim=LED::blink
    function blink(anode: ObnizIo, cathode: ObnizIo, ms: number): void;

}
declare namespace motor {
    //
    // /**
    //  * Rotate motor forward
    //  * @param forward motor pin no to forward, eg: ObnizIo.io0
    //  * @param back motor pin no to back, eg: ObnizIo.io1
    //  */
    // //% blockId=motor_forward block="motor (forawrd pin:%forward, back pin:%back) forward"
    // //% forward.fieldEditor="gridpicker"
    // //% back.fieldEditor="gridpicker"
    // export function forward(forward:ObnizIo , back:ObnizIo) {
    //     board().wired("DCMotor",{forward:forward, back:back}).forward();
    // }
    //
    // /**
    //  * Rotate motor back
    //  * @param forward motor pin no to forward, eg: ObnizIo.io0
    //  * @param back motor pin no to back, eg: ObnizIo.io1
    //  */
    // //% blockId=motor_reverse block="motor (forawrd pin:%forward, back pin:%back) reverse"
    // //% forward.fieldEditor="gridpicker" forward.default=io0
    // //% back.fieldEditor="gridpicker" forward.default=io1
    // export function reverse(forward:ObnizIo , back:ObnizIo) {
    //     board().wired("DCMotor",{forward:forward, back:back}).reverse();
    // }
    //
    //
    /**
     * Rotate motor to you want
     * @param forward motor pin no to forward, eg: ObnizIo.io0
     * @param back motor pin no to back, eg: ObnizIo.io1
     * @param dir motor rotate direction, eg: true
     */
    //% blockId=motor_move block="motor (forawrd pin:%forward, back pin:%back) move to %dir"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    //% group="DCMotor"
    //% shim=motor::move
    function move(forward: ObnizIo, back: ObnizIo, dir: MotorDirection): void;

    /**
     * Change motor power
     * @param forward motor pin no to forward, eg: ObnizIo.io0
     * @param back motor pin no to back, eg: ObnizIo.io1
     * @param value motor power, eg: 50
     */
    //% blockId=motor_power block="motor (forawrd pin:%forward, back pin:%back) set power  %power"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    //% value.min="0" value.max=100
    //% group="DCMotor"
    //% shim=motor::power
    function power(forward: ObnizIo, back: ObnizIo, value: number): void;

    /**
     * Stop motor
     * @param forward motor pin no to forward, eg: ObnizIo.io0
     * @param back motor pin no to back, eg: ObnizIo.io1
     */
    //% blockId=motor_stop block="motor (forawrd pin:%forward, back pin:%back) stop"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    //% group="DCMotor"
    //% shim=motor::stop
    function stop(forward: ObnizIo, back: ObnizIo): void;

    /**
     * Rotate Servo motor
     * @param signal motor pin no to signal, eg: ObnizIo.io0
     * @param vcc motor pin no to vcc, eg: ObnizIo.io1
     * @param gnd motor pin no to gnd, eg: ObnizIo.io2
     * @param angle degree to rotate, eg: 90
     */
    //% blockId=servo_angle block="servo (signal pin:%signal, vcc pin:%vcc, gnd pin:%gnd) %angle degree"
    //% signal.fieldEditor="gridpicker"
    //% vcc.fieldEditor="gridpicker"
    //% gnd.fieldEditor="gridpicker"
    //% angle.min=0 angle.max=180
    //% group="ServoMotor"
    //% shim=motor::angle
    function angle(signal: ObnizIo, vcc: ObnizIo, gnd: ObnizIo, angle: number): void;

}
declare namespace sensor {
    /**
     *
     * @param  pin0 pin0 pin, eg: ObnizIo.io0
     * @param  pin1  pin1 pin, eg: ObnizIo.io1
     * @param  pin2  pin2 pin, eg: ObnizIo.io2
     * @param  handler
     */
    //% blockId=sensor_potentiometer_on_change block="on potentiometer (pin0:%pin0, pin1:%pin1, pin2:%pin2) value change"
    //% pin0.fieldEditor="gridpicker"
    //% pin1.fieldEditor="gridpicker"
    //% pin2.fieldEditor="gridpicker"
    //% group="Potentiometer"
    //% shim=sensor::potentiometerOnChange
    function potentiometerOnChange(pin0: ObnizIo, pin1: ObnizIo, pin2: ObnizIo, handler: () => void): void;

    /**
     *
     * @param  pin0  pin0 pin, eg: ObnizIo.io0
     * @param  pin1  pin1 pin, eg: ObnizIo.io1
     * @param  pin2  pin2 pin, eg: ObnizIo.io2
     *
     */
    //% blockId=sensor_potentiometer_value block="get potentiometer (pin0:%pin0, pin1:%pin1, pin2:%pin2) value"
    //% pin0.fieldEditor="gridpicker"
    //% pin1.fieldEditor="gridpicker"
    //% pin2.fieldEditor="gridpicker"
    //% group="Potentiometer"
    //% shim=sensor::potentiometerValue
    function potentiometerValue(pin0: ObnizIo, pin1: ObnizIo, pin2: ObnizIo): number;

    /**
     *
     * @param  vcc pin0 pin, eg: ObnizIo.io0
     * @param  gnd  pin1 pin, eg: ObnizIo.io1
     * @param  signal  pin2 pin, eg: ObnizIo.io2
     * @param  handler
     */
    //% blockId=sensor_distance_on_change block="on distance (vcc:%vcc, gnd:%gnd, signal:%signal) change"
    //% vcc.fieldEditor="gridpicker"
    //% gnd.fieldEditor="gridpicker"
    //% signal.fieldEditor="gridpicker"
    //% group="distance (GP2Y0A21YK0F)"
    //% shim=sensor::distanceOnChange
    function distanceOnChange(vcc: ObnizIo, gnd: ObnizIo, signal: ObnizIo, handler: () => void): void;

    /**
     *
     * @param  vcc  pin0 pin, eg: ObnizIo.io0
     * @param  gnd  pin1 pin, eg: ObnizIo.io1
     * @param  signal  pin2 pin, eg: ObnizIo.io2
     *
     */
    //% blockId=sensor_distance_value block="get distance (vcc:%vcc, gnd:%gnd, signal:%signal) value(mm)"
    //% vcc.fieldEditor="gridpicker"
    //% gnd.fieldEditor="gridpicker"
    //% signal.fieldEditor="gridpicker"
    //% group="distance (GP2Y0A21YK0F)"
    //% shim=sensor::distanceValueAsync promise
    function distanceValue(vcc: ObnizIo, gnd: ObnizIo, signal: ObnizIo): number;

}

// Auto-generated. Do not edit. Really.
