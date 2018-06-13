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
function onHrefChanged() {
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

function showChangeObnizId(){

    var div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div);
    div.addEventListener("click",function(e){
        if((<any>e.target).id === "myModal"){
            cancelObnizId();
        }
    });
}


function onObnizIdDone(){
    var obnizId = (<any>document.getElementById("obniz_id")).value;
    obnizId  = obnizId.replace( "-" , "" ) ;
    location.href="index.html?player="+obnizId+"#editor";
}

function cancelObnizId(){
    let target = document.getElementById("myModal");
    target.parentNode.removeChild(target);
}

var observer = new MutationObserver(onHrefChanged);
observer.observe(document, {childList: true, subtree: true});


console.log("LOADING EXTENTIONS");
window.addEventListener("message", function (msg) {
    console.log(msg);
});

function changeObnizId(){
    location.href='index.html#editor';
}

function addChangeObnizIdMenu(){
    let html = `<div class="ui item link" role="menuitem" aria-label="Open other obniz" title="Open other obniz" tabindex="-1" id="open_other_obniz">
    <i class="icon print icon-and-text  " aria-hidden="true" role="presentation"></i><span class="ui text"">Open other obniz</span>
    </div>
`;

    var div = document.createElement('div');
    div.innerHTML = html;
    let targetDom = document.querySelector('div.ui.item.link[aria-label="Delete Project"]');
    targetDom.parentElement.insertBefore(div.firstChild, targetDom);
    div.firstChild.addEventListener("click",changeObnizId);

}

const blocklyToolboxXML = `<xml id="blocklyToolboxDefinition" style="display: none">
<block type="controls_repeat_ext" gap="8">
<value name="TIMES">
    <shadow type="math_number">
        <field name="NUM">4</field>
    </shadow>
</value>
</block>
</xml>`;

pxt.editor.initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
    console.log("LOADING initExtensionsAsync");
    const res: pxt.editor.ExtensionResult = {
        toolboxOptions: {
            //blocklyXml: blocklyToolboxXML
        }
    };
    return Promise.resolve<pxt.editor.ExtensionResult>(res);
};