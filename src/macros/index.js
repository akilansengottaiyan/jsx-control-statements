var { createMacro } = require("babel-plugin-macros");
var transformIf = require("../ifStatement");
var transformFor = require("../forStatement");
var transformChoose = require("../chooseStatement");
var transformWith = require("../withStatement");
const nodeHandlers = {
    If: transformIf,
    For: transformFor,
    Choose: transformChoose,
    With: transformWith
};

const transformer = (rootPath, type, babel) => {
    if (rootPath.parentPath.type === "JSXOpeningElement") {
        const transformedNode = nodeHandlers[type](babel)(rootPath.parentPath.parentPath.node, rootPath.parentPath.hub.file);
        rootPath.parentPath.parentPath.replaceWith(transformedNode);
    }
}
module.exports = createMacro(({ references, babel }) => {
    const {
        If = [], For = [], Choose = [], With = []
    } = references;
    If.forEach(rootPath => {
        transformer(rootPath, "If", babel);
    });
    For.forEach(rootPath => {
        transformer(rootPath, "For", babel);
    });
    Choose.forEach(rootPath => {
        transformer(rootPath, "Choose", babel);
    });
    With.forEach(rootPath => {
        transformer(rootPath, "With", babel);
    });
});
