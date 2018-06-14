/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
const modalHTML = `
<div class="ReactModal__Overlay ReactModal__Overlay--after-open ui page modals dimmer transition visible active"  id="myModal" aria-modal="true">
<div class="ReactModal__Content ReactModal__Content--after-open ui tiny closable modal transition visible active exitandsave"
   tabindex="-1" style="margin-top: -200px;">
  <div id="7e1a638a-dc92-42b7-5e17-ef33c83a6164title" class="header ">Type obniz id</div>
  
  <div id="7e1a638a-dc92-42b7-5e17-ef33c83a6164desc" class=" content">
    <div class="ui form">
      <div class="field">
      <img src="obnizId-min.png" style="display:block;margin:auto;max-width: 300px"/>      
      <div class="ui input"><input id="obniz_id" class="" type="text" value=""  placeholder="XXXX-XXXX"></div>
      </div>
    </div>
  </div>
  <div class="actions">
  
    <button class="ui button ui button icon icon-and-text approve icon right labeled approve positive " tabindex="0" onclick="onObnizIdDone()">
      <i class="icon check icon-and-text  " aria-hidden="true" role="presentation"></i>
      <span class="ui text">Done</span>
    </button>
  </div>
  
</div>
</div>
`;

function getParameterByName(name: string, url: string) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var href = "";

function onDomChanged() {
    addChangeObnizIdMenu();
    showObnizId();
    addObnizLogo();
    addClickEvents();
    removeRightHeaderSpace();
    if (href !== location.href) {
        console.log("Before:", href);
        console.log("After:", location.href);
        href = location.href;

        if (location.href.indexOf("#editor") >= 0) {
            let obnizId = getParameterByName("player", href);
            if (obnizId === null) {
                showChangeObnizId();
            }
        }
    }
}

function removeRightHeaderSpace() {
    let target = document.querySelector('a[aria-label="(undef) Logo"]');
    if (target) {
        target.parentNode.removeChild(target);
    }
}

function showChangeObnizId() {
    console.log("showChangeObnizId");

    var div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.querySelector("#allcontent").appendChild(div);
    div.addEventListener("click", function (e) {
        if ((<any>e.target).id === "myModal") {
            cancelObnizId();
        }
    });
}

function addObnizLogo(){

    if (document.getElementById("obniz_link")) {
        return;
    }
    let target = document.querySelector("#mainmenu div.left.menu");
    if (!target) {
        target = document.querySelector("#homemenu div.left.menu");
        if(!target){
            return;

        }
    }

    var html = `<a id="obniz_link" aria-label="obniz Logo" role="menuitem" href="https://obniz.io" target="blank" class="ui item logo brand" tabindex="0">
<img class="ui logo  portrait hide" src="static/logo.svg" alt="obniz logo" width="56px" height="56px" style="max-height: 3rem;">
<img class="ui mini image portrait only" src="static/logo.svg" alt="obniz logo" width="56px" height="56px" style="max-height: 3rem;">
</a>`;

    var div = document.createElement('div');
    div.innerHTML = html;
    div.firstChild.addEventListener("click", changeObnizId, true);
    target.insertBefore(div.firstChild, target.firstChild);


}

function onObnizIdDone() {
    var obnizId = (<any>document.getElementById("obniz_id")).value;
    obnizId = obnizId.replace("-", "");
    location.href = "index.html?player=" + obnizId + "#editor";
}

function cancelObnizId() {
    let target = document.getElementById("myModal");
    target.parentNode.removeChild(target);
}

var observer = new MutationObserver(onDomChanged);
observer.observe(document, {childList: true, subtree: true});

function changeObnizId() {
    if(location.search.length === 0 ){
        location.reload();
    }else{
        location.href = 'index.html#editor';
    }
}

function showObnizId() {
    if (document.getElementById("show_obniz_id")) {
        return;
    }
    let target = document.querySelector("#mainmenu div.right.menu");
    if (!target) {
        return;
    }
    let obnizId = null;
    var m = /player=([A-Za-z0-9]+)/i.exec(window.location.href);
    if (m) {
        obnizId = m[1];
        obnizId = obnizId.replace("-", "");
        obnizId = obnizId.substr(0, 4) + "-" + obnizId.substr(4);
    } else {
        obnizId = "not selected"
    }

    if (typeof this.obnizId !== "string" || this.obnizId.length === 0) {
        this.obnizId = "obniz id is not selected."
    }

    let html = `<div title="obniz id" id="show_obniz_id" role="menuitem" aria-haspopup="false" class="ui dropdown icon item logo" tabindex="0">
<span class="ui text" align="center" style="">obniz ID<br/>${obnizId}</span>
</div>`;
    var div = document.createElement('div');
    div.innerHTML = html;
    div.firstChild.addEventListener("click", changeObnizId, true);
    target.insertBefore(div.firstChild, target.firstChild);
}

function addChangeObnizIdMenu() {
    if (document.getElementById("open_other_obniz")) {
        return;
    }
    let targetDom = document.querySelector('div.ui.item.link[aria-label="Delete Project"]');
    if (!targetDom) {
        return;
    }
    let html = `<div class="ui item link" role="menuitem" aria-label="Open other obniz" title="Open other obniz" tabindex="-1" id="open_other_obniz">
    <i class="icon exchange icon-and-text" aria-hidden="true" role="presentation"></i><span class="ui text">Open other obniz</span>
    </div>
`;

    var div = document.createElement('div');
    div.innerHTML = html;
    targetDom.parentElement.insertBefore(div.firstChild, targetDom);

    addClickEvents();
}

function addClickEvents() {
    let obnizMenu = document.getElementById("open_other_obniz");
    if (obnizMenu) {
        // obnizMenu.addEventListener("click",changeObnizId,true);
        obnizMenu.addEventListener("mousedown", (e) => {

            //todo onclickで対応する
            changeObnizId();
        }, false);
    }
    let showObnizId = document.getElementById("open_other_obniz");
    if (showObnizId) {
        // obnizMenu.firstChild.addEventListener("click",changeObnizId,true);
        showObnizId.addEventListener("click", changeObnizId, true);
    }


    let obnizLogo = document.getElementById("obniz_link");
    if (obnizLogo) {
        obnizLogo.addEventListener("click", ()=>{location.href="https://obniz.io"}, true);
    }


}


// const blocklyToolboxXML = `<xml id="blocklyToolboxDefinition" style="display: none">
// <block type="controls_repeat_ext" gap="8">
// <value name="TIMES">
//     <shadow type="math_number">
//         <field name="NUM">4</field>
//     </shadow>
// </value>
// </block>
// </xml>`;
//
// pxt.editor.initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
//     console.log("LOADING initExtensionsAsync");
//     const res: pxt.editor.ExtensionResult = {
//         toolboxOptions: {
//             //blocklyXml: blocklyToolboxXML
//         }
//     };
//     return Promise.resolve<pxt.editor.ExtensionResult>(res);
// };