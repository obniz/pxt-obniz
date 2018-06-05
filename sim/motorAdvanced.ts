// /// <reference path="../libs/core/enums.d.ts"/>
// /// <reference path="./enums.d.ts"/>
//
// enum Direction {
//     //% block=forward
//     forward,
//     //% block=back
//     back
// }
//
//
// namespace pxsim.motor_advanced {
//     let _score: number = 0;
//     let _life: number = 3;
//     let _startTime: number = 0;
//     let _endTime: number = 0;
//     let _isGameOver: boolean = false;
//     let _countdownPause: number = 0;
//     let _level: number = 1;
//     let _gameId: number = 0;
//     let _cache: Motor[];
//     let _paused: boolean = false;
//     let _backgroundAnimation = false; // indicates if an auxiliary animation (and fiber) is already running
//
//     //% blockId=motor_advanced_wired_motor block="wired motor at pin1:%pin1  pin2:%pin2"
//     //% parts="ledmatrix"
//     export function wiredMotor(pin1: ObnizIo, pin2: ObnizIo): Motor {
//         let p = new Motor(pin1, pin2);
//         return p;
//     }
//
//     /**
//      * Gets the current score
//      */
//     //% weight=9 help=game/score
//     //% blockId=game_score block="score" blockGap=8
//     export function score(): number {
//         return _score;
//     }
//
//     /**
//      * Adds points to the current score and shows an animation
//      * @param points amount of points to change, eg: 1
//      */
//     //% weight=10 help=game/add-score
//     //% blockId=game_add_score block="change score by|%points" blockGap=8
//     //% parts="ledmatrix"
//     export function addScore(points: number): void {
//         setScore(_score + points);
//     }
//
//     /**
//      * Shows an animation, then starts a game countdown timer, which causes Game Over when it reaches 0
//      * @param ms countdown duration in milliseconds, eg: 10000
//      */
//     //% weight=9 help=game/start-countdown
//     //% blockId=game_start_countdown block="start countdown|(ms) %duration" blockGap=8
//     //% parts="ledmatrix"
//     export function startCountdown(ms: number): void {
//     }
//
//     /**
//      * Displays a game over animation and the score.
//      */
//     //% weight=8 help=game/game-over
//     //% blockId=game_game_over block="game over"
//     //% parts="ledmatrix"
//     export function gameOver(): void {
//     }
//
//     /**
//      * Sets the current score value
//      * @param value new score value.
//      */
//     //% blockId=game_set_score block="set score %points" blockGap=8
//     //% weight=10 help=game/set-score
//     export function setScore(value: number): void {
//         _score = Math.max(0, value);
//     }
//
//     /**
//      * Gets the current life
//      */
//     //% weight=10
//     export function life(): number {
//         return _life;
//     }
//
//     /**
//      * Sets the current life value
//      * @param value TODO
//      */
//     //% weight=10
//     export function setLife(value: number): void {
//         _life = Math.max(0, value);
//         if (_life <= 0) {
//             gameOver();
//         }
//     }
//
//     /**
//      * Adds life points to the current life
//      * @param lives TODO
//      */
//     //% weight=10
//     export function addLife(lives: number): void {
//         setLife(_life + lives);
//     }
//
//     /**
//      * Gets the remaining time (since `start countdown`) or current time (since the device started or `start stopwatch`) in milliseconds.
//      */
//     //% weight=10
//     export function currentTime(): number {
//         return 10;
//     }
//
//     /**
//      * Removes some life
//      * @param life TODO
//      */
//     //% weight=10
//     //% parts="ledmatrix"
//     export function removeLife(life: number): void {
//     }
//
//     /**
//      * Increments the level and display a message.
//      */
//     //% weight=10
//     //% parts="ledmatrix"
//     export function levelUp(): void {
//     }
//
//     /**
//      * Gets the current level
//      */
//     //% weight=10
//     export function level(): number {
//         return _level;
//     }
//
//     /**
//      * Starts a stopwatch timer. `current time` will return the elapsed time.
//      */
//     //% weight=10
//     export function startStopwatch(): void {
//         _endTime = -1;
//     }
//
//     /**
//      * Gets a value indicating if the game is still running. Returns `false` if game over.
//      */
//     //% weight=10
//     export function isRunning(): boolean {
//         let running: boolean;
//         return !_isGameOver;
//     }
//
//     /**
//      * Displays the score on the screen.
//      */
//     //%  weight=60
//     //% parts="ledmatrix"
//     export function showScore(): void {}
//
//     /**
//      * Indicates if the game is display the game over sequence.
//      */
//     export function isGameOver(): boolean {
//         return _isGameOver;
//     }
//
//     /**
//      * Indicates if the game rendering is paused to allow other animations
//      */
//     //%
//     export function isPaused(): boolean {
//         return _paused;
//     }
//
//     /**
//      * Pauses the game rendering engine to allow other animations
//      */
//     //% blockId=game_pause block="pause"
//     //% advanced=true blockGap=8 help=game/pause
//     export function pause(): void {
//         _paused = true;
//     }
//
//
//     /**
//      * Resumes the game rendering engine
//      */
//     //% blockId=game_resume block="resume"
//     //% advanced=true blockGap=8 help=game/resumeP
//     export function resume(): void {
//         _paused = false;
//     }
//
//     /**
//      * returns false if game can't start
//      */
//     function checkStart(): boolean {
//         if (_countdownPause > 0 || _startTime > 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
//
//     function unplugEvents(): void {
//     }
//
//     /**
//      * A game sprite rendered as a single LED
//      */
//         //%
//     export class Motor {
//         private target:any;
//         private _x: number;
//         private _y: number;
//         private _dir: number;
//         private _brightness: number;
//         private _blink: number;
//         private _enabled: boolean;
//
//         constructor(forward: ObnizIo, back: ObnizIo) {
//            this.target = Obniz.wired("DCMotor",{forward,back});
//             _cache.push(this);
//         }
//         /**
//          * Move a certain number of LEDs in the current direction
//          * @param this the sprite to move
//          * @param leds number of leds to move, eg: 1, -1
//          */
//         //% weight=50 help=game/move
//         //% blockId=game_move_sprite block="%sprite|move by %leds" blockGap=8
//         //% parts="ledmatrix"
//         public moveTo(leds: number): void {
//             if (this._dir == 0) {
//                 this._y = this._y - leds;
//             } else if (this._dir == 45) {
//                 this._x = this._x + leds;
//                 this._y = this._y - leds;
//             } else if (this._dir == 90) {
//                 this._x = this._x + leds;
//             } else if (this._dir == 135) {
//                 this._x = this._x + leds;
//                 this._y = this._y + leds;
//             } else if (this._dir == 180) {
//                 this._y = this._y + leds;
//             } else if (this._dir == -45) {
//                 this._x = this._x - leds;
//                 this._y = this._y - leds;
//             } else if (this._dir == -90) {
//                 this._x = this._x - leds;
//             } else {
//                 this._x = this._x - leds;
//                 this._y = this._y + leds;
//             }
//         }
//
//
//         /**
//          * Move a certain number of LEDs in the current direction
//          * @param this the sprite to move
//          * @param leds number of leds to move, eg: 1, -1
//          */
//         //% weight=50 help=game/move
//         //% blockId=game_move_sprite block="%sprite|move by %leds" blockGap=8
//         //% parts="ledmatrix"
//         public move(leds: number): void {
//             if (this._dir == 0) {
//                 this._y = this._y - leds;
//             } else if (this._dir == 45) {
//                 this._x = this._x + leds;
//                 this._y = this._y - leds;
//             } else if (this._dir == 90) {
//                 this._x = this._x + leds;
//             } else if (this._dir == 135) {
//                 this._x = this._x + leds;
//                 this._y = this._y + leds;
//             } else if (this._dir == 180) {
//                 this._y = this._y + leds;
//             } else if (this._dir == -45) {
//                 this._x = this._x - leds;
//                 this._y = this._y - leds;
//             } else if (this._dir == -90) {
//                 this._x = this._x - leds;
//             } else {
//                 this._x = this._x - leds;
//                 this._y = this._y + leds;
//             }
//         }
//
//         /**
//          * Go to this position on the screen
//          * @param this TODO
//          * @param x TODO
//          * @param y TODO
//          */
//         //% parts="ledmatrix"
//         public goTo(x: number, y: number): void {
//             this._x = x;
//             this._y = y;
//         }
//
//         /**
//          * If touching the edge of the stage and facing towards it, then turn away.
//          * @param this TODO
//          */
//         //% weight=18 help=game/if-on-edge-bounce
//         //% blockId=game_sprite_bounce block="%sprite|if on edge, bounce"
//         //% parts="ledmatrix"
//         public ifOnEdgeBounce(): void {
//             if (this._dir == 0 && this._y == 0) {
//                 this._dir = 180;
//             } else if (this._dir == 45 && (this._x == 4 || this._y == 0)) {
//                 if (this._x == 0 && this._y == 0) {
//                     this._dir = -135;
//                 } else if (this._y == 0) {
//                     this._dir = 135;
//                 } else {
//                     this._dir = -45;
//                 }
//             } else if (this._dir == 90 && this._x == 4) {
//                 this._dir = -90;
//             } else if (this._dir == 135 && (this._x == 4 || this._y == 4)) {
//                 if (this.x() == 4 && this.y() == 4) {
//                     this._dir = -45;
//                 } else if (this._y == 4) {
//                     this._dir = 45;
//                 } else {
//                     this._dir = -135;
//                 }
//             } else if (this._dir == 180 && this._y == 4) {
//                 this._dir = 0;
//             } else if (this._dir == -45 && (this._x == 0 || this._y == 0)) {
//                 if (this.x() == 0 && this.y() == 0) {
//                     this._dir = 135;
//                 } else if (this._y == 0) {
//                     this._dir = -135;
//                 } else {
//                     this._dir = 45;
//                 }
//             } else if (this._dir == -90 && this._x == 0) {
//                 this._dir = 90;
//             } else if (this._dir == -135 && (this._x == 0 || this._y == 4)) {
//                 if (this._x == 0 && this._y == 4) {
//                     this._dir = 45;
//                 } else if (this._y == 4) {
//                     this._dir = -45;
//                 } else {
//                     this._dir = 135;
//                 }
//             }
//         }
//
//         /**
//          * Turn the sprite
//          * @param this TODO
//          * @param direction left or right
//          * @param degrees angle in degrees to turn, eg: 45, 90, 180, 135
//          */
//         //% weight=49 help=game/turn
//         //% blockId=game_turn_sprite block="%sprite|turn %direction|by (°) %degrees"
//         public turn(direction: Direction, degrees: number) {
//             if (direction == Direction.forward)
//                 this.setDirection(this._dir + degrees);
//             else
//                 this.setDirection(this._dir - degrees);
//         }
//
//         /**
//          * Turn to the right (clockwise)
//          * @param this TODO
//          * @param degrees TODO
//          */
//         public turnRight(degrees: number): void {
//             this.turn(Direction.forward, degrees);
//         }
//
//         /**
//          * Turn to the left (counter-clockwise)
//          * @param this TODO
//          * @param degrees TODO
//          */
//         public turnLeft(degrees: number): void {
//             this.turn(Direction.forward, degrees);
//         }
//
//          /**
//          * Set the direction of the current sprite, rounded to the nearest multiple of 45
//          * @param this TODO
//          * @param degrees TODO
//          */
//         //% parts="ledmatrix"
//         public setDirection(degrees: number): void {
//             this._dir = ((degrees / 45) % 8) * 45;
//             if (this._dir <= -180) {
//                 this._dir = this._dir + 360;
//             } else if (this._dir > 180) {
//                 this._dir = this._dir - 360;
//             }
//         }
//
//         /**
//          * Reports the ``x`` position of a sprite on the LED screen
//          * @param this TODO
//          */
//         public x(): number {
//             return this._x;
//         }
//
//         /**
//          * Reports the ``y`` position of a sprite on the LED screen
//          * @param this TODO
//          */
//         public y(): number {
//             return this._y;
//         }
//
//         /**
//          * Reports the current direction of a sprite
//          * @param this TODO
//          */
//         public direction(): number {
//             return this._dir;
//         }
//
//         /**
//          * Set the ``x`` position of a sprite
//          * @param this TODO
//          * @param x TODO
//          */
//         public setX(x: number): void {
//             this.goTo(x, this._y);
//         }
//
//         /**
//          * Set the ``y`` position of a sprite
//          * @param this TODO
//          * @param y TODO
//          */
//         public setY(y: number): void {
//             this.goTo(this._x, y);
//         }
//
//         /**
//          * Changes the ``y`` position by the given amount
//          * @param this TODO
//          * @param y TODO
//          */
//         public changeYBy(y: number): void {
//             this.goTo(this._x, this._y + y);
//         }
//
//         /**
//          * Changes the ``x`` position by the given amount
//          * @param this TODO
//          * @param x TODO
//          */
//         public changeXBy(x: number): void {
//             this.goTo(this._x + x, this._y);
//         }
//
//         /**
//          * Reports true if sprite has the same position as specified sprite
//          * @param this TODO
//          * @param other TODO
//          */
//         //% weight=20 help=game/is-touching
//         //% blockId=game_sprite_touching_sprite block="%sprite|touching %other|?" blockGap=8
//         public isTouching(other: Motor): boolean {
//             return this._enabled && other._enabled && this._x == other._x && this._y == other._y;
//         }
//
//         /**
//          * Reports true if sprite is touching an edge
//          * @param this TODO
//          */
//         //% weight=19 help=game/is-touching-edge
//         //% blockId=game_sprite_touching_edge block="%sprite|touching edge?" blockGap=8
//         public isTouchingEdge(): boolean {
//             return this._x == 0 || this._x == 4 || this._y == 0 || this._y == 4;
//         }
//
//         /**
//          * Turns on the sprite (on by default)
//          * @param this the sprite
//          */
//         public on(): void {
//             this.setBrightness(255);
//         }
//
//         /**
//          * Turns off the sprite (on by default)
//          * @param this the sprite
//          */
//         public off(): void {
//             this.setBrightness(0);
//         }
//
//         /**
//          * Set the ``brightness`` of a sprite
//          * @param this the sprite
//          * @param brightness the brightness from 0 (off) to 255 (on), eg: 255.
//          */
//         //% parts="ledmatrix"
//         public setBrightness(brightness: number): void {
//         }
//
//         /**
//          * Reports the ``brightness` of a sprite on the LED screen
//          * @param this the sprite
//          */
//         //% parts="ledmatrix"
//         public brightness(): number {
//             let r: number;
//             return this._brightness;
//         }
//
//         /**
//          * Changes the ``y`` position by the given amount
//          * @param this the sprite
//          * @param value the value to change brightness
//          */
//         public changeBrightnessBy(value: number): void {
//             this.setBrightness(this._brightness + value);
//         }
//
//         /**
//          * Changes the ``direction`` position by the given amount by turning right
//          * @param this TODO
//          * @param angle TODO
//          */
//         public changeDirectionBy(angle: number): void {
//             this.turnRight(angle);
//         }
//
//         /**
//          * Deletes the sprite from the game engine. The sprite will no longer appear on the screen or interact with other sprites.
//          * @param this sprite to delete
//          */
//         //% weight=59 help=game/delete
//         //% blockId="game_delete_sprite" block="delete %this"
//         public delete(): void {
//             this._enabled = false;
//
//         }
//
//         /**
//          * Sets the blink duration interval in millisecond.
//          * @param sprite TODO
//          * @param ms TODO
//          */
//         public setBlink(ms: number): void {
//         }
//
//         /**
//          * Changes the ``blink`` duration by the given amount of millisecons
//          * @param this TODO
//          * @param ms TODO
//          */
//         public changeBlinkBy(ms: number): void {
//             this.setBlink(this._blink + ms);
//         }
//
//         /**
//          * Reports the ``blink`` duration of a sprite
//          * @param this TODO
//          */
//         public blink(): number {
//             let r: number;
//             return this._blink;
//         }
//     }
//
// }
