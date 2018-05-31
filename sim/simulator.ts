/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

declare var Obniz:any;

namespace pxsim {
    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function board() : Board {
        return runtime.board as Board;
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard {
        public bus: EventBus;
        public element : any;
        public spriteElement: SVGCircleElement;
        public hareElement: SVGCircleElement;
        public sprite : Sprite;
        public hare: Sprite;
        public obniz : any;
        
        constructor() {
            super();
            this.bus = new EventBus(runtime);
            this.element = <any>document.getElementById('target');
            this.spriteElement = <SVGCircleElement><any>document.getElementById('svgsprite');
            this.hareElement = <SVGCircleElement><any>document.getElementById('svgsprite2');
            this.sprite = new Sprite();
            this.hare = new Sprite();
        }
        
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            if(this.obniz){
                this.obniz.reset();
                this.obniz.close();
                this.obniz = null;
            }
            document.body.innerHTML = ''; // clear children
            document.body.appendChild(this.element);
            this.obniz = new Obniz("29603395");

            return Promise.resolve();
        }       
        
        updateView() {
            this.spriteElement.cx.baseVal.value = this.sprite.x;
            this.spriteElement.cy.baseVal.value = this.sprite.y;

            this.hareElement.cx.baseVal.value = this.hare.x;
            this.hareElement.cy.baseVal.value = this.hare.y;
        }
    }
}