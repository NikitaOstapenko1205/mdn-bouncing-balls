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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/EvilBall.js":
/*!*************************!*\
  !*** ./src/EvilBall.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/Shape.js");
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCanvas */ "./src/createCanvas.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var EvilBall =
/*#__PURE__*/
function (_Shape) {
  _inherits(EvilBall, _Shape);

  function EvilBall(x, y, velX, velY, isGood, color, size) {
    var _this;

    _classCallCheck(this, EvilBall);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EvilBall).call(this, x, y, velX, velY, isGood));
    _this.color = color;
    _this.size = size;
    return _this;
  }

  _createClass(EvilBall, [{
    key: "draw",
    value: function draw() {
      _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvasObj"].beginPath();
      _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvasObj"].strokeStyle = this.color;
      _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvasObj"].lineWidth = 5;
      _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvasObj"].arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      _createCanvas__WEBPACK_IMPORTED_MODULE_1__["canvasObj"].stroke();
    }
  }, {
    key: "checkBounds",
    value: function checkBounds() {
      if (this.x + this.size >= _createCanvas__WEBPACK_IMPORTED_MODULE_1__["width"]) {
        this.x -= this.size;
      }

      if (this.x - this.size <= 0) {
        this.x += this.size;
      }

      if (this.y + this.size >= _createCanvas__WEBPACK_IMPORTED_MODULE_1__["height"]) {
        this.y -= this.size;
      }

      if (this.y - this.size <= 0) {
        this.y += this.size;
      }
    }
  }, {
    key: "setControls",
    value: function setControls() {
      var thisEvilBall = this;
      var btns = {
        a: 0,
        w: 0,
        s: 0,
        d: 0
      };

      window.onkeydown = function (e) {
        btns[e.key] = 1;
      };

      window.onkeyup = function (e) {
        btns[e.key] = 0;
      };

      var loop = function loop() {
        thisEvilBall.x -= btns.a * thisEvilBall.velX;
        thisEvilBall.x += btns.d * thisEvilBall.velX;
        thisEvilBall.y -= btns.w * thisEvilBall.velY;
        thisEvilBall.y += btns.s * thisEvilBall.velY;
        requestAnimationFrame(loop);
      };

      loop(); // setInterval(() => {
      //   thisEvilBall.x -= btns.a * thisEvilBall.velX;
      //   thisEvilBall.x += btns.d * thisEvilBall.velX;
      //   thisEvilBall.y -= btns.w * thisEvilBall.velY;
      //   thisEvilBall.y += btns.s * thisEvilBall.velY;
      // }, 10);
    }
  }, {
    key: "collisionDetect",
    value: function collisionDetect(balls) {
      var leftBalls = balls;

      for (var i = 0; i < leftBalls.length; i += 1) {
        if (!(this === leftBalls[i])) {
          var dx = this.x - leftBalls[i].x;
          var dy = this.y - leftBalls[i].y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.size + leftBalls[i].size) {
            leftBalls.splice(i, 1);
            this.size = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(0, 2) ? this.size * 1.15 : this.size * 0.85;
          }
        }
      }
    }
  }]);

  return EvilBall;
}(_Shape__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (EvilBall);

/***/ }),

/***/ "./src/Shape.js":
/*!**********************!*\
  !*** ./src/Shape.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCanvas */ "./src/createCanvas.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Shape =
/*#__PURE__*/
function () {
  function Shape(x, y, velX, velY, isGood) {
    _classCallCheck(this, Shape);

    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.isGood = isGood;
  }

  _createClass(Shape, [{
    key: "draw",
    value: function draw() {
      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvasObj"].beginPath();
      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvasObj"].fillStyle = this.color;
      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvasObj"].arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      _createCanvas__WEBPACK_IMPORTED_MODULE_0__["canvasObj"].fill();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.x + this.size >= _createCanvas__WEBPACK_IMPORTED_MODULE_0__["width"]) {
        this.velX = -this.velX;
      }

      if (this.x - this.size <= 0) {
        this.velX = -this.velX;
      }

      if (this.y + this.size >= _createCanvas__WEBPACK_IMPORTED_MODULE_0__["height"]) {
        this.velY = -this.velY;
      }

      if (this.y - this.size <= 0) {
        this.velY = -this.velY;
      }

      this.x += this.velX;
      this.y += this.velY;
    }
  }, {
    key: "collisionDetect",
    value: function collisionDetect(balls) {
      var leftBalls = balls;

      for (var i = 0; i < leftBalls.length; i += 1) {
        if (!(this === leftBalls[i])) {
          var dx = this.x - leftBalls[i].x;
          var dy = this.y - leftBalls[i].y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.size + leftBalls[i].size) {
            var newColor = "rgb(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(20, 255), ", ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(20, 255), ", ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(20, 255), ")");
            leftBalls[i].color = newColor;
            this.color = newColor;
          }
        }
      }
    }
  }]);

  return Shape;
}();

/* harmony default export */ __webpack_exports__["default"] = (Shape);

/***/ }),

/***/ "./src/SimpleBall.js":
/*!***************************!*\
  !*** ./src/SimpleBall.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/Shape.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SimpleBall =
/*#__PURE__*/
function (_Shape) {
  _inherits(SimpleBall, _Shape);

  function SimpleBall(x, y, velX, velY, isGood, color, size) {
    var _this;

    _classCallCheck(this, SimpleBall);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleBall).call(this, x, y, velX, velY, isGood));
    _this.color = color;
    _this.size = size;
    return _this;
  }

  return SimpleBall;
}(_Shape__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SimpleBall);

/***/ }),

/***/ "./src/createCanvas.js":
/*!*****************************!*\
  !*** ./src/createCanvas.js ***!
  \*****************************/
/*! exports provided: canvasObj, width, height */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasObj", function() { return canvasObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
var canvas = document.querySelector('canvas');
var canvasObj = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimpleBall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleBall */ "./src/SimpleBall.js");
/* harmony import */ var _EvilBall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvilBall */ "./src/EvilBall.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createCanvas */ "./src/createCanvas.js");




var startInterval = null;

var startGame = function startGame() {
  var evilBall = new _EvilBall__WEBPACK_IMPORTED_MODULE_1__["default"](25, 25, 5, 5, false, 'red', 20);
  evilBall.setControls();
  var balls = [];
  var ballsCount = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(7, 15);

  while (balls.length < ballsCount) {
    var ball = new _SimpleBall__WEBPACK_IMPORTED_MODULE_0__["default"](Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(25, _createCanvas__WEBPACK_IMPORTED_MODULE_3__["width"] - 25), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(25, _createCanvas__WEBPACK_IMPORTED_MODULE_3__["height"] - 25), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(0, 7), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(0, 7), true, "rgb(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(20, 255), ", ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(20, 255), ", ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(20, 255), ")"), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(15, 25));
    balls.push(ball);
  }

  var loop = function loop() {
    _createCanvas__WEBPACK_IMPORTED_MODULE_3__["canvasObj"].fillStyle = 'rgba(0, 0, 0, 0.9)';
    _createCanvas__WEBPACK_IMPORTED_MODULE_3__["canvasObj"].fillRect(0, 0, _createCanvas__WEBPACK_IMPORTED_MODULE_3__["width"], _createCanvas__WEBPACK_IMPORTED_MODULE_3__["height"]);
    var ballsCountNow = balls.length;
    var ballsCountText = document.querySelector('p');
    ballsCountText.textContent = "BALLS LEFT: ".concat(ballsCountNow);

    if (ballsCountNow === 0) {
      var endText = document.querySelector('.final-time');
      endText.classList.add('show');
      cancelAnimationFrame(startInterval);
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["endTimer"])();
      _createCanvas__WEBPACK_IMPORTED_MODULE_3__["canvasObj"].clearRect(0, 0, _createCanvas__WEBPACK_IMPORTED_MODULE_3__["width"], _createCanvas__WEBPACK_IMPORTED_MODULE_3__["height"]);
      return;
    }

    for (var i = 0; i < balls.length; i += 1) {
      if (balls[i].isGood) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect(balls);
      }

      evilBall.draw();
      evilBall.checkBounds();
      evilBall.collisionDetect(balls);
    }

    startInterval = requestAnimationFrame(loop);
  };

  loop();
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["startTimer"])();
};

startGame();
var newGameBtn = document.querySelector('button');
newGameBtn.addEventListener('click', function () {
  var endText = document.querySelector('.final-time');
  endText.classList.remove('show');
  startGame();
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInt, startTimer, endTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTimer", function() { return startTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endTimer", function() { return endTimer; });
var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var checkTimeLength = function checkTimeLength(num) {
  return +num <= 9 ? "0".concat(num) : num;
};

var timerElem = document.querySelector('.timer');
var actualTime = '';
var minutes = 0;
var seconds = 0;
var interval;

var endTimer = function endTimer() {
  clearInterval(interval);

  if (minutes * 60 + seconds < sessionStorage['minutes'] * 60 + sessionStorage['seconds'] || !sessionStorage['minutes']) {
    sessionStorage['minutes'] = minutes;
    sessionStorage['seconds'] = seconds;
  }

  document.querySelector('.best-time').textContent = "Your best time: \n    ".concat(checkTimeLength(sessionStorage['minutes']), " : \n    ").concat(checkTimeLength(sessionStorage['seconds']));
  document.querySelector('span').textContent = actualTime;
  minutes = 0;
  seconds = 0;
  timerElem.textContent = '00 : 00';
};

var startTimer = function startTimer() {
  interval = setInterval(function () {
    seconds += 1;

    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }

    if (minutes === 60) {
      console.log('YOU DIED');
      endTimer();
    }

    var strMin = checkTimeLength(minutes);
    var strSec = checkTimeLength(seconds);
    actualTime = "".concat(strMin, " : ").concat(strSec);
    timerElem.textContent = actualTime;
  }, 1000);
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2aWxCYWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9TaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2ltcGxlQmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJFdmlsQmFsbCIsIngiLCJ5IiwidmVsWCIsInZlbFkiLCJpc0dvb2QiLCJjb2xvciIsInNpemUiLCJjYW52YXNPYmoiLCJiZWdpblBhdGgiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZSIsIndpZHRoIiwiaGVpZ2h0IiwidGhpc0V2aWxCYWxsIiwiYnRucyIsImEiLCJ3IiwicyIsImQiLCJ3aW5kb3ciLCJvbmtleWRvd24iLCJlIiwia2V5Iiwib25rZXl1cCIsImxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiYWxscyIsImxlZnRCYWxscyIsImkiLCJsZW5ndGgiLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJzcXJ0Iiwic3BsaWNlIiwiZ2V0UmFuZG9tSW50IiwiU2hhcGUiLCJmaWxsU3R5bGUiLCJmaWxsIiwibmV3Q29sb3IiLCJTaW1wbGVCYWxsIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInN0YXJ0SW50ZXJ2YWwiLCJzdGFydEdhbWUiLCJldmlsQmFsbCIsInNldENvbnRyb2xzIiwiYmFsbHNDb3VudCIsImJhbGwiLCJwdXNoIiwiZmlsbFJlY3QiLCJiYWxsc0NvdW50Tm93IiwiYmFsbHNDb3VudFRleHQiLCJ0ZXh0Q29udGVudCIsImVuZFRleHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImVuZFRpbWVyIiwiY2xlYXJSZWN0IiwiZHJhdyIsInVwZGF0ZSIsImNvbGxpc2lvbkRldGVjdCIsImNoZWNrQm91bmRzIiwic3RhcnRUaW1lciIsIm5ld0dhbWVCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwibWluIiwibWF4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGVja1RpbWVMZW5ndGgiLCJudW0iLCJ0aW1lckVsZW0iLCJhY3R1YWxUaW1lIiwibWludXRlcyIsInNlY29uZHMiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXNzaW9uU3RvcmFnZSIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsInN0ck1pbiIsInN0clNlYyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQUNKLG9CQUFZQyxDQUFaLEVBQWVD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QUFoQixFQUFvQjtBQUNsQk0sYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBekIsY0FBUTtBQUNUOztBQUNELFFBQU0wQixNQUFNLEdBQUdaLGVBQWUsQ0FBQ0ksT0FBRCxDQUE5QjtBQUNBLFFBQU1TLE1BQU0sR0FBR2IsZUFBZSxDQUFDSyxPQUFELENBQTlCO0FBRUFGLGNBQVUsYUFBTVMsTUFBTixnQkFBa0JDLE1BQWxCLENBQVY7QUFDQVgsYUFBUyxDQUFDckIsV0FBVixHQUF3QnNCLFVBQXhCO0FBQ0QsR0FmcUIsRUFlbkIsSUFmbUIsQ0FBdEI7QUFnQkQsQ0FqQkQiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcbmltcG9ydCB7IGNhbnZhc09iaiwgd2lkdGgsIGhlaWdodCB9IGZyb20gJy4vY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7IGdldFJhbmRvbUludCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBFdmlsQmFsbCBleHRlbmRzIFNoYXBlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgdmVsWCwgdmVsWSwgaXNHb29kLCBjb2xvciwgc2l6ZSkge1xuICAgIHN1cGVyKHgsIHksIHZlbFgsIHZlbFksIGlzR29vZCk7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNhbnZhc09iai5iZWdpblBhdGgoKTtcbiAgICBjYW52YXNPYmouc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGNhbnZhc09iai5saW5lV2lkdGggPSA1O1xuICAgIGNhbnZhc09iai5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNhbnZhc09iai5zdHJva2UoKTtcbiAgfVxuXG4gIGNoZWNrQm91bmRzKCkge1xuICAgIGlmICgodGhpcy54ICsgdGhpcy5zaXplKSA+PSB3aWR0aCkge1xuICAgICAgdGhpcy54IC09IHRoaXMuc2l6ZTtcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMueCAtIHRoaXMuc2l6ZSkgPD0gMCkge1xuICAgICAgdGhpcy54ICs9IHRoaXMuc2l6ZTtcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMueSArIHRoaXMuc2l6ZSkgPj0gaGVpZ2h0KSB7XG4gICAgICB0aGlzLnkgLT0gdGhpcy5zaXplO1xuICAgIH1cblxuICAgIGlmICgodGhpcy55IC0gdGhpcy5zaXplKSA8PSAwKSB7XG4gICAgICB0aGlzLnkgKz0gdGhpcy5zaXplO1xuICAgIH1cbiAgfVxuXG4gIHNldENvbnRyb2xzKCkge1xuICAgIGNvbnN0IHRoaXNFdmlsQmFsbCA9IHRoaXM7XG4gICAgY29uc3QgYnRucyA9IHtcbiAgICAgIGE6IDAsXG4gICAgICB3OiAwLFxuICAgICAgczogMCxcbiAgICAgIGQ6IDAsXG4gICAgfTtcbiAgICB3aW5kb3cub25rZXlkb3duID0gKGUpID0+IHtcbiAgICAgIGJ0bnNbZS5rZXldID0gMTtcbiAgICB9O1xuICAgIHdpbmRvdy5vbmtleXVwID0gKGUpID0+IHtcbiAgICAgIGJ0bnNbZS5rZXldID0gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgIHRoaXNFdmlsQmFsbC54IC09IGJ0bnMuYSAqIHRoaXNFdmlsQmFsbC52ZWxYO1xuICAgICAgdGhpc0V2aWxCYWxsLnggKz0gYnRucy5kICogdGhpc0V2aWxCYWxsLnZlbFg7XG4gICAgICB0aGlzRXZpbEJhbGwueSAtPSBidG5zLncgKiB0aGlzRXZpbEJhbGwudmVsWTtcbiAgICAgIHRoaXNFdmlsQmFsbC55ICs9IGJ0bnMucyAqIHRoaXNFdmlsQmFsbC52ZWxZO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIH07XG4gICAgbG9vcCgpO1xuXG4gICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIC8vICAgdGhpc0V2aWxCYWxsLnggLT0gYnRucy5hICogdGhpc0V2aWxCYWxsLnZlbFg7XG4gICAgLy8gICB0aGlzRXZpbEJhbGwueCArPSBidG5zLmQgKiB0aGlzRXZpbEJhbGwudmVsWDtcbiAgICAvLyAgIHRoaXNFdmlsQmFsbC55IC09IGJ0bnMudyAqIHRoaXNFdmlsQmFsbC52ZWxZO1xuICAgIC8vICAgdGhpc0V2aWxCYWxsLnkgKz0gYnRucy5zICogdGhpc0V2aWxCYWxsLnZlbFk7XG4gICAgLy8gfSwgMTApO1xuICB9XG5cbiAgY29sbGlzaW9uRGV0ZWN0KGJhbGxzKSB7XG4gICAgY29uc3QgbGVmdEJhbGxzID0gYmFsbHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWZ0QmFsbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICghKHRoaXMgPT09IGxlZnRCYWxsc1tpXSkpIHtcbiAgICAgICAgY29uc3QgZHggPSB0aGlzLnggLSBsZWZ0QmFsbHNbaV0ueDtcbiAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgLSBsZWZ0QmFsbHNbaV0ueTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMuc2l6ZSArIGxlZnRCYWxsc1tpXS5zaXplKSB7XG4gICAgICAgICAgbGVmdEJhbGxzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB0aGlzLnNpemUgPSBnZXRSYW5kb21JbnQoMCwgMikgPyB0aGlzLnNpemUgKiAxLjE1IDogdGhpcy5zaXplICogMC44NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmlsQmFsbDtcbiIsImltcG9ydCB7IGNhbnZhc09iaiwgd2lkdGgsIGhlaWdodCB9IGZyb20gJy4vY3JlYXRlQ2FudmFzJztcbmltcG9ydCB7IGdldFJhbmRvbUludCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBTaGFwZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHZlbFgsIHZlbFksIGlzR29vZCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnZlbFggPSB2ZWxYO1xuICAgIHRoaXMudmVsWSA9IHZlbFk7XG4gICAgdGhpcy5pc0dvb2QgPSBpc0dvb2Q7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNhbnZhc09iai5iZWdpblBhdGgoKTtcbiAgICBjYW52YXNPYmouZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjYW52YXNPYmouYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjYW52YXNPYmouZmlsbCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICgodGhpcy54ICsgdGhpcy5zaXplKSA+PSB3aWR0aCkge1xuICAgICAgdGhpcy52ZWxYID0gLXRoaXMudmVsWDtcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMueCAtIHRoaXMuc2l6ZSkgPD0gMCkge1xuICAgICAgdGhpcy52ZWxYID0gLXRoaXMudmVsWDtcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMueSArIHRoaXMuc2l6ZSkgPj0gaGVpZ2h0KSB7XG4gICAgICB0aGlzLnZlbFkgPSAtdGhpcy52ZWxZO1xuICAgIH1cblxuICAgIGlmICgodGhpcy55IC0gdGhpcy5zaXplKSA8PSAwKSB7XG4gICAgICB0aGlzLnZlbFkgPSAtdGhpcy52ZWxZO1xuICAgIH1cblxuICAgIHRoaXMueCArPSB0aGlzLnZlbFg7XG4gICAgdGhpcy55ICs9IHRoaXMudmVsWTtcbiAgfVxuXG4gIGNvbGxpc2lvbkRldGVjdChiYWxscykge1xuICAgIGNvbnN0IGxlZnRCYWxscyA9IGJhbGxzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdEJhbGxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoISh0aGlzID09PSBsZWZ0QmFsbHNbaV0pKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gdGhpcy54IC0gbGVmdEJhbGxzW2ldLng7XG4gICAgICAgIGNvbnN0IGR5ID0gdGhpcy55IC0gbGVmdEJhbGxzW2ldLnk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLnNpemUgKyBsZWZ0QmFsbHNbaV0uc2l6ZSkge1xuICAgICAgICAgIGNvbnN0IG5ld0NvbG9yID0gYHJnYigke2dldFJhbmRvbUludCgyMCwgMjU1KX0sICR7Z2V0UmFuZG9tSW50KDIwLCAyNTUpfSwgJHtnZXRSYW5kb21JbnQoMjAsIDI1NSl9KWA7XG4gICAgICAgICAgbGVmdEJhbGxzW2ldLmNvbG9yID0gbmV3Q29sb3I7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IG5ld0NvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuXG5jbGFzcyBTaW1wbGVCYWxsIGV4dGVuZHMgU2hhcGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB2ZWxYLCB2ZWxZLCBpc0dvb2QsIGNvbG9yLCBzaXplKSB7XG4gICAgc3VwZXIoeCwgeSwgdmVsWCwgdmVsWSwgaXNHb29kKTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVCYWxsO1xuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjYW52YXNPYmogPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuZXhwb3J0IHsgY2FudmFzT2JqLCB3aWR0aCwgaGVpZ2h0IH07XG4iLCJpbXBvcnQgU2ltcGxlQmFsbCBmcm9tICcuL1NpbXBsZUJhbGwnO1xuaW1wb3J0IEV2aWxCYWxsIGZyb20gJy4vRXZpbEJhbGwnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tSW50LCBzdGFydFRpbWVyLCBlbmRUaW1lciB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY2FudmFzT2JqLCB3aWR0aCwgaGVpZ2h0IH0gZnJvbSAnLi9jcmVhdGVDYW52YXMnO1xuXG5sZXQgc3RhcnRJbnRlcnZhbCA9IG51bGw7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgY29uc3QgZXZpbEJhbGwgPSBuZXcgRXZpbEJhbGwoMjUsIDI1LCA1LCA1LCBmYWxzZSwgJ3JlZCcsIDIwKTtcbiAgZXZpbEJhbGwuc2V0Q29udHJvbHMoKTtcbiAgXG4gIGNvbnN0IGJhbGxzID0gW107XG4gIGNvbnN0IGJhbGxzQ291bnQgPSBnZXRSYW5kb21JbnQoNywgMTUpO1xuICB3aGlsZSAoYmFsbHMubGVuZ3RoIDwgYmFsbHNDb3VudCkge1xuICAgIGNvbnN0IGJhbGwgPSBuZXcgU2ltcGxlQmFsbChcbiAgICAgIGdldFJhbmRvbUludCgyNSwgd2lkdGggLSAyNSksXG4gICAgICBnZXRSYW5kb21JbnQoMjUsIGhlaWdodCAtIDI1KSxcbiAgICAgIGdldFJhbmRvbUludCgwLCA3KSxcbiAgICAgIGdldFJhbmRvbUludCgwLCA3KSxcbiAgICAgIHRydWUsXG4gICAgICBgcmdiKCR7Z2V0UmFuZG9tSW50KDIwLCAyNTUpfSwgJHtnZXRSYW5kb21JbnQoMjAsIDI1NSl9LCAke2dldFJhbmRvbUludCgyMCwgMjU1KX0pYCxcbiAgICAgIGdldFJhbmRvbUludCgxNSwgMjUpLFxuICAgICk7XG4gICAgYmFsbHMucHVzaChiYWxsKTtcbiAgfVxuICBcbiAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICBjYW52YXNPYmouZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC45KSc7XG4gICAgY2FudmFzT2JqLmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICBcbiAgICBjb25zdCBiYWxsc0NvdW50Tm93ID0gYmFsbHMubGVuZ3RoO1xuICAgIGNvbnN0IGJhbGxzQ291bnRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCcpO1xuICAgIGJhbGxzQ291bnRUZXh0LnRleHRDb250ZW50ID0gYEJBTExTIExFRlQ6ICR7YmFsbHNDb3VudE5vd31gO1xuICBcbiAgICBpZiAoYmFsbHNDb3VudE5vdyA9PT0gMCkge1xuICAgICAgY29uc3QgZW5kVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW5hbC10aW1lJyk7XG4gICAgICBlbmRUZXh0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3RhcnRJbnRlcnZhbCk7XG4gICAgICBlbmRUaW1lcigpO1xuICAgICAgY2FudmFzT2JqLmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFsbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChiYWxsc1tpXS5pc0dvb2QpIHtcbiAgICAgICAgYmFsbHNbaV0uZHJhdygpO1xuICAgICAgICBiYWxsc1tpXS51cGRhdGUoKTtcbiAgICAgICAgYmFsbHNbaV0uY29sbGlzaW9uRGV0ZWN0KGJhbGxzKTtcbiAgICAgIH1cbiAgICAgIGV2aWxCYWxsLmRyYXcoKTtcbiAgICAgIGV2aWxCYWxsLmNoZWNrQm91bmRzKCk7XG4gICAgICBldmlsQmFsbC5jb2xsaXNpb25EZXRlY3QoYmFsbHMpO1xuICAgIH1cbiAgICBzdGFydEludGVydmFsID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICB9O1xuXG4gIGxvb3AoKTtcbiAgc3RhcnRUaW1lcigpO1xufTtcblxuc3RhcnRHYW1lKCk7XG5cbmNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbm5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGVuZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluYWwtdGltZScpO1xuICBlbmRUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgc3RhcnRHYW1lKCk7XG59KTtcbiIsImNvbnN0IGdldFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbik7XG5jb25zdCBjaGVja1RpbWVMZW5ndGggPSBudW0gPT4gKCtudW0gPD0gOSA/IGAwJHtudW19YCA6IG51bSk7XG5cbmNvbnN0IHRpbWVyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpO1xubGV0IGFjdHVhbFRpbWUgPSAnJztcbmxldCBtaW51dGVzID0gMDtcbmxldCBzZWNvbmRzID0gMDtcbmxldCBpbnRlcnZhbDtcblxuY29uc3QgZW5kVGltZXIgPSAoKSA9PiB7XG4gIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICBpZiAoKG1pbnV0ZXMgKiA2MCArIHNlY29uZHMgPCBzZXNzaW9uU3RvcmFnZVsnbWludXRlcyddICogNjAgKyBzZXNzaW9uU3RvcmFnZVsnc2Vjb25kcyddKSB8fCAhc2Vzc2lvblN0b3JhZ2VbJ21pbnV0ZXMnXSkge1xuICAgIHNlc3Npb25TdG9yYWdlWydtaW51dGVzJ10gPSBtaW51dGVzO1xuICAgIHNlc3Npb25TdG9yYWdlWydzZWNvbmRzJ10gPSBzZWNvbmRzO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXN0LXRpbWUnKS50ZXh0Q29udGVudCA9IGBZb3VyIGJlc3QgdGltZTogXG4gICAgJHtjaGVja1RpbWVMZW5ndGgoc2Vzc2lvblN0b3JhZ2VbJ21pbnV0ZXMnXSl9IDogXG4gICAgJHtjaGVja1RpbWVMZW5ndGgoc2Vzc2lvblN0b3JhZ2VbJ3NlY29uZHMnXSl9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gYWN0dWFsVGltZTtcblxuICBtaW51dGVzID0gMDtcbiAgc2Vjb25kcyA9IDA7XG4gIHRpbWVyRWxlbS50ZXh0Q29udGVudCA9ICcwMCA6IDAwJztcbn07XG5cbmNvbnN0IHN0YXJ0VGltZXIgPSAoKSA9PiB7XG4gIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHNlY29uZHMgKz0gMTtcbiAgICBpZiAoc2Vjb25kcyA9PT0gNjApIHtcbiAgICAgIG1pbnV0ZXMgKz0gMTtcbiAgICAgIHNlY29uZHMgPSAwO1xuICAgIH1cbiAgICBpZiAobWludXRlcyA9PT0gNjApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdZT1UgRElFRCcpO1xuICAgICAgZW5kVGltZXIoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyTWluID0gY2hlY2tUaW1lTGVuZ3RoKG1pbnV0ZXMpO1xuICAgIGNvbnN0IHN0clNlYyA9IGNoZWNrVGltZUxlbmd0aChzZWNvbmRzKTtcblxuICAgIGFjdHVhbFRpbWUgPSBgJHtzdHJNaW59IDogJHtzdHJTZWN9YDtcbiAgICB0aW1lckVsZW0udGV4dENvbnRlbnQgPSBhY3R1YWxUaW1lO1xuICB9LCAxMDAwKTtcbn07XG5cblxuZXhwb3J0IHsgZ2V0UmFuZG9tSW50LCBzdGFydFRpbWVyLCBlbmRUaW1lciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==