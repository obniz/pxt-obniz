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
    /**
     * A ghost on the screen.
     */
    //%
    declare class Sprite {
        /**
         * The X-coordiante
         */
        //%
        //% shim=.x
        public x: number;

        /**
         * The Y-coordiante
         */
        //%
        //% shim=.y
        public y: number;

        /**
         * Move the thing forward
         */
        //%
        //% shim=.forwardAsync promise
        public forward(steps: number): void;

    }
declare namespace sprites {
    /**
     * Creates a new sprite
     */
    //% blockId="sampleCreate" block="createSprite"
    //% shim=sprites::createSprite
    function createSprite(): Sprite;

}
declare namespace display {
    //% blockId=display_print block="print %text"
    //% shim=display::print
    function print(text: string): void;

    //% blockId=display_clear block="clear"
    //% shim=display::clear
    function clear(): void;

}
declare namespace io {
    //% blockId=io_output block="output %pin %value"
    //% pin.fieldEditor="gridpicker"
    //% value.fieldEditor=toggleonoff
    //% shim=io::output
    function output(pin: ObnizIo, value: boolean): void;

}
declare namespace system {
    //% blockId=system_wait block="wait %ms ms"
    //% shim=system::waitAsync promise
    function wait(ms: number): void;

    //% block="pause (ms) %pause" blockId=system_pause
    //% shim=system::pauseAsync promise
    function pause(ms: number): void;

}

// Auto-generated. Do not edit. Really.
