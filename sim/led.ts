/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.led {

    /**
     * LED light
     * @param anode target io pin, eg: ObnizIo.io0
     * @param cathode target io pin, eg: ObnizIo.io1
     * @param value output voltage, eg: true
     */
    //% blockId=led_output block="LED (anode pin: %anode , cathod pin: %cathode ) turn %value=toggleOnOff"
    //% anode.fieldEditor="gridpicker"
    //% cathode.fieldEditor="gridpicker"
    export function output(anode: ObnizIo, cathode: ObnizIo, value: boolean) {

        if (value) {
            board().wired("LED", {anode, cathode}).on();
        } else {
            board().wired("LED", {anode, cathode}).off();
        }
    }


    /**
     * LED blink
     * @param anode target io pin, eg: ObnizIo.io0
     * @param cathode target io pin, eg: ObnizIo.io1
     * @param ms interval (ms), eg: 500
     */
    //% blockId=led_blink block="LED (anode pin: %anode , cathod pin: %cathode )  blink with interval %ms ms"
    //% anode.fieldEditor="gridpicker"
    //% cathode.fieldEditor="gridpicker"
    export function blink(anode: ObnizIo, cathode: ObnizIo, ms: number) {
        board().wired("LED", {anode, cathode}).blink(ms);
    }


}




//% deprecated=true
namespace pxsim.LED {

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
    export function output(anode: ObnizIo, cathode: ObnizIo, value: boolean) {
        if (value) {
            board().wired("LED", {anode, cathode}).on();
        } else {
            board().wired("LED", {anode, cathode}).off();
        }
    }


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
    export function blink(anode: ObnizIo, cathode: ObnizIo, ms: number) {
        board().wired("LED", {anode, cathode}).blink(ms);
    }


}