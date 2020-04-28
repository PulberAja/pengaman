
    var _0x3d88=['log','debug','info','error','exception','table','warn','trace','apply','debu','gger','don','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','console'];(function(_0x4b152f,_0x59d86c){var _0x5c135a=function(_0x5b5d0f){while(--_0x5b5d0f){_0x4b152f['push'](_0x4b152f['shift']());}};_0x5c135a(++_0x59d86c);}(_0x3d88,0x170));var _0x306c=function(_0x4b152f,_0x59d86c){_0x4b152f=_0x4b152f-0x0;var _0x5c135a=_0x3d88[_0x4b152f];return _0x5c135a;};(function(_0x2605bc){var _0x4c9a2c=function(){var _0x244728=!![];return function(_0x3efc74,_0x16c2ac){var _0x4d7b05=_0x244728?function(){if(_0x16c2ac){var _0x45ed49=_0x16c2ac[_0x306c('0x0')](_0x3efc74,arguments);_0x16c2ac=null;return _0x45ed49;}}:function(){};_0x244728=![];return _0x4d7b05;};}();var _0x4ed3d0=[_0x306c('0x1'),_0x306c('0x2'),_0x306c('0x3')];function _0x17f16e(){var _0x41d7ca=_0x4c9a2c(this,function(){var _0x6c13c9=function(){};var _0x187a25=function(){var _0x23d8ab;try{_0x23d8ab=Function(_0x306c('0x4')+_0x306c('0x5')+');')();}catch(_0x15bb1a){_0x23d8ab=window;}return _0x23d8ab;};var _0x4a78e1=_0x187a25();if(!_0x4a78e1[_0x306c('0x6')]){_0x4a78e1[_0x306c('0x6')]=function(_0x6c13c9){var _0x19ef79={};_0x19ef79[_0x306c('0x7')]=_0x6c13c9;_0x19ef79['warn']=_0x6c13c9;_0x19ef79[_0x306c('0x8')]=_0x6c13c9;_0x19ef79[_0x306c('0x9')]=_0x6c13c9;_0x19ef79[_0x306c('0xa')]=_0x6c13c9;_0x19ef79[_0x306c('0xb')]=_0x6c13c9;_0x19ef79[_0x306c('0xc')]=_0x6c13c9;_0x19ef79['trace']=_0x6c13c9;return _0x19ef79;}(_0x6c13c9);}else{_0x4a78e1[_0x306c('0x6')][_0x306c('0x7')]=_0x6c13c9;_0x4a78e1[_0x306c('0x6')][_0x306c('0xd')]=_0x6c13c9;_0x4a78e1[_0x306c('0x6')][_0x306c('0x8')]=_0x6c13c9;_0x4a78e1[_0x306c('0x6')][_0x306c('0x9')]=_0x6c13c9;_0x4a78e1[_0x306c('0x6')][_0x306c('0xa')]=_0x6c13c9;_0x4a78e1[_0x306c('0x6')][_0x306c('0xb')]=_0x6c13c9;_0x4a78e1[_0x306c('0x6')][_0x306c('0xc')]=_0x6c13c9;_0x4a78e1[_0x306c('0x6')][_0x306c('0xe')]=_0x6c13c9;}});_0x41d7ca();return function(){return eval(_0x4ed3d0[0x0]+_0x4ed3d0[0x1]);};}_0x2605bc[_0x4ed3d0[0x2]]=_0x17f16e();setInterval(_0x4ed3d0[0x2]+'()',0xc8);}(window));

let div = document.createElement('div');
let loop = setInterval(() => {
    console.log(div);
    console.clear();
});
Object.defineProperty(div, "id", {get: () => { 
    clearInterval(loop);
    alert("Beli script Toko PulberAja dong.. JANGAN MALING COK ASU KIREK!!!");
}});

window.onload = () => {
    let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    el.parentNode.removeChild(el);
}




       window.onload = function () {
           document.addEventListener("contextmenu", function (e) {
               e.preventDefault();
           }, false);
           document.addEventListener("keydown", function (e) {
               //document.onkeydown = function(e) {
               // "I" key
               if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                   disabledEvent(e);
               }
               if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                   disabledEvent(e);
               }
               // "J" key
               if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                   disabledEvent(e);
               }
               // "S" key + macOS
               if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                   disabledEvent(e);
               }
           }, false);
           function disabledEvent(e) {
               if (e.stopPropagation) {
                   e.stopPropagation();
               } else if (window.event) {
                   window.event.cancelBubble = true;
               }
               e.preventDefault();
               return false;
           }
       }

