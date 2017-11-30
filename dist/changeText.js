(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("immutable"), require("immutable/contrib/cursor"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "immutable", "immutable/contrib/cursor"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types"), require("immutable"), require("immutable/contrib/cursor")) : factory(root["react"], root["prop-types"], root["immutable"], root["immutable/contrib/cursor"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_index_styl__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_index_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable_contrib_cursor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_immutable_contrib_cursor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_immutable_contrib_cursor__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ChangeText = function (_React$Component) {
    _inherits(ChangeText, _React$Component);

    function ChangeText(props) {
        _classCallCheck(this, ChangeText);

        var _this = _possibleConstructorReturn(this, (ChangeText.__proto__ || Object.getPrototypeOf(ChangeText)).call(this, props));

        var p = _this.props;

        _this.initData = {
            data: {
                value: p.value,
                openChange: false,
                hover: false
            }
        };

        _this.state = {
            $$s: Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["fromJS"])(_this.initData)
        };

        _this.$$beforeChange = null;
        return _this;
    }

    _createClass(ChangeText, [{
        key: '_getData',
        value: function _getData() {
            var _this2 = this;

            return Object(__WEBPACK_IMPORTED_MODULE_4_immutable_contrib_cursor__["from"])(this.state.$$s, ['data'], function ($$newS) {
                _this2._changeData($$newS);
            });
        }
    }, {
        key: '_changeData',
        value: function _changeData($$newS) {
            this.setState({ $$s: $$newS });
        }

        // 点击确定

    }, {
        key: '_clickYes',
        value: function _clickYes($$data, value) {
            $$data.set('openChange', false).set('value', $$data.get('value'));
            this.props.onYes({ value: $$data.get('value') });
        }

        // 点击取消

    }, {
        key: '_clickCancle',
        value: function _clickCancle($$data) {
            var $$mapData = this.$$beforeChange._rootData.getIn(this.$$beforeChange._keyPath);
            this.setState({ $$s: Object(__WEBPACK_IMPORTED_MODULE_3_immutable__["fromJS"])({ data: $$mapData }) });
            this.props.onCancle({ value: $$data.get('value') });
        }

        // 修改值

    }, {
        key: '_changeText',
        value: function _changeText($$data, value) {
            $$data.set('value', value);
            this.props.onChange({ value: value });
        }

        // 点击修改

    }, {
        key: '_openChange',
        value: function _openChange($$data) {
            this.$$beforeChange = $$data;

            $$data.set('openChange', true).set('value', $$data.get('value'));
        }

        // 去顶按钮

    }, {
        key: 'yesButton',
        value: function yesButton() {
            var _this3 = this;

            var $$data = this._getData();
            var p = this.props;
            var btn = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                {
                    onClick: function onClick(e) {
                        e.stopPropagation();
                        _this3._openChange($$data);
                        p.onOpenChange({ e: e });
                    } },
                p.openChangeText
            );

            var openChange = $$data.get('openChange');

            if (!p.hover) {
                if (p.showOpenChange && !openChange) {
                    return btn;
                }
            } else {
                if (p.showOpenChange && !openChange && $$data.get('hover')) {
                    return btn;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var p = this.props;
            var $$data = this._getData();
            var openChange = $$data.get('openChange');
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    className: __WEBPACK_IMPORTED_MODULE_1__style_index_styl___default.a['ChangeText'] + ' ' + p.className + ' ' + (openChange ? p.openRootClassName : p.closeRootClassName),
                    style: p.style,
                    onMouseEnter: function onMouseEnter(e) {
                        p.hover && !openChange && $$data.set('hover', true);
                    },
                    onMouseLeave: function onMouseLeave(e) {
                        p.hover && !openChange && $$data.set('hover', false);
                    },
                    onClick: function onClick(e) {
                        if (openChange) e.stopPropagation();
                        p.onClickRoot({ e: e, open: openChange });
                    }
                },
                p.showValue && !openChange && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: __WEBPACK_IMPORTED_MODULE_1__style_index_styl___default.a['ChangeText-value'], onClick: function onClick(e) {
                            p.onClickTitle({});
                        } },
                    $$data.get('value')
                ),
                this.yesButton(),
                openChange && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__style_index_styl___default.a['ChangeText-open'] },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                        style: { width: p.inputWith },
                        value: $$data.get('value'),
                        placeholder: p.placeholder,
                        onChange: function onChange(e) {
                            _this4._changeText($$data, e.target.value);
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { onClick: function onClick(e) {
                                _this4._clickYes($$data);
                            } },
                        ' ',
                        p.yesText,
                        ' '
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { onClick: function onClick(e) {
                                _this4._clickCancle($$data);
                            } },
                        ' ',
                        p.cancleText,
                        ' '
                    )
                )
            );
        }
    }]);

    return ChangeText;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ChangeText.defaultProps = {
    onYes: function onYes() {
        return false;
    },
    onCancle: function onCancle() {},
    onChange: function onChange() {},
    onOpenChange: function onOpenChange() {},
    onClickTitle: function onClickTitle() {},
    onClickRoot: function onClickRoot() {},

    textField: {},
    inputWith: 150,
    cancleText: '取消',
    yesText: '确定',
    openChangeText: '修改',
    type: 'add',
    showValue: true,
    showOpenChange: true,
    openRootClassName: '',
    closeRootClassName: '',
    hover: false
};

ChangeText.propTypes = {
    yesText: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // 确定按钮文字
    cancleText: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // 取消按钮文字
    openChangeText: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // 修改按钮文字
    onYes: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // 确定按钮文字
    onCancle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // 点击取消
    onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // 修改值
    onOpenChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // 修改值
    onClickTitle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // 点击文本
    onClickRoot: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, // 点击文本
    value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any, // 初始值
    inputWith: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any, // 文本框宽
    placeholder: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any, // 文本框提示
    className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // 根部className
    style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, // 根部样式
    showValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, // 显示默认值
    showOpenChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // 显示修改按钮
    flagInit: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, // 初始化
    openRootClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // 出现文本框的时候，根目录className
    closeRootClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, // 没有出现文本框的时候，根目录className
    hover: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool // 鼠标移过去才显示修改按钮

};
/* harmony default export */ __webpack_exports__["default"] = (ChangeText);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--1-1!../../node_modules/_postcss-loader@2.0.9@postcss-loader/lib/index.js??ref--1-2!../../node_modules/_stylus-loader@3.0.1@stylus-loader/index.js??ref--1-3!./index.styl", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--1-1!../../node_modules/_postcss-loader@2.0.9@postcss-loader/lib/index.js??ref--1-2!../../node_modules/_stylus-loader@3.0.1@stylus-loader/index.js??ref--1-3!./index.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".ChangeText__UxqLo {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.ChangeText__UxqLo button {\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n.ChangeText__UxqLo button:hover {\n  background: #ececec;\n  -webkit-border-radius: 5px;\n          border-radius: 5px;\n}\n.ChangeText__UxqLo input {\n  outline: none;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  border: 1px solid #d8d8d8;\n  padding: 3px;\n  font-size: 14px;\n  padding-left: 6px;\n}\n.ChangeText__UxqLo p {\n  margin: 0;\n}\n.ChangeText-value__3j6j8 {\n  margin-right: 8px !important;\n  font-size: 14px;\n  padding: 3px;\n  padding-left: 6px;\n}\n.ChangeText-close__3tCXy, .ChangeText-open__3IvPy {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.ChangeText-close__3tCXy > *:nth-child(n+2), .ChangeText-open__3IvPy > *:nth-child(n+2) {\n  margin-left: 10px;\n}\n", ""]);

// exports
exports.locals = {
	"ChangeText": "ChangeText__UxqLo",
	"ChangeText-value": "ChangeText-value__3j6j8",
	"ChangeText-close": "ChangeText-close__3tCXy",
	"ChangeText-open": "ChangeText-open__3IvPy"
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ })
/******/ ]);
});