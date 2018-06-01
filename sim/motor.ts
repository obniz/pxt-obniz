/// <reference path="../libs/core/enums.d.ts"/>

//% block=motor
namespace pxsim.motor {

    //% blockId=motor_forward block="forward %forward %back"
    //% pin.fieldEditor="gridpicker"
    export function forward(forward:ObnizIo , back:ObnizIo) {
        board().wired("DCMotor",{forward:forward, back:back}).forward();
    }

    //% blockId=motor_reverse block="reverse %forward %back"
    //% pin.fieldEditor="gridpicker"
    export function reverse(forward:ObnizIo , back:ObnizIo) {
        board().wired("DCMotor",{forward:forward, back:back}).reverse();
    }


}
