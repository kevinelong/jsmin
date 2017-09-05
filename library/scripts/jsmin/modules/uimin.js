var UIMIN = function () {

    function panel(content,attributeList){
        var d = div(content,attributeList);
        d.classList.add('uiPanel');
        return d;
    }

    function panelList(content,attributeList){
        var d = div(content,attributeList);
        d.classList.add('uiPanelList');
        return d;
    }

    function leftPanel(content,attributeList){
        var d = panel(content,attributeList);
        d.classList.add('uiLeftPanel');
        return d;
    }

    function rightPanel(content,attributeList){
        var d = panel(content,attributeList);
        d.classList.add('uiRightPanel');
        return d;
    }

    function contentPanel(content,attributeList){
        var d = panel(content,attributeList);
        d.classList.add('uiContentPanel');
        return d;
    }

    return {
        panel: panel,
        panelList: panelList,
        contentPanel: contentPanel,
        leftPanel: leftPanel,
        rightPanel: rightPanel
    }

}();
mixin(window, UIMIN);