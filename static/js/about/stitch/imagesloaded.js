(function(){
    function e(){}
    var t=e.prototype,n=this,i=n.EventEmitter;
    function r(e,t){
        for(var n=e.length;n--;)
            if(e[n].listener===t)
                return n;
            return-1
    }
    function o(e){
        return function(){
            return this[e].apply(this,arguments)
        }
    }
    t.getListeners=function(e){
        var t,n,i=this._getEvents();
        if("object"==typeof e)
            for(n in t={},i)
                i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n]);
        else 
            t=i[e]||(i[e]=[]);
            return t
    },
    t.flattenListeners=function(e){
        var t,n=[];
        for(t=0;t<e.length;t+=1)
            n.push(e[t].listener);
            return n
    },
    t.getListenersAsObject=function(e){
        var t,n=this.getListeners(e);
        return n instanceof Array&&((t={})[e]=n),t||n
    },
    t.addListener=function(e,t){
        var n,i=this.getListenersAsObject(e),o="object"==typeof t;
        for(n in i)
            i.hasOwnProperty(n)&&-1===r(i[n],t)&&i[n].push(o?t:{
                listener:t,once:!1
            });
        return this
    },
    t.on=o("addListener"),t.addOnceListener=function(e,t){
        return this.addListener(e,{
            listener:t,once:!0
        })
    },
    t.once=o("addOnceListener"),t.defineEvent=function(e){
        return this.getListeners(e),this
    },
    t.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},t.removeListener=function(e,t){var n,i,o=this.getListenersAsObject(e);for(i in o)o.hasOwnProperty(i)&&-1!==(n=r(o[i],t))&&o[i].splice(n,1);return this},t.off=o("removeListener"),t.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},t.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},t.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},t.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},t.removeAllListeners=o("removeEvent"),t.emitEvent=function(e,t){var n,i,r,o=this.getListenersAsObject(e);for(r in o)if(o.hasOwnProperty(r))for(i=o[r].length;i--;)!0===(n=o[r][i]).once&&this.removeListener(e,n.listener),n.listener.apply(this,t||[])===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},t.trigger=o("emitEvent"),t.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},t.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},t._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},t._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return n.EventEmitter=i,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){var t=document.documentElement,n=function(){};function i(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(e,t,n){e[t+n]=n.handleEvent?function(){var t=i(e);n.handleEvent.call(n,t)}:function(){var t=i(e);n.call(e,t)},e.attachEvent("on"+t,e[t+n])});var r=function(){};t.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:n,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){var i=e.jQuery,r=e.console,o=void 0!==r;function s(e,t){for(var n in t)e[n]=t[n];return e}var f=Object.prototype.toString;function c(e){var t=[];if(function(e){return"[object Array]"===f.call(e)}(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;n<i;n++)t.push(e[n]);else t.push(e);return t}function a(e,t,n){if(!(this instanceof a))return new a(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=c(e),this.options=s({},this.options),"function"==typeof t?n=t:s(this.options,t),n&&this.on("always",n),this.getImages(),i&&(this.jqDeferred=new i.Deferred);var r=this;setTimeout(function(){r.check()})}function h(e){this.img=e}a.prototype=new t,a.prototype.options={},a.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;e<t;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;o<s;o++){var f=r[o];this.addImage(f)}}},a.prototype.addImage=function(e){var t=new h(e);this.images.push(t)},a.prototype.check=function(){var e=this,t=0,n=this.images.length;if(this.hasAnyBroken=!1,n)for(var i=0;i<n;i++){var s=this.images[i];s.on("confirm",f),s.check()}else this.complete();function f(i,s){return e.options.debug&&o&&r.log("confirm",i,s),e.progress(i),++t===n&&e.complete(),!0}},a.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},i&&(i.fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(i(this))}),h.prototype=new t,h.prototype.check=function(){var e=u[this.img.src]||new d(this.img.src);if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else if(this.img.complete&&void 0!==this.img.naturalWidth)this.confirm(0!==this.img.naturalWidth,"naturalWidth");else{var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()}},h.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var u={};function d(e){this.src=e,u[e]=this}return d.prototype=new t,d.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},d.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},d.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},d.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},d.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},d.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},a});