"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TitleForm.tsx":
/*!**************************************!*\
  !*** ./src/components/TitleForm.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TitleForm\": function() { return /* binding */ TitleForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_matsudatomoyuki_programming_js_practice_React_pra_recoil_sample_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _TodoTitleFormAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TodoTitleFormAtom */ \"./src/TodoTitleFormAtom.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/matsudatomoyuki/programming/js_practice/React-pra/recoil-sample/src/components/TitleForm.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// 追加タスク名を入力するフォームのコンポーネント\n\n\n\n\nvar TitleForm = function TitleForm() {\n  _s();\n\n  // Atomの値を取得、更新するためにはuseRecoilState()にAtomを引数として渡す\n  // [取得した値、セッター関数] = useRecoilState(atomKey)\n  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_TodoTitleFormAtom__WEBPACK_IMPORTED_MODULE_3__.todoTitleFormState),\n      _useRecoilState2 = (0,_Users_matsudatomoyuki_programming_js_practice_React_pra_recoil_sample_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useRecoilState, 2),\n      todoTitleFormText = _useRecoilState2[0],\n      setTodoTitleFormText = _useRecoilState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n    children: [\"Todo\\u30BF\\u30A4\\u30C8\\u30EB\\uFF1A\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      value: todoTitleFormText,\n      onChange: function onChange(e) {\n        return setTodoTitleFormText(e.target.value);\n      },\n      name: \"title\",\n      style: {\n        margin: 12\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TitleForm, \"1a0+RbRQ7cz1T7gkK/Tg3ZG+/oo=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState];\n});\n\n_c = TitleForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"TitleForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaXRsZUZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1HLFNBQW9CLEdBQUcsU0FBdkJBLFNBQXVCLEdBQU07QUFBQTs7QUFDeEM7QUFDQTtBQUNBLHdCQUNFRixzREFBYyxDQUFTQyxrRUFBVCxDQURoQjtBQUFBO0FBQUEsTUFBT0UsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUdBLHNCQUNFO0FBQUEsa0VBRUU7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUssRUFBRUQsaUJBRlQ7QUFHRSxjQUFRLEVBQUUsa0JBQUNFLENBQUQ7QUFBQSxlQUFPRCxvQkFBb0IsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBM0I7QUFBQSxPQUhaO0FBSUUsVUFBSSxFQUFDLE9BSlA7QUFLRSxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWxCTTs7R0FBTU47VUFJVEY7OztLQUpTRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaXRsZUZvcm0udHN4P2UxYTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g6L+95Yqg44K/44K544Kv5ZCN44KS5YWl5Yqb44GZ44KL44OV44Kp44O844Og44Gu44Kz44Oz44Od44O844ON44Oz44OIXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IHRvZG9UaXRsZUZvcm1TdGF0ZSB9IGZyb20gXCIuLi9Ub2RvVGl0bGVGb3JtQXRvbVwiO1xuXG5leHBvcnQgY29uc3QgVGl0bGVGb3JtOiBSZWFjdC5WRkMgPSAoKSA9PiB7XG4gIC8vIEF0b23jga7lgKTjgpLlj5blvpfjgIHmm7TmlrDjgZnjgovjgZ/jgoHjgavjga91c2VSZWNvaWxTdGF0ZSgp44GrQXRvbeOCkuW8leaVsOOBqOOBl+OBpua4oeOBmVxuICAvLyBb5Y+W5b6X44GX44Gf5YCk44CB44K744OD44K/44O86Zai5pWwXSA9IHVzZVJlY29pbFN0YXRlKGF0b21LZXkpXG4gIGNvbnN0IFt0b2RvVGl0bGVGb3JtVGV4dCwgc2V0VG9kb1RpdGxlRm9ybVRleHRdID1cbiAgICB1c2VSZWNvaWxTdGF0ZTxzdHJpbmc+KHRvZG9UaXRsZUZvcm1TdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGFiZWw+XG4gICAgICBUb2Rv44K/44Kk44OI44Or77yaXG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17dG9kb1RpdGxlRm9ybVRleHR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9kb1RpdGxlRm9ybVRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEyIH19XG4gICAgICAvPlxuICAgIDwvbGFiZWw+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVjb2lsU3RhdGUiLCJ0b2RvVGl0bGVGb3JtU3RhdGUiLCJUaXRsZUZvcm0iLCJ0b2RvVGl0bGVGb3JtVGV4dCIsInNldFRvZG9UaXRsZUZvcm1UZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TitleForm.tsx\n");

/***/ })

});