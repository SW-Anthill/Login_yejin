"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var twin_macro_1 = require("twin.macro");
require("../styles/tailwind.globals.css");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(twin_macro_1.GlobalStyles, null),
        react_1.default.createElement(Component, __assign({}, pageProps))));
}
exports.default = MyApp;
//# sourceMappingURL=_app.js.map