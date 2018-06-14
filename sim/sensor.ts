

//% block=sensor
namespace pxsim.sensor {


    /**
     *
     * @param  pin0 pin0 pin, eg: ObnizIo.io0
     * @param  pin1  pin1 pin, eg: ObnizIo.io1
     * @param  pin2  pin2 pin, eg: ObnizIo.io2
     * @param  handler
     */
    //% blockId=sensor_potentiometer_on_change block="on potentiometer (pin0:%pin0, pin1:%pin1, pin2:%pin2) value change"
    //% pin0.fieldEditor="gridpicker"
    //% pin1.fieldEditor="gridpicker"
    //% pin2.fieldEditor="gridpicker"
    //% group="Potentiometer"
    export function potentiometerOnChange(pin0:ObnizIo ,pin1:ObnizIo ,pin2:ObnizIo , handler:RefAction) {
        let eventId = JSON.stringify({module:"Potentiometer",options:{pin0, pin1, pin2}});
        board().bus.listen(eventId, "valueChange", handler);

        board().wired("Potentiometer",{pin0, pin1, pin2}).onchange = (value: number)=>{
            board().bus.queue(eventId, "valueChange");
        };
    }

    /**
     *
     * @param  pin0  pin0 pin, eg: ObnizIo.io0
     * @param  pin1  pin1 pin, eg: ObnizIo.io1
     * @param  pin2  pin2 pin, eg: ObnizIo.io2
     *
     */
    //% blockId=sensor_potentiometer_value block="get potentiometer (pin0:%pin0, pin1:%pin1, pin2:%pin2) value"
    //% pin0.fieldEditor="gridpicker"
    //% pin1.fieldEditor="gridpicker"
    //% pin2.fieldEditor="gridpicker"
    //% group="Potentiometer"
    export function potentiometerValue(pin0:ObnizIo ,pin1:ObnizIo ,pin2:ObnizIo):number {
        return board().wired("Potentiometer",{pin0, pin1, pin2}).position;
    }




    /**
     *
     * @param  vcc pin0 pin, eg: ObnizIo.io0
     * @param  gnd  pin1 pin, eg: ObnizIo.io1
     * @param  signal  pin2 pin, eg: ObnizIo.io2
     * @param  handler
     */
    //% blockId=sensor_distance_on_change block="on distance (vcc:%gnd, vcc:%vcc, signal:%signal) change"
    //% vcc.fieldEditor="gridpicker"
    //% gnd.fieldEditor="gridpicker"
    //% signal.fieldEditor="gridpicker"
    //% group="distance (GP2Y0A21YK0F)"
    export function distanceOnChange(vcc:ObnizIo ,gnd:ObnizIo ,signal:ObnizIo , handler:RefAction) {
        let eventId = JSON.stringify({module:"GP2Y0A21YK0F",options:{vcc, gnd, signal}});
        board().bus.listen(eventId, "valueChange", handler);

        let module = board().wired("GP2Y0A21YK0F",{vcc, gnd, signal});
        if(!module.isStarted ){
            module.start( (value: number)=>{
                module.value = value;
                board().bus.queue(eventId, "valueChange");
                module.isStarted = true;
            });
        }
    }

    /**
     *
     * @param  vcc  pin0 pin, eg: ObnizIo.io0
     * @param  gnd  pin1 pin, eg: ObnizIo.io1
     * @param  signal  pin2 pin, eg: ObnizIo.io2
     *
     */
    //% blockId=sensor_distance_value block="get distance (vcc:%gnd, vcc:%vcc, signal:%signal) value(mm)"
    //% vcc.fieldEditor="gridpicker"
    //% gnd.fieldEditor="gridpicker"
    //% signal.fieldEditor="gridpicker"
    //% group="distance (GP2Y0A21YK0F)"
    export function distanceValueAsync(vcc:ObnizIo ,gnd:ObnizIo ,signal:ObnizIo):Promise<number> {

        return new Promise<number>( (resolve) =>{
            let eventId = JSON.stringify({module:"GP2Y0A21YK0F",options:{vcc, gnd, signal}});

            let module = board().wired("GP2Y0A21YK0F",{vcc, gnd, signal});

            if(!module.isStarted ){
                module.start( (value: number)=>{
                    module.value = value;
                    board().bus.queue(eventId, "valueChange");
                    module.isStarted = true;
                    resolve(value);
                });
            }else{
                resolve(module.value);

            }
        });

    }






}
