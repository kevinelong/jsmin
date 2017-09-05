var limit = fieldTypeList.length;

var list = [];

for (var i = 0; i < limit; i++) {
    var fieldType = fieldTypeList[i];
    var f = window[fieldType.code]('id_' + i, fieldType.code, fieldType.code, fieldType.description);
    list.push(f);
}

append(
    div([
        heading('Title', 'Help Text'),
        form(list)
    ])
);
