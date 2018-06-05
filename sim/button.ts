

//% block=button
namespace pxsim.button {
    //% blockId=switch_event block="on switch change to %event"
    //% group="embedded switch"
    export function switchChangeEvent(event:SwitchEvent,  handler:RefAction ) {
        let eventId = JSON.stringify({module:"switch"});

        board().bus.listen(eventId, event, handler);

        board().obniz.switch.onchange = (value: string)=>{
            if(value === "push"){
                board().bus.queue(eventId, SwitchEvent.push);
            }else if(value === "right"){
                board().bus.queue(eventId, SwitchEvent.right);
            }else if(value === "left"){
                board().bus.queue(eventId, SwitchEvent.left);
            }
        };
    }

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
    export function isPressedAsync(signal:ObnizIo , gnd:ObnizIo):Promise<boolean> {
        return board().wired("Button",{signal, gnd}).isPressedWait();
    }


    /**
     *
     * @param  signal signal pin, eg: ObnizIo.io0
     * @param  gnd  gnd pin, eg: ObnizIo.io1
     */
    //% signal.fieldEditor="gridpicker"
    //% gnd.fieldEditor="gridpicker"
    //% blockId=button_event block="on button (signal pin:%signal, gnd pin:%gnd) change to %event"
    //% group="button"
    export function onChangeEvent(signal:ObnizIo , gnd:ObnizIo, event:ButtonEvent,  handler:RefAction ) {
        let eventId = JSON.stringify({module:"button",options:{signal, gnd}});

        board().bus.listen(eventId, event, handler);

        board().wired("Button",{signal, gnd}).onchange = (value: boolean)=>{
            board().bus.queue(eventId, ButtonEvent.change);
            if(value){
                board().bus.queue(eventId, ButtonEvent.push);
            }else {
                board().bus.queue(eventId, ButtonEvent.release);
            }
        };
    }



}
