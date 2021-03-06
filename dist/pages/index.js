"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("next/head"));
function Home() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(head_1.default, null,
            react_1.default.createElement("title", null, "Create Next App"),
            react_1.default.createElement("meta", { name: "description", content: "Generated by create next app" }),
            react_1.default.createElement("link", { rel: "icon", href: "/favicon.ico" }))));
}
exports.default = Home;
//# sourceMappingURL=index.js.map