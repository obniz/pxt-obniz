
namespace pxsim.display {
    /**
     * Write text on embedded display
     * @param text text to write the display, eg: "Hello World!"
     */
    //% blockId=display_print_text block="print text %text"
    export function print(text: string) {
        board().obniz.display.print( text);
    }



    /**
     * Write number on embedded display
     * @param num number to write the display, eg: 100
     */
    //% blockId=display_print_num block="print number %text"
    //% text=display_print_num
    export function print_num(num: number) {
        board().obniz.display.print( ""+num);
    }


    /**
     * Clear display
     */
    //% blockId=display_clear block="clear"
    export function clear() {
        board().obniz.display.clear();
    }
}