/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("let target = document.querySelector(\"#dynamic\");\r\n\r\n\r\n\r\nfunction randomString(){\r\n    let stringArr = [\"Learn To HTML\", \"Learn To CSS\", \"Learn To Javascript\", \"Learn To Python\", \"Learn To Ruby\"];\r\n    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];\r\n    let selectStringArr = selectString.split(\"\");\r\n\r\n    return selectStringArr;\r\n}\r\n\r\n//타이핑 리셋\r\nfunction resetTyping(){\r\n    target.textContent = \"\";\r\n    dynamic(randomString());\r\n}\r\n\r\n//한글자씩 텍스트 출력\r\nfunction dynamic (randomArr){\r\n    if(randomArr.length > 0){\r\n       target.textContent += randomArr.shift();\r\n       setTimeout(function(){\r\n        dynamic(randomArr);}, 80)\r\n    } \r\n    else{\r\n        setTimeout(resetTyping, 3000);\r\n    }\r\n}\r\n\r\ndynamic(randomString());\r\n\r\n//커서 깜빡이 효과\r\nfunction blink(){\r\n    target.classList.toggle(\"active\");\r\n}\r\n\r\nsetInterval(blink, 500);\n\n//# sourceURL=webpack://auto-typping/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;