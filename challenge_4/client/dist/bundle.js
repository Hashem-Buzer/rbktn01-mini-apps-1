/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/Component1.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/Component1.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component2_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component2.jsx */ \"./client/src/components/Component2.jsx\");\n // Row component\n\nvar Row = function Row(_ref) {\n  var row = _ref.row,\n      play = _ref.play;\n  return React.createElement(\"tr\", null, row.map(function (cell, i) {\n    return React.createElement(_Component2_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: i,\n      value: cell,\n      columnIndex: i,\n      play: play\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ29tcG9uZW50MS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ29tcG9uZW50MS5qc3g/NTNmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2VsbCBmcm9tIFwiLi9Db21wb25lbnQyLmpzeFwiO1xyXG5cclxuLy8gUm93IGNvbXBvbmVudFxyXG5jb25zdCBSb3cgPSAoeyByb3csIHBsYXkgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIHtyb3cubWFwKChjZWxsLCBpKSA9PiAoXHJcbiAgICAgICAgPENlbGwga2V5PXtpfSB2YWx1ZT17Y2VsbH0gY29sdW1uSW5kZXg9e2l9IHBsYXk9e3BsYXl9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm93O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Component1.jsx\n");

/***/ }),

/***/ "./client/src/components/Component2.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/Component2.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Cell = function Cell(_ref) {\n  var value = _ref.value,\n      columnIndex = _ref.columnIndex,\n      play = _ref.play;\n  var color = \"white\";\n\n  if (value === 1) {\n    color = \"red\";\n  } else if (value === 2) {\n    color = \"green\";\n  }\n\n  return React.createElement(\"td\", null, React.createElement(\"div\", {\n    className: \"cell\",\n    onClick: function onClick() {\n      play(columnIndex);\n    }\n  }, React.createElement(\"div\", {\n    className: color\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ29tcG9uZW50Mi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ29tcG9uZW50Mi5qc3g/OTQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDZWxsID0gKHsgdmFsdWUsIGNvbHVtbkluZGV4LCBwbGF5IH0pID0+IHtcclxuICBsZXQgY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgaWYgKHZhbHVlID09PSAxKSB7XHJcbiAgICBjb2xvciA9IFwicmVkXCI7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gMikge1xyXG4gICAgY29sb3IgPSBcImdyZWVuXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRkPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2VsbFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcGxheShjb2x1bW5JbmRleCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb2xvcn0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC90ZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Component2.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Component1_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Component1.jsx */ \"./client/src/components/Component1.jsx\");\n/* harmony import */ var _components_Component2_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Component2.jsx */ \"./client/src/components/Component2.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      player1: 1,\n      player2: 2,\n      currentPlayer: null,\n      board: [],\n      gameOver: false,\n      message: \"\"\n    }; // Bind play function to App component\n\n    _this.play = _this.play.bind(_assertThisInitialized(_this));\n    return _this;\n  } // Starts new game\n\n\n  _createClass(App, [{\n    key: \"initBoard\",\n    value: function initBoard() {\n      $(\"#court\").slideDown();\n      $(\".button\").text(\"New Game\"); // Create a blank 6x7 matrix\n\n      var board = [];\n\n      for (var r = 0; r < 6; r++) {\n        var row = [];\n\n        for (var c = 0; c < 7; c++) {\n          row.push(null);\n        }\n\n        board.push(row);\n      }\n\n      this.setState({\n        board: board,\n        currentPlayer: this.state.player1,\n        gameOver: false,\n        message: \"\"\n      });\n    }\n  }, {\n    key: \"togglePlayer\",\n    value: function togglePlayer() {\n      return this.state.currentPlayer === this.state.player1 ? this.state.player2 : this.state.player1;\n    }\n  }, {\n    key: \"play\",\n    value: function play(c) {\n      if (!this.state.gameOver) {\n        // Place piece on board\n        var board = this.state.board;\n\n        for (var r = 5; r >= 0; r--) {\n          if (!board[r][c]) {\n            board[r][c] = this.state.currentPlayer;\n            break;\n          }\n        } // Check status of board\n\n\n        var result = this.checkAll(board);\n\n        if (result === this.state.player1) {\n          this.setState({\n            board: board,\n            gameOver: true,\n            message: \"Player 1 (red) wins!\"\n          });\n        } else if (result === this.state.player2) {\n          this.setState({\n            board: board,\n            gameOver: true,\n            message: \"Player 2 (green) wins!\"\n          });\n        } else if (result === \"draw\") {\n          this.setState({\n            board: board,\n            gameOver: true,\n            message: \"Draw game.\"\n          });\n        } else {\n          this.setState({\n            board: board,\n            currentPlayer: this.togglePlayer()\n          });\n        }\n      } else {\n        this.setState({\n          message: \"Game over. Please start a new game.\"\n        });\n      }\n    } ////////////////////////////// Start of CheckFunctions //////////////////////////////\n\n  }, {\n    key: \"checkColumn\",\n    value: function checkColumn(board) {\n      // Check only if row is 3 or greater\n      for (var r = 3; r < 6; r++) {\n        for (var c = 0; c < 7; c++) {\n          if (board[r][c]) {\n            if (board[r][c] === board[r - 1][c] && board[r][c] === board[r - 2][c] && board[r][c] === board[r - 3][c]) {\n              return board[r][c];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkRow\",\n    value: function checkRow(board) {\n      // Check only if column is 3 or less\n      for (var r = 0; r < 6; r++) {\n        for (var c = 0; c < 4; c++) {\n          if (board[r][c]) {\n            if (board[r][c] === board[r][c + 1] && board[r][c] === board[r][c + 2] && board[r][c] === board[r][c + 3]) {\n              return board[r][c];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkDiagonalRight\",\n    value: function checkDiagonalRight(board) {\n      // Check only if row is 3 or greater AND column is 3 or less\n      for (var r = 3; r < 6; r++) {\n        for (var c = 0; c < 4; c++) {\n          if (board[r][c]) {\n            if (board[r][c] === board[r - 1][c + 1] && board[r][c] === board[r - 2][c + 2] && board[r][c] === board[r - 3][c + 3]) {\n              return board[r][c];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkDiagonalLeft\",\n    value: function checkDiagonalLeft(board) {\n      // Check only if row is 3 or greater AND column is 3 or greater\n      for (var r = 3; r < 6; r++) {\n        for (var c = 3; c < 7; c++) {\n          if (board[r][c]) {\n            if (board[r][c] === board[r - 1][c - 1] && board[r][c] === board[r - 2][c - 2] && board[r][c] === board[r - 3][c - 3]) {\n              return board[r][c];\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkTie\",\n    value: function checkTie(board) {\n      for (var r = 0; r < 6; r++) {\n        for (var c = 0; c < 7; c++) {\n          if (board[r][c] === null) {\n            return null;\n          }\n        }\n      }\n\n      return \"tie\";\n    }\n  }, {\n    key: \"checkAll\",\n    value: function checkAll(board) {\n      return this.checkColumn(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkRow(board) || this.checkTie(board);\n    } ////////////////////////////// End of CheckFunctions //////////////////////////////\n\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      this.initBoard();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        className: \"button\",\n        onClick: function onClick() {\n          _this2.initBoard();\n        }\n      }, \"start\"), React.createElement(\"table\", {\n        id: \"court\",\n        hidden: true\n      }, React.createElement(\"thead\", null), React.createElement(\"tbody\", null, this.state.board.map(function (row, i) {\n        return React.createElement(_components_Component1_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          key: i,\n          row: row,\n          play: _this2.play\n        });\n      }))), React.createElement(\"p\", {\n        className: \"message\"\n      }, this.state.message));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById(\"main\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdyBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudDEuanN4XCI7XHJcbmltcG9ydCBDZWxsIGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcG9uZW50Mi5qc3hcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwbGF5ZXIxOiAxLFxyXG4gICAgICBwbGF5ZXIyOiAyLFxyXG4gICAgICBjdXJyZW50UGxheWVyOiBudWxsLFxyXG4gICAgICBib2FyZDogW10sXHJcbiAgICAgIGdhbWVPdmVyOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgIH07XHJcblxyXG4gICAgLy8gQmluZCBwbGF5IGZ1bmN0aW9uIHRvIEFwcCBjb21wb25lbnRcclxuICAgIHRoaXMucGxheSA9IHRoaXMucGxheS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gU3RhcnRzIG5ldyBnYW1lXHJcbiAgaW5pdEJvYXJkKCkge1xyXG4gICAgJChcIiNjb3VydFwiKS5zbGlkZURvd24oKTtcclxuICAgICQoXCIuYnV0dG9uXCIpLnRleHQoXCJOZXcgR2FtZVwiKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBibGFuayA2eDcgbWF0cml4XHJcbiAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgIGZvciAobGV0IHIgPSAwOyByIDwgNjsgcisrKSB7XHJcbiAgICAgIGxldCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA3OyBjKyspIHtcclxuICAgICAgICByb3cucHVzaChudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBib2FyZC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGJvYXJkLFxyXG4gICAgICBjdXJyZW50UGxheWVyOiB0aGlzLnN0YXRlLnBsYXllcjEsXHJcbiAgICAgIGdhbWVPdmVyOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGxheWVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudFBsYXllciA9PT0gdGhpcy5zdGF0ZS5wbGF5ZXIxXHJcbiAgICAgID8gdGhpcy5zdGF0ZS5wbGF5ZXIyXHJcbiAgICAgIDogdGhpcy5zdGF0ZS5wbGF5ZXIxO1xyXG4gIH1cclxuXHJcbiAgcGxheShjKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuZ2FtZU92ZXIpIHtcclxuICAgICAgLy8gUGxhY2UgcGllY2Ugb24gYm9hcmRcclxuICAgICAgbGV0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcclxuICAgICAgZm9yIChsZXQgciA9IDU7IHIgPj0gMDsgci0tKSB7XHJcbiAgICAgICAgaWYgKCFib2FyZFtyXVtjXSkge1xyXG4gICAgICAgICAgYm9hcmRbcl1bY10gPSB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENoZWNrIHN0YXR1cyBvZiBib2FyZFxyXG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5jaGVja0FsbChib2FyZCk7XHJcbiAgICAgIGlmIChyZXN1bHQgPT09IHRoaXMuc3RhdGUucGxheWVyMSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgYm9hcmQsXHJcbiAgICAgICAgICBnYW1lT3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiUGxheWVyIDEgKHJlZCkgd2lucyFcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IHRoaXMuc3RhdGUucGxheWVyMikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgYm9hcmQsXHJcbiAgICAgICAgICBnYW1lT3ZlcjogdHJ1ZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiUGxheWVyIDIgKGdyZWVuKSB3aW5zIVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJkcmF3XCIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQsIGdhbWVPdmVyOiB0cnVlLCBtZXNzYWdlOiBcIkRyYXcgZ2FtZS5cIiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQsIGN1cnJlbnRQbGF5ZXI6IHRoaXMudG9nZ2xlUGxheWVyKCkgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBcIkdhbWUgb3Zlci4gUGxlYXNlIHN0YXJ0IGEgbmV3IGdhbWUuXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBTdGFydCBvZiBDaGVja0Z1bmN0aW9ucyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjaGVja0NvbHVtbihib2FyZCkge1xyXG4gICAgLy8gQ2hlY2sgb25seSBpZiByb3cgaXMgMyBvciBncmVhdGVyXHJcbiAgICBmb3IgKGxldCByID0gMzsgciA8IDY7IHIrKykge1xyXG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDc7IGMrKykge1xyXG4gICAgICAgIGlmIChib2FyZFtyXVtjXSkge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbciAtIDFdW2NdICYmXHJcbiAgICAgICAgICAgIGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gMl1bY10gJiZcclxuICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAzXVtjXVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBib2FyZFtyXVtjXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrUm93KGJvYXJkKSB7XHJcbiAgICAvLyBDaGVjayBvbmx5IGlmIGNvbHVtbiBpcyAzIG9yIGxlc3NcclxuICAgIGZvciAobGV0IHIgPSAwOyByIDwgNjsgcisrKSB7XHJcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNDsgYysrKSB7XHJcbiAgICAgICAgaWYgKGJvYXJkW3JdW2NdKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGJvYXJkW3JdW2NdID09PSBib2FyZFtyXVtjICsgMV0gJiZcclxuICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3JdW2MgKyAyXSAmJlxyXG4gICAgICAgICAgICBib2FyZFtyXVtjXSA9PT0gYm9hcmRbcl1bYyArIDNdXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJvYXJkW3JdW2NdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tEaWFnb25hbFJpZ2h0KGJvYXJkKSB7XHJcbiAgICAvLyBDaGVjayBvbmx5IGlmIHJvdyBpcyAzIG9yIGdyZWF0ZXIgQU5EIGNvbHVtbiBpcyAzIG9yIGxlc3NcclxuICAgIGZvciAobGV0IHIgPSAzOyByIDwgNjsgcisrKSB7XHJcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNDsgYysrKSB7XHJcbiAgICAgICAgaWYgKGJvYXJkW3JdW2NdKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gMV1bYyArIDFdICYmXHJcbiAgICAgICAgICAgIGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gMl1bYyArIDJdICYmXHJcbiAgICAgICAgICAgIGJvYXJkW3JdW2NdID09PSBib2FyZFtyIC0gM11bYyArIDNdXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJvYXJkW3JdW2NdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tEaWFnb25hbExlZnQoYm9hcmQpIHtcclxuICAgIC8vIENoZWNrIG9ubHkgaWYgcm93IGlzIDMgb3IgZ3JlYXRlciBBTkQgY29sdW1uIGlzIDMgb3IgZ3JlYXRlclxyXG4gICAgZm9yIChsZXQgciA9IDM7IHIgPCA2OyByKyspIHtcclxuICAgICAgZm9yIChsZXQgYyA9IDM7IGMgPCA3OyBjKyspIHtcclxuICAgICAgICBpZiAoYm9hcmRbcl1bY10pIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAxXVtjIC0gMV0gJiZcclxuICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAyXVtjIC0gMl0gJiZcclxuICAgICAgICAgICAgYm9hcmRbcl1bY10gPT09IGJvYXJkW3IgLSAzXVtjIC0gM11cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gYm9hcmRbcl1bY107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1RpZShib2FyZCkge1xyXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCA2OyByKyspIHtcclxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA3OyBjKyspIHtcclxuICAgICAgICBpZiAoYm9hcmRbcl1bY10gPT09IG51bGwpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwidGllXCI7XHJcbiAgfVxyXG5cclxuICBjaGVja0FsbChib2FyZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5jaGVja0NvbHVtbihib2FyZCkgfHxcclxuICAgICAgdGhpcy5jaGVja0RpYWdvbmFsUmlnaHQoYm9hcmQpIHx8XHJcbiAgICAgIHRoaXMuY2hlY2tEaWFnb25hbExlZnQoYm9hcmQpIHx8XHJcbiAgICAgIHRoaXMuY2hlY2tSb3coYm9hcmQpIHx8XHJcbiAgICAgIHRoaXMuY2hlY2tUaWUoYm9hcmQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEVuZCBvZiBDaGVja0Z1bmN0aW9ucyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdGhpcy5pbml0Qm9hcmQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Qm9hcmQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgc3RhcnRcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHRhYmxlIGlkPVwiY291cnRcIiBoaWRkZW4+XHJcbiAgICAgICAgICA8dGhlYWQ+PC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYm9hcmQubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICA8Um93IGtleT17aX0gcm93PXtyb3d9IHBsYXk9e3RoaXMucGxheX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFiQTtBQWNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBT0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBR0E7Ozs7QUF4TUE7QUFDQTtBQTBNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });