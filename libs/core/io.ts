
//% block=io
namespace obniz_io {
    interface IoOptions extends Options {
        pin: number;
    }


    /**
     * IO
     */
        //% fixedInstances
    export class IO extends obniz.Component {
        /**
         * Creates a new button instance
         * @param options
         */
        constructor(options: IoOptions) {
            super(options);
        }

        /**
         * Registers a callback for a given event
         * @param event
         * @param handler
         */
        //% blockId=io_output block="output %this %value"
        //$ this.fieldEditor="gridpicker"
        //% on.fieldEditor=toggleonoff
        output(value: boolean) {

        }
    }

    //% fixedInstance block="io0"
    export const io0 = new IO({pin: 0});

    //% fixedInstance block="io1"
    export const io1 = new IO({pin: 1});

    //% fixedInstance block="io2"
    export const io2 = new IO({pin: 2});

    //% fixedInstance block="io3"
    export const io3 = new IO({pin: 3});

    //% fixedInstance block="io4"
    export const io4 = new IO({pin: 4});

    //% fixedInstance block="io5"
    export const io5 = new IO({pin: 5});

    //% fixedInstance block="io6"
    export const io6 = new IO({pin: 6});

    //% fixedInstance block="io7"
    export const io7 = new IO({pin: 7});

    //% fixedInstance block="io8"
    export const io8 = new IO({pin: 8});

    //% fixedInstance block="io9"
    export const io9 = new IO({pin: 9});

    //% fixedInstance block="io10"
    export const io10 = new IO({pin: 10});

    //% fixedInstance block="io11"
    export const io11 = new IO({pin: 11});

}