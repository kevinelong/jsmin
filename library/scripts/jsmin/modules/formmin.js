var FORMMIN = function () {

    function heading(title, helpText) {
        return div([
            div(title),
            hr(),
            div(helpText)
        ]);
    }

    function field(id_name, value, title, helpText, fieldType) {

        var list = [];
        var fieldType = fieldType ? fieldType : 'text';

        if (title) {
            list.push(span(title));
        }

        if (fieldType == 'textArea') {
            list.push(textArea(value, {name: id_name, type: fieldType}));
        } else {
            list.push(input([], {name: id_name, value: value, type: fieldType}));
        }

        if (helpText) {
            list.push(span(helpText));
        }

        return label(list, {id: id_name});
    }

    function textField(id_name, value, title, helpText, fieldType) {
        return field(id_name, value, title, helpText, 'textArea');
    }

    function actionButton(id_name, value, title) {
        return input('', {id: id_name, name: id_name, value: value, title: title, type: "submit"});
    }

    var fieldTypeList = [
        {
            code: "field", description: "Short Single Line Text Input"
        }
        ,
        {
            code: "textField", description: "Long Paragraph Text Input"
        }
        ,
        {
            code: "actionButton", description: "Action Button"
        }
    ];

    return {
        fieldTypeList: fieldTypeList,
        heading: heading,
        field: field,
        textField: textField,
        actionButton: actionButton
    }

}();
mixin(window, FORMMIN);