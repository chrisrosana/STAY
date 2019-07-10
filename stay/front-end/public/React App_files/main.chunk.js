(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root{\n  --maindark: #232528;\n } \n\n.body{\n  /*background-color: lightgrey;*/\n  color:black;\n  font-family:sans-serif; \n  font-size:16px;\n  font-weight:normal, sans-serif;\n  line-height:1.5em;\n  margin:0; \n}\n\n.App {\n  text-align: center;\n\n}\n\n\n\n.footer{\n  background:#333;\n  color:#fff;\n  text-align: center;\n  padding: 20px;\n}\n\n#navbar{\n  padding-left: 8%;\n  margin-right: auto;\n  margin-left: auto;\n  background-color: black;\n  /*color: white;*/\n}\n\n#navbar ul{\n  padding:0;\n  list-style:none;\n}\n\n#navbar li{\n  display: -webkit-inline-flex;\n  display: inline-flex;\n}\n\n\n#navbar a{\n  text-decoration: none; \n  font-size:20px;\n  padding-right: 20px;\n  color: white;\n}\n\n#navbar a:hover {\n  color: #064579;\n}\n\n\n/*\nbutton { \n  background-color: blue;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  cursor: pointer;\n  width: auto;\n\n}\n\nbutton:hover {\n  opacity:0.5;\n}*/\n\ndiv {\n    display: block;\n}\n\ninput[type=email], input[type=password], textarea {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\n/*.container{\n  width: 90%;\n  margin: 0 auto;\n  overflow: hidden;\n  float: auto;\n  padding: 10px;\n}*/\n\n\n.submit-btn{\nwidth: 100%;\n}\n\n\n.search-box{\n  width: 30%;\n  box-sizing: border-box;\n  border: 2px solid #ddd;\n  border-radius: 4px;\n  font-size: 16px;\n  padding: 12px 20px 12px 40px;\n  transition: width 0.5s ease-in-out;\n}\n\n.search-box:focus {\n  width: 50%;\n}\n\n.categories{\n  box-sizing: border-box;\n  border: 2px solid #ddd;\n  border-radius: 4px;\n  font-size: 16px;\n  padding: 12px 20px 12px 40px;\n}\n\n\n.title{\n  text-align: center;\n  font-size: 30px;\n  color: orange;\n}\n\n/* Extra styles for the cancel button */\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n/* Center the image and position the close button */\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n  position: relative;\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\n\n/* Modal Content/Box */\n.modal-content {\n/*  display: none; \n  position: fixed; \n  background-color: #fefefe;\n  margin: 5%;\n  border: 1px solid #888;\n  width: 50%;\n  padding: 2%;\n\nmargin-left: 50%; \nmargin-right: 50%;\nposition: fixed; \nz-index: 9;*/\nposition: fixed;\n}\n\n/* The Close Button (x) */\n.close {\n  position: absolute;\n  right: 25px; \n  top: 0;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n\n.close:hover, .close:focus {\n  color: red;\n  cursor: pointer;\n}\n\n.cancel_box{\n  background-color:#f1f1f1;\n}\n\n/*sidebar for the left menu*/\n.sidebar{\n  padding: 20px;\n  background-color: grey;/* #eee*/\n  color:white;\n  /*box-sizing:border-box;*/\n  height: 350px;\n  position: relative;\n    overflow-y: scroll;\n  overflow-x: hidden;\n  /*z-index: 1;*/\n  cursor: pointer;\n    width: 95%;\n}\n\n.fullscreen{\n    top:0;\n    left:0;\n    bottom:0;\n    right:0;\n    height:100%;\n    width:100%;\n}\n\n\n\n\n\n\n\n.overlay {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0, 0.9);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n\n.overlay-content {\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.overlay a {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.overlay a:hover, .overlay a:focus {\n  color: #f1f1f1;\n}\n\n.overlay .closebtn {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .overlay a {font-size: 20px}\n  .overlay .closebtn {\n  font-size: 40px;\n  top: 15px;\n  right: 35px;\n  }\n}\n\n\n.container{\n  width: 95%;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n}\n\n\n.main-block{\n  float: right;\n  padding: 20px;\n  box-sizing:border-box;\n  background-color: white;\n  -webkit-flex: 0 0 19%;\n          flex: 0 0 19%;\n    width: 80%;\n\n  /*position: relative;*/\n}\n\n\n\n.post-container {\n  /*max-width: 600px;*/\n  width:600px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width textarea */\n.postcontainer textarea {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n  resize: none;\n  min-height: 400px;\n}\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Main_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Main_header */ "./src/Main_header.js");
/* harmony import */ var _Main_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Main_content */ "./src/Main_content.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/App.js";


 // import { Route } from 'react-router-dom'


 // import { browserHistory } from 'react-router'; 
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import 'bootstrap/dist/css/bootstrap.css';




var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Main_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        id: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, " Home "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, " About "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, " Service "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "contact.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " Contact "), " ")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Main_content__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Copyright ", "\xA9", " 2019 SFSU-Team-02")));

      Object(react_dom__WEBPACK_IMPORTED_MODULE_11__["render"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(App, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), document.getElementById("root"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Item.js":
/*!*********************!*\
  !*** ./src/Item.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./src/routes.js");





var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/Item.js";
 // import { ProductProvider, ProductConsumer } from "./ProductContext"





var Item =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Item, _Component);

  function Item(props) {
    var _this;

    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Item);

    _this = Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Item).call(this, props));
    _this.state = {
      like: false
    };
    return _this;
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Item, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$item = this.props.item,
          id = _this$props$item.id,
          img = _this$props$item.img,
          category = _this$props$item.category,
          room = _this$props$item.room,
          price = _this$props$item.price,
          descrition = _this$props$item.descrition;
      return (// <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-md-6 my-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "img-container p-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
          to: "/details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: img,
          alt: "House Image",
          className: "card-img-top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card-body",
          style: {
            color: 'blue'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, " Housing Type: ", category, " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, " Rooms: ", room, " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, " Price: $", price, "/month ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "btn btn-lighting",
          onClick: function onClick() {
            return _this2.setState({
              like: !_this2.state.like
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, this.state.like ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "heart fa fa-heart-o",
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, " like it? ") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "heart fa fa-heart-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, " like it? ")))))
      );
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



Item: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  img: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  category: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  room: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  price: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  descrition: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
});

/***/ }),

/***/ "./src/ListingItems.js":
/*!*****************************!*\
  !*** ./src/ListingItems.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListingItems; });
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ "./src/Item.js");
/* harmony import */ var _ProductContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductContext */ "./src/ProductContext.js");





var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/ListingItems.js";

 // import { ProductProvider, ProductConsumer } from "./ProductContext"



var ListingItems =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ListingItems, _Component);

  function ListingItems(props) {
    var _this;

    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListingItems);

    _this = Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ListingItems).call(this, props));
    _this.state = {
      // take inf from database
      produce: []
    };
    return _this;
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListingItems, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ProductContext__WEBPACK_IMPORTED_MODULE_7__["ProductConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, function (value) {
        // productconsume will wrap all data context in productcontext file
        return value.products.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: item.id,
            item: item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }); //loop through all the data
        });
      })));
    }
  }]);

  return ListingItems;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/LoginForm.js":
/*!**************************!*\
  !*** ./src/LoginForm.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/LoginForm.js";


var LoginForm =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LoginForm, _Component);

  function LoginForm(props) {
    var _this;

    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LoginForm);

    _this = Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginForm).call(this));
    _this.state = {
      data: {
        email: '',
        password: ''
      }
    };
    _this.handleChange = _this.handleChange.bind(Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    _this.submitLogin = _this.submitLogin.bind(Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    return _this;
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        data: Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state.data, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value))
      });
    }
  }, {
    key: "submitLogin",
    value: function submitLogin(event) {
      // event.preventDefault();
      // console.log(this.state.data)
      this.props.login_submit(this.state.data);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        className: "modal-content",
        onSubmit: this.submitLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "imgcontainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "close",
        title: "Close Login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Username")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "email",
        type: "email",
        placeholder: "Your Email *",
        name: "email",
        value: this.state.data.email,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Password")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "password",
        type: "password",
        placeholder: "Your Password *",
        name: "password",
        value: this.state.data.password,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-success submit-btn",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cancel_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "cancelbtn",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "psw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Forgot ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "password?"))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/Main_content.js":
/*!*****************************!*\
  !*** ./src/Main_content.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ListingItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListingItems */ "./src/ListingItems.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/Main_content.js";

 // import {ProductProvider, ProductConsumer} from "./ProductContext"
// import {Switch, Route} from "react-router-dom"



var Main_content =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Main_content, _Component);

  function Main_content(props) {
    var _this;

    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Main_content);

    _this = Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Main_content).call(this, props));
    _this.state = {
      min_price: '',
      max_price: '',
      distance: '',
      zipcode: '',
      room: '',
      isPostingOpen: false
    };
    return _this;
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Main_content, [{
    key: "onChange",
    value: function onChange(num, event) {
      this.setState(Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, " Menu "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Post your photo here."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        id: "right-listing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Recent Activity")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Help & Support")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Setting")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Logout")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        action: "/action_page.php",
        method: "get",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, " Filter"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        action: "",
        method: "get",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "searchfieldlabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Distance: "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        max: "200",
        min: "0",
        inputMode: "numeric",
        placeholder: "miles",
        name: "distance",
        value: this.state.distance,
        onChange: this.onChange.bind(this, 'distance'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "zip",
        name: "zipcode",
        placeholder: "Your current zip code",
        type: "number",
        pattern: "[0-9]*",
        max: "99999",
        value: this.state.zipcode,
        onChange: this.onChange.bind(this, 'distance'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "searchfieldlabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Price"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        min: "0",
        max: "9999.00",
        name: "min_price",
        inputMode: "numeric",
        placeholder: "min",
        title: "whole number, no letters or symbols",
        value: this.state.min_price,
        onChange: this.onChange.bind(this, 'min_price'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        name: "max_price",
        inputMode: "numeric",
        placeholder: "max",
        min: "0",
        max: "9999.00",
        title: "whole number, no letters or symbols",
        value: this.state.max_price,
        onChange: this.onChange.bind(this, 'max_price'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "searchfieldlabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Rooms"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        min: "0",
        max: "4",
        name: "room",
        inputMode: "numeric",
        placeholder: "num",
        title: "whole number, no letters or symbols",
        value: this.state.room,
        onChange: this.onChange.bind(this, 'room'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this2.setState({
            isPostingOpen: !_this2.state.isPostingOpen
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Posting "), this.state.isPostingOpen && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Posting, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/ListingItems",
        component: _ListingItems__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ListingItems__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }))));
    }
  }]);

  return Main_content;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); //


var Posting =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Posting, _React$Component);

  function Posting(props) {
    var _this3;

    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Posting);

    _this3 = Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Posting).call(this, props));
    _this3.state = {
      min_price: null,
      max_price: null,
      distance: null,
      zipcode: null
    };
    return _this3;
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Posting, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "imgcontainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "close",
        title: "Close Login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Username")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "email",
        type: "email",
        placeholder: "Your Email *",
        name: "email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Password")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "password",
        type: "password",
        placeholder: "Your Password *",
        name: "password",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "describe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Describe Housing Type")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
        id: "subject",
        name: "subject",
        placeholder: "Write something..",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-success submit-btn",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      })));
    }
  }]);

  return Posting;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main_content);

/***/ }),

/***/ "./src/Main_header.js":
/*!****************************!*\
  !*** ./src/Main_header.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _RegisterForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RegisterForm.js */ "./src/RegisterForm.js");
/* harmony import */ var _LoginForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginForm.js */ "./src/LoginForm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/Main_header.js";


 // import './Main_header.css';
// import Validator from 'validator';
// import './Login.css'
// import './Register.css'



var Main_header =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Main_header, _Component);

  function Main_header(props) {
    var _this;

    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main_header);

    _this = Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main_header).call(this, props));
    _this.state = {
      isLoginOpen: false,
      isRegisterOpen: false
    };
    return _this;
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main_header, [{
    key: "closeLogin",
    value: function closeLogin() {
      this.setState({
        isLoginOpen: false
      });
    }
  }, {
    key: "closeRegister",
    value: function closeRegister() {
      this.setState({
        isRegisterOpen: false
      });
    }
  }, {
    key: "login_data",
    value: function login_data(data) {
      alert("Data is sent from LoginForm"); // console.log(data)
      // this.props.login(data).then(() => this.props.history.push("/"));
    }
  }, {
    key: "register_data",
    value: function register_data(data) {
      alert("Data is sent from RegisterForm"); // console.log(data)
      // this.props.register(data).then(() => this.props.history.push("/"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-3",
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "./home.svg",
        style: {
          width: '20%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), "STAY")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        type: "text",
        id: "search",
        name: "search",
        value: "<%= searchTerm %>",
        placeholder: "Search...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        type: "search",
        name: "search",
        placeholder: "Search..",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        name: "category",
        id: "category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, " Housing types "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "Housing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, " Housing "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "Apartment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, " Apartment "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "Studio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, " Studio ")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-info btn-lg",
        style: {
          color: 'blue'
        },
        onClick: function onClick() {
          return _this2.setState({
            isLoginOpen: !_this2.state.isLoginOpen,
            isRegisterOpen: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Login ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-info btn-lg",
        style: {
          color: 'blue'
        },
        onClick: function onClick() {
          return _this2.setState({
            isRegisterOpen: !_this2.state.isRegisterOpen,
            isLoginOpen: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Register")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "fullscreen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.state.isLoginOpen && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LoginForm_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        login_submit: this.login_data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), this.state.isRegisterOpen && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_RegisterForm_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        register_submit: this.register_data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })));
    }
  }]);

  return Main_header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // class LoginForm extends React.Component{
// 	constructor(props) {
//     super();
//     this.state = {
//     data : { email: '', password:''}
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.submitLogin = this.submitLogin.bind(this);
//   }
//   handleChange(event){
//   	this.setState({
//        data: {...this.state.data, [event.target.name]: event.target.value }
//     });
//   }
//   submitLogin(event) {
//     event.preventDefault();
//     // console.log(this.state.data)
//     this.props.submit(this.state.data);
//   }
// 	render() {
// 		return(
//         <form className="modal-content" onSubmit={this.submitLogin} action="/action_page.php">
//           <div className="imgcontainer">
//                 <span className="close" title="Close Login">&times;</span>
//           </div> 
//           <div className="container">
//               <div className="title">Login</div>
//                 <label htmlFor="email"><b>Username</b></label>
//                 <input id="email" type="email" placeholder="Your Email *" name="email" 
//                     value={this.state.data.email} onChange={this.handleChange} required />
//                 <br/>
//                 <label htmlFor="password"><b>Password</b></label>
//                 <input id="password" type="password" placeholder="Your Password *" name="password" 
//                   value={this.state.data.password} onChange={this.handleChange} required/>
//                 <br/>
//                 <hr />
//                  <button className="btn btn-success submit-btn" type="submit">Submit</button>
//                 <br/>
//               </div>
//               <div className="cancel_box">
//                 <button className="cancelbtn" type="button">Cancel</button>
//                 <span className="psw">Forgot <a href="#">password?</a></span>
//                </div>
//         </form>
// 		);
// 	}
// }
// class RegisterForm extends React.Component{
//   constructor() {
//     super();
//     this.state = {
//       data: {email: '', password:'', repeat_pwd:''}
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.submitRegister = this.submitRegister.bind(this);
//   }
//   handleChange(event){
//     this.setState({
//        data: {...this.state.data, [event.target.name]: event.target.value}
//     });
//   }
//   submitRegister(event){
//     // console.log(this.state.data)
//     event.preventDefault();
//     this.props.submit(this.state.data);
//   }
// 	render() {
// 		return(
// 			<form className="modal-content" onSubmit={this.submitRegister} action="/action_page.php">
//           <div>
//                 <span className="close imgcontainer" title="Close Login">&times;</span>
//           </div> 
//           <div className="container">
//               <div className="title">Register</div>
//                 <label htmlFor="email"><b>Username</b></label>
//                 <input id="email" type="email" placeholder="Your Email *" name="email" 
//                     value={this.state.data.email} onChange={this.handleChange} required />
//               <br/>
//                 <label htmlFor="password"><b>Password</b></label>
//                 <input id="password" type="password" placeholder="Your Password *" name="password" 
//                   value={this.state.data.password} onChange={this.handleChange} required/>
//               <br/>
//       					<label htmlFor="password"><b>Repeat Password</b></label>
//       					<input id="repeat_pwd" type="password" placeholder="Repeat Password *" name="repeat_pwd" 
//                   value={this.state.data.repeat_pwd} onChange={this.handleChange}  required />
//       				<br/> 
//       				<hr />
//           				<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> 
//       					<button className="btn btn-success submit-btn" type="submit">Submit</button>
//       				<br/>
//     			</div>
//     			<div className="cancel_box">
//              		<p>Already have an account? <a href="{<Login />}">Sign in</a>.</p>     
//    				 </div>
//   			</form>
// 		);
// 	}
// }
// Create connection to database server
// const mysql = require('mysql');
// var database = mysql.createConnection({
//   host: '35.184.154.242',
//   user: 'root',
//   password: 'root',
//   database: 'users'
// });
// database.connect(function(err) {
//     if (err) throw err;
//     console.log('connected');
//     database.query('use example');
// });
// function search(req, res, next){
//     var searchTerm = req.query.search;
//     var category = req.query.category;
//     let query = 'SELECT * FROM Posting';
//     //search without category
//     if(searchTerm != '' && category != ''){
//         query = 'SELECT * FROM Posting WHERE category =  + category +  LIKE "%' +
//         searchTerm  + '%';
//     }
//     //search with category
//     else if(searchTerm != '' && category == ''){
//       query = `SELECT * FROM  Posting WHERE Name LIKE '%` + searchTerm + `%' OR Comment
//       LIKE '%` + SearchTerm + `%';
//     }
//   }
// LoginForm.propTypes = {
//   submit: PropTypes.func.isRequired
// };
// RegisterForm.propTypes = {
//   submit: PropTypes.func.isRequired
// };
// Main_header.propTypes = {
//   history: PropTypes.shape({ pudh: PropTypes.func.isRequired}).isRequired,
//   login: PropTypes.func.isRequired
// }


/* harmony default export */ __webpack_exports__["default"] = (Main_header);

/***/ }),

/***/ "./src/ProductContext.js":
/*!*******************************!*\
  !*** ./src/ProductContext.js ***!
  \*******************************/
/*! exports provided: ProductProvider, ProductConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductProvider", function() { return ProductProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConsumer", function() { return ProductConsumer; });
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "./src/data.js");






var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/ProductContext.js";


var context = react__WEBPACK_IMPORTED_MODULE_6___default.a.createContext(); //consumer and provider

var ProductProvider =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductProvider, _Component);

  function ProductProvider() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProductProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      products: _data__WEBPACK_IMPORTED_MODULE_7__["database"]
    };
    return _this;
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductProvider, [{
    key: "render",
    // componentDidMount{
    // 	this.setProducts();
    // };
    // setProduct = () => {
    // 	let tempProducts = [];
    // 	database.forEach(item => {
    // 		const singleItem = {...item};
    // 		tempProducts = [...tempProducts, singleItem];
    // 	});
    // 	this.setState(() => {
    // 		return { products: tempProducts };
    // 	});
    // };
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(context.Provider, {
        value: Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return ProductProvider;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var ProductConsumer = context.Consumer;


/***/ }),

/***/ "./src/RegisterForm.js":
/*!*****************************!*\
  !*** ./src/RegisterForm.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/RegisterForm.js";


var RegisterForm =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RegisterForm, _Component);

  function RegisterForm() {
    var _this;

    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RegisterForm);

    _this = Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RegisterForm).call(this));
    _this.state = {
      data: {
        email: '',
        password: '',
        repeat_pwd: ''
      }
    };
    _this.handleChange = _this.handleChange.bind(Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    _this.submitRegister = _this.submitRegister.bind(Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    return _this;
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RegisterForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        data: Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state.data, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value))
      });
    }
  }, {
    key: "submitRegister",
    value: function submitRegister(event) {
      // event.preventDefault();
      this.props.register_submit(this.state.data);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        className: "modal-content",
        onSubmit: this.submitRegister,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "close imgcontainer",
        title: "Close Login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Register"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Username")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "email",
        type: "email",
        placeholder: "Your Email *",
        name: "email",
        value: this.state.data.email,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Password")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "password",
        type: "password",
        placeholder: "Your Password *",
        name: "password",
        value: this.state.data.password,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Repeat Password")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "repeat_pwd",
        type: "password",
        placeholder: "Repeat Password *",
        name: "repeat_pwd",
        value: this.state.data.repeat_pwd,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "By creating an account you agree to our ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Terms & Privacy"), "."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-success submit-btn",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cancel_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Already have an account? ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "{<Login />}",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Sign in"), ".")));
    }
  }]);

  return RegisterForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
var database = [{
  id: 1,
  img: "./housingtype/house1.jpg",
  category: "studio",
  room: 2,
  price: 2000,
  descrition: "Deposit one month + $500 cleaning, allow to have pet(s)"
}, {
  id: 2,
  img: "./housingtype/house2.jpg",
  category: "house",
  room: 2,
  price: 2500,
  descrition: "Deposit one month + $500 cleaning, allow to have pet(s)"
}, {
  id: 3,
  img: "./housingtype/house3.jpg",
  category: "house",
  room: 4,
  price: 4000,
  descrition: "Deposit one month + $500 cleaning, allow to have pet(s)"
}, {
  id: 4,
  img: "./housingtype/house3.jpg",
  category: "apartment",
  room: 2,
  price: 1500,
  descrition: "Deposit one month + $500 cleaning, allow to have pet(s)"
}, {
  id: 5,
  img: "./housingtype/house1.jpg",
  category: "studio",
  room: '0',
  price: 1000,
  descrition: "Deposit one month + $500 cleaning, allow to have pet(s)"
}, {
  id: 6,
  img: "./housingtype/house2.jpg",
  category: "house",
  room: '3',
  price: 3500,
  descrition: "Deposit one month + $500 cleaning, allow to have pet(s)"
}, {
  id: 7,
  img: "./housingtype/house1.jpg",
  category: "studio",
  room: '0',
  price: 1300,
  descrition: "Deposit one month + $500 cleaning, allow to have pet(s)"
}, {
  id: 8,
  img: "./housingtype/house3.jpg",
  category: "apartment",
  room: '1',
  price: 2200,
  descrition: "Deposit one month + $500 cleaning, allow to have pet(s)"
}];

/***/ }),

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return details; });
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _ProductContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductContext */ "./src/ProductContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/details.js";





var details =
/*#__PURE__*/
function (_Component) {
  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(details, _Component);

  function details() {
    Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, details);

    return Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(details).apply(this, arguments));
  }

  Object(_Users_tle2015mac_Desktop_csc648_sp19_team02_team_page_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(details, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ProductContext__WEBPACK_IMPORTED_MODULE_7__["ProductConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, function (value) {
        var _value$detailsProduct = value.detailsProduct,
            id = _value$detailsProduct.id,
            img = _value$detailsProduct.img,
            category = _value$detailsProduct.category,
            room = _value$detailsProduct.room,
            price = _value$detailsProduct.price,
            descrition = _value$detailsProduct.descrition;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "container py-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, " ", category, " ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-10 mx-auto col-md-6 my-3 text-capitalize",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: img,
          className: "img-fluid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-10 mx-auto col-md-6 my-3 text-capitalize",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, " Housing Type: ", category), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, " Rooms: ", room), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, " Price: $", price, "/month"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, " Description: "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "text-muted lead",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, " ", descrition, " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, " Contact: blah blah.. ")))));
      });
    }
  }]);

  return details;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ProductContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductContext */ "./src/ProductContext.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( // <ProductProvider from context > </ProductProvider>
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductContext__WEBPACK_IMPORTED_MODULE_3__["ProductProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}))), document.getElementById('root')); // ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Main_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main_header */ "./src/Main_header.js");
/* harmony import */ var _Main_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main_content */ "./src/Main_content.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details */ "./src/details.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/routes.js";


 // import { Route } from 'react-router-dom'



 // import ListingItems from '.ListingItems'
// import { browserHistory } from 'react-router'; 
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import 'bootstrap/dist/css/bootstrap.css';



var Routes = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/details",
  component: _details__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
});

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/tle2015mac/Desktop/csc648-sp19-team02/team-page/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map