!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.events=e.events||{})}(this,function(e){"use strict";function t(e){Array.isArray(e)?e.forEach(function(e){i.push(e)}):i.push({event:e.event,element:e.element,targetEl:e.targetEl,callback:e.callback})}function n(e,t){function n(n,o,a,r,l){var c;n||(n="body"),"string"==typeof n?c=document.querySelector(n):n.nodeName&&(c=n);var u=function(n){var o=n.target,i=Array.prototype.slice.apply(c.querySelectorAll(a));do for(var l=i.length,u=0;u<l;u++)if(o===i[u]){r.call(i[u],n,e,t);break}while(o=o.parentNode)};i[l].delegatedCallback=r,i[l].callback=u,c.addEventListener(o,u)}i.forEach(function(e,t){var o;if(o="string"==typeof e.element?document.querySelector(e.element):document.querySelector("body"),e.targetEl)n(e.element,e.event,e.targetEl,e.callback,t);else{o.addEventListener(e.event,e.callback)}})}function o(e,t,n){if(i&&i.length){for(var o=-1,a=i.length,r=0;r<a;r++)if(i[r].element===e&&i[r].event===t&&i[r].delegatedCallback&&i[r].delegatedCallback===n)o=r;else if(i[r].element===e&&i[r].event===t&&i[r].callback===n){o=r;break}if(o===-1)return;document.querySelector(e).removeEventListener(i[o].event,i[o].callback),i.splice(o,1)}}function a(e,t,n){if(!t)return void console.error("No event was provided. You do need to provide one.");if("string"==typeof e&&(e=document.querySelector(e)),document.createEvent){var o=document.createEvent("Events");o.initEvent(t,!0,!1),o.data=n,e.dispatchEvent(o)}}var i=[],r="ontouchstart"in window&&/mobile/gim.test(navigator.userAgent)?"touchstart":"mousedown",l="ontouchstart"in window&&/mobile/gim.test(navigator.userAgent)?"touchend":"click",c="ontouchstart"in window&&/mobile/gim.test(navigator.userAgent)?"touchmove":"mousemove";"ontouchstart"in window&&/mobile/gim.test(navigator.userAgent);(function(){function e(e){return"tagName"in e?e:e.parentNode}function t(e,t,n,o){return Math.abs(e-t)>=Math.abs(n-o)?e-t>0?"left":"right":n-o>0?"up":"down"}function n(){if(f=null,g.last)try{g&&g.el&&(a(g.el,"longtap"),g={})}catch(e){}}function o(){f&&clearTimeout(f),f=null}function i(){u&&clearTimeout(u),d&&clearTimeout(d),s&&clearTimeout(s),f&&clearTimeout(f),u=d=s=f=null,g={}}var u,s,d,g={},v=150;/android/gim.test(navigator.userAgent)&&(v=200);var f;!function(){var m,p,h=document.body,b=!1;h.addEventListener(r,function(t){if(m=Date.now(),p=m-(g.last||m),t.originalEvent&&(t=t.originalEvent),"mousedown"===r)g.el=e(t.target),"ripple"===t.target.nodeName&&(g.el=el.target.parentNode),u&&clearTimeout(u),g.x1=t.pageX,g.y1=t.pageY,b=!1;else if(1===t.touches.length){if(t.target.disabled)return;g.el=e(t.touches[0].target),u&&clearTimeout(u),g.x1=t.touches[0].pageX,g.y1=t.touches[0].pageY,b=2===t.targetTouches.length}p>0&&p<=450&&(g.isDoubleTap=!0),g.last=m,f=setTimeout(n,750)}),h.addEventListener(c,function(e){e.originalEvent&&(e=e.originalEvent),o(),"mousemove"===c?(g.x2=e.pageX,g.y2=e.pageY):1===e.touches.length&&(g.x2=e.touches[0].pageX,g.y2=e.touches[0].pageY,g.move=!0)}),h.addEventListener(l,function(e){o(),g.el&&(g.x2&&Math.abs(g.x1-g.x2)>20||g.y2&&Math.abs(g.y1-g.y2)>20?s=setTimeout(function(){g&&g.el&&(a(g.el,"swipe"),a(g.el,"swipe"+t(g.x1,g.x2,g.y1,g.y2)),g={})},0):"last"in g&&(d=setTimeout(function(){g&&g.isDoubleTap?g&&g.el&&(a(g.el,"doubletap"),e.preventDefault(),g={}):u=setTimeout(function(){u=null,g&&g.el&&!g.move?(a(g.el,"tap"),g={}):i()},v)},0)))}),h.addEventListener("touchcancel",i)}()})(),e.defineEvents=t,e.bindEvents=n,e.unbindEvent=o,e.trigger=a});
//# sourceMappingURL=events.js.map
