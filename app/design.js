var list = [
    heading('Field Types', 'Select a field type to add to the form.')
];

var limit = fieldTypeList.length;

for (var i = 0; i < limit; i++) {
    var fieldType = fieldTypeList[i];
    var b = button(fieldType.code, {title: fieldType.description});
    list.push(b);
}

append(
    div([
        heading('Form Designer', 'Select Field Types from the Left Panel Palette.'),
        panelList([
            leftPanel(list),
            rightPanel('right')
        ]),
        contentPanel('content')
    ])
);

