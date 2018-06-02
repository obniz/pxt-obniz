/// <reference path="../libs/core/enums.d.ts"/>

/**
 * IO
 */


//% block=io
namespace pxsim.io {

    /**
     * output 5v(true) or 0v(false)
     * @param pin target io pin, eg: ObnizIo.io0
     * @param value output voltage, eg: true
     */
    //% blockId=io_output block="output %pin %value"
    //% pin.fieldEditor="gridpicker"
    //% value.fieldEditor=toggleonoff
    export function output(pin:ObnizIo ,value: boolean) {
        board().obniz.getIO(pin).output(value);
    }



    /**
     * get input value
     * @param pin target io pin, eg: ObnizIo.io0
     */
    //% blockId=io_input_wait block="input %pin"
    //% pin.fieldEditor="gridpicker"
    export function inputAsync(pin:ObnizIo ,value: boolean) : Promise<boolean> {
        return board().obniz.getIO(pin).inputWait();
    }




    /**
     * change input value
     * @param pin target io pin, eg: ObnizIo.io0
     * @param event target io pin, eg: IoInputEvent.high
     */
    //% blockId=io_input_event block="input %pin on change to %event"
    //% pin.fieldEditor="gridpicker"
    export function inputTrigerOnEvent(pin:ObnizIo , event:IoInputEvent,  handler:RefAction ) {
        let eventId = JSON.stringify({module:"io", "options":{"io":pin} });

        board().bus.listen(eventId, event, <RefAction>handler);

        board().obniz.getIO(pin).input((value: boolean)=>{
            board().bus.queue(eventId, IoInputEvent.something);
            if(value == true){
                board().bus.queue(eventId, IoInputEvent.high);
            }else{
                board().bus.queue(eventId, IoInputEvent.low);
            }
        });
    }


}
