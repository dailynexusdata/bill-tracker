/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/site/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/site/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".labby-as-senate-styling,\\n.labby-as-senate-styling * {\\n  letter-spacing: normal !important;\\n  font-family: Arial, Helvetica, sans-serif !important;\\n}\\n.labby-as-senate-styling h1,\\n.labby-as-senate-styling h3,\\n.labby-as-senate-styling p,\\n.labby-as-senate-styling * h1,\\n.labby-as-senate-styling * h3,\\n.labby-as-senate-styling * p {\\n  margin: 0;\\n}\\n.labby-as-senate-styling h3,\\n.labby-as-senate-styling * h3 {\\n  font-weight: 100;\\n}\\n.labby-as-senate-styling a,\\n.labby-as-senate-styling a:link,\\n.labby-as-senate-styling a:active,\\n.labby-as-senate-styling a:visited,\\n.labby-as-senate-styling a:hover,\\n.labby-as-senate-styling * a,\\n.labby-as-senate-styling * a:link,\\n.labby-as-senate-styling * a:active,\\n.labby-as-senate-styling * a:visited,\\n.labby-as-senate-styling * a:hover {\\n  color: black;\\n  text-decoration: none;\\n}\\n.labby-as-senate-styling svg,\\n.labby-as-senate-styling * svg {\\n  align-self: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bill-tracker/./src/site/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://bill-tracker/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/d3-collection/src/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-collection/src/entries.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(map) {\n  var entries = [];\n  for (var key in map) entries.push({key: key, value: map[key]});\n  return entries;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-collection/src/entries.js?");

/***/ }),

/***/ "./node_modules/d3-collection/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-collection/src/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nest\": () => (/* reexport safe */ _nest__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"set\": () => (/* reexport safe */ _set__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"map\": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"keys\": () => (/* reexport safe */ _keys__WEBPACK_IMPORTED_MODULE_3__.default),\n/* harmony export */   \"values\": () => (/* reexport safe */ _values__WEBPACK_IMPORTED_MODULE_4__.default),\n/* harmony export */   \"entries\": () => (/* reexport safe */ _entries__WEBPACK_IMPORTED_MODULE_5__.default)\n/* harmony export */ });\n/* harmony import */ var _nest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nest */ \"./node_modules/d3-collection/src/nest.js\");\n/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set */ \"./node_modules/d3-collection/src/set.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./node_modules/d3-collection/src/map.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keys */ \"./node_modules/d3-collection/src/keys.js\");\n/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./values */ \"./node_modules/d3-collection/src/values.js\");\n/* harmony import */ var _entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entries */ \"./node_modules/d3-collection/src/entries.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-collection/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-collection/src/keys.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/keys.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(map) {\n  var keys = [];\n  for (var key in map) keys.push(key);\n  return keys;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-collection/src/keys.js?");

/***/ }),

/***/ "./node_modules/d3-collection/src/map.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/map.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prefix\": () => (/* binding */ prefix),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar prefix = \"$\";\n\nfunction Map() {}\n\nMap.prototype = map.prototype = {\n  constructor: Map,\n  has: function(key) {\n    return (prefix + key) in this;\n  },\n  get: function(key) {\n    return this[prefix + key];\n  },\n  set: function(key, value) {\n    this[prefix + key] = value;\n    return this;\n  },\n  remove: function(key) {\n    var property = prefix + key;\n    return property in this && delete this[property];\n  },\n  clear: function() {\n    for (var property in this) if (property[0] === prefix) delete this[property];\n  },\n  keys: function() {\n    var keys = [];\n    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));\n    return keys;\n  },\n  values: function() {\n    var values = [];\n    for (var property in this) if (property[0] === prefix) values.push(this[property]);\n    return values;\n  },\n  entries: function() {\n    var entries = [];\n    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});\n    return entries;\n  },\n  size: function() {\n    var size = 0;\n    for (var property in this) if (property[0] === prefix) ++size;\n    return size;\n  },\n  empty: function() {\n    for (var property in this) if (property[0] === prefix) return false;\n    return true;\n  },\n  each: function(f) {\n    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);\n  }\n};\n\nfunction map(object, f) {\n  var map = new Map;\n\n  // Copy constructor.\n  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });\n\n  // Index array by numeric index or specified key function.\n  else if (Array.isArray(object)) {\n    var i = -1,\n        n = object.length,\n        o;\n\n    if (f == null) while (++i < n) map.set(i, object[i]);\n    else while (++i < n) map.set(f(o = object[i], i, object), o);\n  }\n\n  // Convert object to map.\n  else if (object) for (var key in object) map.set(key, object[key]);\n\n  return map;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-collection/src/map.js?");

/***/ }),

/***/ "./node_modules/d3-collection/src/nest.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/nest.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./node_modules/d3-collection/src/map.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var keys = [],\n      sortKeys = [],\n      sortValues,\n      rollup,\n      nest;\n\n  function apply(array, depth, createResult, setResult) {\n    if (depth >= keys.length) {\n      if (sortValues != null) array.sort(sortValues);\n      return rollup != null ? rollup(array) : array;\n    }\n\n    var i = -1,\n        n = array.length,\n        key = keys[depth++],\n        keyValue,\n        value,\n        valuesByKey = (0,_map__WEBPACK_IMPORTED_MODULE_0__.default)(),\n        values,\n        result = createResult();\n\n    while (++i < n) {\n      if (values = valuesByKey.get(keyValue = key(value = array[i]) + \"\")) {\n        values.push(value);\n      } else {\n        valuesByKey.set(keyValue, [value]);\n      }\n    }\n\n    valuesByKey.each(function(values, key) {\n      setResult(result, key, apply(values, depth, createResult, setResult));\n    });\n\n    return result;\n  }\n\n  function entries(map, depth) {\n    if (++depth > keys.length) return map;\n    var array, sortKey = sortKeys[depth - 1];\n    if (rollup != null && depth >= keys.length) array = map.entries();\n    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });\n    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;\n  }\n\n  return nest = {\n    object: function(array) { return apply(array, 0, createObject, setObject); },\n    map: function(array) { return apply(array, 0, createMap, setMap); },\n    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },\n    key: function(d) { keys.push(d); return nest; },\n    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },\n    sortValues: function(order) { sortValues = order; return nest; },\n    rollup: function(f) { rollup = f; return nest; }\n  };\n}\n\nfunction createObject() {\n  return {};\n}\n\nfunction setObject(object, key, value) {\n  object[key] = value;\n}\n\nfunction createMap() {\n  return (0,_map__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\nfunction setMap(map, key, value) {\n  map.set(key, value);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-collection/src/nest.js?");

/***/ }),

/***/ "./node_modules/d3-collection/src/set.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/set.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./node_modules/d3-collection/src/map.js\");\n\n\nfunction Set() {}\n\nvar proto = _map__WEBPACK_IMPORTED_MODULE_0__.default.prototype;\n\nSet.prototype = set.prototype = {\n  constructor: Set,\n  has: proto.has,\n  add: function(value) {\n    value += \"\";\n    this[_map__WEBPACK_IMPORTED_MODULE_0__.prefix + value] = value;\n    return this;\n  },\n  remove: proto.remove,\n  clear: proto.clear,\n  values: proto.keys,\n  size: proto.size,\n  empty: proto.empty,\n  each: proto.each\n};\n\nfunction set(object, f) {\n  var set = new Set;\n\n  // Copy constructor.\n  if (object instanceof Set) object.each(function(value) { set.add(value); });\n\n  // Otherwise, assume it’s an array.\n  else if (object) {\n    var i = -1, n = object.length;\n    if (f == null) while (++i < n) set.add(object[i]);\n    else while (++i < n) set.add(f(object[i], i, object));\n  }\n\n  return set;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (set);\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-collection/src/set.js?");

/***/ }),

/***/ "./node_modules/d3-collection/src/values.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-collection/src/values.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(map) {\n  var values = [];\n  for (var key in map) values.push(map[key]);\n  return values;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-collection/src/values.js?");

/***/ }),

/***/ "./src/site/styles.scss":
/*!******************************!*\
  !*** ./src/site/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/site/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://bill-tracker/./src/site/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bill-tracker/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bill-tracker/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bill-tracker/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bill-tracker/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bill-tracker/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bill-tracker/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/plots/people.ts":
/*!*****************************!*\
  !*** ./src/plots/people.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst d3_selection_1 = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\r\nconst d3_collection_1 = __webpack_require__(/*! d3-collection */ \"./node_modules/d3-collection/src/index.js\");\r\nconst d3_array_1 = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\r\nconst d3_scale_1 = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/src/index.js\");\r\nconst images_1 = __webpack_require__(/*! ../utility/images */ \"./src/utility/images.ts\");\r\nconst makeTable = (data) => {\r\n    const main = (0, d3_selection_1.select)('#labby-as-bill-tracker-people-table')\r\n        .attr('class', 'labby-as-senate-styling')\r\n        .style('position', 'relative');\r\n    const container = main.append('div');\r\n    const expanded = data\r\n        .map((d) => d.authors.map((_, i) => (Object.assign(Object.assign({}, d), { author: d.authors[i].replace(/\\n/g, '').trim() }))))\r\n        .reduce((a, b) => [...a, ...b]);\r\n    const nested = (0, d3_collection_1.nest)()\r\n        .key((d) => d.author)\r\n        .entries(expanded);\r\n    const table = container.append('table').style('border-collapse', 'collapse');\r\n    const body = table.append('tbody');\r\n    const trs = body.selectAll('tr').data(nested).enter().append('tr');\r\n    const tds = trs\r\n        .selectAll('td')\r\n        .data((d) => [\r\n        { which: 'name', val: d.key },\r\n        { which: 'img', val: d.key },\r\n        { which: 'bills', val: d.values },\r\n    ])\r\n        .enter()\r\n        .append('td');\r\n    tds\r\n        .filter((d) => !['bills', 'img'].includes(d.which))\r\n        .html((d) => {\r\n        if (d.which === 'name') {\r\n            return d.val;\r\n        }\r\n    });\r\n    const imageSize = 50;\r\n    tds\r\n        .filter((d) => d.which === 'img')\r\n        .append('div')\r\n        .style('display', 'flex')\r\n        .style('justify-content', 'center')\r\n        .selectAll('img')\r\n        .data((d) => [d.val])\r\n        .enter()\r\n        .append('img')\r\n        .attr('src', (d) => (0, images_1.getPhotoUrl)(d))\r\n        .style('width', `${imageSize}px`)\r\n        .style('height', `${imageSize}px`)\r\n        .style('border-radius', '50%');\r\n    trs\r\n        .filter((_, i) => i !== 0)\r\n        .selectAll('td')\r\n        .style('border-top', '1px solid #d3d3d3');\r\n    const size = {\r\n        height: 60,\r\n        width: 150,\r\n    };\r\n    const tooltip = container.append('div').style('position', 'relative');\r\n    const svgs = tds\r\n        .filter((d) => d.which === 'bills')\r\n        .style('border-left', '1px solid #d3d3d3')\r\n        .selectAll('svg')\r\n        .data((d) => [d])\r\n        .enter()\r\n        .append('svg')\r\n        .attr('height', size.height)\r\n        .attr('width', size.width);\r\n    const squareSize = 6;\r\n    const margin = {\r\n        top: 5,\r\n        bottom: 5,\r\n        right: 10,\r\n        left: 10,\r\n    };\r\n    const x = (0, d3_scale_1.scaleTime)()\r\n        .domain((0, d3_array_1.extent)(data\r\n        .map((d) => [d.introduced])\r\n        .reduce((a, b) => [...a, ...b])))\r\n        .range([margin.left, size.width - margin.right]);\r\n    console.log(x.domain(), x.range());\r\n    const y = (0, d3_scale_1.scaleBand)()\r\n        .domain(['Authored', 'Second Author'])\r\n        .range([size.height - margin.bottom, margin.top])\r\n        .paddingOuter(0.5);\r\n    svgs\r\n        .selectAll('squares')\r\n        .data((d) => d.val)\r\n        .enter()\r\n        .append('rect')\r\n        .attr('x', (d) => {\r\n        console.log(d);\r\n        return x(d.introduced) - squareSize / 2;\r\n    })\r\n        .attr('y', (d) => {\r\n        if (d.author === d.authors[0]) {\r\n            return y('Authored');\r\n        }\r\n        if (d.authors.length >= 2 && d.author === d.authors[1]) {\r\n            return y('Second Author');\r\n        }\r\n    })\r\n        .attr('width', squareSize)\r\n        .attr('height', squareSize);\r\n};\r\nexports.default = makeTable;\r\n\n\n//# sourceURL=webpack://bill-tracker/./src/plots/people.ts?");

/***/ }),

/***/ "./src/plots/popup.ts":
/*!****************************!*\
  !*** ./src/plots/popup.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst d3_selection_1 = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\r\nconst makePopup = (data) => {\r\n    const popupSize = { height: 600, width: 400 };\r\n    const makeText = (sel) => {\r\n        const b = (0, d3_selection_1.selectAll)(sel);\r\n        b.selectAll('*').remove();\r\n        b.append('h2').text((d) => d.title);\r\n        b.append('text').text((d) => d.authors);\r\n        console.log(b.data());\r\n    };\r\n    const popup = (0, d3_selection_1.select)('body')\r\n        .selectAll('#tooltip')\r\n        .data([data])\r\n        .join((enter) => {\r\n        enter\r\n            .append('div')\r\n            .attr('id', 'tooltip')\r\n            .style('position', 'absolute')\r\n            .style('left', `${window.innerWidth / 2 - popupSize.width / 2}px`)\r\n            .style('top', `${window.innerHeight / 2 - popupSize.height / 2 + window.scrollY}px`)\r\n            .style('height', `${popupSize.height}px`)\r\n            .style('width', `${popupSize.width}px`)\r\n            .call(makeText)\r\n            .style('display', 'block')\r\n            .style('border', '1px solid black')\r\n            .style('background-color', 'white')\r\n            .style('padding', '10px');\r\n    }, (update) => {\r\n        update\r\n            .style('display', 'block')\r\n            .style('left', `${window.innerWidth / 2 - popupSize.width / 2}px`)\r\n            .style('top', `${window.innerHeight / 2 - popupSize.height / 2 + window.scrollY}px`)\r\n            .call(makeText);\r\n    });\r\n    document.addEventListener('scroll', () => {\r\n        (0, d3_selection_1.selectAll)('#tooltip').style('display', 'none');\r\n    });\r\n};\r\nexports.default = makePopup;\r\n\n\n//# sourceURL=webpack://bill-tracker/./src/plots/popup.ts?");

/***/ }),

/***/ "./src/plots/table.ts":
/*!****************************!*\
  !*** ./src/plots/table.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst d3_selection_1 = __webpack_require__(/*! d3-selection */ \"./node_modules/d3-selection/src/index.js\");\r\nconst d3_time_format_1 = __webpack_require__(/*! d3-time-format */ \"./node_modules/d3-time-format/src/index.js\");\r\nconst images_1 = __webpack_require__(/*! ../utility/images */ \"./src/utility/images.ts\");\r\nconst popup_1 = __importDefault(__webpack_require__(/*! ./popup */ \"./src/plots/popup.ts\"));\r\nconst makeTable = (data) => {\r\n    const size = {\r\n        width: Math.min(window.innerWidth - 40, 700),\r\n    };\r\n    const containerDiv = (0, d3_selection_1.select)('#labby-as-bill-tracker-bill-table')\r\n        .attr('class', 'labby-as-senate-styling')\r\n        .style('overflow-x', 'auto')\r\n        .style('width', `${size.width}px`);\r\n    containerDiv.selectAll('*').remove();\r\n    const container = containerDiv.append('div').style('width', '699px');\r\n    const table = container.append('table').style('border-collapse', 'collapse');\r\n    const cols = [\r\n        'title',\r\n        'authors',\r\n        'introduced',\r\n        'yna',\r\n        'latestMotion',\r\n    ];\r\n    const headers = {\r\n        title: 'Title',\r\n        authors: 'Authors',\r\n        introduced: 'Date',\r\n        vote: '',\r\n        yna: 'Y/N/A',\r\n        latestMotion: 'Latest Motion',\r\n    };\r\n    const ths = table\r\n        .append('thead')\r\n        .append('tr')\r\n        .selectAll('th')\r\n        .data(cols)\r\n        .enter()\r\n        .append('th')\r\n        .text((d) => headers[d])\r\n        .style('text-align', 'left')\r\n        .style('padding', '5px')\r\n        .style('border-bottom', '2px solid #d3d3d3');\r\n    const trs = table\r\n        .append('tbody')\r\n        .selectAll('tr')\r\n        .data(data)\r\n        .enter()\r\n        .append('tr')\r\n        .style('cursor', 'pointer')\r\n        .on('mouseenter', (event) => {\r\n        (0, d3_selection_1.select)(event.target).style('background-color', '#d3d3d3aa');\r\n    })\r\n        .on('mouseleave', (event) => {\r\n        trs.filter((_, i) => i % 2 === 1).style('background-color', '#d3d3d320');\r\n        trs.filter((_, i) => i % 2 === 0).style('background-color', 'white');\r\n    })\r\n        .on('click', (event, d) => {\r\n        (0, popup_1.default)(d);\r\n    });\r\n    trs.filter((_, i) => i % 2 === 1).style('background-color', '#d3d3d320');\r\n    const tds = trs\r\n        .selectAll('td')\r\n        .data((d) => cols.map((c) => {\r\n        if (c === 'introduced') {\r\n            return {\r\n                col: 'date',\r\n                vals: { introduced: d.introduced, vote: d.vote.date },\r\n            };\r\n        }\r\n        return { col: c, val: d[c] };\r\n    }))\r\n        .enter()\r\n        .append('td')\r\n        .style('padding', '5px');\r\n    const formatTime = (0, d3_time_format_1.timeFormat)('%b. %-d');\r\n    const dateLineBreak = '<hr style=\"border: 0.5px solid #d3d3d388; margin: 1px\"/>';\r\n    tds\r\n        .filter((d) => !['authors', 'vote'].includes(d.col))\r\n        .html((d) => {\r\n        var _a;\r\n        if (d.col === 'date') {\r\n            return ((((_a = d.vals) === null || _a === void 0 ? void 0 : _a.introduced)\r\n                ? `Introduced ${d.vals.vote &&\r\n                    d.vals.introduced.getTime() === d.vals.vote.getTime()\r\n                    ? 'and voted on '\r\n                    : ''}${formatTime(d.vals.introduced)}`\r\n                : '') +\r\n                (d.vals.vote && d.vals.introduced.getTime() !== d.vals.vote.getTime()\r\n                    ? `${dateLineBreak}Voted on ${formatTime(d.vals.vote)}`\r\n                    : ''));\r\n        }\r\n        if (d.col === 'title') {\r\n            const [, type, which, , txt] = d.val.match(/(A (Bill|Resolution)( to)?) (.*)$/);\r\n            const lineColor = 'black';\r\n            const style = `color: ${lineColor};` + 'font-style: italic;';\r\n            return `<p><span style='${style}'>${type}</span> ${txt}</p>`;\r\n        }\r\n        if (d.col === 'vote') {\r\n            return d.val.desc;\r\n        }\r\n        if (d.col === 'yna') {\r\n            return d.val.join('\\n');\r\n        }\r\n        if (d.col === 'billType') {\r\n            return d.val.join(',\\n');\r\n        }\r\n        return d.val;\r\n    });\r\n    const imageSize = 50;\r\n    tds\r\n        .filter((d) => d.col === 'authors')\r\n        .append('div')\r\n        .style('display', 'flex')\r\n        .style('justify-content', 'center')\r\n        .selectAll('img')\r\n        .data((d) => d.val)\r\n        .enter()\r\n        .append('img')\r\n        .style('margin', '3px')\r\n        .attr('src', (d) => (0, images_1.getPhotoUrl)(d))\r\n        .style('width', `${imageSize}px`)\r\n        .style('height', `${imageSize}px`)\r\n        .style('border-radius', '50%');\r\n    const colors = {\r\n        CONSENT: '#00ff00',\r\n        OBJECTION: '#ff0000',\r\n        '': '#d3d3d3',\r\n    };\r\n    tds\r\n        .filter((d) => d.col === 'vote')\r\n        .append('div')\r\n        .style('display', 'flex')\r\n        .style('justify-content', 'center')\r\n        .append('p')\r\n        .style('padding', '7px 5px')\r\n        .style('background-color', (d) => `${colors[d.val.desc]}33`)\r\n        .style('border-radius', '20px')\r\n        .style('font-size', '10pt')\r\n        .text((d) => d.val.desc ? d.val.desc : 'No Vote');\r\n};\r\nexports.default = makeTable;\r\n\n\n//# sourceURL=webpack://bill-tracker/./src/plots/table.ts?");

/***/ }),

/***/ "./src/site/index.ts":
/*!***************************!*\
  !*** ./src/site/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./styles.scss */ \"./src/site/styles.scss\");\r\nconst d3_fetch_1 = __webpack_require__(/*! d3-fetch */ \"./node_modules/d3-fetch/src/index.js\");\r\nconst d3_time_format_1 = __webpack_require__(/*! d3-time-format */ \"./node_modules/d3-time-format/src/index.js\");\r\nconst table_1 = __importDefault(__webpack_require__(/*! ../plots/table */ \"./src/plots/table.ts\"));\r\nconst people_1 = __importDefault(__webpack_require__(/*! ../plots/people */ \"./src/plots/people.ts\"));\r\n(() => __awaiter(void 0, void 0, void 0, function* () {\r\n    const formatDateFull = (0, d3_time_format_1.timeParse)('%m/%d/%Y');\r\n    const formatDateAbbr = (0, d3_time_format_1.timeParse)('%m/%d/%y');\r\n    const bills = (yield (0, d3_fetch_1.csv)('src/data/test.csv', (d, i) => {\r\n        const yna = d.yna.split(/\\n/g).map((dd) => dd.split('-'));\r\n        const output = {\r\n            action: d.action,\r\n            authors: d.authors.split(/,\\n?/).map((d) => d.trim()),\r\n            billType: d.billType.split(/\\//g),\r\n            introduced: formatDateFull(d.introduced),\r\n            latestMotion: d.latestMotion,\r\n            link: d.link,\r\n            result: d.result.split(/;/g),\r\n            studentSponsor: d.studentSponsor.split(/,\\n/g),\r\n            title: d.title,\r\n            vote: {\r\n                desc: d.vote.split('\\n')[0],\r\n                date: formatDateAbbr(d.vote.split(': ')[1]),\r\n            },\r\n            yna,\r\n            id: i,\r\n        };\r\n        return output;\r\n    }));\r\n    const resize = () => {\r\n        (0, table_1.default)(bills);\r\n        (0, people_1.default)(bills);\r\n    };\r\n    window.addEventListener('resize', () => {\r\n        resize();\r\n    });\r\n    resize();\r\n}))();\r\n\n\n//# sourceURL=webpack://bill-tracker/./src/site/index.ts?");

/***/ }),

/***/ "./src/utility/images.ts":
/*!*******************************!*\
  !*** ./src/utility/images.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getPhotoUrl = void 0;\r\nconst getPhotoUrl = (name) => {\r\n    const n = name.toLowerCase().replace(' ', '_');\r\n    return `dist/photos/${n}.jpg`;\r\n};\r\nexports.getPhotoUrl = getPhotoUrl;\r\n\n\n//# sourceURL=webpack://bill-tracker/./src/utility/images.ts?");

/***/ }),

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice),\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\nvar array = Array.prototype;\n\nvar slice = array.slice;\nvar map = array.map;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/array.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ascending)\n/* harmony export */ });\nfunction ascending(a, b) {\n  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/ascending.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/bin.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/bin.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bin)\n/* harmony export */ });\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array.js */ \"./node_modules/d3-array/src/array.js\");\n/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bisect.js */ \"./node_modules/d3-array/src/bisect.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-array/src/constant.js\");\n/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extent.js */ \"./node_modules/d3-array/src/extent.js\");\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/d3-array/src/identity.js\");\n/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nice.js */ \"./node_modules/d3-array/src/nice.js\");\n/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticks.js */ \"./node_modules/d3-array/src/ticks.js\");\n/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./threshold/sturges.js */ \"./node_modules/d3-array/src/threshold/sturges.js\");\n\n\n\n\n\n\n\n\n\nfunction bin() {\n  var value = _identity_js__WEBPACK_IMPORTED_MODULE_0__.default,\n      domain = _extent_js__WEBPACK_IMPORTED_MODULE_1__.default,\n      threshold = _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_2__.default;\n\n  function histogram(data) {\n    if (!Array.isArray(data)) data = Array.from(data);\n\n    var i,\n        n = data.length,\n        x,\n        values = new Array(n);\n\n    for (i = 0; i < n; ++i) {\n      values[i] = value(data[i], i, data);\n    }\n\n    var xz = domain(values),\n        x0 = xz[0],\n        x1 = xz[1],\n        tz = threshold(values, x0, x1);\n\n    // Convert number of thresholds into uniform thresholds, and nice the\n    // default domain accordingly.\n    if (!Array.isArray(tz)) {\n      const max = x1, tn = +tz;\n      if (domain === _extent_js__WEBPACK_IMPORTED_MODULE_1__.default) [x0, x1] = (0,_nice_js__WEBPACK_IMPORTED_MODULE_3__.default)(x0, x1, tn);\n      tz = (0,_ticks_js__WEBPACK_IMPORTED_MODULE_4__.default)(x0, x1, tn);\n\n      // If the last threshold is coincident with the domain’s upper bound, the\n      // last bin will be zero-width. If the default domain is used, and this\n      // last threshold is coincident with the maximum input value, we can\n      // extend the niced upper bound by one tick to ensure uniform bin widths;\n      // otherwise, we simply remove the last threshold. Note that we don’t\n      // coerce values or the domain to numbers, and thus must be careful to\n      // compare order (>=) rather than strict equality (===)!\n      if (tz[tz.length - 1] >= x1) {\n        if (max >= x1 && domain === _extent_js__WEBPACK_IMPORTED_MODULE_1__.default) {\n          const step = (0,_ticks_js__WEBPACK_IMPORTED_MODULE_4__.tickIncrement)(x0, x1, tn);\n          if (isFinite(step)) {\n            if (step > 0) {\n              x1 = (Math.floor(x1 / step) + 1) * step;\n            } else if (step < 0) {\n              x1 = (Math.ceil(x1 * -step) + 1) / -step;\n            }\n          }\n        } else {\n          tz.pop();\n        }\n      }\n    }\n\n    // Remove any thresholds outside the domain.\n    var m = tz.length;\n    while (tz[0] <= x0) tz.shift(), --m;\n    while (tz[m - 1] > x1) tz.pop(), --m;\n\n    var bins = new Array(m + 1),\n        bin;\n\n    // Initialize bins.\n    for (i = 0; i <= m; ++i) {\n      bin = bins[i] = [];\n      bin.x0 = i > 0 ? tz[i - 1] : x0;\n      bin.x1 = i < m ? tz[i] : x1;\n    }\n\n    // Assign data to bins by value, ignoring any outside the domain.\n    for (i = 0; i < n; ++i) {\n      x = values[i];\n      if (x != null && x0 <= x && x <= x1) {\n        bins[(0,_bisect_js__WEBPACK_IMPORTED_MODULE_5__.default)(tz, x, 0, m)].push(data[i]);\n      }\n    }\n\n    return bins;\n  }\n\n  histogram.value = function(_) {\n    return arguments.length ? (value = typeof _ === \"function\" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__.default)(_), histogram) : value;\n  };\n\n  histogram.domain = function(_) {\n    return arguments.length ? (domain = typeof _ === \"function\" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__.default)([_[0], _[1]]), histogram) : domain;\n  };\n\n  histogram.thresholds = function(_) {\n    return arguments.length ? (threshold = typeof _ === \"function\" ? _ : Array.isArray(_) ? (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__.default)(_array_js__WEBPACK_IMPORTED_MODULE_7__.slice.call(_)) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__.default)(_), histogram) : threshold;\n  };\n\n  return histogram;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/bin.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bisectRight\": () => (/* binding */ bisectRight),\n/* harmony export */   \"bisectLeft\": () => (/* binding */ bisectLeft),\n/* harmony export */   \"bisectCenter\": () => (/* binding */ bisectCenter),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisector.js */ \"./node_modules/d3-array/src/bisector.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-array/src/number.js\");\n\n\n\n\nconst ascendingBisect = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__.default)(_ascending_js__WEBPACK_IMPORTED_MODULE_1__.default);\nconst bisectRight = ascendingBisect.right;\nconst bisectLeft = ascendingBisect.left;\nconst bisectCenter = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__.default)(_number_js__WEBPACK_IMPORTED_MODULE_2__.default).center;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bisectRight);\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/bisect.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bisector)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n\n\nfunction bisector(f) {\n  let delta = f;\n  let compare1 = f;\n  let compare2 = f;\n\n  if (f.length === 1) {\n    delta = (d, x) => f(d) - x;\n    compare1 = _ascending_js__WEBPACK_IMPORTED_MODULE_0__.default;\n    compare2 = (d, x) => (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__.default)(f(d), x);\n  }\n\n  function left(a, x, lo = 0, hi = a.length) {\n    if (lo < hi) {\n      if (compare1(x, x) !== 0) return hi;\n      do {\n        const mid = (lo + hi) >>> 1;\n        if (compare2(a[mid], x) < 0) lo = mid + 1;\n        else hi = mid;\n      } while (lo < hi);\n    }\n    return lo;\n  }\n\n  function right(a, x, lo = 0, hi = a.length) {\n    if (lo < hi) {\n      if (compare1(x, x) !== 0) return hi;\n      do {\n        const mid = (lo + hi) >>> 1;\n        if (compare2(a[mid], x) <= 0) lo = mid + 1;\n        else hi = mid;\n      } while (lo < hi);\n    }\n    return lo;\n  }\n\n  function center(a, x, lo = 0, hi = a.length) {\n    const i = left(a, x, lo, hi - 1);\n    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;\n  }\n\n  return {left, center, right};\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/bisector.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ constant)\n/* harmony export */ });\nfunction constant(x) {\n  return () => x;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/count.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/count.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ count)\n/* harmony export */ });\nfunction count(values, valueof) {\n  let count = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        ++count;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        ++count;\n      }\n    }\n  }\n  return count;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/count.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cross)\n/* harmony export */ });\nfunction length(array) {\n  return array.length | 0;\n}\n\nfunction empty(length) {\n  return !(length > 0);\n}\n\nfunction arrayify(values) {\n  return typeof values !== \"object\" || \"length\" in values ? values : Array.from(values);\n}\n\nfunction reducer(reduce) {\n  return values => reduce(...values);\n}\n\nfunction cross(...values) {\n  const reduce = typeof values[values.length - 1] === \"function\" && reducer(values.pop());\n  values = values.map(arrayify);\n  const lengths = values.map(length);\n  const j = values.length - 1;\n  const index = new Array(j + 1).fill(0);\n  const product = [];\n  if (j < 0 || lengths.some(empty)) return product;\n  while (true) {\n    product.push(index.map((j, i) => values[i][j]));\n    let i = j;\n    while (++index[i] === lengths[i]) {\n      if (i === 0) return reduce ? product.map(reduce) : product;\n      index[i--] = 0;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/cross.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/cumsum.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/cumsum.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cumsum)\n/* harmony export */ });\nfunction cumsum(values, valueof) {\n  var sum = 0, index = 0;\n  return Float64Array.from(values, valueof === undefined\n    ? v => (sum += +v || 0)\n    : v => (sum += +valueof(v, index++, values) || 0));\n}\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/cumsum.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ descending)\n/* harmony export */ });\nfunction descending(a, b) {\n  return a == null || b == null ? NaN\n    : b < a ? -1\n    : b > a ? 1\n    : b >= a ? 0\n    : NaN;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/descending.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deviation)\n/* harmony export */ });\n/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance.js */ \"./node_modules/d3-array/src/variance.js\");\n\n\nfunction deviation(values, valueof) {\n  const v = (0,_variance_js__WEBPACK_IMPORTED_MODULE_0__.default)(values, valueof);\n  return v ? Math.sqrt(v) : v;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/deviation.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/difference.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/difference.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ difference)\n/* harmony export */ });\nfunction difference(values, ...others) {\n  values = new Set(values);\n  for (const other of others) {\n    for (const value of other) {\n      values.delete(value);\n    }\n  }\n  return values;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/difference.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/disjoint.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/disjoint.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ disjoint)\n/* harmony export */ });\nfunction disjoint(values, other) {\n  const iterator = other[Symbol.iterator](), set = new Set();\n  for (const v of values) {\n    if (set.has(v)) return false;\n    let value, done;\n    while (({value, done} = iterator.next())) {\n      if (done) break;\n      if (Object.is(v, value)) return false;\n      set.add(value);\n    }\n  }\n  return true;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/disjoint.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/every.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/every.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ every)\n/* harmony export */ });\nfunction every(values, test) {\n  if (typeof test !== \"function\") throw new TypeError(\"test is not a function\");\n  let index = -1;\n  for (const value of values) {\n    if (!test(value, ++index, values)) {\n      return false;\n    }\n  }\n  return true;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/every.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ extent)\n/* harmony export */ });\nfunction extent(values, valueof) {\n  let min;\n  let max;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null) {\n        if (min === undefined) {\n          if (value >= value) min = max = value;\n        } else {\n          if (min > value) min = value;\n          if (max < value) max = value;\n        }\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null) {\n        if (min === undefined) {\n          if (value >= value) min = max = value;\n        } else {\n          if (min > value) min = value;\n          if (max < value) max = value;\n        }\n      }\n    }\n  }\n  return [min, max];\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/extent.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/filter.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/filter.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ filter)\n/* harmony export */ });\nfunction filter(values, test) {\n  if (typeof test !== \"function\") throw new TypeError(\"test is not a function\");\n  const array = [];\n  let index = -1;\n  for (const value of values) {\n    if (test(value, ++index, values)) {\n      array.push(value);\n    }\n  }\n  return array;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/filter.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/fsum.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/fsum.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Adder\": () => (/* binding */ Adder),\n/* harmony export */   \"fsum\": () => (/* binding */ fsum),\n/* harmony export */   \"fcumsum\": () => (/* binding */ fcumsum)\n/* harmony export */ });\n// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423\nclass Adder {\n  constructor() {\n    this._partials = new Float64Array(32);\n    this._n = 0;\n  }\n  add(x) {\n    const p = this._partials;\n    let i = 0;\n    for (let j = 0; j < this._n && j < 32; j++) {\n      const y = p[j],\n        hi = x + y,\n        lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);\n      if (lo) p[i++] = lo;\n      x = hi;\n    }\n    p[i] = x;\n    this._n = i + 1;\n    return this;\n  }\n  valueOf() {\n    const p = this._partials;\n    let n = this._n, x, y, lo, hi = 0;\n    if (n > 0) {\n      hi = p[--n];\n      while (n > 0) {\n        x = hi;\n        y = p[--n];\n        hi = x + y;\n        lo = y - (hi - x);\n        if (lo) break;\n      }\n      if (n > 0 && ((lo < 0 && p[n - 1] < 0) || (lo > 0 && p[n - 1] > 0))) {\n        y = lo * 2;\n        x = hi + y;\n        if (y == x - hi) hi = x;\n      }\n    }\n    return hi;\n  }\n}\n\nfunction fsum(values, valueof) {\n  const adder = new Adder();\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value = +value) {\n        adder.add(value);\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if (value = +valueof(value, ++index, values)) {\n        adder.add(value);\n      }\n    }\n  }\n  return +adder;\n}\n\nfunction fcumsum(values, valueof) {\n  const adder = new Adder();\n  let index = -1;\n  return Float64Array.from(values, valueof === undefined\n      ? v => adder.add(+v || 0)\n      : v => adder.add(+valueof(v, ++index, values) || 0)\n  );\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/fsum.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/greatest.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/greatest.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ greatest)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n\n\nfunction greatest(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__.default) {\n  let max;\n  let defined = false;\n  if (compare.length === 1) {\n    let maxValue;\n    for (const element of values) {\n      const value = compare(element);\n      if (defined\n          ? (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__.default)(value, maxValue) > 0\n          : (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__.default)(value, value) === 0) {\n        max = element;\n        maxValue = value;\n        defined = true;\n      }\n    }\n  } else {\n    for (const value of values) {\n      if (defined\n          ? compare(value, max) > 0\n          : compare(value, value) === 0) {\n        max = value;\n        defined = true;\n      }\n    }\n  }\n  return max;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/greatest.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/greatestIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-array/src/greatestIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ greatestIndex)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maxIndex.js */ \"./node_modules/d3-array/src/maxIndex.js\");\n\n\n\nfunction greatestIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__.default) {\n  if (compare.length === 1) return (0,_maxIndex_js__WEBPACK_IMPORTED_MODULE_1__.default)(values, compare);\n  let maxValue;\n  let max = -1;\n  let index = -1;\n  for (const value of values) {\n    ++index;\n    if (max < 0\n        ? compare(value, value) === 0\n        : compare(value, maxValue) > 0) {\n      maxValue = value;\n      max = index;\n    }\n  }\n  return max;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/greatestIndex.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/group.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/group.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ group),\n/* harmony export */   \"groups\": () => (/* binding */ groups),\n/* harmony export */   \"flatGroup\": () => (/* binding */ flatGroup),\n/* harmony export */   \"flatRollup\": () => (/* binding */ flatRollup),\n/* harmony export */   \"rollup\": () => (/* binding */ rollup),\n/* harmony export */   \"rollups\": () => (/* binding */ rollups),\n/* harmony export */   \"index\": () => (/* binding */ index),\n/* harmony export */   \"indexes\": () => (/* binding */ indexes)\n/* harmony export */ });\n/* harmony import */ var internmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! internmap */ \"./node_modules/internmap/src/index.js\");\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/d3-array/src/identity.js\");\n\n\n\nfunction group(values, ...keys) {\n  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, keys);\n}\n\nfunction groups(values, ...keys) {\n  return nest(values, Array.from, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, keys);\n}\n\nfunction flatten(groups, keys) {\n  for (let i = 1, n = keys.length; i < n; ++i) {\n    groups = groups.flatMap(g => g.pop().map(([key, value]) => [...g, key, value]));\n  }\n  return groups;\n}\n\nfunction flatGroup(values, ...keys) {\n  return flatten(groups(values, ...keys), keys);\n}\n\nfunction flatRollup(values, reduce, ...keys) {\n  return flatten(rollups(values, reduce, ...keys), keys);\n}\n\nfunction rollup(values, reduce, ...keys) {\n  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, reduce, keys);\n}\n\nfunction rollups(values, reduce, ...keys) {\n  return nest(values, Array.from, reduce, keys);\n}\n\nfunction index(values, ...keys) {\n  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__.default, unique, keys);\n}\n\nfunction indexes(values, ...keys) {\n  return nest(values, Array.from, unique, keys);\n}\n\nfunction unique(values) {\n  if (values.length !== 1) throw new Error(\"duplicate key\");\n  return values[0];\n}\n\nfunction nest(values, map, reduce, keys) {\n  return (function regroup(values, i) {\n    if (i >= keys.length) return reduce(values);\n    const groups = new internmap__WEBPACK_IMPORTED_MODULE_1__.InternMap();\n    const keyof = keys[i++];\n    let index = -1;\n    for (const value of values) {\n      const key = keyof(value, ++index, values);\n      const group = groups.get(key);\n      if (group) group.push(value);\n      else groups.set(key, [value]);\n    }\n    for (const [key, values] of groups) {\n      groups.set(key, regroup(values, i));\n    }\n    return map(groups);\n  })(values, 0);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/group.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/groupSort.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/groupSort.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ groupSort)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.js */ \"./node_modules/d3-array/src/group.js\");\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort.js */ \"./node_modules/d3-array/src/sort.js\");\n\n\n\n\nfunction groupSort(values, reduce, key) {\n  return (reduce.length === 1\n    ? (0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_group_js__WEBPACK_IMPORTED_MODULE_1__.rollup)(values, reduce, key), (([ak, av], [bk, bv]) => (0,_ascending_js__WEBPACK_IMPORTED_MODULE_2__.default)(av, bv) || (0,_ascending_js__WEBPACK_IMPORTED_MODULE_2__.default)(ak, bk)))\n    : (0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_group_js__WEBPACK_IMPORTED_MODULE_1__.default)(values, key), (([ak, av], [bk, bv]) => reduce(av, bv) || (0,_ascending_js__WEBPACK_IMPORTED_MODULE_2__.default)(ak, bk))))\n    .map(([key]) => key);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/groupSort.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ identity)\n/* harmony export */ });\nfunction identity(x) {\n  return x;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/identity.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bisect\": () => (/* reexport safe */ _bisect_js__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"bisectRight\": () => (/* reexport safe */ _bisect_js__WEBPACK_IMPORTED_MODULE_0__.bisectRight),\n/* harmony export */   \"bisectLeft\": () => (/* reexport safe */ _bisect_js__WEBPACK_IMPORTED_MODULE_0__.bisectLeft),\n/* harmony export */   \"bisectCenter\": () => (/* reexport safe */ _bisect_js__WEBPACK_IMPORTED_MODULE_0__.bisectCenter),\n/* harmony export */   \"ascending\": () => (/* reexport safe */ _ascending_js__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"bisector\": () => (/* reexport safe */ _bisector_js__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"count\": () => (/* reexport safe */ _count_js__WEBPACK_IMPORTED_MODULE_3__.default),\n/* harmony export */   \"cross\": () => (/* reexport safe */ _cross_js__WEBPACK_IMPORTED_MODULE_4__.default),\n/* harmony export */   \"cumsum\": () => (/* reexport safe */ _cumsum_js__WEBPACK_IMPORTED_MODULE_5__.default),\n/* harmony export */   \"descending\": () => (/* reexport safe */ _descending_js__WEBPACK_IMPORTED_MODULE_6__.default),\n/* harmony export */   \"deviation\": () => (/* reexport safe */ _deviation_js__WEBPACK_IMPORTED_MODULE_7__.default),\n/* harmony export */   \"extent\": () => (/* reexport safe */ _extent_js__WEBPACK_IMPORTED_MODULE_8__.default),\n/* harmony export */   \"Adder\": () => (/* reexport safe */ _fsum_js__WEBPACK_IMPORTED_MODULE_9__.Adder),\n/* harmony export */   \"fsum\": () => (/* reexport safe */ _fsum_js__WEBPACK_IMPORTED_MODULE_9__.fsum),\n/* harmony export */   \"fcumsum\": () => (/* reexport safe */ _fsum_js__WEBPACK_IMPORTED_MODULE_9__.fcumsum),\n/* harmony export */   \"group\": () => (/* reexport safe */ _group_js__WEBPACK_IMPORTED_MODULE_10__.default),\n/* harmony export */   \"flatGroup\": () => (/* reexport safe */ _group_js__WEBPACK_IMPORTED_MODULE_10__.flatGroup),\n/* harmony export */   \"flatRollup\": () => (/* reexport safe */ _group_js__WEBPACK_IMPORTED_MODULE_10__.flatRollup),\n/* harmony export */   \"groups\": () => (/* reexport safe */ _group_js__WEBPACK_IMPORTED_MODULE_10__.groups),\n/* harmony export */   \"index\": () => (/* reexport safe */ _group_js__WEBPACK_IMPORTED_MODULE_10__.index),\n/* harmony export */   \"indexes\": () => (/* reexport safe */ _group_js__WEBPACK_IMPORTED_MODULE_10__.indexes),\n/* harmony export */   \"rollup\": () => (/* reexport safe */ _group_js__WEBPACK_IMPORTED_MODULE_10__.rollup),\n/* harmony export */   \"rollups\": () => (/* reexport safe */ _group_js__WEBPACK_IMPORTED_MODULE_10__.rollups),\n/* harmony export */   \"groupSort\": () => (/* reexport safe */ _groupSort_js__WEBPACK_IMPORTED_MODULE_11__.default),\n/* harmony export */   \"bin\": () => (/* reexport safe */ _bin_js__WEBPACK_IMPORTED_MODULE_12__.default),\n/* harmony export */   \"histogram\": () => (/* reexport safe */ _bin_js__WEBPACK_IMPORTED_MODULE_12__.default),\n/* harmony export */   \"thresholdFreedmanDiaconis\": () => (/* reexport safe */ _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_13__.default),\n/* harmony export */   \"thresholdScott\": () => (/* reexport safe */ _threshold_scott_js__WEBPACK_IMPORTED_MODULE_14__.default),\n/* harmony export */   \"thresholdSturges\": () => (/* reexport safe */ _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_15__.default),\n/* harmony export */   \"max\": () => (/* reexport safe */ _max_js__WEBPACK_IMPORTED_MODULE_16__.default),\n/* harmony export */   \"maxIndex\": () => (/* reexport safe */ _maxIndex_js__WEBPACK_IMPORTED_MODULE_17__.default),\n/* harmony export */   \"mean\": () => (/* reexport safe */ _mean_js__WEBPACK_IMPORTED_MODULE_18__.default),\n/* harmony export */   \"median\": () => (/* reexport safe */ _median_js__WEBPACK_IMPORTED_MODULE_19__.default),\n/* harmony export */   \"merge\": () => (/* reexport safe */ _merge_js__WEBPACK_IMPORTED_MODULE_20__.default),\n/* harmony export */   \"min\": () => (/* reexport safe */ _min_js__WEBPACK_IMPORTED_MODULE_21__.default),\n/* harmony export */   \"minIndex\": () => (/* reexport safe */ _minIndex_js__WEBPACK_IMPORTED_MODULE_22__.default),\n/* harmony export */   \"mode\": () => (/* reexport safe */ _mode_js__WEBPACK_IMPORTED_MODULE_23__.default),\n/* harmony export */   \"nice\": () => (/* reexport safe */ _nice_js__WEBPACK_IMPORTED_MODULE_24__.default),\n/* harmony export */   \"pairs\": () => (/* reexport safe */ _pairs_js__WEBPACK_IMPORTED_MODULE_25__.default),\n/* harmony export */   \"permute\": () => (/* reexport safe */ _permute_js__WEBPACK_IMPORTED_MODULE_26__.default),\n/* harmony export */   \"quantile\": () => (/* reexport safe */ _quantile_js__WEBPACK_IMPORTED_MODULE_27__.default),\n/* harmony export */   \"quantileSorted\": () => (/* reexport safe */ _quantile_js__WEBPACK_IMPORTED_MODULE_27__.quantileSorted),\n/* harmony export */   \"quickselect\": () => (/* reexport safe */ _quickselect_js__WEBPACK_IMPORTED_MODULE_28__.default),\n/* harmony export */   \"range\": () => (/* reexport safe */ _range_js__WEBPACK_IMPORTED_MODULE_29__.default),\n/* harmony export */   \"least\": () => (/* reexport safe */ _least_js__WEBPACK_IMPORTED_MODULE_30__.default),\n/* harmony export */   \"leastIndex\": () => (/* reexport safe */ _leastIndex_js__WEBPACK_IMPORTED_MODULE_31__.default),\n/* harmony export */   \"greatest\": () => (/* reexport safe */ _greatest_js__WEBPACK_IMPORTED_MODULE_32__.default),\n/* harmony export */   \"greatestIndex\": () => (/* reexport safe */ _greatestIndex_js__WEBPACK_IMPORTED_MODULE_33__.default),\n/* harmony export */   \"scan\": () => (/* reexport safe */ _scan_js__WEBPACK_IMPORTED_MODULE_34__.default),\n/* harmony export */   \"shuffle\": () => (/* reexport safe */ _shuffle_js__WEBPACK_IMPORTED_MODULE_35__.default),\n/* harmony export */   \"shuffler\": () => (/* reexport safe */ _shuffle_js__WEBPACK_IMPORTED_MODULE_35__.shuffler),\n/* harmony export */   \"sum\": () => (/* reexport safe */ _sum_js__WEBPACK_IMPORTED_MODULE_36__.default),\n/* harmony export */   \"ticks\": () => (/* reexport safe */ _ticks_js__WEBPACK_IMPORTED_MODULE_37__.default),\n/* harmony export */   \"tickIncrement\": () => (/* reexport safe */ _ticks_js__WEBPACK_IMPORTED_MODULE_37__.tickIncrement),\n/* harmony export */   \"tickStep\": () => (/* reexport safe */ _ticks_js__WEBPACK_IMPORTED_MODULE_37__.tickStep),\n/* harmony export */   \"transpose\": () => (/* reexport safe */ _transpose_js__WEBPACK_IMPORTED_MODULE_38__.default),\n/* harmony export */   \"variance\": () => (/* reexport safe */ _variance_js__WEBPACK_IMPORTED_MODULE_39__.default),\n/* harmony export */   \"zip\": () => (/* reexport safe */ _zip_js__WEBPACK_IMPORTED_MODULE_40__.default),\n/* harmony export */   \"every\": () => (/* reexport safe */ _every_js__WEBPACK_IMPORTED_MODULE_41__.default),\n/* harmony export */   \"some\": () => (/* reexport safe */ _some_js__WEBPACK_IMPORTED_MODULE_42__.default),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _filter_js__WEBPACK_IMPORTED_MODULE_43__.default),\n/* harmony export */   \"map\": () => (/* reexport safe */ _map_js__WEBPACK_IMPORTED_MODULE_44__.default),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _reduce_js__WEBPACK_IMPORTED_MODULE_45__.default),\n/* harmony export */   \"reverse\": () => (/* reexport safe */ _reverse_js__WEBPACK_IMPORTED_MODULE_46__.default),\n/* harmony export */   \"sort\": () => (/* reexport safe */ _sort_js__WEBPACK_IMPORTED_MODULE_47__.default),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _difference_js__WEBPACK_IMPORTED_MODULE_48__.default),\n/* harmony export */   \"disjoint\": () => (/* reexport safe */ _disjoint_js__WEBPACK_IMPORTED_MODULE_49__.default),\n/* harmony export */   \"intersection\": () => (/* reexport safe */ _intersection_js__WEBPACK_IMPORTED_MODULE_50__.default),\n/* harmony export */   \"subset\": () => (/* reexport safe */ _subset_js__WEBPACK_IMPORTED_MODULE_51__.default),\n/* harmony export */   \"superset\": () => (/* reexport safe */ _superset_js__WEBPACK_IMPORTED_MODULE_52__.default),\n/* harmony export */   \"union\": () => (/* reexport safe */ _union_js__WEBPACK_IMPORTED_MODULE_53__.default),\n/* harmony export */   \"InternMap\": () => (/* reexport safe */ internmap__WEBPACK_IMPORTED_MODULE_54__.InternMap),\n/* harmony export */   \"InternSet\": () => (/* reexport safe */ internmap__WEBPACK_IMPORTED_MODULE_54__.InternSet)\n/* harmony export */ });\n/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect.js */ \"./node_modules/d3-array/src/bisect.js\");\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector.js */ \"./node_modules/d3-array/src/bisector.js\");\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ \"./node_modules/d3-array/src/count.js\");\n/* harmony import */ var _cross_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cross.js */ \"./node_modules/d3-array/src/cross.js\");\n/* harmony import */ var _cumsum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cumsum.js */ \"./node_modules/d3-array/src/cumsum.js\");\n/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./descending.js */ \"./node_modules/d3-array/src/descending.js\");\n/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deviation.js */ \"./node_modules/d3-array/src/deviation.js\");\n/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extent.js */ \"./node_modules/d3-array/src/extent.js\");\n/* harmony import */ var _fsum_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fsum.js */ \"./node_modules/d3-array/src/fsum.js\");\n/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./group.js */ \"./node_modules/d3-array/src/group.js\");\n/* harmony import */ var _groupSort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./groupSort.js */ \"./node_modules/d3-array/src/groupSort.js\");\n/* harmony import */ var _bin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bin.js */ \"./node_modules/d3-array/src/bin.js\");\n/* harmony import */ var _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./threshold/freedmanDiaconis.js */ \"./node_modules/d3-array/src/threshold/freedmanDiaconis.js\");\n/* harmony import */ var _threshold_scott_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./threshold/scott.js */ \"./node_modules/d3-array/src/threshold/scott.js\");\n/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./threshold/sturges.js */ \"./node_modules/d3-array/src/threshold/sturges.js\");\n/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./max.js */ \"./node_modules/d3-array/src/max.js\");\n/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./maxIndex.js */ \"./node_modules/d3-array/src/maxIndex.js\");\n/* harmony import */ var _mean_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mean.js */ \"./node_modules/d3-array/src/mean.js\");\n/* harmony import */ var _median_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./median.js */ \"./node_modules/d3-array/src/median.js\");\n/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./merge.js */ \"./node_modules/d3-array/src/merge.js\");\n/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./min.js */ \"./node_modules/d3-array/src/min.js\");\n/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./minIndex.js */ \"./node_modules/d3-array/src/minIndex.js\");\n/* harmony import */ var _mode_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mode.js */ \"./node_modules/d3-array/src/mode.js\");\n/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./nice.js */ \"./node_modules/d3-array/src/nice.js\");\n/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pairs.js */ \"./node_modules/d3-array/src/pairs.js\");\n/* harmony import */ var _permute_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./permute.js */ \"./node_modules/d3-array/src/permute.js\");\n/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./quantile.js */ \"./node_modules/d3-array/src/quantile.js\");\n/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./quickselect.js */ \"./node_modules/d3-array/src/quickselect.js\");\n/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./range.js */ \"./node_modules/d3-array/src/range.js\");\n/* harmony import */ var _least_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./least.js */ \"./node_modules/d3-array/src/least.js\");\n/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./leastIndex.js */ \"./node_modules/d3-array/src/leastIndex.js\");\n/* harmony import */ var _greatest_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./greatest.js */ \"./node_modules/d3-array/src/greatest.js\");\n/* harmony import */ var _greatestIndex_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./greatestIndex.js */ \"./node_modules/d3-array/src/greatestIndex.js\");\n/* harmony import */ var _scan_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./scan.js */ \"./node_modules/d3-array/src/scan.js\");\n/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shuffle.js */ \"./node_modules/d3-array/src/shuffle.js\");\n/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sum.js */ \"./node_modules/d3-array/src/sum.js\");\n/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ticks.js */ \"./node_modules/d3-array/src/ticks.js\");\n/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./transpose.js */ \"./node_modules/d3-array/src/transpose.js\");\n/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./variance.js */ \"./node_modules/d3-array/src/variance.js\");\n/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./zip.js */ \"./node_modules/d3-array/src/zip.js\");\n/* harmony import */ var _every_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./every.js */ \"./node_modules/d3-array/src/every.js\");\n/* harmony import */ var _some_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./some.js */ \"./node_modules/d3-array/src/some.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./filter.js */ \"./node_modules/d3-array/src/filter.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./map.js */ \"./node_modules/d3-array/src/map.js\");\n/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./reduce.js */ \"./node_modules/d3-array/src/reduce.js\");\n/* harmony import */ var _reverse_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./reverse.js */ \"./node_modules/d3-array/src/reverse.js\");\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./sort.js */ \"./node_modules/d3-array/src/sort.js\");\n/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./difference.js */ \"./node_modules/d3-array/src/difference.js\");\n/* harmony import */ var _disjoint_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./disjoint.js */ \"./node_modules/d3-array/src/disjoint.js\");\n/* harmony import */ var _intersection_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./intersection.js */ \"./node_modules/d3-array/src/intersection.js\");\n/* harmony import */ var _subset_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./subset.js */ \"./node_modules/d3-array/src/subset.js\");\n/* harmony import */ var _superset_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./superset.js */ \"./node_modules/d3-array/src/superset.js\");\n/* harmony import */ var _union_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./union.js */ \"./node_modules/d3-array/src/union.js\");\n/* harmony import */ var internmap__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! internmap */ \"./node_modules/internmap/src/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n // Deprecated; use bin.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Deprecated; use leastIndex.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/intersection.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-array/src/intersection.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ intersection)\n/* harmony export */ });\n/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.js */ \"./node_modules/d3-array/src/set.js\");\n\n\nfunction intersection(values, ...others) {\n  values = new Set(values);\n  others = others.map(_set_js__WEBPACK_IMPORTED_MODULE_0__.default);\n  out: for (const value of values) {\n    for (const other of others) {\n      if (!other.has(value)) {\n        values.delete(value);\n        continue out;\n      }\n    }\n  }\n  return values;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/intersection.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/least.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/least.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ least)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n\n\nfunction least(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__.default) {\n  let min;\n  let defined = false;\n  if (compare.length === 1) {\n    let minValue;\n    for (const element of values) {\n      const value = compare(element);\n      if (defined\n          ? (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__.default)(value, minValue) < 0\n          : (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__.default)(value, value) === 0) {\n        min = element;\n        minValue = value;\n        defined = true;\n      }\n    }\n  } else {\n    for (const value of values) {\n      if (defined\n          ? compare(value, min) < 0\n          : compare(value, value) === 0) {\n        min = value;\n        defined = true;\n      }\n    }\n  }\n  return min;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/least.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/leastIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/leastIndex.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ leastIndex)\n/* harmony export */ });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minIndex.js */ \"./node_modules/d3-array/src/minIndex.js\");\n\n\n\nfunction leastIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__.default) {\n  if (compare.length === 1) return (0,_minIndex_js__WEBPACK_IMPORTED_MODULE_1__.default)(values, compare);\n  let minValue;\n  let min = -1;\n  let index = -1;\n  for (const value of values) {\n    ++index;\n    if (min < 0\n        ? compare(value, value) === 0\n        : compare(value, minValue) < 0) {\n      minValue = value;\n      min = index;\n    }\n  }\n  return min;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/leastIndex.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/map.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/map.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ map)\n/* harmony export */ });\nfunction map(values, mapper) {\n  if (typeof values[Symbol.iterator] !== \"function\") throw new TypeError(\"values is not iterable\");\n  if (typeof mapper !== \"function\") throw new TypeError(\"mapper is not a function\");\n  return Array.from(values, (value, index) => mapper(value, index, values));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/map.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ max)\n/* harmony export */ });\nfunction max(values, valueof) {\n  let max;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value;\n      }\n    }\n  }\n  return max;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/max.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/maxIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/maxIndex.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ maxIndex)\n/* harmony export */ });\nfunction maxIndex(values, valueof) {\n  let max;\n  let maxIndex = -1;\n  let index = -1;\n  if (valueof === undefined) {\n    for (const value of values) {\n      ++index;\n      if (value != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value, maxIndex = index;\n      }\n    }\n  } else {\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value, maxIndex = index;\n      }\n    }\n  }\n  return maxIndex;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/maxIndex.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mean)\n/* harmony export */ });\nfunction mean(values, valueof) {\n  let count = 0;\n  let sum = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        ++count, sum += value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        ++count, sum += value;\n      }\n    }\n  }\n  if (count) return sum / count;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/mean.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ median)\n/* harmony export */ });\n/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantile.js */ \"./node_modules/d3-array/src/quantile.js\");\n\n\nfunction median(values, valueof) {\n  return (0,_quantile_js__WEBPACK_IMPORTED_MODULE_0__.default)(values, 0.5, valueof);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/median.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ merge)\n/* harmony export */ });\nfunction* flatten(arrays) {\n  for (const array of arrays) {\n    yield* array;\n  }\n}\n\nfunction merge(arrays) {\n  return Array.from(flatten(arrays));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/merge.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ min)\n/* harmony export */ });\nfunction min(values, valueof) {\n  let min;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value;\n      }\n    }\n  }\n  return min;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/min.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/minIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/minIndex.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ minIndex)\n/* harmony export */ });\nfunction minIndex(values, valueof) {\n  let min;\n  let minIndex = -1;\n  let index = -1;\n  if (valueof === undefined) {\n    for (const value of values) {\n      ++index;\n      if (value != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value, minIndex = index;\n      }\n    }\n  } else {\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value, minIndex = index;\n      }\n    }\n  }\n  return minIndex;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/minIndex.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/mode.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mode.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mode)\n/* harmony export */ });\n/* harmony import */ var internmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! internmap */ \"./node_modules/internmap/src/index.js\");\n\n\nfunction mode(values, valueof) {\n  const counts = new internmap__WEBPACK_IMPORTED_MODULE_0__.InternMap();\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && value >= value) {\n        counts.set(value, (counts.get(value) || 0) + 1);\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && value >= value) {\n        counts.set(value, (counts.get(value) || 0) + 1);\n      }\n    }\n  }\n  let modeValue;\n  let modeCount = 0;\n  for (const [value, count] of counts) {\n    if (count > modeCount) {\n      modeCount = count;\n      modeValue = value;\n    }\n  }\n  return modeValue;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/mode.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/nice.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nice)\n/* harmony export */ });\n/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticks.js */ \"./node_modules/d3-array/src/ticks.js\");\n\n\nfunction nice(start, stop, count) {\n  let prestep;\n  while (true) {\n    const step = (0,_ticks_js__WEBPACK_IMPORTED_MODULE_0__.tickIncrement)(start, stop, count);\n    if (step === prestep || step === 0 || !isFinite(step)) {\n      return [start, stop];\n    } else if (step > 0) {\n      start = Math.floor(start / step) * step;\n      stop = Math.ceil(stop / step) * step;\n    } else if (step < 0) {\n      start = Math.ceil(start * step) / step;\n      stop = Math.floor(stop * step) / step;\n    }\n    prestep = step;\n  }\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/nice.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ number),\n/* harmony export */   \"numbers\": () => (/* binding */ numbers)\n/* harmony export */ });\nfunction number(x) {\n  return x === null ? NaN : +x;\n}\n\nfunction* numbers(values, valueof) {\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        yield value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        yield value;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/number.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pairs),\n/* harmony export */   \"pair\": () => (/* binding */ pair)\n/* harmony export */ });\nfunction pairs(values, pairof = pair) {\n  const pairs = [];\n  let previous;\n  let first = false;\n  for (const value of values) {\n    if (first) pairs.push(pairof(previous, value));\n    previous = value;\n    first = true;\n  }\n  return pairs;\n}\n\nfunction pair(a, b) {\n  return [a, b];\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/pairs.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ permute)\n/* harmony export */ });\nfunction permute(source, keys) {\n  return Array.from(keys, key => source[key]);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/permute.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ quantile),\n/* harmony export */   \"quantileSorted\": () => (/* binding */ quantileSorted)\n/* harmony export */ });\n/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./max.js */ \"./node_modules/d3-array/src/max.js\");\n/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min.js */ \"./node_modules/d3-array/src/min.js\");\n/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickselect.js */ \"./node_modules/d3-array/src/quickselect.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-array/src/number.js\");\n\n\n\n\n\nfunction quantile(values, p, valueof) {\n  values = Float64Array.from((0,_number_js__WEBPACK_IMPORTED_MODULE_0__.numbers)(values, valueof));\n  if (!(n = values.length)) return;\n  if ((p = +p) <= 0 || n < 2) return (0,_min_js__WEBPACK_IMPORTED_MODULE_1__.default)(values);\n  if (p >= 1) return (0,_max_js__WEBPACK_IMPORTED_MODULE_2__.default)(values);\n  var n,\n      i = (n - 1) * p,\n      i0 = Math.floor(i),\n      value0 = (0,_max_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_quickselect_js__WEBPACK_IMPORTED_MODULE_3__.default)(values, i0).subarray(0, i0 + 1)),\n      value1 = (0,_min_js__WEBPACK_IMPORTED_MODULE_1__.default)(values.subarray(i0 + 1));\n  return value0 + (value1 - value0) * (i - i0);\n}\n\nfunction quantileSorted(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_0__.default) {\n  if (!(n = values.length)) return;\n  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);\n  if (p >= 1) return +valueof(values[n - 1], n - 1, values);\n  var n,\n      i = (n - 1) * p,\n      i0 = Math.floor(i),\n      value0 = +valueof(values[i0], i0, values),\n      value1 = +valueof(values[i0 + 1], i0 + 1, values);\n  return value0 + (value1 - value0) * (i - i0);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/quantile.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/quickselect.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-array/src/quickselect.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ quickselect)\n/* harmony export */ });\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort.js */ \"./node_modules/d3-array/src/sort.js\");\n\n\n// Based on https://github.com/mourner/quickselect\n// ISC license, Copyright 2018 Vladimir Agafonkin.\nfunction quickselect(array, k, left = 0, right = array.length - 1, compare) {\n  compare = compare === undefined ? _sort_js__WEBPACK_IMPORTED_MODULE_0__.ascendingDefined : (0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.compareDefined)(compare);\n\n  while (right > left) {\n    if (right - left > 600) {\n      const n = right - left + 1;\n      const m = k - left + 1;\n      const z = Math.log(n);\n      const s = 0.5 * Math.exp(2 * z / 3);\n      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);\n      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));\n      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));\n      quickselect(array, k, newLeft, newRight, compare);\n    }\n\n    const t = array[k];\n    let i = left;\n    let j = right;\n\n    swap(array, left, k);\n    if (compare(array[right], t) > 0) swap(array, left, right);\n\n    while (i < j) {\n      swap(array, i, j), ++i, --j;\n      while (compare(array[i], t) < 0) ++i;\n      while (compare(array[j], t) > 0) --j;\n    }\n\n    if (compare(array[left], t) === 0) swap(array, left, j);\n    else ++j, swap(array, j, right);\n\n    if (j <= k) left = j + 1;\n    if (k <= j) right = j - 1;\n  }\n  return array;\n}\n\nfunction swap(array, i, j) {\n  const t = array[i];\n  array[i] = array[j];\n  array[j] = t;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/quickselect.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ range)\n/* harmony export */ });\nfunction range(start, stop, step) {\n  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;\n\n  var i = -1,\n      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,\n      range = new Array(n);\n\n  while (++i < n) {\n    range[i] = start + i * step;\n  }\n\n  return range;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/range.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/reduce.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/reduce.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reduce)\n/* harmony export */ });\nfunction reduce(values, reducer, value) {\n  if (typeof reducer !== \"function\") throw new TypeError(\"reducer is not a function\");\n  const iterator = values[Symbol.iterator]();\n  let done, next, index = -1;\n  if (arguments.length < 3) {\n    ({done, value} = iterator.next());\n    if (done) return;\n    ++index;\n  }\n  while (({done, value: next} = iterator.next()), !done) {\n    value = reducer(value, next, ++index, values);\n  }\n  return value;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/reduce.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/reverse.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/reverse.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reverse)\n/* harmony export */ });\nfunction reverse(values) {\n  if (typeof values[Symbol.iterator] !== \"function\") throw new TypeError(\"values is not iterable\");\n  return Array.from(values).reverse();\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/reverse.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scan)\n/* harmony export */ });\n/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leastIndex.js */ \"./node_modules/d3-array/src/leastIndex.js\");\n\n\nfunction scan(values, compare) {\n  const index = (0,_leastIndex_js__WEBPACK_IMPORTED_MODULE_0__.default)(values, compare);\n  return index < 0 ? undefined : index;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/scan.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/set.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/set.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ set)\n/* harmony export */ });\nfunction set(values) {\n  return values instanceof Set ? values : new Set(values);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/set.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"shuffler\": () => (/* binding */ shuffler)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shuffler(Math.random));\n\nfunction shuffler(random) {\n  return function shuffle(array, i0 = 0, i1 = array.length) {\n    let m = i1 - (i0 = +i0);\n    while (m) {\n      const i = random() * m-- | 0, t = array[m + i0];\n      array[m + i0] = array[i + i0];\n      array[i + i0] = t;\n    }\n    return array;\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/shuffle.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/some.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/some.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ some)\n/* harmony export */ });\nfunction some(values, test) {\n  if (typeof test !== \"function\") throw new TypeError(\"test is not a function\");\n  let index = -1;\n  for (const value of values) {\n    if (test(value, ++index, values)) {\n      return true;\n    }\n  }\n  return false;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/some.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/sort.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/sort.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sort),\n/* harmony export */   \"compareDefined\": () => (/* binding */ compareDefined),\n/* harmony export */   \"ascendingDefined\": () => (/* binding */ ascendingDefined)\n/* harmony export */ });\n/* harmony import */ var _permute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permute.js */ \"./node_modules/d3-array/src/permute.js\");\n\n\nfunction sort(values, ...F) {\n  if (typeof values[Symbol.iterator] !== \"function\") throw new TypeError(\"values is not iterable\");\n  values = Array.from(values);\n  let [f] = F;\n  if ((f && f.length === 1) || F.length > 1) {\n    const index = Uint32Array.from(values, (d, i) => i);\n    if (F.length > 1) {\n      F = F.map(f => values.map(f));\n      index.sort((i, j) => {\n        for (const f of F) {\n          const c = ascendingDefined(f[i], f[j]);\n          if (c) return c;\n        }\n      });\n    } else {\n      f = values.map(f);\n      index.sort((i, j) => ascendingDefined(f[i], f[j]));\n    }\n    return (0,_permute_js__WEBPACK_IMPORTED_MODULE_0__.default)(values, index);\n  }\n  return values.sort(f === undefined ? ascendingDefined : compareDefined(f));\n}\n\nfunction compareDefined(compare) {\n  if (typeof compare !== \"function\") throw new TypeError(\"compare is not a function\");\n  return (a, b) => {\n    const x = compare(a, b);\n    if (x || x === 0) return x;\n    return (compare(b, b) === 0) - (compare(a, a) === 0);\n  };\n}\n\nfunction ascendingDefined(a, b) {\n  return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/sort.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/subset.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/subset.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ subset)\n/* harmony export */ });\n/* harmony import */ var _superset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superset.js */ \"./node_modules/d3-array/src/superset.js\");\n\n\nfunction subset(values, other) {\n  return (0,_superset_js__WEBPACK_IMPORTED_MODULE_0__.default)(other, values);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/subset.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sum)\n/* harmony export */ });\nfunction sum(values, valueof) {\n  let sum = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value = +value) {\n        sum += value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if (value = +valueof(value, ++index, values)) {\n        sum += value;\n      }\n    }\n  }\n  return sum;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/sum.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/superset.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/superset.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ superset)\n/* harmony export */ });\nfunction superset(values, other) {\n  const iterator = values[Symbol.iterator](), set = new Set();\n  for (const o of other) {\n    if (set.has(o)) continue;\n    let value, done;\n    while (({value, done} = iterator.next())) {\n      if (done) return false;\n      set.add(value);\n      if (Object.is(o, value)) break;\n    }\n  }\n  return true;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/superset.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ thresholdFreedmanDiaconis)\n/* harmony export */ });\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../count.js */ \"./node_modules/d3-array/src/count.js\");\n/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quantile.js */ \"./node_modules/d3-array/src/quantile.js\");\n\n\n\nfunction thresholdFreedmanDiaconis(values, min, max) {\n  return Math.ceil((max - min) / (2 * ((0,_quantile_js__WEBPACK_IMPORTED_MODULE_0__.default)(values, 0.75) - (0,_quantile_js__WEBPACK_IMPORTED_MODULE_0__.default)(values, 0.25)) * Math.pow((0,_count_js__WEBPACK_IMPORTED_MODULE_1__.default)(values), -1 / 3)));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/threshold/freedmanDiaconis.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ thresholdScott)\n/* harmony export */ });\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../count.js */ \"./node_modules/d3-array/src/count.js\");\n/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation.js */ \"./node_modules/d3-array/src/deviation.js\");\n\n\n\nfunction thresholdScott(values, min, max) {\n  return Math.ceil((max - min) / (3.5 * (0,_deviation_js__WEBPACK_IMPORTED_MODULE_0__.default)(values) * Math.pow((0,_count_js__WEBPACK_IMPORTED_MODULE_1__.default)(values), -1 / 3)));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/threshold/scott.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ thresholdSturges)\n/* harmony export */ });\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ \"./node_modules/d3-array/src/count.js\");\n\n\nfunction thresholdSturges(values) {\n  return Math.ceil(Math.log((0,_count_js__WEBPACK_IMPORTED_MODULE_0__.default)(values)) / Math.LN2) + 1;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/threshold/sturges.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ticks),\n/* harmony export */   \"tickIncrement\": () => (/* binding */ tickIncrement),\n/* harmony export */   \"tickStep\": () => (/* binding */ tickStep)\n/* harmony export */ });\nvar e10 = Math.sqrt(50),\n    e5 = Math.sqrt(10),\n    e2 = Math.sqrt(2);\n\nfunction ticks(start, stop, count) {\n  var reverse,\n      i = -1,\n      n,\n      ticks,\n      step;\n\n  stop = +stop, start = +start, count = +count;\n  if (start === stop && count > 0) return [start];\n  if (reverse = stop < start) n = start, start = stop, stop = n;\n  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];\n\n  if (step > 0) {\n    let r0 = Math.round(start / step), r1 = Math.round(stop / step);\n    if (r0 * step < start) ++r0;\n    if (r1 * step > stop) --r1;\n    ticks = new Array(n = r1 - r0 + 1);\n    while (++i < n) ticks[i] = (r0 + i) * step;\n  } else {\n    step = -step;\n    let r0 = Math.round(start * step), r1 = Math.round(stop * step);\n    if (r0 / step < start) ++r0;\n    if (r1 / step > stop) --r1;\n    ticks = new Array(n = r1 - r0 + 1);\n    while (++i < n) ticks[i] = (r0 + i) / step;\n  }\n\n  if (reverse) ticks.reverse();\n\n  return ticks;\n}\n\nfunction tickIncrement(start, stop, count) {\n  var step = (stop - start) / Math.max(0, count),\n      power = Math.floor(Math.log(step) / Math.LN10),\n      error = step / Math.pow(10, power);\n  return power >= 0\n      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)\n      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);\n}\n\nfunction tickStep(start, stop, count) {\n  var step0 = Math.abs(stop - start) / Math.max(0, count),\n      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),\n      error = step0 / step1;\n  if (error >= e10) step1 *= 10;\n  else if (error >= e5) step1 *= 5;\n  else if (error >= e2) step1 *= 2;\n  return stop < start ? -step1 : step1;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/ticks.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ transpose)\n/* harmony export */ });\n/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min.js */ \"./node_modules/d3-array/src/min.js\");\n\n\nfunction transpose(matrix) {\n  if (!(n = matrix.length)) return [];\n  for (var i = -1, m = (0,_min_js__WEBPACK_IMPORTED_MODULE_0__.default)(matrix, length), transpose = new Array(m); ++i < m;) {\n    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {\n      row[j] = matrix[j][i];\n    }\n  }\n  return transpose;\n}\n\nfunction length(d) {\n  return d.length;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/transpose.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/union.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/union.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ union)\n/* harmony export */ });\nfunction union(...others) {\n  const set = new Set();\n  for (const other of others) {\n    for (const o of other) {\n      set.add(o);\n    }\n  }\n  return set;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/union.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ variance)\n/* harmony export */ });\nfunction variance(values, valueof) {\n  let count = 0;\n  let delta;\n  let mean = 0;\n  let sum = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        delta = value - mean;\n        mean += delta / ++count;\n        sum += delta * (value - mean);\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        delta = value - mean;\n        mean += delta / ++count;\n        sum += delta * (value - mean);\n      }\n    }\n  }\n  if (count > 1) return sum / (count - 1);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/variance.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ zip)\n/* harmony export */ });\n/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose.js */ \"./node_modules/d3-array/src/transpose.js\");\n\n\nfunction zip() {\n  return (0,_transpose_js__WEBPACK_IMPORTED_MODULE_0__.default)(arguments);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-array/src/zip.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Color\": () => (/* binding */ Color),\n/* harmony export */   \"darker\": () => (/* binding */ darker),\n/* harmony export */   \"brighter\": () => (/* binding */ brighter),\n/* harmony export */   \"default\": () => (/* binding */ color),\n/* harmony export */   \"rgbConvert\": () => (/* binding */ rgbConvert),\n/* harmony export */   \"rgb\": () => (/* binding */ rgb),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"hslConvert\": () => (/* binding */ hslConvert),\n/* harmony export */   \"hsl\": () => (/* binding */ hsl)\n/* harmony export */ });\n/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ \"./node_modules/d3-color/src/define.js\");\n\n\nfunction Color() {}\n\nvar darker = 0.7;\nvar brighter = 1 / darker;\n\nvar reI = \"\\\\s*([+-]?\\\\d+)\\\\s*\",\n    reN = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)\\\\s*\",\n    reP = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)%\\\\s*\",\n    reHex = /^#([0-9a-f]{3,8})$/,\n    reRgbInteger = new RegExp(\"^rgb\\\\(\" + [reI, reI, reI] + \"\\\\)$\"),\n    reRgbPercent = new RegExp(\"^rgb\\\\(\" + [reP, reP, reP] + \"\\\\)$\"),\n    reRgbaInteger = new RegExp(\"^rgba\\\\(\" + [reI, reI, reI, reN] + \"\\\\)$\"),\n    reRgbaPercent = new RegExp(\"^rgba\\\\(\" + [reP, reP, reP, reN] + \"\\\\)$\"),\n    reHslPercent = new RegExp(\"^hsl\\\\(\" + [reN, reP, reP] + \"\\\\)$\"),\n    reHslaPercent = new RegExp(\"^hsla\\\\(\" + [reN, reP, reP, reN] + \"\\\\)$\");\n\nvar named = {\n  aliceblue: 0xf0f8ff,\n  antiquewhite: 0xfaebd7,\n  aqua: 0x00ffff,\n  aquamarine: 0x7fffd4,\n  azure: 0xf0ffff,\n  beige: 0xf5f5dc,\n  bisque: 0xffe4c4,\n  black: 0x000000,\n  blanchedalmond: 0xffebcd,\n  blue: 0x0000ff,\n  blueviolet: 0x8a2be2,\n  brown: 0xa52a2a,\n  burlywood: 0xdeb887,\n  cadetblue: 0x5f9ea0,\n  chartreuse: 0x7fff00,\n  chocolate: 0xd2691e,\n  coral: 0xff7f50,\n  cornflowerblue: 0x6495ed,\n  cornsilk: 0xfff8dc,\n  crimson: 0xdc143c,\n  cyan: 0x00ffff,\n  darkblue: 0x00008b,\n  darkcyan: 0x008b8b,\n  darkgoldenrod: 0xb8860b,\n  darkgray: 0xa9a9a9,\n  darkgreen: 0x006400,\n  darkgrey: 0xa9a9a9,\n  darkkhaki: 0xbdb76b,\n  darkmagenta: 0x8b008b,\n  darkolivegreen: 0x556b2f,\n  darkorange: 0xff8c00,\n  darkorchid: 0x9932cc,\n  darkred: 0x8b0000,\n  darksalmon: 0xe9967a,\n  darkseagreen: 0x8fbc8f,\n  darkslateblue: 0x483d8b,\n  darkslategray: 0x2f4f4f,\n  darkslategrey: 0x2f4f4f,\n  darkturquoise: 0x00ced1,\n  darkviolet: 0x9400d3,\n  deeppink: 0xff1493,\n  deepskyblue: 0x00bfff,\n  dimgray: 0x696969,\n  dimgrey: 0x696969,\n  dodgerblue: 0x1e90ff,\n  firebrick: 0xb22222,\n  floralwhite: 0xfffaf0,\n  forestgreen: 0x228b22,\n  fuchsia: 0xff00ff,\n  gainsboro: 0xdcdcdc,\n  ghostwhite: 0xf8f8ff,\n  gold: 0xffd700,\n  goldenrod: 0xdaa520,\n  gray: 0x808080,\n  green: 0x008000,\n  greenyellow: 0xadff2f,\n  grey: 0x808080,\n  honeydew: 0xf0fff0,\n  hotpink: 0xff69b4,\n  indianred: 0xcd5c5c,\n  indigo: 0x4b0082,\n  ivory: 0xfffff0,\n  khaki: 0xf0e68c,\n  lavender: 0xe6e6fa,\n  lavenderblush: 0xfff0f5,\n  lawngreen: 0x7cfc00,\n  lemonchiffon: 0xfffacd,\n  lightblue: 0xadd8e6,\n  lightcoral: 0xf08080,\n  lightcyan: 0xe0ffff,\n  lightgoldenrodyellow: 0xfafad2,\n  lightgray: 0xd3d3d3,\n  lightgreen: 0x90ee90,\n  lightgrey: 0xd3d3d3,\n  lightpink: 0xffb6c1,\n  lightsalmon: 0xffa07a,\n  lightseagreen: 0x20b2aa,\n  lightskyblue: 0x87cefa,\n  lightslategray: 0x778899,\n  lightslategrey: 0x778899,\n  lightsteelblue: 0xb0c4de,\n  lightyellow: 0xffffe0,\n  lime: 0x00ff00,\n  limegreen: 0x32cd32,\n  linen: 0xfaf0e6,\n  magenta: 0xff00ff,\n  maroon: 0x800000,\n  mediumaquamarine: 0x66cdaa,\n  mediumblue: 0x0000cd,\n  mediumorchid: 0xba55d3,\n  mediumpurple: 0x9370db,\n  mediumseagreen: 0x3cb371,\n  mediumslateblue: 0x7b68ee,\n  mediumspringgreen: 0x00fa9a,\n  mediumturquoise: 0x48d1cc,\n  mediumvioletred: 0xc71585,\n  midnightblue: 0x191970,\n  mintcream: 0xf5fffa,\n  mistyrose: 0xffe4e1,\n  moccasin: 0xffe4b5,\n  navajowhite: 0xffdead,\n  navy: 0x000080,\n  oldlace: 0xfdf5e6,\n  olive: 0x808000,\n  olivedrab: 0x6b8e23,\n  orange: 0xffa500,\n  orangered: 0xff4500,\n  orchid: 0xda70d6,\n  palegoldenrod: 0xeee8aa,\n  palegreen: 0x98fb98,\n  paleturquoise: 0xafeeee,\n  palevioletred: 0xdb7093,\n  papayawhip: 0xffefd5,\n  peachpuff: 0xffdab9,\n  peru: 0xcd853f,\n  pink: 0xffc0cb,\n  plum: 0xdda0dd,\n  powderblue: 0xb0e0e6,\n  purple: 0x800080,\n  rebeccapurple: 0x663399,\n  red: 0xff0000,\n  rosybrown: 0xbc8f8f,\n  royalblue: 0x4169e1,\n  saddlebrown: 0x8b4513,\n  salmon: 0xfa8072,\n  sandybrown: 0xf4a460,\n  seagreen: 0x2e8b57,\n  seashell: 0xfff5ee,\n  sienna: 0xa0522d,\n  silver: 0xc0c0c0,\n  skyblue: 0x87ceeb,\n  slateblue: 0x6a5acd,\n  slategray: 0x708090,\n  slategrey: 0x708090,\n  snow: 0xfffafa,\n  springgreen: 0x00ff7f,\n  steelblue: 0x4682b4,\n  tan: 0xd2b48c,\n  teal: 0x008080,\n  thistle: 0xd8bfd8,\n  tomato: 0xff6347,\n  turquoise: 0x40e0d0,\n  violet: 0xee82ee,\n  wheat: 0xf5deb3,\n  white: 0xffffff,\n  whitesmoke: 0xf5f5f5,\n  yellow: 0xffff00,\n  yellowgreen: 0x9acd32\n};\n\n(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.default)(Color, color, {\n  copy: function(channels) {\n    return Object.assign(new this.constructor, this, channels);\n  },\n  displayable: function() {\n    return this.rgb().displayable();\n  },\n  hex: color_formatHex, // Deprecated! Use color.formatHex.\n  formatHex: color_formatHex,\n  formatHsl: color_formatHsl,\n  formatRgb: color_formatRgb,\n  toString: color_formatRgb\n});\n\nfunction color_formatHex() {\n  return this.rgb().formatHex();\n}\n\nfunction color_formatHsl() {\n  return hslConvert(this).formatHsl();\n}\n\nfunction color_formatRgb() {\n  return this.rgb().formatRgb();\n}\n\nfunction color(format) {\n  var m, l;\n  format = (format + \"\").trim().toLowerCase();\n  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000\n      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00\n      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000\n      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000\n      : null) // invalid hex\n      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)\n      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)\n      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)\n      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)\n      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)\n      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)\n      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins\n      : format === \"transparent\" ? new Rgb(NaN, NaN, NaN, 0)\n      : null;\n}\n\nfunction rgbn(n) {\n  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);\n}\n\nfunction rgba(r, g, b, a) {\n  if (a <= 0) r = g = b = NaN;\n  return new Rgb(r, g, b, a);\n}\n\nfunction rgbConvert(o) {\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Rgb;\n  o = o.rgb();\n  return new Rgb(o.r, o.g, o.b, o.opacity);\n}\n\nfunction rgb(r, g, b, opacity) {\n  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);\n}\n\nfunction Rgb(r, g, b, opacity) {\n  this.r = +r;\n  this.g = +g;\n  this.b = +b;\n  this.opacity = +opacity;\n}\n\n(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.default)(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  rgb: function() {\n    return this;\n  },\n  displayable: function() {\n    return (-0.5 <= this.r && this.r < 255.5)\n        && (-0.5 <= this.g && this.g < 255.5)\n        && (-0.5 <= this.b && this.b < 255.5)\n        && (0 <= this.opacity && this.opacity <= 1);\n  },\n  hex: rgb_formatHex, // Deprecated! Use color.formatHex.\n  formatHex: rgb_formatHex,\n  formatRgb: rgb_formatRgb,\n  toString: rgb_formatRgb\n}));\n\nfunction rgb_formatHex() {\n  return \"#\" + hex(this.r) + hex(this.g) + hex(this.b);\n}\n\nfunction rgb_formatRgb() {\n  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));\n  return (a === 1 ? \"rgb(\" : \"rgba(\")\n      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + \", \"\n      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + \", \"\n      + Math.max(0, Math.min(255, Math.round(this.b) || 0))\n      + (a === 1 ? \")\" : \", \" + a + \")\");\n}\n\nfunction hex(value) {\n  value = Math.max(0, Math.min(255, Math.round(value) || 0));\n  return (value < 16 ? \"0\" : \"\") + value.toString(16);\n}\n\nfunction hsla(h, s, l, a) {\n  if (a <= 0) h = s = l = NaN;\n  else if (l <= 0 || l >= 1) h = s = NaN;\n  else if (s <= 0) h = NaN;\n  return new Hsl(h, s, l, a);\n}\n\nfunction hslConvert(o) {\n  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Hsl;\n  if (o instanceof Hsl) return o;\n  o = o.rgb();\n  var r = o.r / 255,\n      g = o.g / 255,\n      b = o.b / 255,\n      min = Math.min(r, g, b),\n      max = Math.max(r, g, b),\n      h = NaN,\n      s = max - min,\n      l = (max + min) / 2;\n  if (s) {\n    if (r === max) h = (g - b) / s + (g < b) * 6;\n    else if (g === max) h = (b - r) / s + 2;\n    else h = (r - g) / s + 4;\n    s /= l < 0.5 ? max + min : 2 - max - min;\n    h *= 60;\n  } else {\n    s = l > 0 && l < 1 ? 0 : h;\n  }\n  return new Hsl(h, s, l, o.opacity);\n}\n\nfunction hsl(h, s, l, opacity) {\n  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);\n}\n\nfunction Hsl(h, s, l, opacity) {\n  this.h = +h;\n  this.s = +s;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\n(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.default)(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  rgb: function() {\n    var h = this.h % 360 + (this.h < 0) * 360,\n        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,\n        l = this.l,\n        m2 = l + (l < 0.5 ? l : 1 - l) * s,\n        m1 = 2 * l - m2;\n    return new Rgb(\n      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),\n      hsl2rgb(h, m1, m2),\n      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),\n      this.opacity\n    );\n  },\n  displayable: function() {\n    return (0 <= this.s && this.s <= 1 || isNaN(this.s))\n        && (0 <= this.l && this.l <= 1)\n        && (0 <= this.opacity && this.opacity <= 1);\n  },\n  formatHsl: function() {\n    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));\n    return (a === 1 ? \"hsl(\" : \"hsla(\")\n        + (this.h || 0) + \", \"\n        + (this.s || 0) * 100 + \"%, \"\n        + (this.l || 0) * 100 + \"%\"\n        + (a === 1 ? \")\" : \", \" + a + \")\");\n  }\n}));\n\n/* From FvD 13.37, CSS Color Module Level 3 */\nfunction hsl2rgb(h, m1, m2) {\n  return (h < 60 ? m1 + (m2 - m1) * h / 60\n      : h < 180 ? m2\n      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60\n      : m1) * 255;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-color/src/color.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"extend\": () => (/* binding */ extend)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {\n  constructor.prototype = factory.prototype = prototype;\n  prototype.constructor = constructor;\n}\n\nfunction extend(parent, definition) {\n  var prototype = Object.create(parent.prototype);\n  for (var key in definition) prototype[key] = definition[key];\n  return prototype;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-color/src/define.js?");

/***/ }),

/***/ "./node_modules/d3-dsv/src/csv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/csv.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"csvParse\": () => (/* binding */ csvParse),\n/* harmony export */   \"csvParseRows\": () => (/* binding */ csvParseRows),\n/* harmony export */   \"csvFormat\": () => (/* binding */ csvFormat),\n/* harmony export */   \"csvFormatBody\": () => (/* binding */ csvFormatBody),\n/* harmony export */   \"csvFormatRows\": () => (/* binding */ csvFormatRows),\n/* harmony export */   \"csvFormatRow\": () => (/* binding */ csvFormatRow),\n/* harmony export */   \"csvFormatValue\": () => (/* binding */ csvFormatValue)\n/* harmony export */ });\n/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ \"./node_modules/d3-dsv/src/dsv.js\");\n\n\nvar csv = (0,_dsv_js__WEBPACK_IMPORTED_MODULE_0__.default)(\",\");\n\nvar csvParse = csv.parse;\nvar csvParseRows = csv.parseRows;\nvar csvFormat = csv.format;\nvar csvFormatBody = csv.formatBody;\nvar csvFormatRows = csv.formatRows;\nvar csvFormatRow = csv.formatRow;\nvar csvFormatValue = csv.formatValue;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-dsv/src/csv.js?");

/***/ }),

/***/ "./node_modules/d3-dsv/src/dsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/dsv.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar EOL = {},\n    EOF = {},\n    QUOTE = 34,\n    NEWLINE = 10,\n    RETURN = 13;\n\nfunction objectConverter(columns) {\n  return new Function(\"d\", \"return {\" + columns.map(function(name, i) {\n    return JSON.stringify(name) + \": d[\" + i + \"] || \\\"\\\"\";\n  }).join(\",\") + \"}\");\n}\n\nfunction customConverter(columns, f) {\n  var object = objectConverter(columns);\n  return function(row, i) {\n    return f(object(row), i, columns);\n  };\n}\n\n// Compute unique columns in order of discovery.\nfunction inferColumns(rows) {\n  var columnSet = Object.create(null),\n      columns = [];\n\n  rows.forEach(function(row) {\n    for (var column in row) {\n      if (!(column in columnSet)) {\n        columns.push(columnSet[column] = column);\n      }\n    }\n  });\n\n  return columns;\n}\n\nfunction pad(value, width) {\n  var s = value + \"\", length = s.length;\n  return length < width ? new Array(width - length + 1).join(0) + s : s;\n}\n\nfunction formatYear(year) {\n  return year < 0 ? \"-\" + pad(-year, 6)\n    : year > 9999 ? \"+\" + pad(year, 6)\n    : pad(year, 4);\n}\n\nfunction formatDate(date) {\n  var hours = date.getUTCHours(),\n      minutes = date.getUTCMinutes(),\n      seconds = date.getUTCSeconds(),\n      milliseconds = date.getUTCMilliseconds();\n  return isNaN(date) ? \"Invalid Date\"\n      : formatYear(date.getUTCFullYear(), 4) + \"-\" + pad(date.getUTCMonth() + 1, 2) + \"-\" + pad(date.getUTCDate(), 2)\n      + (milliseconds ? \"T\" + pad(hours, 2) + \":\" + pad(minutes, 2) + \":\" + pad(seconds, 2) + \".\" + pad(milliseconds, 3) + \"Z\"\n      : seconds ? \"T\" + pad(hours, 2) + \":\" + pad(minutes, 2) + \":\" + pad(seconds, 2) + \"Z\"\n      : minutes || hours ? \"T\" + pad(hours, 2) + \":\" + pad(minutes, 2) + \"Z\"\n      : \"\");\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(delimiter) {\n  var reFormat = new RegExp(\"[\\\"\" + delimiter + \"\\n\\r]\"),\n      DELIMITER = delimiter.charCodeAt(0);\n\n  function parse(text, f) {\n    var convert, columns, rows = parseRows(text, function(row, i) {\n      if (convert) return convert(row, i - 1);\n      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);\n    });\n    rows.columns = columns || [];\n    return rows;\n  }\n\n  function parseRows(text, f) {\n    var rows = [], // output rows\n        N = text.length,\n        I = 0, // current character index\n        n = 0, // current line number\n        t, // current token\n        eof = N <= 0, // current token followed by EOF?\n        eol = false; // current token followed by EOL?\n\n    // Strip the trailing newline.\n    if (text.charCodeAt(N - 1) === NEWLINE) --N;\n    if (text.charCodeAt(N - 1) === RETURN) --N;\n\n    function token() {\n      if (eof) return EOF;\n      if (eol) return eol = false, EOL;\n\n      // Unescape quotes.\n      var i, j = I, c;\n      if (text.charCodeAt(j) === QUOTE) {\n        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);\n        if ((i = I) >= N) eof = true;\n        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;\n        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }\n        return text.slice(j + 1, i - 1).replace(/\"\"/g, \"\\\"\");\n      }\n\n      // Find next delimiter or newline.\n      while (I < N) {\n        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;\n        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }\n        else if (c !== DELIMITER) continue;\n        return text.slice(j, i);\n      }\n\n      // Return last token before EOF.\n      return eof = true, text.slice(j, N);\n    }\n\n    while ((t = token()) !== EOF) {\n      var row = [];\n      while (t !== EOL && t !== EOF) row.push(t), t = token();\n      if (f && (row = f(row, n++)) == null) continue;\n      rows.push(row);\n    }\n\n    return rows;\n  }\n\n  function preformatBody(rows, columns) {\n    return rows.map(function(row) {\n      return columns.map(function(column) {\n        return formatValue(row[column]);\n      }).join(delimiter);\n    });\n  }\n\n  function format(rows, columns) {\n    if (columns == null) columns = inferColumns(rows);\n    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join(\"\\n\");\n  }\n\n  function formatBody(rows, columns) {\n    if (columns == null) columns = inferColumns(rows);\n    return preformatBody(rows, columns).join(\"\\n\");\n  }\n\n  function formatRows(rows) {\n    return rows.map(formatRow).join(\"\\n\");\n  }\n\n  function formatRow(row) {\n    return row.map(formatValue).join(delimiter);\n  }\n\n  function formatValue(value) {\n    return value == null ? \"\"\n        : value instanceof Date ? formatDate(value)\n        : reFormat.test(value += \"\") ? \"\\\"\" + value.replace(/\"/g, \"\\\"\\\"\") + \"\\\"\"\n        : value;\n  }\n\n  return {\n    parse: parse,\n    parseRows: parseRows,\n    format: format,\n    formatBody: formatBody,\n    formatRows: formatRows,\n    formatRow: formatRow,\n    formatValue: formatValue\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-dsv/src/dsv.js?");

/***/ }),

/***/ "./node_modules/d3-dsv/src/tsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/tsv.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tsvParse\": () => (/* binding */ tsvParse),\n/* harmony export */   \"tsvParseRows\": () => (/* binding */ tsvParseRows),\n/* harmony export */   \"tsvFormat\": () => (/* binding */ tsvFormat),\n/* harmony export */   \"tsvFormatBody\": () => (/* binding */ tsvFormatBody),\n/* harmony export */   \"tsvFormatRows\": () => (/* binding */ tsvFormatRows),\n/* harmony export */   \"tsvFormatRow\": () => (/* binding */ tsvFormatRow),\n/* harmony export */   \"tsvFormatValue\": () => (/* binding */ tsvFormatValue)\n/* harmony export */ });\n/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ \"./node_modules/d3-dsv/src/dsv.js\");\n\n\nvar tsv = (0,_dsv_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"\\t\");\n\nvar tsvParse = tsv.parse;\nvar tsvParseRows = tsv.parseRows;\nvar tsvFormat = tsv.format;\nvar tsvFormatBody = tsv.formatBody;\nvar tsvFormatRows = tsv.formatRows;\nvar tsvFormatRow = tsv.formatRow;\nvar tsvFormatValue = tsv.formatValue;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-dsv/src/tsv.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/blob.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-fetch/src/blob.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction responseBlob(response) {\n  if (!response.ok) throw new Error(response.status + \" \" + response.statusText);\n  return response.blob();\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input, init) {\n  return fetch(input, init).then(responseBlob);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-fetch/src/blob.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/buffer.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-fetch/src/buffer.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction responseArrayBuffer(response) {\n  if (!response.ok) throw new Error(response.status + \" \" + response.statusText);\n  return response.arrayBuffer();\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input, init) {\n  return fetch(input, init).then(responseArrayBuffer);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-fetch/src/buffer.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/dsv.js":
/*!******************************************!*\
  !*** ./node_modules/d3-fetch/src/dsv.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dsv),\n/* harmony export */   \"csv\": () => (/* binding */ csv),\n/* harmony export */   \"tsv\": () => (/* binding */ tsv)\n/* harmony export */ });\n/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-dsv */ \"./node_modules/d3-dsv/src/dsv.js\");\n/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-dsv */ \"./node_modules/d3-dsv/src/csv.js\");\n/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-dsv */ \"./node_modules/d3-dsv/src/tsv.js\");\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ \"./node_modules/d3-fetch/src/text.js\");\n\n\n\nfunction dsvParse(parse) {\n  return function(input, init, row) {\n    if (arguments.length === 2 && typeof init === \"function\") row = init, init = undefined;\n    return (0,_text_js__WEBPACK_IMPORTED_MODULE_0__.default)(input, init).then(function(response) {\n      return parse(response, row);\n    });\n  };\n}\n\nfunction dsv(delimiter, input, init, row) {\n  if (arguments.length === 3 && typeof init === \"function\") row = init, init = undefined;\n  var format = (0,d3_dsv__WEBPACK_IMPORTED_MODULE_1__.default)(delimiter);\n  return (0,_text_js__WEBPACK_IMPORTED_MODULE_0__.default)(input, init).then(function(response) {\n    return format.parse(response, row);\n  });\n}\n\nvar csv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_2__.csvParse);\nvar tsv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_3__.tsvParse);\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-fetch/src/dsv.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/image.js":
/*!********************************************!*\
  !*** ./node_modules/d3-fetch/src/image.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input, init) {\n  return new Promise(function(resolve, reject) {\n    var image = new Image;\n    for (var key in init) image[key] = init[key];\n    image.onerror = reject;\n    image.onload = function() { resolve(image); };\n    image.src = input;\n  });\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-fetch/src/image.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-fetch/src/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blob\": () => (/* reexport safe */ _blob_js__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"buffer\": () => (/* reexport safe */ _buffer_js__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"dsv\": () => (/* reexport safe */ _dsv_js__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"csv\": () => (/* reexport safe */ _dsv_js__WEBPACK_IMPORTED_MODULE_2__.csv),\n/* harmony export */   \"tsv\": () => (/* reexport safe */ _dsv_js__WEBPACK_IMPORTED_MODULE_2__.tsv),\n/* harmony export */   \"image\": () => (/* reexport safe */ _image_js__WEBPACK_IMPORTED_MODULE_3__.default),\n/* harmony export */   \"json\": () => (/* reexport safe */ _json_js__WEBPACK_IMPORTED_MODULE_4__.default),\n/* harmony export */   \"text\": () => (/* reexport safe */ _text_js__WEBPACK_IMPORTED_MODULE_5__.default),\n/* harmony export */   \"xml\": () => (/* reexport safe */ _xml_js__WEBPACK_IMPORTED_MODULE_6__.default),\n/* harmony export */   \"html\": () => (/* reexport safe */ _xml_js__WEBPACK_IMPORTED_MODULE_6__.html),\n/* harmony export */   \"svg\": () => (/* reexport safe */ _xml_js__WEBPACK_IMPORTED_MODULE_6__.svg)\n/* harmony export */ });\n/* harmony import */ var _blob_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blob.js */ \"./node_modules/d3-fetch/src/blob.js\");\n/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer.js */ \"./node_modules/d3-fetch/src/buffer.js\");\n/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dsv.js */ \"./node_modules/d3-fetch/src/dsv.js\");\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.js */ \"./node_modules/d3-fetch/src/image.js\");\n/* harmony import */ var _json_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json.js */ \"./node_modules/d3-fetch/src/json.js\");\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text.js */ \"./node_modules/d3-fetch/src/text.js\");\n/* harmony import */ var _xml_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xml.js */ \"./node_modules/d3-fetch/src/xml.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-fetch/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/json.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-fetch/src/json.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction responseJson(response) {\n  if (!response.ok) throw new Error(response.status + \" \" + response.statusText);\n  if (response.status === 204 || response.status === 205) return;\n  return response.json();\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input, init) {\n  return fetch(input, init).then(responseJson);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-fetch/src/json.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/text.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-fetch/src/text.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction responseText(response) {\n  if (!response.ok) throw new Error(response.status + \" \" + response.statusText);\n  return response.text();\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input, init) {\n  return fetch(input, init).then(responseText);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-fetch/src/text.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/xml.js":
/*!******************************************!*\
  !*** ./node_modules/d3-fetch/src/xml.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"html\": () => (/* binding */ html),\n/* harmony export */   \"svg\": () => (/* binding */ svg)\n/* harmony export */ });\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ \"./node_modules/d3-fetch/src/text.js\");\n\n\nfunction parser(type) {\n  return (input, init) => (0,_text_js__WEBPACK_IMPORTED_MODULE_0__.default)(input, init)\n    .then(text => (new DOMParser).parseFromString(text, type));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parser(\"application/xml\"));\n\nvar html = parser(\"text/html\");\n\nvar svg = parser(\"image/svg+xml\");\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-fetch/src/xml.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format),\n/* harmony export */   \"formatPrefix\": () => (/* binding */ formatPrefix),\n/* harmony export */   \"default\": () => (/* binding */ defaultLocale)\n/* harmony export */ });\n/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ \"./node_modules/d3-format/src/locale.js\");\n\n\nvar locale;\nvar format;\nvar formatPrefix;\n\ndefaultLocale({\n  thousands: \",\",\n  grouping: [3],\n  currency: [\"$\", \"\"]\n});\n\nfunction defaultLocale(definition) {\n  locale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.default)(definition);\n  format = locale.format;\n  formatPrefix = locale.formatPrefix;\n  return locale;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/defaultLocale.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ \"./node_modules/d3-format/src/formatDecimal.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {\n  return x = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(Math.abs(x)), x ? x[1] : NaN;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/exponent.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"formatDecimalParts\": () => (/* binding */ formatDecimalParts)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {\n  return Math.abs(x = Math.round(x)) >= 1e21\n      ? x.toLocaleString(\"en\").replace(/,/g, \"\")\n      : x.toString(10);\n}\n\n// Computes the decimal coefficient and exponent of the specified number x with\n// significant digits p, where x is positive and p is in [1, 21] or undefined.\n// For example, formatDecimalParts(1.23) returns [\"123\", 0].\nfunction formatDecimalParts(x, p) {\n  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf(\"e\")) < 0) return null; // NaN, ±Infinity\n  var i, coefficient = x.slice(0, i);\n\n  // The string returned by toExponential either has the form \\d\\.\\d+e[-+]\\d+\n  // (e.g., 1.2e+3) or the form \\de[-+]\\d+ (e.g., 1e+3).\n  return [\n    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,\n    +x.slice(i + 1)\n  ];\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/formatDecimal.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(grouping, thousands) {\n  return function(value, width) {\n    var i = value.length,\n        t = [],\n        j = 0,\n        g = grouping[0],\n        length = 0;\n\n    while (i > 0 && g > 0) {\n      if (length + g + 1 > width) g = Math.max(1, width - length);\n      t.push(value.substring(i -= g, i + g));\n      if ((length += g + 1) > width) break;\n      g = grouping[j = (j + 1) % grouping.length];\n    }\n\n    return t.reverse().join(thousands);\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/formatGroup.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(numerals) {\n  return function(value) {\n    return value.replace(/[0-9]/g, function(i) {\n      return numerals[+i];\n    });\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/formatNumerals.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prefixExponent\": () => (/* binding */ prefixExponent),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ \"./node_modules/d3-format/src/formatDecimal.js\");\n\n\nvar prefixExponent;\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, p) {\n  var d = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(x, p);\n  if (!d) return x + \"\";\n  var coefficient = d[0],\n      exponent = d[1],\n      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,\n      n = coefficient.length;\n  return i === n ? coefficient\n      : i > n ? coefficient + new Array(i - n + 1).join(\"0\")\n      : i > 0 ? coefficient.slice(0, i) + \".\" + coefficient.slice(i)\n      : \"0.\" + new Array(1 - i).join(\"0\") + (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(x, Math.max(0, p + i - 1))[0]; // less than 1y!\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/formatPrefixAuto.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ \"./node_modules/d3-format/src/formatDecimal.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, p) {\n  var d = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.formatDecimalParts)(x, p);\n  if (!d) return x + \"\";\n  var coefficient = d[0],\n      exponent = d[1];\n  return exponent < 0 ? \"0.\" + new Array(-exponent).join(\"0\") + coefficient\n      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + \".\" + coefficient.slice(exponent + 1)\n      : coefficient + new Array(exponent - coefficient.length + 2).join(\"0\");\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/formatRounded.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatSpecifier),\n/* harmony export */   \"FormatSpecifier\": () => (/* binding */ FormatSpecifier)\n/* harmony export */ });\n// [[fill]align][sign][symbol][0][width][,][.precision][~][type]\nvar re = /^(?:(.)?([<>=^]))?([+\\-( ])?([$#])?(0)?(\\d+)?(,)?(\\.\\d+)?(~)?([a-z%])?$/i;\n\nfunction formatSpecifier(specifier) {\n  if (!(match = re.exec(specifier))) throw new Error(\"invalid format: \" + specifier);\n  var match;\n  return new FormatSpecifier({\n    fill: match[1],\n    align: match[2],\n    sign: match[3],\n    symbol: match[4],\n    zero: match[5],\n    width: match[6],\n    comma: match[7],\n    precision: match[8] && match[8].slice(1),\n    trim: match[9],\n    type: match[10]\n  });\n}\n\nformatSpecifier.prototype = FormatSpecifier.prototype; // instanceof\n\nfunction FormatSpecifier(specifier) {\n  this.fill = specifier.fill === undefined ? \" \" : specifier.fill + \"\";\n  this.align = specifier.align === undefined ? \">\" : specifier.align + \"\";\n  this.sign = specifier.sign === undefined ? \"-\" : specifier.sign + \"\";\n  this.symbol = specifier.symbol === undefined ? \"\" : specifier.symbol + \"\";\n  this.zero = !!specifier.zero;\n  this.width = specifier.width === undefined ? undefined : +specifier.width;\n  this.comma = !!specifier.comma;\n  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;\n  this.trim = !!specifier.trim;\n  this.type = specifier.type === undefined ? \"\" : specifier.type + \"\";\n}\n\nFormatSpecifier.prototype.toString = function() {\n  return this.fill\n      + this.align\n      + this.sign\n      + this.symbol\n      + (this.zero ? \"0\" : \"\")\n      + (this.width === undefined ? \"\" : Math.max(1, this.width | 0))\n      + (this.comma ? \",\" : \"\")\n      + (this.precision === undefined ? \"\" : \".\" + Math.max(0, this.precision | 0))\n      + (this.trim ? \"~\" : \"\")\n      + this.type;\n};\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/formatSpecifier.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s) {\n  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {\n    switch (s[i]) {\n      case \".\": i0 = i1 = i; break;\n      case \"0\": if (i0 === 0) i0 = i; i1 = i; break;\n      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;\n    }\n  }\n  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/formatTrim.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ \"./node_modules/d3-format/src/formatDecimal.js\");\n/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatPrefixAuto.js */ \"./node_modules/d3-format/src/formatPrefixAuto.js\");\n/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded.js */ \"./node_modules/d3-format/src/formatRounded.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  \"%\": (x, p) => (x * 100).toFixed(p),\n  \"b\": (x) => Math.round(x).toString(2),\n  \"c\": (x) => x + \"\",\n  \"d\": _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__.default,\n  \"e\": (x, p) => x.toExponential(p),\n  \"f\": (x, p) => x.toFixed(p),\n  \"g\": (x, p) => x.toPrecision(p),\n  \"o\": (x) => Math.round(x).toString(8),\n  \"p\": (x, p) => (0,_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__.default)(x * 100, p),\n  \"r\": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__.default,\n  \"s\": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_2__.default,\n  \"X\": (x) => Math.round(x).toString(16).toUpperCase(),\n  \"x\": (x) => Math.round(x).toString(16)\n});\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/formatTypes.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {\n  return x;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/identity.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exponent.js */ \"./node_modules/d3-format/src/exponent.js\");\n/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup.js */ \"./node_modules/d3-format/src/formatGroup.js\");\n/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals.js */ \"./node_modules/d3-format/src/formatNumerals.js\");\n/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier.js */ \"./node_modules/d3-format/src/formatSpecifier.js\");\n/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTrim.js */ \"./node_modules/d3-format/src/formatTrim.js\");\n/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTypes.js */ \"./node_modules/d3-format/src/formatTypes.js\");\n/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto.js */ \"./node_modules/d3-format/src/formatPrefixAuto.js\");\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/d3-format/src/identity.js\");\n\n\n\n\n\n\n\n\n\nvar map = Array.prototype.map,\n    prefixes = [\"y\",\"z\",\"a\",\"f\",\"p\",\"n\",\"µ\",\"m\",\"\",\"k\",\"M\",\"G\",\"T\",\"P\",\"E\",\"Z\",\"Y\"];\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(locale) {\n  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_0__.default : (0,_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__.default)(map.call(locale.grouping, Number), locale.thousands + \"\"),\n      currencyPrefix = locale.currency === undefined ? \"\" : locale.currency[0] + \"\",\n      currencySuffix = locale.currency === undefined ? \"\" : locale.currency[1] + \"\",\n      decimal = locale.decimal === undefined ? \".\" : locale.decimal + \"\",\n      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_0__.default : (0,_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__.default)(map.call(locale.numerals, String)),\n      percent = locale.percent === undefined ? \"%\" : locale.percent + \"\",\n      minus = locale.minus === undefined ? \"−\" : locale.minus + \"\",\n      nan = locale.nan === undefined ? \"NaN\" : locale.nan + \"\";\n\n  function newFormat(specifier) {\n    specifier = (0,_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__.default)(specifier);\n\n    var fill = specifier.fill,\n        align = specifier.align,\n        sign = specifier.sign,\n        symbol = specifier.symbol,\n        zero = specifier.zero,\n        width = specifier.width,\n        comma = specifier.comma,\n        precision = specifier.precision,\n        trim = specifier.trim,\n        type = specifier.type;\n\n    // The \"n\" type is an alias for \",g\".\n    if (type === \"n\") comma = true, type = \"g\";\n\n    // The \"\" type, and any invalid type, is an alias for \".12~g\".\n    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_4__.default[type]) precision === undefined && (precision = 12), trim = true, type = \"g\";\n\n    // If zero fill is specified, padding goes after sign and before digits.\n    if (zero || (fill === \"0\" && align === \"=\")) zero = true, fill = \"0\", align = \"=\";\n\n    // Compute the prefix and suffix.\n    // For SI-prefix, the suffix is lazily computed.\n    var prefix = symbol === \"$\" ? currencyPrefix : symbol === \"#\" && /[boxX]/.test(type) ? \"0\" + type.toLowerCase() : \"\",\n        suffix = symbol === \"$\" ? currencySuffix : /[%p]/.test(type) ? percent : \"\";\n\n    // What format function should we use?\n    // Is this an integer type?\n    // Can this type generate exponential notation?\n    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_4__.default[type],\n        maybeSuffix = /[defgprs%]/.test(type);\n\n    // Set the default precision if not specified,\n    // or clamp the specified precision to the supported range.\n    // For significant precision, it must be in [1, 21].\n    // For fixed precision, it must be in [0, 20].\n    precision = precision === undefined ? 6\n        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))\n        : Math.max(0, Math.min(20, precision));\n\n    function format(value) {\n      var valuePrefix = prefix,\n          valueSuffix = suffix,\n          i, n, c;\n\n      if (type === \"c\") {\n        valueSuffix = formatType(value) + valueSuffix;\n        value = \"\";\n      } else {\n        value = +value;\n\n        // Determine the sign. -0 is not less than 0, but 1 / -0 is!\n        var valueNegative = value < 0 || 1 / value < 0;\n\n        // Perform the initial formatting.\n        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);\n\n        // Trim insignificant zeros.\n        if (trim) value = (0,_formatTrim_js__WEBPACK_IMPORTED_MODULE_5__.default)(value);\n\n        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.\n        if (valueNegative && +value === 0 && sign !== \"+\") valueNegative = false;\n\n        // Compute the prefix and suffix.\n        valuePrefix = (valueNegative ? (sign === \"(\" ? sign : minus) : sign === \"-\" || sign === \"(\" ? \"\" : sign) + valuePrefix;\n        valueSuffix = (type === \"s\" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__.prefixExponent / 3] : \"\") + valueSuffix + (valueNegative && sign === \"(\" ? \")\" : \"\");\n\n        // Break the formatted value into the integer “value” part that can be\n        // grouped, and fractional or exponential “suffix” part that is not.\n        if (maybeSuffix) {\n          i = -1, n = value.length;\n          while (++i < n) {\n            if (c = value.charCodeAt(i), 48 > c || c > 57) {\n              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;\n              value = value.slice(0, i);\n              break;\n            }\n          }\n        }\n      }\n\n      // If the fill character is not \"0\", grouping is applied before padding.\n      if (comma && !zero) value = group(value, Infinity);\n\n      // Compute the padding.\n      var length = valuePrefix.length + value.length + valueSuffix.length,\n          padding = length < width ? new Array(width - length + 1).join(fill) : \"\";\n\n      // If the fill character is \"0\", grouping is applied after padding.\n      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = \"\";\n\n      // Reconstruct the final output based on the desired alignment.\n      switch (align) {\n        case \"<\": value = valuePrefix + value + valueSuffix + padding; break;\n        case \"=\": value = valuePrefix + padding + value + valueSuffix; break;\n        case \"^\": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;\n        default: value = padding + valuePrefix + value + valueSuffix; break;\n      }\n\n      return numerals(value);\n    }\n\n    format.toString = function() {\n      return specifier + \"\";\n    };\n\n    return format;\n  }\n\n  function formatPrefix(specifier, value) {\n    var f = newFormat((specifier = (0,_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__.default)(specifier), specifier.type = \"f\", specifier)),\n        e = Math.max(-8, Math.min(8, Math.floor((0,_exponent_js__WEBPACK_IMPORTED_MODULE_7__.default)(value) / 3))) * 3,\n        k = Math.pow(10, -e),\n        prefix = prefixes[8 + e / 3];\n    return function(value) {\n      return f(k * value) + prefix;\n    };\n  }\n\n  return {\n    format: newFormat,\n    formatPrefix: formatPrefix\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/locale.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ \"./node_modules/d3-format/src/exponent.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(step) {\n  return Math.max(0, -(0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__.default)(Math.abs(step)));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/precisionFixed.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ \"./node_modules/d3-format/src/exponent.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(step, value) {\n  return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__.default)(value) / 3))) * 3 - (0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__.default)(Math.abs(step)));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/precisionPrefix.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ \"./node_modules/d3-format/src/exponent.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(step, max) {\n  step = Math.abs(step), max = Math.abs(max) - step;\n  return Math.max(0, (0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__.default)(max) - (0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__.default)(step)) + 1;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-format/src/precisionRound.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"genericArray\": () => (/* binding */ genericArray)\n/* harmony export */ });\n/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value.js */ \"./node_modules/d3-interpolate/src/value.js\");\n/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberArray.js */ \"./node_modules/d3-interpolate/src/numberArray.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  return ((0,_numberArray_js__WEBPACK_IMPORTED_MODULE_0__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_0__.default : genericArray)(a, b);\n}\n\nfunction genericArray(a, b) {\n  var nb = b ? b.length : 0,\n      na = a ? Math.min(nb, a.length) : 0,\n      x = new Array(na),\n      c = new Array(nb),\n      i;\n\n  for (i = 0; i < na; ++i) x[i] = (0,_value_js__WEBPACK_IMPORTED_MODULE_1__.default)(a[i], b[i]);\n  for (; i < nb; ++i) c[i] = b[i];\n\n  return function(t) {\n    for (i = 0; i < na; ++i) c[i] = x[i](t);\n    return c;\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/array.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basis\": () => (/* binding */ basis),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction basis(t1, v0, v1, v2, v3) {\n  var t2 = t1 * t1, t3 = t2 * t1;\n  return ((1 - 3 * t1 + 3 * t2 - t3) * v0\n      + (4 - 6 * t2 + 3 * t3) * v1\n      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2\n      + t3 * v3) / 6;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {\n  var n = values.length - 1;\n  return function(t) {\n    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),\n        v1 = values[i],\n        v2 = values[i + 1],\n        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,\n        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;\n    return basis((t - i / n) * n, v0, v1, v2, v3);\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/basis.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ \"./node_modules/d3-interpolate/src/basis.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {\n  var n = values.length;\n  return function(t) {\n    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),\n        v0 = values[(i + n - 1) % n],\n        v1 = values[i % n],\n        v2 = values[(i + 1) % n],\n        v3 = values[(i + 2) % n];\n    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__.basis)((t - i / n) * n, v0, v1, v2, v3);\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/basisClosed.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hue\": () => (/* binding */ hue),\n/* harmony export */   \"gamma\": () => (/* binding */ gamma),\n/* harmony export */   \"default\": () => (/* binding */ nogamma)\n/* harmony export */ });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-interpolate/src/constant.js\");\n\n\nfunction linear(a, d) {\n  return function(t) {\n    return a + t * d;\n  };\n}\n\nfunction exponential(a, b, y) {\n  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {\n    return Math.pow(a + t * b, y);\n  };\n}\n\nfunction hue(a, b) {\n  var d = b - a;\n  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(a) ? b : a);\n}\n\nfunction gamma(y) {\n  return (y = +y) === 1 ? nogamma : function(a, b) {\n    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(a) ? b : a);\n  };\n}\n\nfunction nogamma(a, b) {\n  var d = b - a;\n  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(a) ? b : a);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/color.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  var d = new Date;\n  return a = +a, b = +b, function(t) {\n    return d.setTime(a * (1 - t) + b * t), d;\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/date.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  return a = +a, b = +b, function(t) {\n    return a * (1 - t) + b * t;\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/number.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/numberArray.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/numberArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isNumberArray\": () => (/* binding */ isNumberArray)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  if (!b) b = [];\n  var n = a ? Math.min(b.length, a.length) : 0,\n      c = b.slice(),\n      i;\n  return function(t) {\n    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;\n    return c;\n  };\n}\n\nfunction isNumberArray(x) {\n  return ArrayBuffer.isView(x) && !(x instanceof DataView);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/numberArray.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ \"./node_modules/d3-interpolate/src/value.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  var i = {},\n      c = {},\n      k;\n\n  if (a === null || typeof a !== \"object\") a = {};\n  if (b === null || typeof b !== \"object\") b = {};\n\n  for (k in b) {\n    if (k in a) {\n      i[k] = (0,_value_js__WEBPACK_IMPORTED_MODULE_0__.default)(a[k], b[k]);\n    } else {\n      c[k] = b[k];\n    }\n  }\n\n  return function(t) {\n    for (k in i) c[k] = i[k](t);\n    return c;\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/object.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ piecewise)\n/* harmony export */ });\n/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ \"./node_modules/d3-interpolate/src/value.js\");\n\n\nfunction piecewise(interpolate, values) {\n  if (values === undefined) values = interpolate, interpolate = _value_js__WEBPACK_IMPORTED_MODULE_0__.default;\n  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);\n  while (i < n) I[i] = interpolate(v, v = values[++i]);\n  return function(t) {\n    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));\n    return I[i](t - i);\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/piecewise.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"rgbBasis\": () => (/* binding */ rgbBasis),\n/* harmony export */   \"rgbBasisClosed\": () => (/* binding */ rgbBasisClosed)\n/* harmony export */ });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ \"./node_modules/d3-interpolate/src/basis.js\");\n/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ \"./node_modules/d3-interpolate/src/basisClosed.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {\n  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.gamma)(y);\n\n  function rgb(start, end) {\n    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(end)).r),\n        g = color(start.g, end.g),\n        b = color(start.b, end.b),\n        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.default)(start.opacity, end.opacity);\n    return function(t) {\n      start.r = r(t);\n      start.g = g(t);\n      start.b = b(t);\n      start.opacity = opacity(t);\n      return start + \"\";\n    };\n  }\n\n  rgb.gamma = rgbGamma;\n\n  return rgb;\n})(1));\n\nfunction rgbSpline(spline) {\n  return function(colors) {\n    var n = colors.length,\n        r = new Array(n),\n        g = new Array(n),\n        b = new Array(n),\n        i, color;\n    for (i = 0; i < n; ++i) {\n      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(colors[i]);\n      r[i] = color.r || 0;\n      g[i] = color.g || 0;\n      b[i] = color.b || 0;\n    }\n    r = spline(r);\n    g = spline(g);\n    b = spline(b);\n    color.opacity = 1;\n    return function(t) {\n      color.r = r(t);\n      color.g = g(t);\n      color.b = b(t);\n      return color + \"\";\n    };\n  };\n}\n\nvar rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__.default);\nvar rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__.default);\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/rgb.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  return a = +a, b = +b, function(t) {\n    return Math.round(a * (1 - t) + b * t);\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/round.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-interpolate/src/number.js\");\n\n\nvar reA = /[-+]?(?:\\d+\\.?\\d*|\\.?\\d+)(?:[eE][-+]?\\d+)?/g,\n    reB = new RegExp(reA.source, \"g\");\n\nfunction zero(b) {\n  return function() {\n    return b;\n  };\n}\n\nfunction one(b) {\n  return function(t) {\n    return b(t) + \"\";\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b\n      am, // current match in a\n      bm, // current match in b\n      bs, // string preceding current number in b, if any\n      i = -1, // index in s\n      s = [], // string constants and placeholders\n      q = []; // number interpolators\n\n  // Coerce inputs to strings.\n  a = a + \"\", b = b + \"\";\n\n  // Interpolate pairs of numbers in a & b.\n  while ((am = reA.exec(a))\n      && (bm = reB.exec(b))) {\n    if ((bs = bm.index) > bi) { // a string precedes the next number in b\n      bs = b.slice(bi, bs);\n      if (s[i]) s[i] += bs; // coalesce with previous string\n      else s[++i] = bs;\n    }\n    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match\n      if (s[i]) s[i] += bm; // coalesce with previous string\n      else s[++i] = bm;\n    } else { // interpolate non-matching numbers\n      s[++i] = null;\n      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__.default)(am, bm)});\n    }\n    bi = reB.lastIndex;\n  }\n\n  // Add remains of b.\n  if (bi < b.length) {\n    bs = b.slice(bi);\n    if (s[i]) s[i] += bs; // coalesce with previous string\n    else s[++i] = bs;\n  }\n\n  // Special optimization for only a single match.\n  // Otherwise, interpolate each of the numbers and rejoin the string.\n  return s.length < 2 ? (q[0]\n      ? one(q[0].x)\n      : zero(b))\n      : (b = q.length, function(t) {\n          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);\n          return s.join(\"\");\n        });\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/string.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rgb.js */ \"./node_modules/d3-interpolate/src/rgb.js\");\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array.js */ \"./node_modules/d3-interpolate/src/array.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.js */ \"./node_modules/d3-interpolate/src/date.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-interpolate/src/number.js\");\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object.js */ \"./node_modules/d3-interpolate/src/object.js\");\n/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string.js */ \"./node_modules/d3-interpolate/src/string.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-interpolate/src/constant.js\");\n/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numberArray.js */ \"./node_modules/d3-interpolate/src/numberArray.js\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {\n  var t = typeof b, c;\n  return b == null || t === \"boolean\" ? (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(b)\n      : (t === \"number\" ? _number_js__WEBPACK_IMPORTED_MODULE_1__.default\n      : t === \"string\" ? ((c = (0,d3_color__WEBPACK_IMPORTED_MODULE_2__.default)(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_3__.default) : _string_js__WEBPACK_IMPORTED_MODULE_4__.default)\n      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_2__.default ? _rgb_js__WEBPACK_IMPORTED_MODULE_3__.default\n      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_5__.default\n      : (0,_numberArray_js__WEBPACK_IMPORTED_MODULE_6__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_6__.default\n      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_7__.genericArray\n      : typeof b.valueOf !== \"function\" && typeof b.toString !== \"function\" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_8__.default\n      : _number_js__WEBPACK_IMPORTED_MODULE_1__.default)(a, b);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-interpolate/src/value.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ band),\n/* harmony export */   \"point\": () => (/* binding */ point)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/range.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ordinal.js */ \"./node_modules/d3-scale/src/ordinal.js\");\n\n\n\n\nfunction band() {\n  var scale = (0,_ordinal_js__WEBPACK_IMPORTED_MODULE_0__.default)().unknown(undefined),\n      domain = scale.domain,\n      ordinalRange = scale.range,\n      r0 = 0,\n      r1 = 1,\n      step,\n      bandwidth,\n      round = false,\n      paddingInner = 0,\n      paddingOuter = 0,\n      align = 0.5;\n\n  delete scale.unknown;\n\n  function rescale() {\n    var n = domain().length,\n        reverse = r1 < r0,\n        start = reverse ? r1 : r0,\n        stop = reverse ? r0 : r1;\n    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);\n    if (round) step = Math.floor(step);\n    start += (stop - start - step * (n - paddingInner)) * align;\n    bandwidth = step * (1 - paddingInner);\n    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);\n    var values = (0,d3_array__WEBPACK_IMPORTED_MODULE_1__.default)(n).map(function(i) { return start + step * i; });\n    return ordinalRange(reverse ? values.reverse() : values);\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? (domain(_), rescale()) : domain();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];\n  };\n\n  scale.rangeRound = function(_) {\n    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();\n  };\n\n  scale.bandwidth = function() {\n    return bandwidth;\n  };\n\n  scale.step = function() {\n    return step;\n  };\n\n  scale.round = function(_) {\n    return arguments.length ? (round = !!_, rescale()) : round;\n  };\n\n  scale.padding = function(_) {\n    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;\n  };\n\n  scale.paddingInner = function(_) {\n    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;\n  };\n\n  scale.paddingOuter = function(_) {\n    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;\n  };\n\n  scale.align = function(_) {\n    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;\n  };\n\n  scale.copy = function() {\n    return band(domain(), [r0, r1])\n        .round(round)\n        .paddingInner(paddingInner)\n        .paddingOuter(paddingOuter)\n        .align(align);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__.initRange.apply(rescale(), arguments);\n}\n\nfunction pointish(scale) {\n  var copy = scale.copy;\n\n  scale.padding = scale.paddingOuter;\n  delete scale.paddingInner;\n  delete scale.paddingOuter;\n\n  scale.copy = function() {\n    return pointish(copy());\n  };\n\n  return scale;\n}\n\nfunction point() {\n  return pointish(band.apply(null, arguments).paddingInner(1));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/band.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ constants)\n/* harmony export */ });\nfunction constants(x) {\n  return function() {\n    return x;\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"identity\": () => (/* binding */ identity),\n/* harmony export */   \"copy\": () => (/* binding */ copy),\n/* harmony export */   \"transformer\": () => (/* binding */ transformer),\n/* harmony export */   \"default\": () => (/* binding */ continuous)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/bisect.js\");\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/value.js\");\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/number.js\");\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/round.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-scale/src/constant.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-scale/src/number.js\");\n\n\n\n\n\nvar unit = [0, 1];\n\nfunction identity(x) {\n  return x;\n}\n\nfunction normalize(a, b) {\n  return (b -= (a = +a))\n      ? function(x) { return (x - a) / b; }\n      : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.default)(isNaN(b) ? NaN : 0.5);\n}\n\nfunction clamper(a, b) {\n  var t;\n  if (a > b) t = a, a = b, b = t;\n  return function(x) { return Math.max(a, Math.min(b, x)); };\n}\n\n// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].\n// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].\nfunction bimap(domain, range, interpolate) {\n  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];\n  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);\n  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);\n  return function(x) { return r0(d0(x)); };\n}\n\nfunction polymap(domain, range, interpolate) {\n  var j = Math.min(domain.length, range.length) - 1,\n      d = new Array(j),\n      r = new Array(j),\n      i = -1;\n\n  // Reverse descending domains.\n  if (domain[j] < domain[0]) {\n    domain = domain.slice().reverse();\n    range = range.slice().reverse();\n  }\n\n  while (++i < j) {\n    d[i] = normalize(domain[i], domain[i + 1]);\n    r[i] = interpolate(range[i], range[i + 1]);\n  }\n\n  return function(x) {\n    var i = (0,d3_array__WEBPACK_IMPORTED_MODULE_1__.default)(domain, x, 1, j) - 1;\n    return r[i](d[i](x));\n  };\n}\n\nfunction copy(source, target) {\n  return target\n      .domain(source.domain())\n      .range(source.range())\n      .interpolate(source.interpolate())\n      .clamp(source.clamp())\n      .unknown(source.unknown());\n}\n\nfunction transformer() {\n  var domain = unit,\n      range = unit,\n      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.default,\n      transform,\n      untransform,\n      unknown,\n      clamp = identity,\n      piecewise,\n      output,\n      input;\n\n  function rescale() {\n    var n = Math.min(domain.length, range.length);\n    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);\n    piecewise = n > 2 ? polymap : bimap;\n    output = input = null;\n    return scale;\n  }\n\n  function scale(x) {\n    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));\n  }\n\n  scale.invert = function(y) {\n    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_3__.default)))(y)));\n  };\n\n  scale.domain = function(_) {\n    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_4__.default), rescale()) : domain.slice();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();\n  };\n\n  scale.rangeRound = function(_) {\n    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_5__.default, rescale();\n  };\n\n  scale.clamp = function(_) {\n    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;\n  };\n\n  scale.interpolate = function(_) {\n    return arguments.length ? (interpolate = _, rescale()) : interpolate;\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  return function(t, u) {\n    transform = t, untransform = u;\n    return rescale();\n  };\n}\n\nfunction continuous() {\n  return transformer()(identity, identity);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/continuous.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ diverging),\n/* harmony export */   \"divergingLog\": () => (/* binding */ divergingLog),\n/* harmony export */   \"divergingSymlog\": () => (/* binding */ divergingSymlog),\n/* harmony export */   \"divergingPow\": () => (/* binding */ divergingPow),\n/* harmony export */   \"divergingSqrt\": () => (/* binding */ divergingSqrt)\n/* harmony export */ });\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/piecewise.js\");\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/value.js\");\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/round.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log.js */ \"./node_modules/d3-scale/src/log.js\");\n/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sequential.js */ \"./node_modules/d3-scale/src/sequential.js\");\n/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symlog.js */ \"./node_modules/d3-scale/src/symlog.js\");\n/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pow.js */ \"./node_modules/d3-scale/src/pow.js\");\n\n\n\n\n\n\n\n\n\nfunction transformer() {\n  var x0 = 0,\n      x1 = 0.5,\n      x2 = 1,\n      s = 1,\n      t0,\n      t1,\n      t2,\n      k10,\n      k21,\n      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity,\n      transform,\n      clamp = false,\n      unknown;\n\n  function scale(x) {\n    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];\n  };\n\n  scale.clamp = function(_) {\n    return arguments.length ? (clamp = !!_, scale) : clamp;\n  };\n\n  scale.interpolator = function(_) {\n    return arguments.length ? (interpolator = _, scale) : interpolator;\n  };\n\n  function range(interpolate) {\n    return function(_) {\n      var r0, r1, r2;\n      return arguments.length ? ([r0, r1, r2] = _, interpolator = (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_1__.default)(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];\n    };\n  }\n\n  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.default);\n\n  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_3__.default);\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  return function(t) {\n    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;\n    return scale;\n  };\n}\n\nfunction diverging() {\n  var scale = (0,_linear_js__WEBPACK_IMPORTED_MODULE_4__.linearish)(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity));\n\n  scale.copy = function() {\n    return (0,_sequential_js__WEBPACK_IMPORTED_MODULE_5__.copy)(scale, diverging());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_6__.initInterpolator.apply(scale, arguments);\n}\n\nfunction divergingLog() {\n  var scale = (0,_log_js__WEBPACK_IMPORTED_MODULE_7__.loggish)(transformer()).domain([0.1, 1, 10]);\n\n  scale.copy = function() {\n    return (0,_sequential_js__WEBPACK_IMPORTED_MODULE_5__.copy)(scale, divergingLog()).base(scale.base());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_6__.initInterpolator.apply(scale, arguments);\n}\n\nfunction divergingSymlog() {\n  var scale = (0,_symlog_js__WEBPACK_IMPORTED_MODULE_8__.symlogish)(transformer());\n\n  scale.copy = function() {\n    return (0,_sequential_js__WEBPACK_IMPORTED_MODULE_5__.copy)(scale, divergingSymlog()).constant(scale.constant());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_6__.initInterpolator.apply(scale, arguments);\n}\n\nfunction divergingPow() {\n  var scale = (0,_pow_js__WEBPACK_IMPORTED_MODULE_9__.powish)(transformer());\n\n  scale.copy = function() {\n    return (0,_sequential_js__WEBPACK_IMPORTED_MODULE_5__.copy)(scale, divergingPow()).exponent(scale.exponent());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_6__.initInterpolator.apply(scale, arguments);\n}\n\nfunction divergingSqrt() {\n  return divergingPow.apply(null, arguments).exponent(0.5);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/diverging.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ identity)\n/* harmony export */ });\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-scale/src/number.js\");\n\n\n\nfunction identity(domain) {\n  var unknown;\n\n  function scale(x) {\n    return x == null || isNaN(x = +x) ? unknown : x;\n  }\n\n  scale.invert = scale;\n\n  scale.domain = scale.range = function(_) {\n    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_0__.default), scale) : domain.slice();\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.copy = function() {\n    return identity(domain).unknown(unknown);\n  };\n\n  domain = arguments.length ? Array.from(domain, _number_js__WEBPACK_IMPORTED_MODULE_0__.default) : [0, 1];\n\n  return (0,_linear_js__WEBPACK_IMPORTED_MODULE_1__.linearish)(scale);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/identity.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scaleBand\": () => (/* reexport safe */ _band_js__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"scalePoint\": () => (/* reexport safe */ _band_js__WEBPACK_IMPORTED_MODULE_0__.point),\n/* harmony export */   \"scaleIdentity\": () => (/* reexport safe */ _identity_js__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"scaleLinear\": () => (/* reexport safe */ _linear_js__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"scaleLog\": () => (/* reexport safe */ _log_js__WEBPACK_IMPORTED_MODULE_3__.default),\n/* harmony export */   \"scaleSymlog\": () => (/* reexport safe */ _symlog_js__WEBPACK_IMPORTED_MODULE_4__.default),\n/* harmony export */   \"scaleOrdinal\": () => (/* reexport safe */ _ordinal_js__WEBPACK_IMPORTED_MODULE_5__.default),\n/* harmony export */   \"scaleImplicit\": () => (/* reexport safe */ _ordinal_js__WEBPACK_IMPORTED_MODULE_5__.implicit),\n/* harmony export */   \"scalePow\": () => (/* reexport safe */ _pow_js__WEBPACK_IMPORTED_MODULE_6__.default),\n/* harmony export */   \"scaleSqrt\": () => (/* reexport safe */ _pow_js__WEBPACK_IMPORTED_MODULE_6__.sqrt),\n/* harmony export */   \"scaleRadial\": () => (/* reexport safe */ _radial_js__WEBPACK_IMPORTED_MODULE_7__.default),\n/* harmony export */   \"scaleQuantile\": () => (/* reexport safe */ _quantile_js__WEBPACK_IMPORTED_MODULE_8__.default),\n/* harmony export */   \"scaleQuantize\": () => (/* reexport safe */ _quantize_js__WEBPACK_IMPORTED_MODULE_9__.default),\n/* harmony export */   \"scaleThreshold\": () => (/* reexport safe */ _threshold_js__WEBPACK_IMPORTED_MODULE_10__.default),\n/* harmony export */   \"scaleTime\": () => (/* reexport safe */ _time_js__WEBPACK_IMPORTED_MODULE_11__.default),\n/* harmony export */   \"scaleUtc\": () => (/* reexport safe */ _utcTime_js__WEBPACK_IMPORTED_MODULE_12__.default),\n/* harmony export */   \"scaleSequential\": () => (/* reexport safe */ _sequential_js__WEBPACK_IMPORTED_MODULE_13__.default),\n/* harmony export */   \"scaleSequentialLog\": () => (/* reexport safe */ _sequential_js__WEBPACK_IMPORTED_MODULE_13__.sequentialLog),\n/* harmony export */   \"scaleSequentialPow\": () => (/* reexport safe */ _sequential_js__WEBPACK_IMPORTED_MODULE_13__.sequentialPow),\n/* harmony export */   \"scaleSequentialSqrt\": () => (/* reexport safe */ _sequential_js__WEBPACK_IMPORTED_MODULE_13__.sequentialSqrt),\n/* harmony export */   \"scaleSequentialSymlog\": () => (/* reexport safe */ _sequential_js__WEBPACK_IMPORTED_MODULE_13__.sequentialSymlog),\n/* harmony export */   \"scaleSequentialQuantile\": () => (/* reexport safe */ _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__.default),\n/* harmony export */   \"scaleDiverging\": () => (/* reexport safe */ _diverging_js__WEBPACK_IMPORTED_MODULE_15__.default),\n/* harmony export */   \"scaleDivergingLog\": () => (/* reexport safe */ _diverging_js__WEBPACK_IMPORTED_MODULE_15__.divergingLog),\n/* harmony export */   \"scaleDivergingPow\": () => (/* reexport safe */ _diverging_js__WEBPACK_IMPORTED_MODULE_15__.divergingPow),\n/* harmony export */   \"scaleDivergingSqrt\": () => (/* reexport safe */ _diverging_js__WEBPACK_IMPORTED_MODULE_15__.divergingSqrt),\n/* harmony export */   \"scaleDivergingSymlog\": () => (/* reexport safe */ _diverging_js__WEBPACK_IMPORTED_MODULE_15__.divergingSymlog),\n/* harmony export */   \"tickFormat\": () => (/* reexport safe */ _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__.default)\n/* harmony export */ });\n/* harmony import */ var _band_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band.js */ \"./node_modules/d3-scale/src/band.js\");\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/d3-scale/src/identity.js\");\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.js */ \"./node_modules/d3-scale/src/log.js\");\n/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog.js */ \"./node_modules/d3-scale/src/symlog.js\");\n/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordinal.js */ \"./node_modules/d3-scale/src/ordinal.js\");\n/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow.js */ \"./node_modules/d3-scale/src/pow.js\");\n/* harmony import */ var _radial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radial.js */ \"./node_modules/d3-scale/src/radial.js\");\n/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantile.js */ \"./node_modules/d3-scale/src/quantile.js\");\n/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quantize.js */ \"./node_modules/d3-scale/src/quantize.js\");\n/* harmony import */ var _threshold_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold.js */ \"./node_modules/d3-scale/src/threshold.js\");\n/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time.js */ \"./node_modules/d3-scale/src/time.js\");\n/* harmony import */ var _utcTime_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcTime.js */ \"./node_modules/d3-scale/src/utcTime.js\");\n/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sequential.js */ \"./node_modules/d3-scale/src/sequential.js\");\n/* harmony import */ var _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sequentialQuantile.js */ \"./node_modules/d3-scale/src/sequentialQuantile.js\");\n/* harmony import */ var _diverging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./diverging.js */ \"./node_modules/d3-scale/src/diverging.js\");\n/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tickFormat.js */ \"./node_modules/d3-scale/src/tickFormat.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/init.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/init.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initRange\": () => (/* binding */ initRange),\n/* harmony export */   \"initInterpolator\": () => (/* binding */ initInterpolator)\n/* harmony export */ });\nfunction initRange(domain, range) {\n  switch (arguments.length) {\n    case 0: break;\n    case 1: this.range(domain); break;\n    default: this.range(range).domain(domain); break;\n  }\n  return this;\n}\n\nfunction initInterpolator(domain, interpolator) {\n  switch (arguments.length) {\n    case 0: break;\n    case 1: {\n      if (typeof domain === \"function\") this.interpolator(domain);\n      else this.range(domain);\n      break;\n    }\n    default: {\n      this.domain(domain);\n      if (typeof interpolator === \"function\") this.interpolator(interpolator);\n      else this.range(interpolator);\n      break;\n    }\n  }\n  return this;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/init.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"linearish\": () => (/* binding */ linearish),\n/* harmony export */   \"default\": () => (/* binding */ linear)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/ticks.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickFormat.js */ \"./node_modules/d3-scale/src/tickFormat.js\");\n\n\n\n\n\nfunction linearish(scale) {\n  var domain = scale.domain;\n\n  scale.ticks = function(count) {\n    var d = domain();\n    return (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(d[0], d[d.length - 1], count == null ? 10 : count);\n  };\n\n  scale.tickFormat = function(count, specifier) {\n    var d = domain();\n    return (0,_tickFormat_js__WEBPACK_IMPORTED_MODULE_1__.default)(d[0], d[d.length - 1], count == null ? 10 : count, specifier);\n  };\n\n  scale.nice = function(count) {\n    if (count == null) count = 10;\n\n    var d = domain();\n    var i0 = 0;\n    var i1 = d.length - 1;\n    var start = d[i0];\n    var stop = d[i1];\n    var prestep;\n    var step;\n    var maxIter = 10;\n\n    if (stop < start) {\n      step = start, start = stop, stop = step;\n      step = i0, i0 = i1, i1 = step;\n    }\n    \n    while (maxIter-- > 0) {\n      step = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.tickIncrement)(start, stop, count);\n      if (step === prestep) {\n        d[i0] = start\n        d[i1] = stop\n        return domain(d);\n      } else if (step > 0) {\n        start = Math.floor(start / step) * step;\n        stop = Math.ceil(stop / step) * step;\n      } else if (step < 0) {\n        start = Math.ceil(start * step) / step;\n        stop = Math.floor(stop * step) / step;\n      } else {\n        break;\n      }\n      prestep = step;\n    }\n\n    return scale;\n  };\n\n  return scale;\n}\n\nfunction linear() {\n  var scale = (0,_continuous_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n  scale.copy = function() {\n    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_2__.copy)(scale, linear());\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_3__.initRange.apply(scale, arguments);\n\n  return linearish(scale);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/linear.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loggish\": () => (/* binding */ loggish),\n/* harmony export */   \"default\": () => (/* binding */ log)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/ticks.js\");\n/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ \"./node_modules/d3-format/src/defaultLocale.js\");\n/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice.js */ \"./node_modules/d3-scale/src/nice.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\n\n\nfunction transformLog(x) {\n  return Math.log(x);\n}\n\nfunction transformExp(x) {\n  return Math.exp(x);\n}\n\nfunction transformLogn(x) {\n  return -Math.log(-x);\n}\n\nfunction transformExpn(x) {\n  return -Math.exp(-x);\n}\n\nfunction pow10(x) {\n  return isFinite(x) ? +(\"1e\" + x) : x < 0 ? 0 : x;\n}\n\nfunction powp(base) {\n  return base === 10 ? pow10\n      : base === Math.E ? Math.exp\n      : function(x) { return Math.pow(base, x); };\n}\n\nfunction logp(base) {\n  return base === Math.E ? Math.log\n      : base === 10 && Math.log10\n      || base === 2 && Math.log2\n      || (base = Math.log(base), function(x) { return Math.log(x) / base; });\n}\n\nfunction reflect(f) {\n  return function(x) {\n    return -f(-x);\n  };\n}\n\nfunction loggish(transform) {\n  var scale = transform(transformLog, transformExp),\n      domain = scale.domain,\n      base = 10,\n      logs,\n      pows;\n\n  function rescale() {\n    logs = logp(base), pows = powp(base);\n    if (domain()[0] < 0) {\n      logs = reflect(logs), pows = reflect(pows);\n      transform(transformLogn, transformExpn);\n    } else {\n      transform(transformLog, transformExp);\n    }\n    return scale;\n  }\n\n  scale.base = function(_) {\n    return arguments.length ? (base = +_, rescale()) : base;\n  };\n\n  scale.domain = function(_) {\n    return arguments.length ? (domain(_), rescale()) : domain();\n  };\n\n  scale.ticks = function(count) {\n    var d = domain(),\n        u = d[0],\n        v = d[d.length - 1],\n        r;\n\n    if (r = v < u) i = u, u = v, v = i;\n\n    var i = logs(u),\n        j = logs(v),\n        p,\n        k,\n        t,\n        n = count == null ? 10 : +count,\n        z = [];\n\n    if (!(base % 1) && j - i < n) {\n      i = Math.floor(i), j = Math.ceil(j);\n      if (u > 0) for (; i <= j; ++i) {\n        for (k = 1, p = pows(i); k < base; ++k) {\n          t = p * k;\n          if (t < u) continue;\n          if (t > v) break;\n          z.push(t);\n        }\n      } else for (; i <= j; ++i) {\n        for (k = base - 1, p = pows(i); k >= 1; --k) {\n          t = p * k;\n          if (t < u) continue;\n          if (t > v) break;\n          z.push(t);\n        }\n      }\n      if (z.length * 2 < n) z = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(u, v, n);\n    } else {\n      z = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(i, j, Math.min(j - i, n)).map(pows);\n    }\n\n    return r ? z.reverse() : z;\n  };\n\n  scale.tickFormat = function(count, specifier) {\n    if (specifier == null) specifier = base === 10 ? \".0e\" : \",\";\n    if (typeof specifier !== \"function\") specifier = (0,d3_format__WEBPACK_IMPORTED_MODULE_1__.format)(specifier);\n    if (count === Infinity) return specifier;\n    if (count == null) count = 10;\n    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?\n    return function(d) {\n      var i = d / pows(Math.round(logs(d)));\n      if (i * base < base - 0.5) i *= base;\n      return i <= k ? specifier(d) : \"\";\n    };\n  };\n\n  scale.nice = function() {\n    return domain((0,_nice_js__WEBPACK_IMPORTED_MODULE_2__.default)(domain(), {\n      floor: function(x) { return pows(Math.floor(logs(x))); },\n      ceil: function(x) { return pows(Math.ceil(logs(x))); }\n    }));\n  };\n\n  return scale;\n}\n\nfunction log() {\n  var scale = loggish((0,_continuous_js__WEBPACK_IMPORTED_MODULE_3__.transformer)()).domain([1, 10]);\n\n  scale.copy = function() {\n    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_3__.copy)(scale, log()).base(scale.base());\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_4__.initRange.apply(scale, arguments);\n\n  return scale;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/log.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nice)\n/* harmony export */ });\nfunction nice(domain, interval) {\n  domain = domain.slice();\n\n  var i0 = 0,\n      i1 = domain.length - 1,\n      x0 = domain[i0],\n      x1 = domain[i1],\n      t;\n\n  if (x1 < x0) {\n    t = i0, i0 = i1, i1 = t;\n    t = x0, x0 = x1, x1 = t;\n  }\n\n  domain[i0] = interval.floor(x0);\n  domain[i1] = interval.ceil(x1);\n  return domain;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/nice.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ number)\n/* harmony export */ });\nfunction number(x) {\n  return +x;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/number.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"implicit\": () => (/* binding */ implicit),\n/* harmony export */   \"default\": () => (/* binding */ ordinal)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/internmap/src/index.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\nconst implicit = Symbol(\"implicit\");\n\nfunction ordinal() {\n  var index = new d3_array__WEBPACK_IMPORTED_MODULE_0__.InternMap(),\n      domain = [],\n      range = [],\n      unknown = implicit;\n\n  function scale(d) {\n    let i = index.get(d);\n    if (i === undefined) {\n      if (unknown !== implicit) return unknown;\n      index.set(d, i = domain.push(d) - 1);\n    }\n    return range[i % range.length];\n  }\n\n  scale.domain = function(_) {\n    if (!arguments.length) return domain.slice();\n    domain = [], index = new d3_array__WEBPACK_IMPORTED_MODULE_0__.InternMap();\n    for (const value of _) {\n      if (index.has(value)) continue;\n      index.set(value, domain.push(value) - 1);\n    }\n    return scale;\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (range = Array.from(_), scale) : range.slice();\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.copy = function() {\n    return ordinal(domain, range).unknown(unknown);\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_1__.initRange.apply(scale, arguments);\n\n  return scale;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/ordinal.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"powish\": () => (/* binding */ powish),\n/* harmony export */   \"default\": () => (/* binding */ pow),\n/* harmony export */   \"sqrt\": () => (/* binding */ sqrt)\n/* harmony export */ });\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\nfunction transformPow(exponent) {\n  return function(x) {\n    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);\n  };\n}\n\nfunction transformSqrt(x) {\n  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);\n}\n\nfunction transformSquare(x) {\n  return x < 0 ? -x * x : x * x;\n}\n\nfunction powish(transform) {\n  var scale = transform(_continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity, _continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity),\n      exponent = 1;\n\n  function rescale() {\n    return exponent === 1 ? transform(_continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity, _continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity)\n        : exponent === 0.5 ? transform(transformSqrt, transformSquare)\n        : transform(transformPow(exponent), transformPow(1 / exponent));\n  }\n\n  scale.exponent = function(_) {\n    return arguments.length ? (exponent = +_, rescale()) : exponent;\n  };\n\n  return (0,_linear_js__WEBPACK_IMPORTED_MODULE_1__.linearish)(scale);\n}\n\nfunction pow() {\n  var scale = powish((0,_continuous_js__WEBPACK_IMPORTED_MODULE_0__.transformer)());\n\n  scale.copy = function() {\n    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_0__.copy)(scale, pow()).exponent(scale.exponent());\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_2__.initRange.apply(scale, arguments);\n\n  return scale;\n}\n\nfunction sqrt() {\n  return pow.apply(null, arguments).exponent(0.5);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/pow.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ quantile)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/quantile.js\");\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/bisect.js\");\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\nfunction quantile() {\n  var domain = [],\n      range = [],\n      thresholds = [],\n      unknown;\n\n  function rescale() {\n    var i = 0, n = Math.max(1, range.length);\n    thresholds = new Array(n - 1);\n    while (++i < n) thresholds[i - 1] = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.quantileSorted)(domain, i / n);\n    return scale;\n  }\n\n  function scale(x) {\n    return x == null || isNaN(x = +x) ? unknown : range[(0,d3_array__WEBPACK_IMPORTED_MODULE_1__.default)(thresholds, x)];\n  }\n\n  scale.invertExtent = function(y) {\n    var i = range.indexOf(y);\n    return i < 0 ? [NaN, NaN] : [\n      i > 0 ? thresholds[i - 1] : domain[0],\n      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]\n    ];\n  };\n\n  scale.domain = function(_) {\n    if (!arguments.length) return domain.slice();\n    domain = [];\n    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);\n    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_2__.default);\n    return rescale();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.quantiles = function() {\n    return thresholds.slice();\n  };\n\n  scale.copy = function() {\n    return quantile()\n        .domain(domain)\n        .range(range)\n        .unknown(unknown);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_3__.initRange.apply(scale, arguments);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/quantile.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ quantize)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/bisect.js\");\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\nfunction quantize() {\n  var x0 = 0,\n      x1 = 1,\n      n = 1,\n      domain = [0.5],\n      range = [0, 1],\n      unknown;\n\n  function scale(x) {\n    return x != null && x <= x ? range[(0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(domain, x, 0, n)] : unknown;\n  }\n\n  function rescale() {\n    var i = -1;\n    domain = new Array(n);\n    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);\n    return scale;\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();\n  };\n\n  scale.invertExtent = function(y) {\n    var i = range.indexOf(y);\n    return i < 0 ? [NaN, NaN]\n        : i < 1 ? [x0, domain[0]]\n        : i >= n ? [domain[n - 1], x1]\n        : [domain[i - 1], domain[i]];\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : scale;\n  };\n\n  scale.thresholds = function() {\n    return domain.slice();\n  };\n\n  scale.copy = function() {\n    return quantize()\n        .domain([x0, x1])\n        .range(range)\n        .unknown(unknown);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_1__.initRange.apply((0,_linear_js__WEBPACK_IMPORTED_MODULE_2__.linearish)(scale), arguments);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/quantize.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/radial.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/radial.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ radial)\n/* harmony export */ });\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-scale/src/number.js\");\n\n\n\n\n\nfunction square(x) {\n  return Math.sign(x) * x * x;\n}\n\nfunction unsquare(x) {\n  return Math.sign(x) * Math.sqrt(Math.abs(x));\n}\n\nfunction radial() {\n  var squared = (0,_continuous_js__WEBPACK_IMPORTED_MODULE_0__.default)(),\n      range = [0, 1],\n      round = false,\n      unknown;\n\n  function scale(x) {\n    var y = unsquare(squared(x));\n    return isNaN(y) ? unknown : round ? Math.round(y) : y;\n  }\n\n  scale.invert = function(y) {\n    return squared.invert(square(y));\n  };\n\n  scale.domain = function(_) {\n    return arguments.length ? (squared.domain(_), scale) : squared.domain();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (squared.range((range = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_1__.default)).map(square)), scale) : range.slice();\n  };\n\n  scale.rangeRound = function(_) {\n    return scale.range(_).round(true);\n  };\n\n  scale.round = function(_) {\n    return arguments.length ? (round = !!_, scale) : round;\n  };\n\n  scale.clamp = function(_) {\n    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.copy = function() {\n    return radial(squared.domain(), range)\n        .round(round)\n        .clamp(squared.clamp())\n        .unknown(unknown);\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_2__.initRange.apply(scale, arguments);\n\n  return (0,_linear_js__WEBPACK_IMPORTED_MODULE_3__.linearish)(scale);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/radial.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"copy\": () => (/* binding */ copy),\n/* harmony export */   \"default\": () => (/* binding */ sequential),\n/* harmony export */   \"sequentialLog\": () => (/* binding */ sequentialLog),\n/* harmony export */   \"sequentialSymlog\": () => (/* binding */ sequentialSymlog),\n/* harmony export */   \"sequentialPow\": () => (/* binding */ sequentialPow),\n/* harmony export */   \"sequentialSqrt\": () => (/* binding */ sequentialSqrt)\n/* harmony export */ });\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/value.js\");\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/round.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log.js */ \"./node_modules/d3-scale/src/log.js\");\n/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symlog.js */ \"./node_modules/d3-scale/src/symlog.js\");\n/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pow.js */ \"./node_modules/d3-scale/src/pow.js\");\n\n\n\n\n\n\n\n\nfunction transformer() {\n  var x0 = 0,\n      x1 = 1,\n      t0,\n      t1,\n      k10,\n      transform,\n      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity,\n      clamp = false,\n      unknown;\n\n  function scale(x) {\n    return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];\n  };\n\n  scale.clamp = function(_) {\n    return arguments.length ? (clamp = !!_, scale) : clamp;\n  };\n\n  scale.interpolator = function(_) {\n    return arguments.length ? (interpolator = _, scale) : interpolator;\n  };\n\n  function range(interpolate) {\n    return function(_) {\n      var r0, r1;\n      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];\n    };\n  }\n\n  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_1__.default);\n\n  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.default);\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  return function(t) {\n    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);\n    return scale;\n  };\n}\n\nfunction copy(source, target) {\n  return target\n      .domain(source.domain())\n      .interpolator(source.interpolator())\n      .clamp(source.clamp())\n      .unknown(source.unknown());\n}\n\nfunction sequential() {\n  var scale = (0,_linear_js__WEBPACK_IMPORTED_MODULE_3__.linearish)(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity));\n\n  scale.copy = function() {\n    return copy(scale, sequential());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_4__.initInterpolator.apply(scale, arguments);\n}\n\nfunction sequentialLog() {\n  var scale = (0,_log_js__WEBPACK_IMPORTED_MODULE_5__.loggish)(transformer()).domain([1, 10]);\n\n  scale.copy = function() {\n    return copy(scale, sequentialLog()).base(scale.base());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_4__.initInterpolator.apply(scale, arguments);\n}\n\nfunction sequentialSymlog() {\n  var scale = (0,_symlog_js__WEBPACK_IMPORTED_MODULE_6__.symlogish)(transformer());\n\n  scale.copy = function() {\n    return copy(scale, sequentialSymlog()).constant(scale.constant());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_4__.initInterpolator.apply(scale, arguments);\n}\n\nfunction sequentialPow() {\n  var scale = (0,_pow_js__WEBPACK_IMPORTED_MODULE_7__.powish)(transformer());\n\n  scale.copy = function() {\n    return copy(scale, sequentialPow()).exponent(scale.exponent());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_4__.initInterpolator.apply(scale, arguments);\n}\n\nfunction sequentialSqrt() {\n  return sequentialPow.apply(null, arguments).exponent(0.5);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/sequential.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/sequentialQuantile.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-scale/src/sequentialQuantile.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sequentialQuantile)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/bisect.js\");\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/quantile.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\nfunction sequentialQuantile() {\n  var domain = [],\n      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_0__.identity;\n\n  function scale(x) {\n    if (x != null && !isNaN(x = +x)) return interpolator(((0,d3_array__WEBPACK_IMPORTED_MODULE_1__.default)(domain, x, 1) - 1) / (domain.length - 1));\n  }\n\n  scale.domain = function(_) {\n    if (!arguments.length) return domain.slice();\n    domain = [];\n    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);\n    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_2__.default);\n    return scale;\n  };\n\n  scale.interpolator = function(_) {\n    return arguments.length ? (interpolator = _, scale) : interpolator;\n  };\n\n  scale.range = function() {\n    return domain.map((d, i) => interpolator(i / (domain.length - 1)));\n  };\n\n  scale.quantiles = function(n) {\n    return Array.from({length: n + 1}, (_, i) => (0,d3_array__WEBPACK_IMPORTED_MODULE_3__.default)(domain, i / n));\n  };\n\n  scale.copy = function() {\n    return sequentialQuantile(interpolator).domain(domain);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_4__.initInterpolator.apply(scale, arguments);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/sequentialQuantile.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/symlog.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/symlog.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"symlogish\": () => (/* binding */ symlogish),\n/* harmony export */   \"default\": () => (/* binding */ symlog)\n/* harmony export */ });\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\nfunction transformSymlog(c) {\n  return function(x) {\n    return Math.sign(x) * Math.log1p(Math.abs(x / c));\n  };\n}\n\nfunction transformSymexp(c) {\n  return function(x) {\n    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;\n  };\n}\n\nfunction symlogish(transform) {\n  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));\n\n  scale.constant = function(_) {\n    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;\n  };\n\n  return (0,_linear_js__WEBPACK_IMPORTED_MODULE_0__.linearish)(scale);\n}\n\nfunction symlog() {\n  var scale = symlogish((0,_continuous_js__WEBPACK_IMPORTED_MODULE_1__.transformer)());\n\n  scale.copy = function() {\n    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_1__.copy)(scale, symlog()).constant(scale.constant());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__.initRange.apply(scale, arguments);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/symlog.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ threshold)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/bisect.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\nfunction threshold() {\n  var domain = [0.5],\n      range = [0, 1],\n      unknown,\n      n = 1;\n\n  function scale(x) {\n    return x != null && x <= x ? range[(0,d3_array__WEBPACK_IMPORTED_MODULE_0__.default)(domain, x, 0, n)] : unknown;\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();\n  };\n\n  scale.invertExtent = function(y) {\n    var i = range.indexOf(y);\n    return [domain[i - 1], domain[i]];\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.copy = function() {\n    return threshold()\n        .domain(domain)\n        .range(range)\n        .unknown(unknown);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_1__.initRange.apply(scale, arguments);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/threshold.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tickFormat)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/ticks.js\");\n/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ \"./node_modules/d3-format/src/formatSpecifier.js\");\n/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-format */ \"./node_modules/d3-format/src/precisionPrefix.js\");\n/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-format */ \"./node_modules/d3-format/src/defaultLocale.js\");\n/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-format */ \"./node_modules/d3-format/src/precisionRound.js\");\n/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-format */ \"./node_modules/d3-format/src/precisionFixed.js\");\n\n\n\nfunction tickFormat(start, stop, count, specifier) {\n  var step = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__.tickStep)(start, stop, count),\n      precision;\n  specifier = (0,d3_format__WEBPACK_IMPORTED_MODULE_1__.default)(specifier == null ? \",f\" : specifier);\n  switch (specifier.type) {\n    case \"s\": {\n      var value = Math.max(Math.abs(start), Math.abs(stop));\n      if (specifier.precision == null && !isNaN(precision = (0,d3_format__WEBPACK_IMPORTED_MODULE_2__.default)(step, value))) specifier.precision = precision;\n      return (0,d3_format__WEBPACK_IMPORTED_MODULE_3__.formatPrefix)(specifier, value);\n    }\n    case \"\":\n    case \"e\":\n    case \"g\":\n    case \"p\":\n    case \"r\": {\n      if (specifier.precision == null && !isNaN(precision = (0,d3_format__WEBPACK_IMPORTED_MODULE_4__.default)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === \"e\");\n      break;\n    }\n    case \"f\":\n    case \"%\": {\n      if (specifier.precision == null && !isNaN(precision = (0,d3_format__WEBPACK_IMPORTED_MODULE_5__.default)(step))) specifier.precision = precision - (specifier.type === \"%\") * 2;\n      break;\n    }\n  }\n  return (0,d3_format__WEBPACK_IMPORTED_MODULE_3__.format)(specifier);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/tickFormat.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calendar\": () => (/* binding */ calendar),\n/* harmony export */   \"default\": () => (/* binding */ time)\n/* harmony export */ });\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/ticks.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/year.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/month.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/week.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/day.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/hour.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/minute.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/second.js\");\n/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-time-format */ \"./node_modules/d3-time-format/src/defaultLocale.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nice.js */ \"./node_modules/d3-scale/src/nice.js\");\n\n\n\n\n\n\nfunction date(t) {\n  return new Date(t);\n}\n\nfunction number(t) {\n  return t instanceof Date ? +t : +new Date(+t);\n}\n\nfunction calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {\n  var scale = (0,_continuous_js__WEBPACK_IMPORTED_MODULE_0__.default)(),\n      invert = scale.invert,\n      domain = scale.domain;\n\n  var formatMillisecond = format(\".%L\"),\n      formatSecond = format(\":%S\"),\n      formatMinute = format(\"%I:%M\"),\n      formatHour = format(\"%I %p\"),\n      formatDay = format(\"%a %d\"),\n      formatWeek = format(\"%b %d\"),\n      formatMonth = format(\"%B\"),\n      formatYear = format(\"%Y\");\n\n  function tickFormat(date) {\n    return (second(date) < date ? formatMillisecond\n        : minute(date) < date ? formatSecond\n        : hour(date) < date ? formatMinute\n        : day(date) < date ? formatHour\n        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)\n        : year(date) < date ? formatMonth\n        : formatYear)(date);\n  }\n\n  scale.invert = function(y) {\n    return new Date(invert(y));\n  };\n\n  scale.domain = function(_) {\n    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);\n  };\n\n  scale.ticks = function(interval) {\n    var d = domain();\n    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);\n  };\n\n  scale.tickFormat = function(count, specifier) {\n    return specifier == null ? tickFormat : format(specifier);\n  };\n\n  scale.nice = function(interval) {\n    var d = domain();\n    if (!interval || typeof interval.range !== \"function\") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);\n    return interval ? domain((0,_nice_js__WEBPACK_IMPORTED_MODULE_1__.default)(d, interval)) : scale;\n  };\n\n  scale.copy = function() {\n    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_0__.copy)(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));\n  };\n\n  return scale;\n}\n\nfunction time() {\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__.initRange.apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_3__.timeTicks, d3_time__WEBPACK_IMPORTED_MODULE_3__.timeTickInterval, d3_time__WEBPACK_IMPORTED_MODULE_4__.default, d3_time__WEBPACK_IMPORTED_MODULE_5__.default, d3_time__WEBPACK_IMPORTED_MODULE_6__.sunday, d3_time__WEBPACK_IMPORTED_MODULE_7__.default, d3_time__WEBPACK_IMPORTED_MODULE_8__.default, d3_time__WEBPACK_IMPORTED_MODULE_9__.default, d3_time__WEBPACK_IMPORTED_MODULE_10__.default, d3_time_format__WEBPACK_IMPORTED_MODULE_11__.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/time.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ utcTime)\n/* harmony export */ });\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/ticks.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/utcYear.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/utcMonth.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/utcWeek.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/utcDay.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/utcHour.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/utcMinute.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/second.js\");\n/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-time-format */ \"./node_modules/d3-time-format/src/defaultLocale.js\");\n/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.js */ \"./node_modules/d3-scale/src/time.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\n\nfunction utcTime() {\n  return _init_js__WEBPACK_IMPORTED_MODULE_0__.initRange.apply((0,_time_js__WEBPACK_IMPORTED_MODULE_1__.calendar)(d3_time__WEBPACK_IMPORTED_MODULE_2__.utcTicks, d3_time__WEBPACK_IMPORTED_MODULE_2__.utcTickInterval, d3_time__WEBPACK_IMPORTED_MODULE_3__.default, d3_time__WEBPACK_IMPORTED_MODULE_4__.default, d3_time__WEBPACK_IMPORTED_MODULE_5__.utcSunday, d3_time__WEBPACK_IMPORTED_MODULE_6__.default, d3_time__WEBPACK_IMPORTED_MODULE_7__.default, d3_time__WEBPACK_IMPORTED_MODULE_8__.default, d3_time__WEBPACK_IMPORTED_MODULE_9__.default, d3_time_format__WEBPACK_IMPORTED_MODULE_10__.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-scale/src/utcTime.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/array.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ array)\n/* harmony export */ });\n// Given something array like (or null), returns something that is strictly an\n// array. This is used to ensure that array-like objects passed to d3.selectAll\n// or selection.selectAll are converted into proper arrays when creating a\n// selection; we don’t ever want to create a selection backed by a live\n// HTMLCollection or NodeList. However, note that selection.selectAll will use a\n// static NodeList as a group, since it safely derived from querySelectorAll.\nfunction array(x) {\n  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/array.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {\n  return function() {\n    return x;\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/create.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator.js */ \"./node_modules/d3-selection/src/creator.js\");\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ \"./node_modules/d3-selection/src/select.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {\n  return (0,_select_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_creator_js__WEBPACK_IMPORTED_MODULE_1__.default)(name).call(document.documentElement));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/create.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespace.js */ \"./node_modules/d3-selection/src/namespace.js\");\n/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ \"./node_modules/d3-selection/src/namespaces.js\");\n\n\n\nfunction creatorInherit(name) {\n  return function() {\n    var document = this.ownerDocument,\n        uri = this.namespaceURI;\n    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml\n        ? document.createElement(name)\n        : document.createElementNS(uri, name);\n  };\n}\n\nfunction creatorFixed(fullname) {\n  return function() {\n    return this.ownerDocument.createElementNS(fullname.space, fullname.local);\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {\n  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default)(name);\n  return (fullname.local\n      ? creatorFixed\n      : creatorInherit)(fullname);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/creator.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* reexport safe */ _create_js__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"creator\": () => (/* reexport safe */ _creator_js__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"local\": () => (/* reexport safe */ _local_js__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"matcher\": () => (/* reexport safe */ _matcher_js__WEBPACK_IMPORTED_MODULE_3__.default),\n/* harmony export */   \"namespace\": () => (/* reexport safe */ _namespace_js__WEBPACK_IMPORTED_MODULE_4__.default),\n/* harmony export */   \"namespaces\": () => (/* reexport safe */ _namespaces_js__WEBPACK_IMPORTED_MODULE_5__.default),\n/* harmony export */   \"pointer\": () => (/* reexport safe */ _pointer_js__WEBPACK_IMPORTED_MODULE_6__.default),\n/* harmony export */   \"pointers\": () => (/* reexport safe */ _pointers_js__WEBPACK_IMPORTED_MODULE_7__.default),\n/* harmony export */   \"select\": () => (/* reexport safe */ _select_js__WEBPACK_IMPORTED_MODULE_8__.default),\n/* harmony export */   \"selectAll\": () => (/* reexport safe */ _selectAll_js__WEBPACK_IMPORTED_MODULE_9__.default),\n/* harmony export */   \"selection\": () => (/* reexport safe */ _selection_index_js__WEBPACK_IMPORTED_MODULE_10__.default),\n/* harmony export */   \"selector\": () => (/* reexport safe */ _selector_js__WEBPACK_IMPORTED_MODULE_11__.default),\n/* harmony export */   \"selectorAll\": () => (/* reexport safe */ _selectorAll_js__WEBPACK_IMPORTED_MODULE_12__.default),\n/* harmony export */   \"style\": () => (/* reexport safe */ _selection_style_js__WEBPACK_IMPORTED_MODULE_13__.styleValue),\n/* harmony export */   \"window\": () => (/* reexport safe */ _window_js__WEBPACK_IMPORTED_MODULE_14__.default)\n/* harmony export */ });\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ \"./node_modules/d3-selection/src/create.js\");\n/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator.js */ \"./node_modules/d3-selection/src/creator.js\");\n/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.js */ \"./node_modules/d3-selection/src/local.js\");\n/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher.js */ \"./node_modules/d3-selection/src/matcher.js\");\n/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./namespace.js */ \"./node_modules/d3-selection/src/namespace.js\");\n/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespaces.js */ \"./node_modules/d3-selection/src/namespaces.js\");\n/* harmony import */ var _pointer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointer.js */ \"./node_modules/d3-selection/src/pointer.js\");\n/* harmony import */ var _pointers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pointers.js */ \"./node_modules/d3-selection/src/pointers.js\");\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select.js */ \"./node_modules/d3-selection/src/select.js\");\n/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll.js */ \"./node_modules/d3-selection/src/selectAll.js\");\n/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector.js */ \"./node_modules/d3-selection/src/selector.js\");\n/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll.js */ \"./node_modules/d3-selection/src/selectorAll.js\");\n/* harmony import */ var _selection_style_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style.js */ \"./node_modules/d3-selection/src/selection/style.js\");\n/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./window.js */ \"./node_modules/d3-selection/src/window.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/local.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ local)\n/* harmony export */ });\nvar nextId = 0;\n\nfunction local() {\n  return new Local;\n}\n\nfunction Local() {\n  this._ = \"@\" + (++nextId).toString(36);\n}\n\nLocal.prototype = local.prototype = {\n  constructor: Local,\n  get: function(node) {\n    var id = this._;\n    while (!(id in node)) if (!(node = node.parentNode)) return;\n    return node[id];\n  },\n  set: function(node, value) {\n    return node[this._] = value;\n  },\n  remove: function(node) {\n    return this._ in node && delete node[this._];\n  },\n  toString: function() {\n    return this._;\n  }\n};\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/local.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"childMatcher\": () => (/* binding */ childMatcher)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {\n  return function() {\n    return this.matches(selector);\n  };\n}\n\nfunction childMatcher(selector) {\n  return function(node) {\n    return node.matches(selector);\n  };\n}\n\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/matcher.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ \"./node_modules/d3-selection/src/namespaces.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {\n  var prefix = name += \"\", i = prefix.indexOf(\":\");\n  if (i >= 0 && (prefix = name.slice(0, i)) !== \"xmlns\") name = name.slice(i + 1);\n  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.default.hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.default[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/namespace.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"xhtml\": () => (/* binding */ xhtml),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar xhtml = \"http://www.w3.org/1999/xhtml\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  svg: \"http://www.w3.org/2000/svg\",\n  xhtml: xhtml,\n  xlink: \"http://www.w3.org/1999/xlink\",\n  xml: \"http://www.w3.org/XML/1998/namespace\",\n  xmlns: \"http://www.w3.org/2000/xmlns/\"\n});\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/namespaces.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/pointer.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/pointer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent.js */ \"./node_modules/d3-selection/src/sourceEvent.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event, node) {\n  event = (0,_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__.default)(event);\n  if (node === undefined) node = event.currentTarget;\n  if (node) {\n    var svg = node.ownerSVGElement || node;\n    if (svg.createSVGPoint) {\n      var point = svg.createSVGPoint();\n      point.x = event.clientX, point.y = event.clientY;\n      point = point.matrixTransform(node.getScreenCTM().inverse());\n      return [point.x, point.y];\n    }\n    if (node.getBoundingClientRect) {\n      var rect = node.getBoundingClientRect();\n      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];\n    }\n  }\n  return [event.pageX, event.pageY];\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/pointer.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/pointers.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/pointers.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pointer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointer.js */ \"./node_modules/d3-selection/src/pointer.js\");\n/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent.js */ \"./node_modules/d3-selection/src/sourceEvent.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(events, node) {\n  if (events.target) { // i.e., instanceof Event, not TouchList or iterable\n    events = (0,_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__.default)(events);\n    if (node === undefined) node = events.currentTarget;\n    events = events.touches || [events];\n  }\n  return Array.from(events, event => (0,_pointer_js__WEBPACK_IMPORTED_MODULE_1__.default)(event, node));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/pointers.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {\n  return typeof selector === \"string\"\n      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[document.querySelector(selector)]], [document.documentElement])\n      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.root);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/select.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selectAll.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ \"./node_modules/d3-selection/src/array.js\");\n/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {\n  return typeof selector === \"string\"\n      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([document.querySelectorAll(selector)], [document.documentElement])\n      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([(0,_array_js__WEBPACK_IMPORTED_MODULE_1__.default)(selector)], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.root);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selectAll.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ \"./node_modules/d3-selection/src/creator.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {\n  var create = typeof name === \"function\" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.default)(name);\n  return this.select(function() {\n    return this.appendChild(create.apply(this, arguments));\n  });\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/append.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace.js */ \"./node_modules/d3-selection/src/namespace.js\");\n\n\nfunction attrRemove(name) {\n  return function() {\n    this.removeAttribute(name);\n  };\n}\n\nfunction attrRemoveNS(fullname) {\n  return function() {\n    this.removeAttributeNS(fullname.space, fullname.local);\n  };\n}\n\nfunction attrConstant(name, value) {\n  return function() {\n    this.setAttribute(name, value);\n  };\n}\n\nfunction attrConstantNS(fullname, value) {\n  return function() {\n    this.setAttributeNS(fullname.space, fullname.local, value);\n  };\n}\n\nfunction attrFunction(name, value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    if (v == null) this.removeAttribute(name);\n    else this.setAttribute(name, v);\n  };\n}\n\nfunction attrFunctionNS(fullname, value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);\n    else this.setAttributeNS(fullname.space, fullname.local, v);\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {\n  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default)(name);\n\n  if (arguments.length < 2) {\n    var node = this.node();\n    return fullname.local\n        ? node.getAttributeNS(fullname.space, fullname.local)\n        : node.getAttribute(fullname);\n  }\n\n  return this.each((value == null\n      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === \"function\"\n      ? (fullname.local ? attrFunctionNS : attrFunction)\n      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/attr.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var callback = arguments[0];\n  arguments[0] = this;\n  callback.apply(null, arguments);\n  return this;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/call.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction classArray(string) {\n  return string.trim().split(/^|\\s+/);\n}\n\nfunction classList(node) {\n  return node.classList || new ClassList(node);\n}\n\nfunction ClassList(node) {\n  this._node = node;\n  this._names = classArray(node.getAttribute(\"class\") || \"\");\n}\n\nClassList.prototype = {\n  add: function(name) {\n    var i = this._names.indexOf(name);\n    if (i < 0) {\n      this._names.push(name);\n      this._node.setAttribute(\"class\", this._names.join(\" \"));\n    }\n  },\n  remove: function(name) {\n    var i = this._names.indexOf(name);\n    if (i >= 0) {\n      this._names.splice(i, 1);\n      this._node.setAttribute(\"class\", this._names.join(\" \"));\n    }\n  },\n  contains: function(name) {\n    return this._names.indexOf(name) >= 0;\n  }\n};\n\nfunction classedAdd(node, names) {\n  var list = classList(node), i = -1, n = names.length;\n  while (++i < n) list.add(names[i]);\n}\n\nfunction classedRemove(node, names) {\n  var list = classList(node), i = -1, n = names.length;\n  while (++i < n) list.remove(names[i]);\n}\n\nfunction classedTrue(names) {\n  return function() {\n    classedAdd(this, names);\n  };\n}\n\nfunction classedFalse(names) {\n  return function() {\n    classedRemove(this, names);\n  };\n}\n\nfunction classedFunction(names, value) {\n  return function() {\n    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {\n  var names = classArray(name + \"\");\n\n  if (arguments.length < 2) {\n    var list = classList(this.node()), i = -1, n = names.length;\n    while (++i < n) if (!list.contains(names[i])) return false;\n    return true;\n  }\n\n  return this.each((typeof value === \"function\"\n      ? classedFunction : value\n      ? classedTrue\n      : classedFalse)(names, value));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/classed.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction selection_cloneShallow() {\n  var clone = this.cloneNode(false), parent = this.parentNode;\n  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;\n}\n\nfunction selection_cloneDeep() {\n  var clone = this.cloneNode(true), parent = this.parentNode;\n  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {\n  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/clone.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter.js */ \"./node_modules/d3-selection/src/selection/enter.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant.js */ \"./node_modules/d3-selection/src/constant.js\");\n\n\n\n\nfunction bindIndex(parent, group, enter, update, exit, data) {\n  var i = 0,\n      node,\n      groupLength = group.length,\n      dataLength = data.length;\n\n  // Put any non-null nodes that fit into update.\n  // Put any null nodes into enter.\n  // Put any remaining data into enter.\n  for (; i < dataLength; ++i) {\n    if (node = group[i]) {\n      node.__data__ = data[i];\n      update[i] = node;\n    } else {\n      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);\n    }\n  }\n\n  // Put any non-null nodes that don’t fit into exit.\n  for (; i < groupLength; ++i) {\n    if (node = group[i]) {\n      exit[i] = node;\n    }\n  }\n}\n\nfunction bindKey(parent, group, enter, update, exit, data, key) {\n  var i,\n      node,\n      nodeByKeyValue = new Map,\n      groupLength = group.length,\n      dataLength = data.length,\n      keyValues = new Array(groupLength),\n      keyValue;\n\n  // Compute the key for each node.\n  // If multiple nodes have the same key, the duplicates are added to exit.\n  for (i = 0; i < groupLength; ++i) {\n    if (node = group[i]) {\n      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + \"\";\n      if (nodeByKeyValue.has(keyValue)) {\n        exit[i] = node;\n      } else {\n        nodeByKeyValue.set(keyValue, node);\n      }\n    }\n  }\n\n  // Compute the key for each datum.\n  // If there a node associated with this key, join and add it to update.\n  // If there is not (or the key is a duplicate), add it to enter.\n  for (i = 0; i < dataLength; ++i) {\n    keyValue = key.call(parent, data[i], i, data) + \"\";\n    if (node = nodeByKeyValue.get(keyValue)) {\n      update[i] = node;\n      node.__data__ = data[i];\n      nodeByKeyValue.delete(keyValue);\n    } else {\n      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);\n    }\n  }\n\n  // Add any remaining nodes that were not bound to data to exit.\n  for (i = 0; i < groupLength; ++i) {\n    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {\n      exit[i] = node;\n    }\n  }\n}\n\nfunction datum(node) {\n  return node.__data__;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {\n  if (!arguments.length) return Array.from(this, datum);\n\n  var bind = key ? bindKey : bindIndex,\n      parents = this._parents,\n      groups = this._groups;\n\n  if (typeof value !== \"function\") value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__.default)(value);\n\n  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {\n    var parent = parents[j],\n        group = groups[j],\n        groupLength = group.length,\n        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),\n        dataLength = data.length,\n        enterGroup = enter[j] = new Array(dataLength),\n        updateGroup = update[j] = new Array(dataLength),\n        exitGroup = exit[j] = new Array(groupLength);\n\n    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);\n\n    // Now connect the enter nodes to their following update node, such that\n    // appendChild can insert the materialized enter node before this node,\n    // rather than at the end of the parent node.\n    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {\n      if (previous = enterGroup[i0]) {\n        if (i0 >= i1) i1 = i0 + 1;\n        while (!(next = updateGroup[i1]) && ++i1 < dataLength);\n        previous._next = next || null;\n      }\n    }\n  }\n\n  update = new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(update, parents);\n  update._enter = enter;\n  update._exit = exit;\n  return update;\n}\n\n// Given some data, this returns an array-like view of it: an object that\n// exposes a length property and allows numeric indexing. Note that unlike\n// selectAll, this isn’t worried about “live” collections because the resulting\n// array will only be used briefly while data is being bound. (It is possible to\n// cause the data to change while iterating by using a key function, but please\n// don’t; we’d rather avoid a gratuitous copy.)\nfunction arraylike(data) {\n  return typeof data === \"object\" && \"length\" in data\n    ? data // Array, TypedArray, NodeList, array-like\n    : Array.from(data); // Map, Set, iterable, string, or anything else\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/data.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {\n  return arguments.length\n      ? this.property(\"__data__\", value)\n      : this.node().__data__;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/datum.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ \"./node_modules/d3-selection/src/window.js\");\n\n\nfunction dispatchEvent(node, type, params) {\n  var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__.default)(node),\n      event = window.CustomEvent;\n\n  if (typeof event === \"function\") {\n    event = new event(type, params);\n  } else {\n    event = window.document.createEvent(\"Event\");\n    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;\n    else event.initEvent(type, false, false);\n  }\n\n  node.dispatchEvent(event);\n}\n\nfunction dispatchConstant(type, params) {\n  return function() {\n    return dispatchEvent(this, type, params);\n  };\n}\n\nfunction dispatchFunction(type, params) {\n  return function() {\n    return dispatchEvent(this, type, params.apply(this, arguments));\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {\n  return this.each((typeof params === \"function\"\n      ? dispatchFunction\n      : dispatchConstant)(type, params));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/dispatch.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {\n\n  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {\n    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {\n      if (node = group[i]) callback.call(node, node.__data__, i, group);\n    }\n  }\n\n  return this;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/each.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return !this.node();\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/empty.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"EnterNode\": () => (/* binding */ EnterNode)\n/* harmony export */ });\n/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ \"./node_modules/d3-selection/src/selection/sparse.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__.default), this._parents);\n}\n\nfunction EnterNode(parent, datum) {\n  this.ownerDocument = parent.ownerDocument;\n  this.namespaceURI = parent.namespaceURI;\n  this._next = null;\n  this._parent = parent;\n  this.__data__ = datum;\n}\n\nEnterNode.prototype = {\n  constructor: EnterNode,\n  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },\n  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },\n  querySelector: function(selector) { return this._parent.querySelector(selector); },\n  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }\n};\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/enter.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ \"./node_modules/d3-selection/src/selection/sparse.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__.default), this._parents);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/exit.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ \"./node_modules/d3-selection/src/matcher.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {\n  if (typeof match !== \"function\") match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.default)(match);\n\n  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {\n      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {\n        subgroup.push(node);\n      }\n    }\n  }\n\n  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/filter.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction htmlRemove() {\n  this.innerHTML = \"\";\n}\n\nfunction htmlConstant(value) {\n  return function() {\n    this.innerHTML = value;\n  };\n}\n\nfunction htmlFunction(value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    this.innerHTML = v == null ? \"\" : v;\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {\n  return arguments.length\n      ? this.each(value == null\n          ? htmlRemove : (typeof value === \"function\"\n          ? htmlFunction\n          : htmlConstant)(value))\n      : this.node().innerHTML;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/html.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"root\": () => (/* binding */ root),\n/* harmony export */   \"Selection\": () => (/* binding */ Selection),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ \"./node_modules/d3-selection/src/selection/select.js\");\n/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll.js */ \"./node_modules/d3-selection/src/selection/selectAll.js\");\n/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectChild.js */ \"./node_modules/d3-selection/src/selection/selectChild.js\");\n/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectChildren.js */ \"./node_modules/d3-selection/src/selection/selectChildren.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.js */ \"./node_modules/d3-selection/src/selection/filter.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ \"./node_modules/d3-selection/src/selection/data.js\");\n/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter.js */ \"./node_modules/d3-selection/src/selection/enter.js\");\n/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exit.js */ \"./node_modules/d3-selection/src/selection/exit.js\");\n/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join.js */ \"./node_modules/d3-selection/src/selection/join.js\");\n/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./merge.js */ \"./node_modules/d3-selection/src/selection/merge.js\");\n/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order.js */ \"./node_modules/d3-selection/src/selection/order.js\");\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort.js */ \"./node_modules/d3-selection/src/selection/sort.js\");\n/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./call.js */ \"./node_modules/d3-selection/src/selection/call.js\");\n/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes.js */ \"./node_modules/d3-selection/src/selection/nodes.js\");\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node.js */ \"./node_modules/d3-selection/src/selection/node.js\");\n/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./size.js */ \"./node_modules/d3-selection/src/selection/size.js\");\n/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./empty.js */ \"./node_modules/d3-selection/src/selection/empty.js\");\n/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./each.js */ \"./node_modules/d3-selection/src/selection/each.js\");\n/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./attr.js */ \"./node_modules/d3-selection/src/selection/attr.js\");\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style.js */ \"./node_modules/d3-selection/src/selection/style.js\");\n/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./property.js */ \"./node_modules/d3-selection/src/selection/property.js\");\n/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./classed.js */ \"./node_modules/d3-selection/src/selection/classed.js\");\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./text.js */ \"./node_modules/d3-selection/src/selection/text.js\");\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./html.js */ \"./node_modules/d3-selection/src/selection/html.js\");\n/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./raise.js */ \"./node_modules/d3-selection/src/selection/raise.js\");\n/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lower.js */ \"./node_modules/d3-selection/src/selection/lower.js\");\n/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./append.js */ \"./node_modules/d3-selection/src/selection/append.js\");\n/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./insert.js */ \"./node_modules/d3-selection/src/selection/insert.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./remove.js */ \"./node_modules/d3-selection/src/selection/remove.js\");\n/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./clone.js */ \"./node_modules/d3-selection/src/selection/clone.js\");\n/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./datum.js */ \"./node_modules/d3-selection/src/selection/datum.js\");\n/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./on.js */ \"./node_modules/d3-selection/src/selection/on.js\");\n/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dispatch.js */ \"./node_modules/d3-selection/src/selection/dispatch.js\");\n/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./iterator.js */ \"./node_modules/d3-selection/src/selection/iterator.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar root = [null];\n\nfunction Selection(groups, parents) {\n  this._groups = groups;\n  this._parents = parents;\n}\n\nfunction selection() {\n  return new Selection([[document.documentElement]], root);\n}\n\nfunction selection_selection() {\n  return this;\n}\n\nSelection.prototype = selection.prototype = {\n  constructor: Selection,\n  select: _select_js__WEBPACK_IMPORTED_MODULE_0__.default,\n  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__.default,\n  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__.default,\n  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__.default,\n  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__.default,\n  data: _data_js__WEBPACK_IMPORTED_MODULE_5__.default,\n  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__.default,\n  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__.default,\n  join: _join_js__WEBPACK_IMPORTED_MODULE_8__.default,\n  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__.default,\n  selection: selection_selection,\n  order: _order_js__WEBPACK_IMPORTED_MODULE_10__.default,\n  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__.default,\n  call: _call_js__WEBPACK_IMPORTED_MODULE_12__.default,\n  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__.default,\n  node: _node_js__WEBPACK_IMPORTED_MODULE_14__.default,\n  size: _size_js__WEBPACK_IMPORTED_MODULE_15__.default,\n  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__.default,\n  each: _each_js__WEBPACK_IMPORTED_MODULE_17__.default,\n  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__.default,\n  style: _style_js__WEBPACK_IMPORTED_MODULE_19__.default,\n  property: _property_js__WEBPACK_IMPORTED_MODULE_20__.default,\n  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__.default,\n  text: _text_js__WEBPACK_IMPORTED_MODULE_22__.default,\n  html: _html_js__WEBPACK_IMPORTED_MODULE_23__.default,\n  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__.default,\n  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__.default,\n  append: _append_js__WEBPACK_IMPORTED_MODULE_26__.default,\n  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__.default,\n  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__.default,\n  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__.default,\n  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__.default,\n  on: _on_js__WEBPACK_IMPORTED_MODULE_31__.default,\n  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__.default,\n  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__.default\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/index.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ \"./node_modules/d3-selection/src/creator.js\");\n/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector.js */ \"./node_modules/d3-selection/src/selector.js\");\n\n\n\nfunction constantNull() {\n  return null;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {\n  var create = typeof name === \"function\" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__.default)(name),\n      select = before == null ? constantNull : typeof before === \"function\" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__.default)(before);\n  return this.select(function() {\n    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);\n  });\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/insert.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {\n  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {\n    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {\n      if (node = group[i]) yield node;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/iterator.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {\n  var enter = this.enter(), update = this, exit = this.exit();\n  if (typeof onenter === \"function\") {\n    enter = onenter(enter);\n    if (enter) enter = enter.selection();\n  } else {\n    enter = enter.append(onenter + \"\");\n  }\n  if (onupdate != null) {\n    update = onupdate(update);\n    if (update) update = update.selection();\n  }\n  if (onexit == null) exit.remove(); else onexit(exit);\n  return enter && update ? enter.merge(update).order() : update;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/join.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction lower() {\n  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return this.each(lower);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/lower.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {\n  var selection = context.selection ? context.selection() : context;\n\n  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {\n    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {\n      if (node = group0[i] || group1[i]) {\n        merge[i] = node;\n      }\n    }\n  }\n\n  for (; j < m0; ++j) {\n    merges[j] = groups0[j];\n  }\n\n  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(merges, this._parents);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/merge.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n\n  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {\n    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {\n      var node = group[i];\n      if (node) return node;\n    }\n  }\n\n  return null;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/node.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return Array.from(this);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/nodes.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contextListener(listener) {\n  return function(event) {\n    listener.call(this, event, this.__data__);\n  };\n}\n\nfunction parseTypenames(typenames) {\n  return typenames.trim().split(/^|\\s+/).map(function(t) {\n    var name = \"\", i = t.indexOf(\".\");\n    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);\n    return {type: t, name: name};\n  });\n}\n\nfunction onRemove(typename) {\n  return function() {\n    var on = this.__on;\n    if (!on) return;\n    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {\n      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {\n        this.removeEventListener(o.type, o.listener, o.options);\n      } else {\n        on[++i] = o;\n      }\n    }\n    if (++i) on.length = i;\n    else delete this.__on;\n  };\n}\n\nfunction onAdd(typename, value, options) {\n  return function() {\n    var on = this.__on, o, listener = contextListener(value);\n    if (on) for (var j = 0, m = on.length; j < m; ++j) {\n      if ((o = on[j]).type === typename.type && o.name === typename.name) {\n        this.removeEventListener(o.type, o.listener, o.options);\n        this.addEventListener(o.type, o.listener = listener, o.options = options);\n        o.value = value;\n        return;\n      }\n    }\n    this.addEventListener(typename.type, listener, options);\n    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};\n    if (!on) this.__on = [o];\n    else on.push(o);\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {\n  var typenames = parseTypenames(typename + \"\"), i, n = typenames.length, t;\n\n  if (arguments.length < 2) {\n    var on = this.node().__on;\n    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {\n      for (i = 0, o = on[j]; i < n; ++i) {\n        if ((t = typenames[i]).type === o.type && t.name === o.name) {\n          return o.value;\n        }\n      }\n    }\n    return;\n  }\n\n  on = value ? onAdd : onRemove;\n  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));\n  return this;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/on.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n\n  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {\n    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {\n      if (node = group[i]) {\n        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);\n        next = node;\n      }\n    }\n  }\n\n  return this;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/order.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction propertyRemove(name) {\n  return function() {\n    delete this[name];\n  };\n}\n\nfunction propertyConstant(name, value) {\n  return function() {\n    this[name] = value;\n  };\n}\n\nfunction propertyFunction(name, value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    if (v == null) delete this[name];\n    else this[name] = v;\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {\n  return arguments.length > 1\n      ? this.each((value == null\n          ? propertyRemove : typeof value === \"function\"\n          ? propertyFunction\n          : propertyConstant)(name, value))\n      : this.node()[name];\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/property.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction raise() {\n  if (this.nextSibling) this.parentNode.appendChild(this);\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return this.each(raise);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/raise.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction remove() {\n  var parent = this.parentNode;\n  if (parent) parent.removeChild(this);\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return this.each(remove);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/remove.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selector.js */ \"./node_modules/d3-selection/src/selector.js\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {\n  if (typeof select !== \"function\") select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__.default)(select);\n\n  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {\n      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {\n        if (\"__data__\" in node) subnode.__data__ = node.__data__;\n        subgroup[i] = subnode;\n      }\n    }\n  }\n\n  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/select.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ \"./node_modules/d3-selection/src/array.js\");\n/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll.js */ \"./node_modules/d3-selection/src/selectorAll.js\");\n\n\n\n\nfunction arrayAll(select) {\n  return function() {\n    return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.default)(select.apply(this, arguments));\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {\n  if (typeof select === \"function\") select = arrayAll(select);\n  else select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__.default)(select);\n\n  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {\n      if (node = group[i]) {\n        subgroups.push(select.call(node, node.__data__, i, group));\n        parents.push(node);\n      }\n    }\n  }\n\n  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(subgroups, parents);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/selectAll.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChild.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChild.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ \"./node_modules/d3-selection/src/matcher.js\");\n\n\nvar find = Array.prototype.find;\n\nfunction childFind(match) {\n  return function() {\n    return find.call(this.children, match);\n  };\n}\n\nfunction childFirst() {\n  return this.firstElementChild;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {\n  return this.select(match == null ? childFirst\n      : childFind(typeof match === \"function\" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/selectChild.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChildren.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChildren.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ \"./node_modules/d3-selection/src/matcher.js\");\n\n\nvar filter = Array.prototype.filter;\n\nfunction children() {\n  return Array.from(this.children);\n}\n\nfunction childrenFilter(match) {\n  return function() {\n    return filter.call(this.children, match);\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {\n  return this.selectAll(match == null ? children\n      : childrenFilter(typeof match === \"function\" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/selectChildren.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  let size = 0;\n  for (const node of this) ++size; // eslint-disable-line no-unused-vars\n  return size;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/size.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./node_modules/d3-selection/src/selection/index.js\");\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {\n  if (!compare) compare = ascending;\n\n  function compareNode(a, b) {\n    return a && b ? compare(a.__data__, b.__data__) : !a - !b;\n  }\n\n  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {\n    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {\n      if (node = group[i]) {\n        sortgroup[i] = node;\n      }\n    }\n    sortgroup.sort(compareNode);\n  }\n\n  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(sortgroups, this._parents).order();\n}\n\nfunction ascending(a, b) {\n  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/sort.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {\n  return new Array(update.length);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/sparse.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"styleValue\": () => (/* binding */ styleValue)\n/* harmony export */ });\n/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ \"./node_modules/d3-selection/src/window.js\");\n\n\nfunction styleRemove(name) {\n  return function() {\n    this.style.removeProperty(name);\n  };\n}\n\nfunction styleConstant(name, value, priority) {\n  return function() {\n    this.style.setProperty(name, value, priority);\n  };\n}\n\nfunction styleFunction(name, value, priority) {\n  return function() {\n    var v = value.apply(this, arguments);\n    if (v == null) this.style.removeProperty(name);\n    else this.style.setProperty(name, v, priority);\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {\n  return arguments.length > 1\n      ? this.each((value == null\n            ? styleRemove : typeof value === \"function\"\n            ? styleFunction\n            : styleConstant)(name, value, priority == null ? \"\" : priority))\n      : styleValue(this.node(), name);\n}\n\nfunction styleValue(node, name) {\n  return node.style.getPropertyValue(name)\n      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).getComputedStyle(node, null).getPropertyValue(name);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/style.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction textRemove() {\n  this.textContent = \"\";\n}\n\nfunction textConstant(value) {\n  return function() {\n    this.textContent = value;\n  };\n}\n\nfunction textFunction(value) {\n  return function() {\n    var v = value.apply(this, arguments);\n    this.textContent = v == null ? \"\" : v;\n  };\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {\n  return arguments.length\n      ? this.each(value == null\n          ? textRemove : (typeof value === \"function\"\n          ? textFunction\n          : textConstant)(value))\n      : this.node().textContent;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selection/text.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction none() {}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {\n  return selector == null ? none : function() {\n    return this.querySelector(selector);\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selector.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction empty() {\n  return [];\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {\n  return selector == null ? empty : function() {\n    return this.querySelectorAll(selector);\n  };\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/selectorAll.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {\n  let sourceEvent;\n  while (sourceEvent = event.sourceEvent) event = sourceEvent;\n  return event;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/sourceEvent.js?");

/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {\n  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node\n      || (node.document && node) // node is a Window\n      || node.defaultView; // node is a Document\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-selection/src/window.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-time-format/src/defaultLocale.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeFormat\": () => (/* binding */ timeFormat),\n/* harmony export */   \"timeParse\": () => (/* binding */ timeParse),\n/* harmony export */   \"utcFormat\": () => (/* binding */ utcFormat),\n/* harmony export */   \"utcParse\": () => (/* binding */ utcParse),\n/* harmony export */   \"default\": () => (/* binding */ defaultLocale)\n/* harmony export */ });\n/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ \"./node_modules/d3-time-format/src/locale.js\");\n\n\nvar locale;\nvar timeFormat;\nvar timeParse;\nvar utcFormat;\nvar utcParse;\n\ndefaultLocale({\n  dateTime: \"%x, %X\",\n  date: \"%-m/%-d/%Y\",\n  time: \"%-I:%M:%S %p\",\n  periods: [\"AM\", \"PM\"],\n  days: [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n  shortDays: [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"],\n  months: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n  shortMonths: [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"]\n});\n\nfunction defaultLocale(definition) {\n  locale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.default)(definition);\n  timeFormat = locale.format;\n  timeParse = locale.parse;\n  utcFormat = locale.utcFormat;\n  utcParse = locale.utcParse;\n  return locale;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time-format/src/defaultLocale.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-time-format/src/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeFormatDefaultLocale\": () => (/* reexport safe */ _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"timeFormat\": () => (/* reexport safe */ _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.timeFormat),\n/* harmony export */   \"timeParse\": () => (/* reexport safe */ _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.timeParse),\n/* harmony export */   \"utcFormat\": () => (/* reexport safe */ _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.utcFormat),\n/* harmony export */   \"utcParse\": () => (/* reexport safe */ _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.utcParse),\n/* harmony export */   \"timeFormatLocale\": () => (/* reexport safe */ _locale_js__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"isoFormat\": () => (/* reexport safe */ _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"isoParse\": () => (/* reexport safe */ _isoParse_js__WEBPACK_IMPORTED_MODULE_3__.default)\n/* harmony export */ });\n/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ \"./node_modules/d3-time-format/src/defaultLocale.js\");\n/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ \"./node_modules/d3-time-format/src/locale.js\");\n/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isoFormat.js */ \"./node_modules/d3-time-format/src/isoFormat.js\");\n/* harmony import */ var _isoParse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isoParse.js */ \"./node_modules/d3-time-format/src/isoParse.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time-format/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoFormat.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isoSpecifier\": () => (/* binding */ isoSpecifier),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ \"./node_modules/d3-time-format/src/defaultLocale.js\");\n\n\nvar isoSpecifier = \"%Y-%m-%dT%H:%M:%S.%LZ\";\n\nfunction formatIsoNative(date) {\n  return date.toISOString();\n}\n\nvar formatIso = Date.prototype.toISOString\n    ? formatIsoNative\n    : (0,_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.utcFormat)(isoSpecifier);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatIso);\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time-format/src/isoFormat.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/isoParse.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoParse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isoFormat.js */ \"./node_modules/d3-time-format/src/isoFormat.js\");\n/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ \"./node_modules/d3-time-format/src/defaultLocale.js\");\n\n\n\nfunction parseIsoNative(string) {\n  var date = new Date(string);\n  return isNaN(date) ? null : date;\n}\n\nvar parseIso = +new Date(\"2000-01-01T00:00:00.000Z\")\n    ? parseIsoNative\n    : (0,_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.utcParse)(_isoFormat_js__WEBPACK_IMPORTED_MODULE_1__.isoSpecifier);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseIso);\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time-format/src/isoParse.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/locale.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-time-format/src/locale.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatLocale)\n/* harmony export */ });\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/utcWeek.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/utcDay.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/week.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/day.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/year.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/utcYear.js\");\n\n\nfunction localDate(d) {\n  if (0 <= d.y && d.y < 100) {\n    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);\n    date.setFullYear(d.y);\n    return date;\n  }\n  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);\n}\n\nfunction utcDate(d) {\n  if (0 <= d.y && d.y < 100) {\n    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));\n    date.setUTCFullYear(d.y);\n    return date;\n  }\n  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));\n}\n\nfunction newDate(y, m, d) {\n  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};\n}\n\nfunction formatLocale(locale) {\n  var locale_dateTime = locale.dateTime,\n      locale_date = locale.date,\n      locale_time = locale.time,\n      locale_periods = locale.periods,\n      locale_weekdays = locale.days,\n      locale_shortWeekdays = locale.shortDays,\n      locale_months = locale.months,\n      locale_shortMonths = locale.shortMonths;\n\n  var periodRe = formatRe(locale_periods),\n      periodLookup = formatLookup(locale_periods),\n      weekdayRe = formatRe(locale_weekdays),\n      weekdayLookup = formatLookup(locale_weekdays),\n      shortWeekdayRe = formatRe(locale_shortWeekdays),\n      shortWeekdayLookup = formatLookup(locale_shortWeekdays),\n      monthRe = formatRe(locale_months),\n      monthLookup = formatLookup(locale_months),\n      shortMonthRe = formatRe(locale_shortMonths),\n      shortMonthLookup = formatLookup(locale_shortMonths);\n\n  var formats = {\n    \"a\": formatShortWeekday,\n    \"A\": formatWeekday,\n    \"b\": formatShortMonth,\n    \"B\": formatMonth,\n    \"c\": null,\n    \"d\": formatDayOfMonth,\n    \"e\": formatDayOfMonth,\n    \"f\": formatMicroseconds,\n    \"g\": formatYearISO,\n    \"G\": formatFullYearISO,\n    \"H\": formatHour24,\n    \"I\": formatHour12,\n    \"j\": formatDayOfYear,\n    \"L\": formatMilliseconds,\n    \"m\": formatMonthNumber,\n    \"M\": formatMinutes,\n    \"p\": formatPeriod,\n    \"q\": formatQuarter,\n    \"Q\": formatUnixTimestamp,\n    \"s\": formatUnixTimestampSeconds,\n    \"S\": formatSeconds,\n    \"u\": formatWeekdayNumberMonday,\n    \"U\": formatWeekNumberSunday,\n    \"V\": formatWeekNumberISO,\n    \"w\": formatWeekdayNumberSunday,\n    \"W\": formatWeekNumberMonday,\n    \"x\": null,\n    \"X\": null,\n    \"y\": formatYear,\n    \"Y\": formatFullYear,\n    \"Z\": formatZone,\n    \"%\": formatLiteralPercent\n  };\n\n  var utcFormats = {\n    \"a\": formatUTCShortWeekday,\n    \"A\": formatUTCWeekday,\n    \"b\": formatUTCShortMonth,\n    \"B\": formatUTCMonth,\n    \"c\": null,\n    \"d\": formatUTCDayOfMonth,\n    \"e\": formatUTCDayOfMonth,\n    \"f\": formatUTCMicroseconds,\n    \"g\": formatUTCYearISO,\n    \"G\": formatUTCFullYearISO,\n    \"H\": formatUTCHour24,\n    \"I\": formatUTCHour12,\n    \"j\": formatUTCDayOfYear,\n    \"L\": formatUTCMilliseconds,\n    \"m\": formatUTCMonthNumber,\n    \"M\": formatUTCMinutes,\n    \"p\": formatUTCPeriod,\n    \"q\": formatUTCQuarter,\n    \"Q\": formatUnixTimestamp,\n    \"s\": formatUnixTimestampSeconds,\n    \"S\": formatUTCSeconds,\n    \"u\": formatUTCWeekdayNumberMonday,\n    \"U\": formatUTCWeekNumberSunday,\n    \"V\": formatUTCWeekNumberISO,\n    \"w\": formatUTCWeekdayNumberSunday,\n    \"W\": formatUTCWeekNumberMonday,\n    \"x\": null,\n    \"X\": null,\n    \"y\": formatUTCYear,\n    \"Y\": formatUTCFullYear,\n    \"Z\": formatUTCZone,\n    \"%\": formatLiteralPercent\n  };\n\n  var parses = {\n    \"a\": parseShortWeekday,\n    \"A\": parseWeekday,\n    \"b\": parseShortMonth,\n    \"B\": parseMonth,\n    \"c\": parseLocaleDateTime,\n    \"d\": parseDayOfMonth,\n    \"e\": parseDayOfMonth,\n    \"f\": parseMicroseconds,\n    \"g\": parseYear,\n    \"G\": parseFullYear,\n    \"H\": parseHour24,\n    \"I\": parseHour24,\n    \"j\": parseDayOfYear,\n    \"L\": parseMilliseconds,\n    \"m\": parseMonthNumber,\n    \"M\": parseMinutes,\n    \"p\": parsePeriod,\n    \"q\": parseQuarter,\n    \"Q\": parseUnixTimestamp,\n    \"s\": parseUnixTimestampSeconds,\n    \"S\": parseSeconds,\n    \"u\": parseWeekdayNumberMonday,\n    \"U\": parseWeekNumberSunday,\n    \"V\": parseWeekNumberISO,\n    \"w\": parseWeekdayNumberSunday,\n    \"W\": parseWeekNumberMonday,\n    \"x\": parseLocaleDate,\n    \"X\": parseLocaleTime,\n    \"y\": parseYear,\n    \"Y\": parseFullYear,\n    \"Z\": parseZone,\n    \"%\": parseLiteralPercent\n  };\n\n  // These recursive directive definitions must be deferred.\n  formats.x = newFormat(locale_date, formats);\n  formats.X = newFormat(locale_time, formats);\n  formats.c = newFormat(locale_dateTime, formats);\n  utcFormats.x = newFormat(locale_date, utcFormats);\n  utcFormats.X = newFormat(locale_time, utcFormats);\n  utcFormats.c = newFormat(locale_dateTime, utcFormats);\n\n  function newFormat(specifier, formats) {\n    return function(date) {\n      var string = [],\n          i = -1,\n          j = 0,\n          n = specifier.length,\n          c,\n          pad,\n          format;\n\n      if (!(date instanceof Date)) date = new Date(+date);\n\n      while (++i < n) {\n        if (specifier.charCodeAt(i) === 37) {\n          string.push(specifier.slice(j, i));\n          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);\n          else pad = c === \"e\" ? \" \" : \"0\";\n          if (format = formats[c]) c = format(date, pad);\n          string.push(c);\n          j = i + 1;\n        }\n      }\n\n      string.push(specifier.slice(j, i));\n      return string.join(\"\");\n    };\n  }\n\n  function newParse(specifier, Z) {\n    return function(string) {\n      var d = newDate(1900, undefined, 1),\n          i = parseSpecifier(d, specifier, string += \"\", 0),\n          week, day;\n      if (i != string.length) return null;\n\n      // If a UNIX timestamp is specified, return it.\n      if (\"Q\" in d) return new Date(d.Q);\n      if (\"s\" in d) return new Date(d.s * 1000 + (\"L\" in d ? d.L : 0));\n\n      // If this is utcParse, never use the local timezone.\n      if (Z && !(\"Z\" in d)) d.Z = 0;\n\n      // The am-pm flag is 0 for AM, and 1 for PM.\n      if (\"p\" in d) d.H = d.H % 12 + d.p * 12;\n\n      // If the month was not specified, inherit from the quarter.\n      if (d.m === undefined) d.m = \"q\" in d ? d.q : 0;\n\n      // Convert day-of-week and week-of-year to day-of-year.\n      if (\"V\" in d) {\n        if (d.V < 1 || d.V > 53) return null;\n        if (!(\"w\" in d)) d.w = 1;\n        if (\"Z\" in d) {\n          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();\n          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__.utcMonday.ceil(week) : (0,d3_time__WEBPACK_IMPORTED_MODULE_0__.utcMonday)(week);\n          week = d3_time__WEBPACK_IMPORTED_MODULE_1__.default.offset(week, (d.V - 1) * 7);\n          d.y = week.getUTCFullYear();\n          d.m = week.getUTCMonth();\n          d.d = week.getUTCDate() + (d.w + 6) % 7;\n        } else {\n          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();\n          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_2__.monday.ceil(week) : (0,d3_time__WEBPACK_IMPORTED_MODULE_2__.monday)(week);\n          week = d3_time__WEBPACK_IMPORTED_MODULE_3__.default.offset(week, (d.V - 1) * 7);\n          d.y = week.getFullYear();\n          d.m = week.getMonth();\n          d.d = week.getDate() + (d.w + 6) % 7;\n        }\n      } else if (\"W\" in d || \"U\" in d) {\n        if (!(\"w\" in d)) d.w = \"u\" in d ? d.u % 7 : \"W\" in d ? 1 : 0;\n        day = \"Z\" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();\n        d.m = 0;\n        d.d = \"W\" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;\n      }\n\n      // If a time zone is specified, all fields are interpreted as UTC and then\n      // offset according to the specified time zone.\n      if (\"Z\" in d) {\n        d.H += d.Z / 100 | 0;\n        d.M += d.Z % 100;\n        return utcDate(d);\n      }\n\n      // Otherwise, all fields are in local time.\n      return localDate(d);\n    };\n  }\n\n  function parseSpecifier(d, specifier, string, j) {\n    var i = 0,\n        n = specifier.length,\n        m = string.length,\n        c,\n        parse;\n\n    while (i < n) {\n      if (j >= m) return -1;\n      c = specifier.charCodeAt(i++);\n      if (c === 37) {\n        c = specifier.charAt(i++);\n        parse = parses[c in pads ? specifier.charAt(i++) : c];\n        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;\n      } else if (c != string.charCodeAt(j++)) {\n        return -1;\n      }\n    }\n\n    return j;\n  }\n\n  function parsePeriod(d, string, i) {\n    var n = periodRe.exec(string.slice(i));\n    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;\n  }\n\n  function parseShortWeekday(d, string, i) {\n    var n = shortWeekdayRe.exec(string.slice(i));\n    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;\n  }\n\n  function parseWeekday(d, string, i) {\n    var n = weekdayRe.exec(string.slice(i));\n    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;\n  }\n\n  function parseShortMonth(d, string, i) {\n    var n = shortMonthRe.exec(string.slice(i));\n    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;\n  }\n\n  function parseMonth(d, string, i) {\n    var n = monthRe.exec(string.slice(i));\n    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;\n  }\n\n  function parseLocaleDateTime(d, string, i) {\n    return parseSpecifier(d, locale_dateTime, string, i);\n  }\n\n  function parseLocaleDate(d, string, i) {\n    return parseSpecifier(d, locale_date, string, i);\n  }\n\n  function parseLocaleTime(d, string, i) {\n    return parseSpecifier(d, locale_time, string, i);\n  }\n\n  function formatShortWeekday(d) {\n    return locale_shortWeekdays[d.getDay()];\n  }\n\n  function formatWeekday(d) {\n    return locale_weekdays[d.getDay()];\n  }\n\n  function formatShortMonth(d) {\n    return locale_shortMonths[d.getMonth()];\n  }\n\n  function formatMonth(d) {\n    return locale_months[d.getMonth()];\n  }\n\n  function formatPeriod(d) {\n    return locale_periods[+(d.getHours() >= 12)];\n  }\n\n  function formatQuarter(d) {\n    return 1 + ~~(d.getMonth() / 3);\n  }\n\n  function formatUTCShortWeekday(d) {\n    return locale_shortWeekdays[d.getUTCDay()];\n  }\n\n  function formatUTCWeekday(d) {\n    return locale_weekdays[d.getUTCDay()];\n  }\n\n  function formatUTCShortMonth(d) {\n    return locale_shortMonths[d.getUTCMonth()];\n  }\n\n  function formatUTCMonth(d) {\n    return locale_months[d.getUTCMonth()];\n  }\n\n  function formatUTCPeriod(d) {\n    return locale_periods[+(d.getUTCHours() >= 12)];\n  }\n\n  function formatUTCQuarter(d) {\n    return 1 + ~~(d.getUTCMonth() / 3);\n  }\n\n  return {\n    format: function(specifier) {\n      var f = newFormat(specifier += \"\", formats);\n      f.toString = function() { return specifier; };\n      return f;\n    },\n    parse: function(specifier) {\n      var p = newParse(specifier += \"\", false);\n      p.toString = function() { return specifier; };\n      return p;\n    },\n    utcFormat: function(specifier) {\n      var f = newFormat(specifier += \"\", utcFormats);\n      f.toString = function() { return specifier; };\n      return f;\n    },\n    utcParse: function(specifier) {\n      var p = newParse(specifier += \"\", true);\n      p.toString = function() { return specifier; };\n      return p;\n    }\n  };\n}\n\nvar pads = {\"-\": \"\", \"_\": \" \", \"0\": \"0\"},\n    numberRe = /^\\s*\\d+/, // note: ignores next directive\n    percentRe = /^%/,\n    requoteRe = /[\\\\^$*+?|[\\]().{}]/g;\n\nfunction pad(value, fill, width) {\n  var sign = value < 0 ? \"-\" : \"\",\n      string = (sign ? -value : value) + \"\",\n      length = string.length;\n  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);\n}\n\nfunction requote(s) {\n  return s.replace(requoteRe, \"\\\\$&\");\n}\n\nfunction formatRe(names) {\n  return new RegExp(\"^(?:\" + names.map(requote).join(\"|\") + \")\", \"i\");\n}\n\nfunction formatLookup(names) {\n  return new Map(names.map((name, i) => [name.toLowerCase(), i]));\n}\n\nfunction parseWeekdayNumberSunday(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 1));\n  return n ? (d.w = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseWeekdayNumberMonday(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 1));\n  return n ? (d.u = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseWeekNumberSunday(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.U = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseWeekNumberISO(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.V = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseWeekNumberMonday(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.W = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseFullYear(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 4));\n  return n ? (d.y = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseYear(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;\n}\n\nfunction parseZone(d, string, i) {\n  var n = /^(Z)|([+-]\\d\\d)(?::?(\\d\\d))?/.exec(string.slice(i, i + 6));\n  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || \"00\")), i + n[0].length) : -1;\n}\n\nfunction parseQuarter(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 1));\n  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;\n}\n\nfunction parseMonthNumber(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;\n}\n\nfunction parseDayOfMonth(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.d = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseDayOfYear(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 3));\n  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseHour24(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.H = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseMinutes(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.M = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseSeconds(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.S = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseMilliseconds(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 3));\n  return n ? (d.L = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseMicroseconds(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 6));\n  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;\n}\n\nfunction parseLiteralPercent(d, string, i) {\n  var n = percentRe.exec(string.slice(i, i + 1));\n  return n ? i + n[0].length : -1;\n}\n\nfunction parseUnixTimestamp(d, string, i) {\n  var n = numberRe.exec(string.slice(i));\n  return n ? (d.Q = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseUnixTimestampSeconds(d, string, i) {\n  var n = numberRe.exec(string.slice(i));\n  return n ? (d.s = +n[0], i + n[0].length) : -1;\n}\n\nfunction formatDayOfMonth(d, p) {\n  return pad(d.getDate(), p, 2);\n}\n\nfunction formatHour24(d, p) {\n  return pad(d.getHours(), p, 2);\n}\n\nfunction formatHour12(d, p) {\n  return pad(d.getHours() % 12 || 12, p, 2);\n}\n\nfunction formatDayOfYear(d, p) {\n  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_3__.default.count((0,d3_time__WEBPACK_IMPORTED_MODULE_4__.default)(d), d), p, 3);\n}\n\nfunction formatMilliseconds(d, p) {\n  return pad(d.getMilliseconds(), p, 3);\n}\n\nfunction formatMicroseconds(d, p) {\n  return formatMilliseconds(d, p) + \"000\";\n}\n\nfunction formatMonthNumber(d, p) {\n  return pad(d.getMonth() + 1, p, 2);\n}\n\nfunction formatMinutes(d, p) {\n  return pad(d.getMinutes(), p, 2);\n}\n\nfunction formatSeconds(d, p) {\n  return pad(d.getSeconds(), p, 2);\n}\n\nfunction formatWeekdayNumberMonday(d) {\n  var day = d.getDay();\n  return day === 0 ? 7 : day;\n}\n\nfunction formatWeekNumberSunday(d, p) {\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_2__.sunday.count((0,d3_time__WEBPACK_IMPORTED_MODULE_4__.default)(d) - 1, d), p, 2);\n}\n\nfunction dISO(d) {\n  var day = d.getDay();\n  return (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_2__.thursday)(d) : d3_time__WEBPACK_IMPORTED_MODULE_2__.thursday.ceil(d);\n}\n\nfunction formatWeekNumberISO(d, p) {\n  d = dISO(d);\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_2__.thursday.count((0,d3_time__WEBPACK_IMPORTED_MODULE_4__.default)(d), d) + ((0,d3_time__WEBPACK_IMPORTED_MODULE_4__.default)(d).getDay() === 4), p, 2);\n}\n\nfunction formatWeekdayNumberSunday(d) {\n  return d.getDay();\n}\n\nfunction formatWeekNumberMonday(d, p) {\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_2__.monday.count((0,d3_time__WEBPACK_IMPORTED_MODULE_4__.default)(d) - 1, d), p, 2);\n}\n\nfunction formatYear(d, p) {\n  return pad(d.getFullYear() % 100, p, 2);\n}\n\nfunction formatYearISO(d, p) {\n  d = dISO(d);\n  return pad(d.getFullYear() % 100, p, 2);\n}\n\nfunction formatFullYear(d, p) {\n  return pad(d.getFullYear() % 10000, p, 4);\n}\n\nfunction formatFullYearISO(d, p) {\n  var day = d.getDay();\n  d = (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_2__.thursday)(d) : d3_time__WEBPACK_IMPORTED_MODULE_2__.thursday.ceil(d);\n  return pad(d.getFullYear() % 10000, p, 4);\n}\n\nfunction formatZone(d) {\n  var z = d.getTimezoneOffset();\n  return (z > 0 ? \"-\" : (z *= -1, \"+\"))\n      + pad(z / 60 | 0, \"0\", 2)\n      + pad(z % 60, \"0\", 2);\n}\n\nfunction formatUTCDayOfMonth(d, p) {\n  return pad(d.getUTCDate(), p, 2);\n}\n\nfunction formatUTCHour24(d, p) {\n  return pad(d.getUTCHours(), p, 2);\n}\n\nfunction formatUTCHour12(d, p) {\n  return pad(d.getUTCHours() % 12 || 12, p, 2);\n}\n\nfunction formatUTCDayOfYear(d, p) {\n  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_1__.default.count((0,d3_time__WEBPACK_IMPORTED_MODULE_5__.default)(d), d), p, 3);\n}\n\nfunction formatUTCMilliseconds(d, p) {\n  return pad(d.getUTCMilliseconds(), p, 3);\n}\n\nfunction formatUTCMicroseconds(d, p) {\n  return formatUTCMilliseconds(d, p) + \"000\";\n}\n\nfunction formatUTCMonthNumber(d, p) {\n  return pad(d.getUTCMonth() + 1, p, 2);\n}\n\nfunction formatUTCMinutes(d, p) {\n  return pad(d.getUTCMinutes(), p, 2);\n}\n\nfunction formatUTCSeconds(d, p) {\n  return pad(d.getUTCSeconds(), p, 2);\n}\n\nfunction formatUTCWeekdayNumberMonday(d) {\n  var dow = d.getUTCDay();\n  return dow === 0 ? 7 : dow;\n}\n\nfunction formatUTCWeekNumberSunday(d, p) {\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__.utcSunday.count((0,d3_time__WEBPACK_IMPORTED_MODULE_5__.default)(d) - 1, d), p, 2);\n}\n\nfunction UTCdISO(d) {\n  var day = d.getUTCDay();\n  return (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__.utcThursday)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__.utcThursday.ceil(d);\n}\n\nfunction formatUTCWeekNumberISO(d, p) {\n  d = UTCdISO(d);\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__.utcThursday.count((0,d3_time__WEBPACK_IMPORTED_MODULE_5__.default)(d), d) + ((0,d3_time__WEBPACK_IMPORTED_MODULE_5__.default)(d).getUTCDay() === 4), p, 2);\n}\n\nfunction formatUTCWeekdayNumberSunday(d) {\n  return d.getUTCDay();\n}\n\nfunction formatUTCWeekNumberMonday(d, p) {\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__.utcMonday.count((0,d3_time__WEBPACK_IMPORTED_MODULE_5__.default)(d) - 1, d), p, 2);\n}\n\nfunction formatUTCYear(d, p) {\n  return pad(d.getUTCFullYear() % 100, p, 2);\n}\n\nfunction formatUTCYearISO(d, p) {\n  d = UTCdISO(d);\n  return pad(d.getUTCFullYear() % 100, p, 2);\n}\n\nfunction formatUTCFullYear(d, p) {\n  return pad(d.getUTCFullYear() % 10000, p, 4);\n}\n\nfunction formatUTCFullYearISO(d, p) {\n  var day = d.getUTCDay();\n  d = (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__.utcThursday)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__.utcThursday.ceil(d);\n  return pad(d.getUTCFullYear() % 10000, p, 4);\n}\n\nfunction formatUTCZone() {\n  return \"+0000\";\n}\n\nfunction formatLiteralPercent() {\n  return \"%\";\n}\n\nfunction formatUnixTimestamp(d) {\n  return +d;\n}\n\nfunction formatUnixTimestampSeconds(d) {\n  return Math.floor(+d / 1000);\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time-format/src/locale.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/day.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-time/src/day.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"days\": () => (/* binding */ days)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar day = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(\n  date => date.setHours(0, 0, 0, 0),\n  (date, step) => date.setDate(date.getDate() + step),\n  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute) / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationDay,\n  date => date.getDate() - 1\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (day);\nvar days = day.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/day.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/duration.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/duration.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"durationSecond\": () => (/* binding */ durationSecond),\n/* harmony export */   \"durationMinute\": () => (/* binding */ durationMinute),\n/* harmony export */   \"durationHour\": () => (/* binding */ durationHour),\n/* harmony export */   \"durationDay\": () => (/* binding */ durationDay),\n/* harmony export */   \"durationWeek\": () => (/* binding */ durationWeek),\n/* harmony export */   \"durationMonth\": () => (/* binding */ durationMonth),\n/* harmony export */   \"durationYear\": () => (/* binding */ durationYear)\n/* harmony export */ });\nconst durationSecond = 1000;\nconst durationMinute = durationSecond * 60;\nconst durationHour = durationMinute * 60;\nconst durationDay = durationHour * 24;\nconst durationWeek = durationDay * 7;\nconst durationMonth = durationDay * 30;\nconst durationYear = durationDay * 365;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/duration.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/hour.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/hour.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"hours\": () => (/* binding */ hours)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar hour = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationSecond - date.getMinutes() * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute);\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationHour);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationHour;\n}, function(date) {\n  return date.getHours();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hour);\nvar hours = hour.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/hour.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/interval.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/interval.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newInterval)\n/* harmony export */ });\nvar t0 = new Date,\n    t1 = new Date;\n\nfunction newInterval(floori, offseti, count, field) {\n\n  function interval(date) {\n    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;\n  }\n\n  interval.floor = function(date) {\n    return floori(date = new Date(+date)), date;\n  };\n\n  interval.ceil = function(date) {\n    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;\n  };\n\n  interval.round = function(date) {\n    var d0 = interval(date),\n        d1 = interval.ceil(date);\n    return date - d0 < d1 - date ? d0 : d1;\n  };\n\n  interval.offset = function(date, step) {\n    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;\n  };\n\n  interval.range = function(start, stop, step) {\n    var range = [], previous;\n    start = interval.ceil(start);\n    step = step == null ? 1 : Math.floor(step);\n    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date\n    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);\n    while (previous < start && start < stop);\n    return range;\n  };\n\n  interval.filter = function(test) {\n    return newInterval(function(date) {\n      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);\n    }, function(date, step) {\n      if (date >= date) {\n        if (step < 0) while (++step <= 0) {\n          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty\n        } else while (--step >= 0) {\n          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty\n        }\n      }\n    });\n  };\n\n  if (count) {\n    interval.count = function(start, end) {\n      t0.setTime(+start), t1.setTime(+end);\n      floori(t0), floori(t1);\n      return Math.floor(count(t0, t1));\n    };\n\n    interval.every = function(step) {\n      step = Math.floor(step);\n      return !isFinite(step) || !(step > 0) ? null\n          : !(step > 1) ? interval\n          : interval.filter(field\n              ? function(d) { return field(d) % step === 0; }\n              : function(d) { return interval.count(0, d) % step === 0; });\n    };\n  }\n\n  return interval;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/interval.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/millisecond.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-time/src/millisecond.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"milliseconds\": () => (/* binding */ milliseconds)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar millisecond = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function() {\n  // noop\n}, function(date, step) {\n  date.setTime(+date + step);\n}, function(start, end) {\n  return end - start;\n});\n\n// An optimized implementation for this simple case.\nmillisecond.every = function(k) {\n  k = Math.floor(k);\n  if (!isFinite(k) || !(k > 0)) return null;\n  if (!(k > 1)) return millisecond;\n  return (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n    date.setTime(Math.floor(date / k) * k);\n  }, function(date, step) {\n    date.setTime(+date + step * k);\n  }, function(start, end) {\n    return (end - start) / k;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (millisecond);\nvar milliseconds = millisecond.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/millisecond.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/minute.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/minute.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"minutes\": () => (/* binding */ minutes)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar minute = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationSecond);\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute;\n}, function(date) {\n  return date.getMinutes();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minute);\nvar minutes = minute.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/minute.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/month.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/month.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"months\": () => (/* binding */ months)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar month = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setDate(1);\n  date.setHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setMonth(date.getMonth() + step);\n}, function(start, end) {\n  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;\n}, function(date) {\n  return date.getMonth();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (month);\nvar months = month.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/month.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/second.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/second.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"seconds\": () => (/* binding */ seconds)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar second = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setTime(date - date.getMilliseconds());\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationSecond);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationSecond;\n}, function(date) {\n  return date.getUTCSeconds();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\nvar seconds = second.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/second.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/ticks.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/ticks.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"utcTicks\": () => (/* binding */ utcTicks),\n/* harmony export */   \"utcTickInterval\": () => (/* binding */ utcTickInterval),\n/* harmony export */   \"timeTicks\": () => (/* binding */ timeTicks),\n/* harmony export */   \"timeTickInterval\": () => (/* binding */ timeTickInterval)\n/* harmony export */ });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/bisector.js\");\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/ticks.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n/* harmony import */ var _millisecond_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./millisecond.js */ \"./node_modules/d3-time/src/millisecond.js\");\n/* harmony import */ var _second_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./second.js */ \"./node_modules/d3-time/src/second.js\");\n/* harmony import */ var _minute_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./minute.js */ \"./node_modules/d3-time/src/minute.js\");\n/* harmony import */ var _hour_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hour.js */ \"./node_modules/d3-time/src/hour.js\");\n/* harmony import */ var _day_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./day.js */ \"./node_modules/d3-time/src/day.js\");\n/* harmony import */ var _week_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./week.js */ \"./node_modules/d3-time/src/week.js\");\n/* harmony import */ var _month_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./month.js */ \"./node_modules/d3-time/src/month.js\");\n/* harmony import */ var _year_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./year.js */ \"./node_modules/d3-time/src/year.js\");\n/* harmony import */ var _utcMinute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcMinute.js */ \"./node_modules/d3-time/src/utcMinute.js\");\n/* harmony import */ var _utcHour_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utcHour.js */ \"./node_modules/d3-time/src/utcHour.js\");\n/* harmony import */ var _utcDay_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utcDay.js */ \"./node_modules/d3-time/src/utcDay.js\");\n/* harmony import */ var _utcWeek_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utcWeek.js */ \"./node_modules/d3-time/src/utcWeek.js\");\n/* harmony import */ var _utcMonth_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utcMonth.js */ \"./node_modules/d3-time/src/utcMonth.js\");\n/* harmony import */ var _utcYear_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utcYear.js */ \"./node_modules/d3-time/src/utcYear.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ticker(year, month, week, day, hour, minute) {\n\n  const tickIntervals = [\n    [_second_js__WEBPACK_IMPORTED_MODULE_0__.default,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationSecond],\n    [_second_js__WEBPACK_IMPORTED_MODULE_0__.default,  5,  5 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationSecond],\n    [_second_js__WEBPACK_IMPORTED_MODULE_0__.default, 15, 15 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationSecond],\n    [_second_js__WEBPACK_IMPORTED_MODULE_0__.default, 30, 30 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationSecond],\n    [minute,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute],\n    [minute,  5,  5 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute],\n    [minute, 15, 15 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute],\n    [minute, 30, 30 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute],\n    [  hour,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationHour  ],\n    [  hour,  3,  3 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationHour  ],\n    [  hour,  6,  6 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationHour  ],\n    [  hour, 12, 12 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationHour  ],\n    [   day,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationDay   ],\n    [   day,  2,  2 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationDay   ],\n    [  week,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationWeek  ],\n    [ month,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMonth ],\n    [ month,  3,  3 * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMonth ],\n    [  year,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationYear  ]\n  ];\n\n  function ticks(start, stop, count) {\n    const reverse = stop < start;\n    if (reverse) [start, stop] = [stop, start];\n    const interval = count && typeof count.range === \"function\" ? count : tickInterval(start, stop, count);\n    const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop\n    return reverse ? ticks.reverse() : ticks;\n  }\n\n  function tickInterval(start, stop, count) {\n    const target = Math.abs(stop - start) / count;\n    const i = (0,d3_array__WEBPACK_IMPORTED_MODULE_2__.default)(([,, step]) => step).right(tickIntervals, target);\n    if (i === tickIntervals.length) return year.every((0,d3_array__WEBPACK_IMPORTED_MODULE_3__.tickStep)(start / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationYear, stop / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationYear, count));\n    if (i === 0) return _millisecond_js__WEBPACK_IMPORTED_MODULE_4__.default.every(Math.max((0,d3_array__WEBPACK_IMPORTED_MODULE_3__.tickStep)(start, stop, count), 1));\n    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];\n    return t.every(step);\n  }\n\n  return [ticks, tickInterval];\n}\n\nconst [utcTicks, utcTickInterval] = ticker(_utcYear_js__WEBPACK_IMPORTED_MODULE_5__.default, _utcMonth_js__WEBPACK_IMPORTED_MODULE_6__.default, _utcWeek_js__WEBPACK_IMPORTED_MODULE_7__.utcSunday, _utcDay_js__WEBPACK_IMPORTED_MODULE_8__.default, _utcHour_js__WEBPACK_IMPORTED_MODULE_9__.default, _utcMinute_js__WEBPACK_IMPORTED_MODULE_10__.default);\nconst [timeTicks, timeTickInterval] = ticker(_year_js__WEBPACK_IMPORTED_MODULE_11__.default, _month_js__WEBPACK_IMPORTED_MODULE_12__.default, _week_js__WEBPACK_IMPORTED_MODULE_13__.sunday, _day_js__WEBPACK_IMPORTED_MODULE_14__.default, _hour_js__WEBPACK_IMPORTED_MODULE_15__.default, _minute_js__WEBPACK_IMPORTED_MODULE_16__.default);\n\n\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/ticks.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcDay.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/utcDay.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"utcDays\": () => (/* binding */ utcDays)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar utcDay = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setUTCHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setUTCDate(date.getUTCDate() + step);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationDay;\n}, function(date) {\n  return date.getUTCDate() - 1;\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utcDay);\nvar utcDays = utcDay.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/utcDay.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcHour.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcHour.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"utcHours\": () => (/* binding */ utcHours)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar utcHour = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setUTCMinutes(0, 0, 0);\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationHour);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationHour;\n}, function(date) {\n  return date.getUTCHours();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utcHour);\nvar utcHours = utcHour.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/utcHour.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcMinute.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"utcMinutes\": () => (/* binding */ utcMinutes)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar utcMinute = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setUTCSeconds(0, 0);\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute;\n}, function(date) {\n  return date.getUTCMinutes();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utcMinute);\nvar utcMinutes = utcMinute.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/utcMinute.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"utcMonths\": () => (/* binding */ utcMonths)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar utcMonth = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setUTCDate(1);\n  date.setUTCHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setUTCMonth(date.getUTCMonth() + step);\n}, function(start, end) {\n  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;\n}, function(date) {\n  return date.getUTCMonth();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utcMonth);\nvar utcMonths = utcMonth.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/utcMonth.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"utcSunday\": () => (/* binding */ utcSunday),\n/* harmony export */   \"utcMonday\": () => (/* binding */ utcMonday),\n/* harmony export */   \"utcTuesday\": () => (/* binding */ utcTuesday),\n/* harmony export */   \"utcWednesday\": () => (/* binding */ utcWednesday),\n/* harmony export */   \"utcThursday\": () => (/* binding */ utcThursday),\n/* harmony export */   \"utcFriday\": () => (/* binding */ utcFriday),\n/* harmony export */   \"utcSaturday\": () => (/* binding */ utcSaturday),\n/* harmony export */   \"utcSundays\": () => (/* binding */ utcSundays),\n/* harmony export */   \"utcMondays\": () => (/* binding */ utcMondays),\n/* harmony export */   \"utcTuesdays\": () => (/* binding */ utcTuesdays),\n/* harmony export */   \"utcWednesdays\": () => (/* binding */ utcWednesdays),\n/* harmony export */   \"utcThursdays\": () => (/* binding */ utcThursdays),\n/* harmony export */   \"utcFridays\": () => (/* binding */ utcFridays),\n/* harmony export */   \"utcSaturdays\": () => (/* binding */ utcSaturdays)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nfunction utcWeekday(i) {\n  return (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);\n    date.setUTCHours(0, 0, 0, 0);\n  }, function(date, step) {\n    date.setUTCDate(date.getUTCDate() + step * 7);\n  }, function(start, end) {\n    return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationWeek;\n  });\n}\n\nvar utcSunday = utcWeekday(0);\nvar utcMonday = utcWeekday(1);\nvar utcTuesday = utcWeekday(2);\nvar utcWednesday = utcWeekday(3);\nvar utcThursday = utcWeekday(4);\nvar utcFriday = utcWeekday(5);\nvar utcSaturday = utcWeekday(6);\n\nvar utcSundays = utcSunday.range;\nvar utcMondays = utcMonday.range;\nvar utcTuesdays = utcTuesday.range;\nvar utcWednesdays = utcWednesday.range;\nvar utcThursdays = utcThursday.range;\nvar utcFridays = utcFriday.range;\nvar utcSaturdays = utcSaturday.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/utcWeek.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcYear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcYear.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"utcYears\": () => (/* binding */ utcYears)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar utcYear = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setUTCMonth(0, 1);\n  date.setUTCHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setUTCFullYear(date.getUTCFullYear() + step);\n}, function(start, end) {\n  return end.getUTCFullYear() - start.getUTCFullYear();\n}, function(date) {\n  return date.getUTCFullYear();\n});\n\n// An optimized implementation for this simple case.\nutcYear.every = function(k) {\n  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);\n    date.setUTCMonth(0, 1);\n    date.setUTCHours(0, 0, 0, 0);\n  }, function(date, step) {\n    date.setUTCFullYear(date.getUTCFullYear() + step * k);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utcYear);\nvar utcYears = utcYear.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/utcYear.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/week.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/week.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sunday\": () => (/* binding */ sunday),\n/* harmony export */   \"monday\": () => (/* binding */ monday),\n/* harmony export */   \"tuesday\": () => (/* binding */ tuesday),\n/* harmony export */   \"wednesday\": () => (/* binding */ wednesday),\n/* harmony export */   \"thursday\": () => (/* binding */ thursday),\n/* harmony export */   \"friday\": () => (/* binding */ friday),\n/* harmony export */   \"saturday\": () => (/* binding */ saturday),\n/* harmony export */   \"sundays\": () => (/* binding */ sundays),\n/* harmony export */   \"mondays\": () => (/* binding */ mondays),\n/* harmony export */   \"tuesdays\": () => (/* binding */ tuesdays),\n/* harmony export */   \"wednesdays\": () => (/* binding */ wednesdays),\n/* harmony export */   \"thursdays\": () => (/* binding */ thursdays),\n/* harmony export */   \"fridays\": () => (/* binding */ fridays),\n/* harmony export */   \"saturdays\": () => (/* binding */ saturdays)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nfunction weekday(i) {\n  return (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);\n    date.setHours(0, 0, 0, 0);\n  }, function(date, step) {\n    date.setDate(date.getDate() + step * 7);\n  }, function(start, end) {\n    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationMinute) / _duration_js__WEBPACK_IMPORTED_MODULE_1__.durationWeek;\n  });\n}\n\nvar sunday = weekday(0);\nvar monday = weekday(1);\nvar tuesday = weekday(2);\nvar wednesday = weekday(3);\nvar thursday = weekday(4);\nvar friday = weekday(5);\nvar saturday = weekday(6);\n\nvar sundays = sunday.range;\nvar mondays = monday.range;\nvar tuesdays = tuesday.range;\nvar wednesdays = wednesday.range;\nvar thursdays = thursday.range;\nvar fridays = friday.range;\nvar saturdays = saturday.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/week.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/year.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/year.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"years\": () => (/* binding */ years)\n/* harmony export */ });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar year = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n  date.setMonth(0, 1);\n  date.setHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setFullYear(date.getFullYear() + step);\n}, function(start, end) {\n  return end.getFullYear() - start.getFullYear();\n}, function(date) {\n  return date.getFullYear();\n});\n\n// An optimized implementation for this simple case.\nyear.every = function(k) {\n  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__.default)(function(date) {\n    date.setFullYear(Math.floor(date.getFullYear() / k) * k);\n    date.setMonth(0, 1);\n    date.setHours(0, 0, 0, 0);\n  }, function(date, step) {\n    date.setFullYear(date.getFullYear() + step * k);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (year);\nvar years = year.range;\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/d3-time/src/year.js?");

/***/ }),

/***/ "./node_modules/internmap/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/internmap/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InternMap\": () => (/* binding */ InternMap),\n/* harmony export */   \"InternSet\": () => (/* binding */ InternSet)\n/* harmony export */ });\nclass InternMap extends Map {\n  constructor(entries, key = keyof) {\n    super();\n    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});\n    if (entries != null) for (const [key, value] of entries) this.set(key, value);\n  }\n  get(key) {\n    return super.get(intern_get(this, key));\n  }\n  has(key) {\n    return super.has(intern_get(this, key));\n  }\n  set(key, value) {\n    return super.set(intern_set(this, key), value);\n  }\n  delete(key) {\n    return super.delete(intern_delete(this, key));\n  }\n}\n\nclass InternSet extends Set {\n  constructor(values, key = keyof) {\n    super();\n    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});\n    if (values != null) for (const value of values) this.add(value);\n  }\n  has(value) {\n    return super.has(intern_get(this, value));\n  }\n  add(value) {\n    return super.add(intern_set(this, value));\n  }\n  delete(value) {\n    return super.delete(intern_delete(this, value));\n  }\n}\n\nfunction intern_get({_intern, _key}, value) {\n  const key = _key(value);\n  return _intern.has(key) ? _intern.get(key) : value;\n}\n\nfunction intern_set({_intern, _key}, value) {\n  const key = _key(value);\n  if (_intern.has(key)) return _intern.get(key);\n  _intern.set(key, value);\n  return value;\n}\n\nfunction intern_delete({_intern, _key}, value) {\n  const key = _key(value);\n  if (_intern.has(key)) {\n    value = _intern.get(value);\n    _intern.delete(key);\n  }\n  return value;\n}\n\nfunction keyof(value) {\n  return value !== null && typeof value === \"object\" ? value.valueOf() : value;\n}\n\n\n//# sourceURL=webpack://bill-tracker/./node_modules/internmap/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/site/index.ts");
/******/ 	
/******/ })()
;