var JSMIN = function () {

    var listen = document.addEventListener;

    function whenLoaded(callback) {
        listen("DOMContentLoaded", callback);
    }

    function appendTo(e, content) {
        if (content != undefined && e.innerHTML != undefined) {
            if (Array.isArray(content)) {
                for (var i = 0; i < content.length; i++) {
                    e.append(content[i]);
                }
            } else if (typeof content === "string") {
                e.innerHTML = content
            } else if (typeof content === 'object') {
                e.append(content);
            }
        }
    }

    function create(tagName, content, attributeList) {
        var e = document.createElement(tagName);
        e.append = e.appendChild;

        if (attributeList != undefined && e.attributes != undefined) {
            mixinAttributes(e, attributeList);
        }
        appendTo(e, content);

        return e;
    }

    function getKeys(source) {
        return Object.getOwnPropertyNames(source);
    }

    function mixin(target, source) {
        var keyList = getKeys(source);
        for (var i = 0; i < keyList.length; i++) {
            var key = keyList[i];
            target[key] = source[key];
        }
        return target;
    }

    function mixinAttributes(target, source) {
        var keyList = Object.getOwnPropertyNames(source);
        for (var i = 0; i < keyList.length; i++) {
            var key = keyList[i];
            target.setAttribute(key, source[key]);
        }
    }

    function append(e) {
        return document.body.appendChild(e);
    }

    function load(list, options) {
        var options = options == undefined ? {} : options;
        var element = options.element == undefined ? 'script' : options.element;
        var prefix = options.prefix == undefined ? './' : options.prefix;
        var suffix = options.suffix == undefined ? '.js' : options.suffix;
        var attribute = options.attribute == undefined ? 'src' : options.attribute;

        for (var i = 0; i < list.length; i++) {
            var s = document.createElement(element);
            s.setAttribute(attribute, prefix + list[i] + suffix);
            if (suffix == '.css') {
                s.setAttribute('rel', 'stylesheet');
            }
            document.head.appendChild(s);
        }

    }


    return {
        load: load,
        mixin: mixin,
        append: append,
        create: create,
        listen: listen,
        whenLoaded: whenLoaded
    }
}();
JSMIN.mixin(window, JSMIN);
