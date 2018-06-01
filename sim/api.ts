/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }

}

function logMsg(m: string) {
    console.log(m)
}

namespace pxsim.console {
    /**
     * Print out message
     */
    //% 
    export function log(msg: string) {
        logMsg("CONSOLE: " + msg)
        // why doesn't that work?
        board().writeSerial(msg + "\n")
    }
}


namespace pxsim.obniz {
    //
    // //% promise
    // export function apiCallAsync(component: string, componentArgs: Options, fn: string, fnArgs: any ): Promise<void> {
    //
    //     return Promise.resolve();
        //     const cArgs = (<any>componentArgs).toAny() as Options;
        //     const obniz = board().obniz;
        //     obniz[component][fn].apply(fnArgs);
        //
        //     return Promise.resolve();
    // }

    //%
    // export function apiCall(component: string, componentArgs: Options, fn: string, fnArgs: any) {
    //
    //     const cArgs = (<any>componentArgs).toAny() as Options;
    //
    //     const obniz = board().obniz;
    //         obniz[component][fn].apply(obniz[component],fnArgs);
    //     //
    //     //     return Promise.resolve();
    // }
    //
    // //%
    // export function api(component: string, componentArgs: Options , fn: string, fnArgs: boolean[]){
    //     debugger;
    //     const obniz = board().obniz;
    //     const cArgs = (<any>componentArgs).toAny() as Options;
    //
    //
    //     obniz[component][fn].apply(obniz[component],fnArgs.data);
    //
    // }


}




namespace pxsim {
    /**
     * A ghost on the screen.
     */
        //%
    export class Sprite {
        /**
         * The X-coordiante
         */
            //%
        public x = 100;
        /**
         * The Y-coordiante
         */
            //%
        public y = 100;
        public angle = 90;

        constructor() {
        }

        private foobar() {
        }

        /**
         * Move the thing forward
         */
        //%
        public forwardAsync(steps: number) {
            let deg = this.angle / 180 * Math.PI;
            this.x += Math.cos(deg) * steps * 10;
            this.y += Math.sin(deg) * steps * 10;
            board().updateView();

            if (this.x < 0 || this.y < 0)
                board().bus.queue("TURTLE", "BUMP");

            return Promise.delay(400)
        }
    }
}

namespace pxsim.sprites {
    /**
     * Creates a new sprite
     */
    //% blockId="sampleCreate" block="createSprite"
    export function createSprite(): Sprite {
        return new Sprite();
    }
}