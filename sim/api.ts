/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever
    //% blockId=device_forever block="forever" 
    export function foreverAsync(body: RefAction) : Promise<void>{
        thread.forever(body);
        return board().obniz.pingWait().then();
        // return Promise.delay(1);
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


