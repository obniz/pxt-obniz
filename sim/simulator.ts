/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

declare var Obniz:any;

interface wiredObject{
    options : {[key:string]:any};
    target : any;
}

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
        public cachedObjects : { [key: string]: wiredObject[]; } = {};
        
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
            this.cachedObjects = {};
            document.body.innerHTML = ''; // clear children
            document.body.appendChild(this.element);
            this.obniz = new Obniz("29603395",{binary:false});

            return new Promise((resolve)=>{
                this.obniz.onconnect = resolve;
            });
        }


        updateView() {

        }

        kill(){
            super.kill();
            if(this.obniz){
                this.obniz.reset();
                this.obniz.close();
                this.obniz = null;
            }
            this.cachedObjects = {};
        }


        wired(module:string, options:{ [key: string]: any;} ) : any{
            if(this.cachedObjects[module] ){
                for( let obj of this.cachedObjects[module]){
                    if(this.optionsEqual(obj.options , options)){
                        return obj.target;
                    }
                }
            }
            let obj =  this.obniz.wired(module,options);
            this.cachedObjects[module] = this.cachedObjects[module] || [];

            this.cachedObjects[module].push({
                target : obj,
                options: options
            });

            return obj;
        }

        optionsEqual(obj1:{[key:string]:any}, obj2:{[key:string]:any}) : boolean{
            for (let key in obj1){
                if(obj1[key] !== obj2[key]){
                    return false;
                }
            }

            for (let key in obj2){
                if(obj1[key] !== obj2[key]){
                    return false;
                }
            }
            return true;
        }

    }
}