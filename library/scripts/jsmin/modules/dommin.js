var DOMMIN = new function () {

    function div(content, attributeList) {return create('div', content, attributeList);}

    function span(content, attributeList) {return create('span', content, attributeList);}

    function form(content, attributeList) {return create('form', content, attributeList);}

    function input(content, attributeList) {return create('input', content, attributeList);}

    function textArea(content, attributeList) {return create('textArea', content, attributeList);}

    function label(content, attributeList) {return create('label', content, attributeList);}

    function hr(content, attributeList) {return create('hr', content, attributeList);}

    function button(content, title) {return create('button', content, {name:title,id:title});}

    return {
        div: div,
        span: span,
        form: form,
        input: input,
        textArea: textArea,
        label: label,
        button: button,
        hr: hr
    }
}();
mixin(window, DOMMIN);