
namespace pxsim.system {

    //% blockId=system_wait block="wait %ms ms"
    export function waitAsync(ms: number) : Promise<void>{
        return board().obniz.wait(ms) as Promise<void>;
    }

    //% block="pause (ms) %pause" blockId=system_pause
    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }

}