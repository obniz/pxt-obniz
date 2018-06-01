/// <reference path="../libs/core/enums.d.ts"/>

/**
 * IO
 */


//% block=io
namespace pxsim.io {

    //% blockId=io_output block="output %pin %value"
    //% pin.fieldEditor="gridpicker"
    //% value.fieldEditor=toggleonoff
    export function output(pin:ObnizIo ,value: boolean) {
        board().obniz.getIO(pin).output(value);
    }



}

