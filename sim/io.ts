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



    //% blockId=io_input block="input %pin"
    //% pin.fieldEditor="gridpicker"
    export function inputAsync(pin:ObnizIo ,value: boolean) : Promise<boolean> {
        return board().obniz.getIO(pin).inputWait();
    }



}
