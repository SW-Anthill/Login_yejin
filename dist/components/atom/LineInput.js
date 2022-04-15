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
var macro_1 = __importDefault(require("@emotion/styled/macro"));
var twin_macro_1 = __importDefault(require("twin.macro"));
var getIconInfo = function (iconType) {
    switch (iconType) {
        case "user":
            return {
                width: "22px",
                height: "24px",
                padding: "0 22px 0 8px",
            };
        case "lock":
            return {
                width: "18px",
                height: "24px",
                padding: "0 24px 0 10px",
            };
        default:
            return {};
    }
};
var Container = macro_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  .icon {\n    ", ";\n  }\n  &:focus-within,\n  :hover {\n    ", "\n    .icon {\n      background-image: ", ";\n    }\n  }\n"], ["\n  ", "\n  .icon {\n    ", ";\n  }\n  &:focus-within,\n  :hover {\n    ", "\n    .icon {\n      background-image: ", ";\n    }\n  }\n"])), (0, twin_macro_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["px-[5px] border-b-grey-400 border-b-[1px] w-full flex items-center"], ["px-[5px] border-b-grey-400 border-b-[1px] w-full flex items-center"]))), function (_a) {
    var iconType = _a.iconType;
    var _b = getIconInfo(iconType), width = _b.width, height = _b.height, padding = _b.padding;
    return "\n      background-image: url(\"/".concat(iconType, "_grey.svg\");\n      background-size: contain;\n      margin: ").concat(padding, ";\n      width: ").concat(width, ";\n      height: ").concat(height, ";\n    ");
}, (0, twin_macro_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["border-b-skyblue-300"], ["border-b-skyblue-300"]))), function (_a) {
    var iconType = _a.iconType;
    return "url(\"/".concat(iconType, "_skyblue.svg\")");
});
var CustomInput = twin_macro_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["outline-none text-[16px] py-[9px] w-full placeholder-grey-400"], ["outline-none text-[16px] py-[9px] w-full placeholder-grey-400"])));
function Input(_a) {
    var iconType = _a.iconType, value = _a.value, type = _a.type, placeholder = _a.placeholder, onChange = _a.onChange;
    return (react_1.default.createElement(Container, { iconType: iconType },
        iconType && react_1.default.createElement("div", { className: "icon", tw: "bg-no-repeat box-content" }),
        react_1.default.createElement(CustomInput, { type: type, value: value, placeholder: placeholder, onChange: onChange })));
}
exports.default = Input;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=LineInput.js.map