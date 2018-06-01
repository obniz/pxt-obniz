
namespace pxsim.display {

    //% blockId=display_print block="print %text"
    export function print(text: string) {
        board().obniz.display.print(text);
    }

    //% blockId=display_clear block="clear"
    export function clear() {
        board().obniz.display.clear();
    }
}