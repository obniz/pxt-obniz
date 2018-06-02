/// <reference path="../libs/core/enums.d.ts"/>



namespace pxsim.switch_ {

    //% blockId=switch_event block="on switch change to %event"
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
}
