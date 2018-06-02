/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {
    initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading pxt-j5 target extensions...')
        const res: pxt.editor.ExtensionResult = {
            /* called when user presses the save button */
            beforeCompile: () : void => {
                console.log("Hi, beforeCompile");
            }
        };
        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }
}