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
var Button_1 = __importDefault(require("../components/atom/Button"));
var Input_1 = __importDefault(require("../components/atom/Input"));
var LinkButton_1 = __importDefault(require("../components/atom/LinkButton"));
var Container = twin_macro_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["bg-grey-100 w-full h-full min-h-screen flex items-center justify-center"], ["bg-grey-100 w-full h-full min-h-screen flex items-center justify-center"])));
var RoundedBox = twin_macro_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["rounded-[10px] bg-white w-[542px] h-[609px] shadow-[0px_0px_6px_rgba(0, 0, 0, 0.1)] box-border pt-[49px] px-[44px] pb-[58px]"], ["rounded-[10px] bg-white w-[542px] h-[609px] shadow-[0px_0px_6px_rgba(0, 0, 0, 0.1)] box-border pt-[49px] px-[44px] pb-[58px]"])));
var Logo = twin_macro_1.default.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["w-[69px] h-[66px] object-contain mx-auto"], ["w-[69px] h-[66px] object-contain mx-auto"])));
var Title = twin_macro_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["font-bold text-[40px] text-center mt-[9px]"], ["font-bold text-[40px] text-center mt-[9px]"])));
function Login() {
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(RoundedBox, null,
            react_1.default.createElement(Logo, { src: "/logo.png" }),
            react_1.default.createElement(Title, null, "ANTHILL"),
            react_1.default.createElement("form", null,
                react_1.default.createElement("div", { tw: "mt-[39px]" },
                    react_1.default.createElement(Input_1.default, { iconType: "user", placeholder: "Username" })),
                react_1.default.createElement("div", { tw: "mt-[45px]" },
                    react_1.default.createElement(Input_1.default, { iconType: "lock", placeholder: "Password", type: "password" })),
                react_1.default.createElement("div", { tw: "mt-[66px]" },
                    react_1.default.createElement(Button_1.default, { label: "Login", type: "submit" }))),
            react_1.default.createElement("div", { tw: "flex justify-between mt-[21px]" },
                react_1.default.createElement(LinkButton_1.default, { label: "Create account" }),
                react_1.default.createElement(LinkButton_1.default, { label: "Forgot password?" })))));
}
exports.default = Login;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=login.js.map