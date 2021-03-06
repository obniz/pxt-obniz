
declare const enum ObnizIo {
    //% block=io0
    io0 = 0,
    //% block=io1
    io1 = 1,
    //% block=io2
    io2 = 2,
    //% block=io3
    io3 = 3,
    //% block=io4
    io4 = 4,
    //% block=io5
    io5 = 5,
    //% block=io6
    io6 = 6,
    //% block=io7
    io7 = 7,
    //% block=io8
    io8 = 8,
    //% block=io9
    io9 = 9,
    //% block=io10
    io10 = 10,
    //% block=io11
    io11 = 11,
}

declare const enum IoInputEvent {
    something,
    high ,
    low
}

declare const enum SwitchEvent {
    push,
    right,
    left,
    none
}

declare const enum ButtonEvent {
    push,
    release,
    change
}

declare const enum MotorDirection {
    forward,
    back
}

declare class wiredObject{
    public  options : {[key:string]:any};
    public  target : {};
}

declare class Motor extends  wiredObject{}
