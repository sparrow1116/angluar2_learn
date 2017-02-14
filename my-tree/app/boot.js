System.register(['angular2/platform/browser', './my.tree.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, my_tree_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (my_tree_component_1_1) {
                my_tree_component_1 = my_tree_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(my_tree_component_1.MyTreeComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map