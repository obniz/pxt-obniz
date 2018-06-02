/// <reference path="../libs/core/enums.d.ts"/>

//% block=motor
namespace pxsim.motor {

    //% blockId=motor_forward block="motor %forward %back forward"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    export function forward(forward:ObnizIo , back:ObnizIo) {
        board().wired("DCMotor",{forward:forward, back:back}).forward();
    }

    //% blockId=motor_reverse block="motor %forwpard %back reverse"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    export function reverse(forward:ObnizIo , back:ObnizIo) {
        board().wired("DCMotor",{forward:forward, back:back}).reverse();
    }


    //% blockId=motor_stop block="motor %forward %back stop"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    export function stop(forward:ObnizIo , back:ObnizIo) {
        board().wired("DCMotor",{forward:forward, back:back}).stop();
    }
    //% blockId=motor_move block="motor %forward %back move to %dir"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    export function move(forward:ObnizIo , back:ObnizIo, dir:boolean) {
        board().wired("DCMotor",{forward:forward, back:back}).move(dir);
    }

    //% blockId=motor_power block="motor %forward %back set power  %power"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    //% value.min="0" value.max=100
    export function power(forward:ObnizIo , back:ObnizIo, value:number) {
        board().wired("DCMotor",{forward:forward, back:back}).power(value);
    }



}
