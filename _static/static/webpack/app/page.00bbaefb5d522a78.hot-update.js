"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/indexedDB/db.js":
/*!************************************!*\
  !*** ./components/indexedDB/db.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: function() { return /* binding */ db; }\n/* harmony export */ });\n/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ \"(app-pages-browser)/./node_modules/dexie/dist/modern/dexie.mjs\");\n\nconst db = new dexie__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"todoDatabase\");\n// db.version(1).stores({\n// \ttodos: \"++id, todo, date, tags, isCompleted, subtasks\", // Primary key and indexed props\n// });\ndexie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDatabaseNames(function(names, cb) {\n    console.log(\"database names: \", names);\n    names.forEach(function(name) {\n        var db = new dexie__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n        db.delete().then(function() {\n            console.log(\"Database successfully deleted: \", name);\n        }).catch(function(err) {\n            console.error(\"Could not delete database: \", name, err);\n        }).finally(function() {\n            console.log(\"Done. Now executing callback if passed.\");\n            if (typeof cb === \"function\") {\n                cb();\n            }\n        });\n    });\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaW5kZXhlZERCL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLEtBQUssSUFBSUQsNkNBQUtBLENBQUMsZ0JBQWdCO0FBRTVDLHlCQUF5QjtBQUN6Qiw0RkFBNEY7QUFDNUYsTUFBTTtBQUVOQSw2Q0FBS0EsQ0FBQ0UsZ0JBQWdCLENBQUMsU0FBVUMsS0FBSyxFQUFFQyxFQUFFO0lBQ3pDQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CSDtJQUNoQ0EsTUFBTUksT0FBTyxDQUFDLFNBQVVDLElBQUk7UUFDM0IsSUFBSVAsS0FBSyxJQUFJRCw2Q0FBS0EsQ0FBQ1E7UUFDbkJQLEdBQUdRLE1BQU0sR0FDUEMsSUFBSSxDQUFDO1lBQ0xMLFFBQVFDLEdBQUcsQ0FBQyxtQ0FBbUNFO1FBQ2hELEdBQ0NHLEtBQUssQ0FBQyxTQUFVQyxHQUFHO1lBQ25CUCxRQUFRUSxLQUFLLENBQUMsK0JBQStCTCxNQUFNSTtRQUNwRCxHQUNDRSxPQUFPLENBQUM7WUFDUlQsUUFBUUMsR0FBRyxDQUFDO1lBQ1osSUFBSSxPQUFPRixPQUFPLFlBQVk7Z0JBQzdCQTtZQUNEO1FBQ0Q7SUFDRjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXhlZERCL2RiLmpzPzA4MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERleGllIGZyb20gXCJkZXhpZVwiO1xuXG5leHBvcnQgY29uc3QgZGIgPSBuZXcgRGV4aWUoXCJ0b2RvRGF0YWJhc2VcIik7XG5cbi8vIGRiLnZlcnNpb24oMSkuc3RvcmVzKHtcbi8vIFx0dG9kb3M6IFwiKytpZCwgdG9kbywgZGF0ZSwgdGFncywgaXNDb21wbGV0ZWQsIHN1YnRhc2tzXCIsIC8vIFByaW1hcnkga2V5IGFuZCBpbmRleGVkIHByb3BzXG4vLyB9KTtcblxuRGV4aWUuZ2V0RGF0YWJhc2VOYW1lcyhmdW5jdGlvbiAobmFtZXMsIGNiKSB7XG5cdGNvbnNvbGUubG9nKFwiZGF0YWJhc2UgbmFtZXM6IFwiLCBuYW1lcyk7XG5cdG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcblx0XHR2YXIgZGIgPSBuZXcgRGV4aWUobmFtZSk7XG5cdFx0ZGIuZGVsZXRlKClcblx0XHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJEYXRhYmFzZSBzdWNjZXNzZnVsbHkgZGVsZXRlZDogXCIsIG5hbWUpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZGVsZXRlIGRhdGFiYXNlOiBcIiwgbmFtZSwgZXJyKTtcblx0XHRcdH0pXG5cdFx0XHQuZmluYWxseShmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRG9uZS4gTm93IGV4ZWN1dGluZyBjYWxsYmFjayBpZiBwYXNzZWQuXCIpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRjYigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fSk7XG59KTtcbiJdLCJuYW1lcyI6WyJEZXhpZSIsImRiIiwiZ2V0RGF0YWJhc2VOYW1lcyIsIm5hbWVzIiwiY2IiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsIm5hbWUiLCJkZWxldGUiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImZpbmFsbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/indexedDB/db.js\n"));

/***/ })

});