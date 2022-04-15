"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var twin_macro_1 = __importDefault(require("twin.macro"));
var CustomLinkButton = twin_macro_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["text-[20px] underline text-center text-skyblue-300"], ["text-[20px] underline text-center text-skyblue-300"])));
function LinkButton(_a) {
    var label = _a.label, href = _a.href;
    return react_1.default.createElement(CustomLinkButton, { href: href }, label);
}
exports.default = LinkButton;
var templateObject_1;
//# sourceMappingURL=LinkButton.js.map