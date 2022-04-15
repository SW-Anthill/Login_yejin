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
var CustomButton = twin_macro_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["outline-none rounded-[40px] text-[24px] text-center py-[12px] w-full border-skyblue-300 border-[1px] text-skyblue-300 hocus:bg-skyblue-300 hocus:text-white"], ["outline-none rounded-[40px] text-[24px] text-center py-[12px] w-full border-skyblue-300 border-[1px] text-skyblue-300 hocus:bg-skyblue-300 hocus:text-white"])));
function Button(_a) {
    var label = _a.label, type = _a.type, onClick = _a.onClick;
    return (react_1.default.createElement(CustomButton, { onClick: onClick, type: type }, label));
}
exports.default = Button;
var templateObject_1;
//# sourceMappingURL=Button.js.map