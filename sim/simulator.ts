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
        public obniz : any;
        
        constructor() {
            super();
            this.bus = new EventBus(runtime);
            this.element = <any>document.getElementById('target');
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

        }

        kill(){
            if(this.obniz){
                this.obniz.reset();
                this.obniz.close();
                this.obniz = null;
            }
        }
    }
}