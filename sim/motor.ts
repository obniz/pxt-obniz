/// <reference path="../libs/core/enums.d.ts"/>
/// <reference path="./enums.d.ts"/>

//% block=motor
namespace pxsim.motor {
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
    export function move(forward:ObnizIo , back:ObnizIo, dir:MotorDirection) {
        board().wired("DCMotor",{forward:forward, back:back}).move(dir === MotorDirection.forward);
    }


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
    export function power(forward:ObnizIo , back:ObnizIo, value:number) {
        board().wired("DCMotor",{forward:forward, back:back}).power(value);
    }


    /**
     * Stop motor
     * @param forward motor pin no to forward, eg: ObnizIo.io0
     * @param back motor pin no to back, eg: ObnizIo.io1
     */
    //% blockId=motor_stop block="motor (forawrd pin:%forward, back pin:%back) stop"
    //% forward.fieldEditor="gridpicker"
    //% back.fieldEditor="gridpicker"
    export function stop(forward:ObnizIo , back:ObnizIo) {
        board().wired("DCMotor",{forward:forward, back:back}).stop();
    }






}
