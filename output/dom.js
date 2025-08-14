"use strict";
// console.log("dom handling");
Object.defineProperty(exports, "__esModule", { value: true });
var headingEl = document.querySelector("h1");
var headingText = headingEl?.textContent;
var anchorEl = document.querySelector("a");
var anchorText = anchorEl?.textContent;
var anchorElClass = document.querySelector('.anchorStyle');
console.log(headingText);
console.log(anchorText);
console.log(headingEl?.classList);
console.log(headingEl?.classList.contains("some-class"));
console.log(anchorElClass.href);
//# sourceMappingURL=dom.js.map