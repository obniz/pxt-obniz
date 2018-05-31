namespace led {
    interface LedOptions extends Options {
           anode: number;
           cathode: number;
    }

    //% block
    export function emptyImage(width = 5, height = 5) {

    }


    //% autoCreate=led.emptyImage
    export class LED extends obniz.Component {
        /**
         * Creates a new button instance
         * @param options
         */
        constructor(options: LedOptions) {
            super(options);
        }
    }

}