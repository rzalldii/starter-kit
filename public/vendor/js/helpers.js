(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/helpers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Constants
var TRANS_EVENTS = ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd'];
var TRANS_PROPERTIES = ['transition', 'MozTransition', 'webkitTransition', 'WebkitTransition', 'OTransition'];
var INLINE_STYLES = "\n.layout-menu-fixed .layout-navbar-full .layout-menu,\n.layout-page {\n  padding-top: {navbarHeight}px !important;\n}\n.content-wrapper {\n  padding-bottom: {footerHeight}px !important;\n}"; // Guard

function requiredParam(name) {
  throw new Error("Parameter required".concat(name ? ": `".concat(name, "`") : ''));
}

var Helpers = {
  // Root Element
  ROOT_EL: typeof window !== 'undefined' ? document.documentElement : null,
  // Large screens breakpoint
  LAYOUT_BREAKPOINT: 1200,
  // Resize delay in milliseconds
  RESIZE_DELAY: 200,
  menuPsScroll: null,
  mainMenu: null,
  // Internal variables
  _curStyle: null,
  _styleEl: null,
  _resizeTimeout: null,
  _resizeCallback: null,
  _transitionCallback: null,
  _transitionCallbackTimeout: null,
  _listeners: [],
  _initialized: false,
  _autoUpdate: false,
  _lastWindowHeight: 0,
  // *******************************************************************************
  // * Utilities
  // ---
  // Scroll To Active Menu Item
  _scrollToActive: function _scrollToActive() {
    var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var layoutMenu = this.getLayoutMenu();
    if (!layoutMenu) return;
    var activeEl = layoutMenu.querySelector('li.menu-item.active:not(.open)');

    if (activeEl) {
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t -= 1;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      var element = this.getLayoutMenu().querySelector('.menu-inner');

      if (typeof activeEl === 'string') {
        activeEl = document.querySelector(activeEl);
      }

      if (typeof activeEl !== 'number') {
        activeEl = activeEl.getBoundingClientRect().top + element.scrollTop;
      } // If active element's top position is less than 2/3 (66%) of menu height than do not scroll


      if (activeEl < parseInt(element.clientHeight * 2 / 3, 10)) return;
      var start = element.scrollTop;
      var change = activeEl - start - parseInt(element.clientHeight / 2, 10);
      var startDate = +new Date();

      if (animate === true) {
        var animateScroll = function animateScroll() {
          var currentDate = +new Date();
          var currentTime = currentDate - startDate;
          var val = easeInOutQuad(currentTime, start, change, duration);
          element.scrollTop = val;

          if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
          } else {
            element.scrollTop = change;
          }
        };

        animateScroll();
      } else {
        element.scrollTop = change;
      }
    }
  },
  // ---
  // Add classes
  _addClass: function _addClass(cls) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.ROOT_EL;

    if (el.length !== undefined) {
      // Add classes to multiple elements
      el.forEach(function (e) {
        cls.split(' ').forEach(function (c) {
          return e.classList.add(c);
        });
      });
    } else {
      // Add classes to single element
      cls.split(' ').forEach(function (c) {
        return el.classList.add(c);
      });
    }
  },
  // ---
  // Remove classes
  _removeClass: function _removeClass(cls) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.ROOT_EL;

    if (el.length !== undefined) {
      // Remove classes to multiple elements
      el.forEach(function (e) {
        cls.split(' ').forEach(function (c) {
          return e.classList.remove(c);
        });
      });
    } else {
      // Remove classes to single element
      cls.split(' ').forEach(function (c) {
        return el.classList.remove(c);
      });
    }
  },
  // Toggle classes
  _toggleClass: function _toggleClass() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.ROOT_EL;
    var cls1 = arguments.length > 1 ? arguments[1] : undefined;
    var cls2 = arguments.length > 2 ? arguments[2] : undefined;

    if (el.classList.contains(cls1)) {
      el.classList.replace(cls1, cls2);
    } else {
      el.classList.replace(cls2, cls1);
    }
  },
  // ---
  // Has class
  _hasClass: function _hasClass(cls) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.ROOT_EL;
    var result = false;
    cls.split(' ').forEach(function (c) {
      if (el.classList.contains(c)) result = true;
    });
    return result;
  },
  _findParent: function _findParent(el, cls) {
    if (el && el.tagName.toUpperCase() === 'BODY' || el.tagName.toUpperCase() === 'HTML') return null;
    el = el.parentNode;

    while (el && el.tagName.toUpperCase() !== 'BODY' && !el.classList.contains(cls)) {
      el = el.parentNode;
    }

    el = el && el.tagName.toUpperCase() !== 'BODY' ? el : null;
    return el;
  },
  // ---
  // Trigger window event
  _triggerWindowEvent: function _triggerWindowEvent(name) {
    if (typeof window === 'undefined') return;

    if (document.createEvent) {
      var event;

      if (typeof Event === 'function') {
        event = new Event(name);
      } else {
        event = document.createEvent('Event');
        event.initEvent(name, false, true);
      }

      window.dispatchEvent(event);
    } else {
      window.fireEvent("on".concat(name), document.createEventObject());
    }
  },
  // ---
  // Trigger event
  _triggerEvent: function _triggerEvent(name) {
    this._triggerWindowEvent("layout".concat(name));

    this._listeners.filter(function (listener) {
      return listener.event === name;
    }).forEach(function (listener) {
      return listener.callback.call(null);
    });
  },
  // ---
  // Update style
  _updateInlineStyle: function _updateInlineStyle() {
    var navbarHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var footerHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (!this._styleEl) {
      this._styleEl = document.createElement('style');
      this._styleEl.type = 'text/css';
      document.head.appendChild(this._styleEl);
    }

    var newStyle = INLINE_STYLES.replace(/\{navbarHeight\}/gi, navbarHeight).replace(/\{footerHeight\}/gi, footerHeight);

    if (this._curStyle !== newStyle) {
      this._curStyle = newStyle;
      this._styleEl.textContent = newStyle;
    }
  },
  // ---
  // Remove style
  _removeInlineStyle: function _removeInlineStyle() {
    if (this._styleEl) document.head.removeChild(this._styleEl);
    this._styleEl = null;
    this._curStyle = null;
  },
  // ---
  // Redraw layout menu (Safari bugfix)
  _redrawLayoutMenu: function _redrawLayoutMenu() {
    var layoutMenu = this.getLayoutMenu();

    if (layoutMenu && layoutMenu.querySelector('.menu')) {
      var inner = layoutMenu.querySelector('.menu-inner');
      var scrollTop = inner.scrollTop;
      var pageScrollTop = document.documentElement.scrollTop;
      layoutMenu.style.display = 'none'; // layoutMenu.offsetHeight

      layoutMenu.style.display = '';
      inner.scrollTop = scrollTop;
      document.documentElement.scrollTop = pageScrollTop;
      return true;
    }

    return false;
  },
  // ---
  // Check for transition support
  _supportsTransitionEnd: function _supportsTransitionEnd() {
    if (window.QUnit) return false;
    var el = document.body || document.documentElement;
    if (!el) return false;
    var result = false;
    TRANS_PROPERTIES.forEach(function (evnt) {
      if (typeof el.style[evnt] !== 'undefined') result = true;
    });
    return result;
  },
  // ---
  // Calculate current navbar height
  _getNavbarHeight: function _getNavbarHeight() {
    var _this = this;

    var layoutNavbar = this.getLayoutNavbar();
    if (!layoutNavbar) return 0;
    if (!this.isSmallScreen()) return layoutNavbar.getBoundingClientRect().height; // Needs some logic to get navbar height on small screens

    var clonedEl = layoutNavbar.cloneNode(true);
    clonedEl.id = null;
    clonedEl.style.visibility = 'hidden';
    clonedEl.style.position = 'absolute';
    Array.prototype.slice.call(clonedEl.querySelectorAll('.collapse.show')).forEach(function (el) {
      return _this._removeClass('show', el);
    });
    layoutNavbar.parentNode.insertBefore(clonedEl, layoutNavbar);
    var navbarHeight = clonedEl.getBoundingClientRect().height;
    clonedEl.parentNode.removeChild(clonedEl);
    return navbarHeight;
  },
  // ---
  // Get current footer height
  _getFooterHeight: function _getFooterHeight() {
    var layoutFooter = this.getLayoutFooter();
    if (!layoutFooter) return 0;
    return layoutFooter.getBoundingClientRect().height;
  },
  // ---
  // Get animation duration of element
  _getAnimationDuration: function _getAnimationDuration(el) {
    var duration = window.getComputedStyle(el).transitionDuration;
    return parseFloat(duration) * (duration.indexOf('ms') !== -1 ? 1 : 1000);
  },
  // ---
  // Set menu hover state
  _setMenuHoverState: function _setMenuHoverState(hovered) {
    this[hovered ? '_addClass' : '_removeClass']('layout-menu-hover');
  },
  // ---
  // Toggle collapsed
  _setCollapsed: function _setCollapsed(collapsed) {
    var _this2 = this;

    if (this.isSmallScreen()) {
      if (collapsed) {
        this._removeClass('layout-menu-expanded');
      } else {
        setTimeout(function () {
          _this2._addClass('layout-menu-expanded');
        }, this._redrawLayoutMenu() ? 5 : 0);
      }
    }
  },
  // ---
  // Add layout sivenav toggle animationEnd event
  _bindLayoutAnimationEndEvent: function _bindLayoutAnimationEndEvent(modifier, cb) {
    var _this3 = this;

    var menu = this.getMenu();
    var duration = menu ? this._getAnimationDuration(menu) + 50 : 0;

    if (!duration) {
      modifier.call(this);
      cb.call(this);
      return;
    }

    this._transitionCallback = function (e) {
      if (e.target !== menu) return;

      _this3._unbindLayoutAnimationEndEvent();

      cb.call(_this3);
    };

    TRANS_EVENTS.forEach(function (e) {
      menu.addEventListener(e, _this3._transitionCallback, false);
    });
    modifier.call(this);
    this._transitionCallbackTimeout = setTimeout(function () {
      _this3._transitionCallback.call(_this3, {
        target: menu
      });
    }, duration);
  },
  // ---
  // Remove layout sivenav toggle animationEnd event
  _unbindLayoutAnimationEndEvent: function _unbindLayoutAnimationEndEvent() {
    var _this4 = this;

    var menu = this.getMenu();

    if (this._transitionCallbackTimeout) {
      clearTimeout(this._transitionCallbackTimeout);
      this._transitionCallbackTimeout = null;
    }

    if (menu && this._transitionCallback) {
      TRANS_EVENTS.forEach(function (e) {
        menu.removeEventListener(e, _this4._transitionCallback, false);
      });
    }

    if (this._transitionCallback) {
      this._transitionCallback = null;
    }
  },
  // ---
  // Bind delayed window resize event
  _bindWindowResizeEvent: function _bindWindowResizeEvent() {
    var _this5 = this;

    this._unbindWindowResizeEvent();

    var cb = function cb() {
      if (_this5._resizeTimeout) {
        clearTimeout(_this5._resizeTimeout);
        _this5._resizeTimeout = null;
      }

      _this5._triggerEvent('resize');
    };

    this._resizeCallback = function () {
      if (_this5._resizeTimeout) clearTimeout(_this5._resizeTimeout);
      _this5._resizeTimeout = setTimeout(cb, _this5.RESIZE_DELAY);
    };

    window.addEventListener('resize', this._resizeCallback, false);
  },
  // ---
  // Unbind delayed window resize event
  _unbindWindowResizeEvent: function _unbindWindowResizeEvent() {
    if (this._resizeTimeout) {
      clearTimeout(this._resizeTimeout);
      this._resizeTimeout = null;
    }

    if (this._resizeCallback) {
      window.removeEventListener('resize', this._resizeCallback, false);
      this._resizeCallback = null;
    }
  },
  _bindMenuMouseEvents: function _bindMenuMouseEvents() {
    var _this6 = this;

    if (this._menuMouseEnter && this._menuMouseLeave && this._windowTouchStart) return;
    var layoutMenu = this.getLayoutMenu();
    if (!layoutMenu) return this._unbindMenuMouseEvents();

    if (!this._menuMouseEnter) {
      this._menuMouseEnter = function () {
        if (_this6.isSmallScreen() || _this6._hasClass('layout-transitioning')) {
          return _this6._setMenuHoverState(false);
        }

        return _this6._setMenuHoverState(false);
      };

      layoutMenu.addEventListener('mouseenter', this._menuMouseEnter, false);
      layoutMenu.addEventListener('touchstart', this._menuMouseEnter, false);
    }

    if (!this._menuMouseLeave) {
      this._menuMouseLeave = function () {
        _this6._setMenuHoverState(false);
      };

      layoutMenu.addEventListener('mouseleave', this._menuMouseLeave, false);
    }

    if (!this._windowTouchStart) {
      this._windowTouchStart = function (e) {
        if (!e || !e.target || !_this6._findParent(e.target, '.layout-menu')) {
          _this6._setMenuHoverState(false);
        }
      };

      window.addEventListener('touchstart', this._windowTouchStart, true);
    }
  },
  _unbindMenuMouseEvents: function _unbindMenuMouseEvents() {
    if (!this._menuMouseEnter && !this._menuMouseLeave && !this._windowTouchStart) return;
    var layoutMenu = this.getLayoutMenu();

    if (this._menuMouseEnter) {
      if (layoutMenu) {
        layoutMenu.removeEventListener('mouseenter', this._menuMouseEnter, false);
        layoutMenu.removeEventListener('touchstart', this._menuMouseEnter, false);
      }

      this._menuMouseEnter = null;
    }

    if (this._menuMouseLeave) {
      if (layoutMenu) {
        layoutMenu.removeEventListener('mouseleave', this._menuMouseLeave, false);
      }

      this._menuMouseLeave = null;
    }

    if (this._windowTouchStart) {
      if (layoutMenu) {
        window.addEventListener('touchstart', this._windowTouchStart, true);
      }

      this._windowTouchStart = null;
    }

    this._setMenuHoverState(false);
  },
  // *******************************************************************************
  // * Methods
  scrollToActive: function scrollToActive() {
    var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    this._scrollToActive(animate);
  },
  // ---
  // Collapse / expand layout
  setCollapsed: function setCollapsed() {
    var _this7 = this;

    var collapsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('collapsed');
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var layoutMenu = this.getLayoutMenu();
    if (!layoutMenu) return;

    this._unbindLayoutAnimationEndEvent();

    if (animate && this._supportsTransitionEnd()) {
      this._addClass('layout-transitioning');

      if (collapsed) this._setMenuHoverState(false);

      this._bindLayoutAnimationEndEvent(function () {
        // Collapse / Expand
        if (_this7.isSmallScreen) _this7._setCollapsed(collapsed);
      }, function () {
        _this7._removeClass('layout-transitioning');

        _this7._triggerWindowEvent('resize');

        _this7._triggerEvent('toggle');

        _this7._setMenuHoverState(false);
      });
    } else {
      this._addClass('layout-no-transition');

      if (collapsed) this._setMenuHoverState(false); // Collapse / Expand

      this._setCollapsed(collapsed);

      setTimeout(function () {
        _this7._removeClass('layout-no-transition');

        _this7._triggerWindowEvent('resize');

        _this7._triggerEvent('toggle');

        _this7._setMenuHoverState(false);
      }, 1);
    }
  },
  // ---
  // Toggle layout
  toggleCollapsed: function toggleCollapsed() {
    var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.setCollapsed(!this.isCollapsed(), animate);
  },
  // ---
  // Set layout positioning
  setPosition: function setPosition() {
    var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('fixed');
    var offcanvas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requiredParam('offcanvas');

    this._removeClass('layout-menu-offcanvas layout-menu-fixed layout-menu-fixed-offcanvas');

    if (!fixed && offcanvas) {
      this._addClass('layout-menu-offcanvas');
    } else if (fixed && !offcanvas) {
      this._addClass('layout-menu-fixed');

      this._redrawLayoutMenu();
    } else if (fixed && offcanvas) {
      this._addClass('layout-menu-fixed-offcanvas');

      this._redrawLayoutMenu();
    }

    this.update();
  },
  // *******************************************************************************
  // * Getters
  getLayoutMenu: function getLayoutMenu() {
    return document.querySelector('.layout-menu');
  },
  getMenu: function getMenu() {
    var layoutMenu = this.getLayoutMenu();
    if (!layoutMenu) return null;
    return !this._hasClass('menu', layoutMenu) ? layoutMenu.querySelector('.menu') : layoutMenu;
  },
  getLayoutNavbar: function getLayoutNavbar() {
    return document.querySelector('.layout-navbar');
  },
  getLayoutFooter: function getLayoutFooter() {
    return document.querySelector('.content-footer');
  },
  // *******************************************************************************
  // * Update
  update: function update() {
    if (this.getLayoutNavbar() && (!this.isSmallScreen() && this.isLayoutNavbarFull() && this.isFixed() || this.isNavbarFixed()) || this.getLayoutFooter() && this.isFooterFixed()) {
      this._updateInlineStyle(this._getNavbarHeight(), this._getFooterHeight());
    }

    this._bindMenuMouseEvents();
  },
  setAutoUpdate: function setAutoUpdate() {
    var _this8 = this;

    var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('enable');

    if (enable && !this._autoUpdate) {
      this.on('resize.Helpers:autoUpdate', function () {
        return _this8.update();
      });
      this._autoUpdate = true;
    } else if (!enable && this._autoUpdate) {
      this.off('resize.Helpers:autoUpdate');
      this._autoUpdate = false;
    }
  },
  // *******************************************************************************
  // * Tests
  isRtl: function isRtl() {
    return document.querySelector('body').getAttribute('dir') === 'rtl' || document.querySelector('html').getAttribute('dir') === 'rtl';
  },
  isMobileDevice: function isMobileDevice() {
    return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
  },
  isSmallScreen: function isSmallScreen() {
    return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < this.LAYOUT_BREAKPOINT;
  },
  isLayoutNavbarFull: function isLayoutNavbarFull() {
    return !!document.querySelector('.layout-wrapper.layout-navbar-full');
  },
  isCollapsed: function isCollapsed() {
    if (this.isSmallScreen()) {
      return !this._hasClass('layout-menu-expanded');
    }

    return this._hasClass('layout-menu-collapsed');
  },
  isFixed: function isFixed() {
    return this._hasClass('layout-menu-fixed layout-menu-fixed-offcanvas');
  },
  isNavbarFixed: function isNavbarFixed() {
    return this._hasClass('layout-navbar-fixed') || !this.isSmallScreen() && this.isFixed() && this.isLayoutNavbarFull();
  },
  isFooterFixed: function isFooterFixed() {
    return this._hasClass('layout-footer-fixed');
  },
  isLightStyle: function isLightStyle() {
    return document.documentElement.classList.contains('light-style');
  },
  // *******************************************************************************
  // * Events
  on: function on() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('event');
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requiredParam('callback');

    var _event$split = event.split('.'),
        _event$split2 = _slicedToArray(_event$split, 1),
        _event = _event$split2[0];

    var _event$split3 = event.split('.'),
        _event$split4 = _toArray(_event$split3),
        namespace = _event$split4.slice(1); // let [_event, ...namespace] = event.split('.')


    namespace = namespace.join('.') || null;

    this._listeners.push({
      event: _event,
      namespace: namespace,
      callback: callback
    });
  },
  off: function off() {
    var _this9 = this;

    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : requiredParam('event');

    var _event$split5 = event.split('.'),
        _event$split6 = _slicedToArray(_event$split5, 1),
        _event = _event$split6[0];

    var _event$split7 = event.split('.'),
        _event$split8 = _toArray(_event$split7),
        namespace = _event$split8.slice(1);

    namespace = namespace.join('.') || null;

    this._listeners.filter(function (listener) {
      return listener.event === _event && listener.namespace === namespace;
    }).forEach(function (listener) {
      return _this9._listeners.splice(_this9._listeners.indexOf(listener), 1);
    });
  },
  // *******************************************************************************
  // * Life cycle
  init: function init() {
    var _this10 = this;

    if (this._initialized) return;
    this._initialized = true; // Initialize `style` element

    this._updateInlineStyle(0); // Bind window resize event


    this._bindWindowResizeEvent(); // Bind init event


    this.off('init._Helpers');
    this.on('init._Helpers', function () {
      _this10.off('resize._Helpers:redrawMenu');

      _this10.on('resize._Helpers:redrawMenu', function () {
        // eslint-disable-next-line no-unused-expressions
        _this10.isSmallScreen() && !_this10.isCollapsed() && _this10._redrawLayoutMenu();
      }); // Force repaint in IE 10


      if (typeof document.documentMode === 'number' && document.documentMode < 11) {
        _this10.off('resize._Helpers:ie10RepaintBody');

        _this10.on('resize._Helpers:ie10RepaintBody', function () {
          if (_this10.isFixed()) return;
          var scrollTop = document.documentElement.scrollTop;
          document.body.style.display = 'none'; // document.body.offsetHeight

          document.body.style.display = 'block';
          document.documentElement.scrollTop = scrollTop;
        });
      }
    });

    this._triggerEvent('init');
  },
  destroy: function destroy() {
    var _this11 = this;

    if (!this._initialized) return;
    this._initialized = false;

    this._removeClass('layout-transitioning');

    this._removeInlineStyle();

    this._unbindLayoutAnimationEndEvent();

    this._unbindWindowResizeEvent();

    this._unbindMenuMouseEvents();

    this.setAutoUpdate(false);
    this.off('init._Helpers'); // Remove all listeners except `init`

    this._listeners.filter(function (listener) {
      return listener.event !== 'init';
    }).forEach(function (listener) {
      return _this11._listeners.splice(_this11._listeners.indexOf(listener), 1);
    });
  },
  // ---
  // Init Password Toggle
  initPasswordToggle: function initPasswordToggle() {
    var toggler = document.querySelectorAll('.form-password-toggle i');

    if (typeof toggler !== 'undefined' && toggler !== null) {
      toggler.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          var formPasswordToggle = el.closest('.form-password-toggle');
          var formPasswordToggleIcon = formPasswordToggle.querySelector('i');
          var formPasswordToggleInput = formPasswordToggle.querySelector('input');

          if (formPasswordToggleInput.getAttribute('type') === 'text') {
            formPasswordToggleInput.setAttribute('type', 'password');
            formPasswordToggleIcon.classList.replace('bx-show', 'bx-hide');
          } else if (formPasswordToggleInput.getAttribute('type') === 'password') {
            formPasswordToggleInput.setAttribute('type', 'text');
            formPasswordToggleIcon.classList.replace('bx-hide', 'bx-show');
          }
        });
      });
    }
  },
  // ---
  // Init Speech To Text
  initSpeechToText: function initSpeechToText() {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var speechToText = document.querySelectorAll('.speech-to-text');

    if (SpeechRecognition !== undefined && SpeechRecognition !== null) {
      if (typeof speechToText !== 'undefined' && speechToText !== null) {
        var recognition = new SpeechRecognition();
        var toggler = document.querySelectorAll('.speech-to-text i');
        toggler.forEach(function (el) {
          var listening = false;
          el.addEventListener('click', function () {
            el.closest('.input-group').querySelector('.form-control').focus();

            recognition.onspeechstart = function () {
              listening = true;
            };

            if (listening === false) {
              recognition.start();
            }

            recognition.onerror = function () {
              listening = false;
            };

            recognition.onresult = function (event) {
              el.closest('.input-group').querySelector('.form-control').value = event.results[0][0].transcript;
            };

            recognition.onspeechend = function () {
              listening = false;
              recognition.stop();
            };
          });
        });
      }
    }
  },
  // Ajax Call Promise
  ajaxCall: function ajaxCall(url) {
    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function () {
        return req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
      };

      req.onerror = function (e) {
        return reject(Error("Network Error: ".concat(e)));
      };

      req.send();
    });
  },
  // ---
  // SidebarToggle (Used in Apps)
  initSidebarToggle: function initSidebarToggle() {
    var sidebarToggler = document.querySelectorAll('[data-bs-toggle="sidebar"]');
    sidebarToggler.forEach(function (el) {
      el.addEventListener('click', function () {
        var target = el.getAttribute('data-target');
        var overlay = el.getAttribute('data-overlay');
        var appOverlay = document.querySelectorAll('.app-overlay');
        var targetEl = document.querySelectorAll(target);
        targetEl.forEach(function (tel) {
          tel.classList.toggle('show');

          if (typeof overlay !== 'undefined' && overlay !== null && overlay !== false && typeof appOverlay !== 'undefined') {
            if (tel.classList.contains('show')) {
              appOverlay[0].classList.add('show');
            } else {
              appOverlay[0].classList.remove('show');
            }

            appOverlay[0].addEventListener('click', function (e) {
              e.currentTarget.classList.remove('show');
              tel.classList.remove('show');
            });
          }
        });
      });
    });
  }
}; // *******************************************************************************
// * Initialization

if (typeof window !== 'undefined') {
  Helpers.init();

  if (Helpers.isMobileDevice() && window.chrome) {
    document.documentElement.classList.add('layout-menu-100vh');
  } // Update layout after page load


  if (document.readyState === 'complete') Helpers.update();else document.addEventListener('DOMContentLoaded', function onContentLoaded() {
    Helpers.update();
    document.removeEventListener('DOMContentLoaded', onContentLoaded);
  });
} // ---


//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9oZWxwZXJzLmpzPzBiMjEiXSwibmFtZXMiOlsiVFJBTlNfRVZFTlRTIiwiVFJBTlNfUFJPUEVSVElFUyIsIklOTElORV9TVFlMRVMiLCJyZXF1aXJlZFBhcmFtIiwibmFtZSIsIkVycm9yIiwiSGVscGVycyIsIlJPT1RfRUwiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIkxBWU9VVF9CUkVBS1BPSU5UIiwiUkVTSVpFX0RFTEFZIiwibWVudVBzU2Nyb2xsIiwibWFpbk1lbnUiLCJfY3VyU3R5bGUiLCJfc3R5bGVFbCIsIl9yZXNpemVUaW1lb3V0IiwiX3Jlc2l6ZUNhbGxiYWNrIiwiX3RyYW5zaXRpb25DYWxsYmFjayIsIl90cmFuc2l0aW9uQ2FsbGJhY2tUaW1lb3V0IiwiX2xpc3RlbmVycyIsIl9pbml0aWFsaXplZCIsIl9hdXRvVXBkYXRlIiwiX2xhc3RXaW5kb3dIZWlnaHQiLCJfc2Nyb2xsVG9BY3RpdmUiLCJhbmltYXRlIiwiZHVyYXRpb24iLCJsYXlvdXRNZW51IiwiZ2V0TGF5b3V0TWVudSIsImFjdGl2ZUVsIiwicXVlcnlTZWxlY3RvciIsImVhc2VJbk91dFF1YWQiLCJ0IiwiYiIsImMiLCJkIiwiZWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFRvcCIsInBhcnNlSW50IiwiY2xpZW50SGVpZ2h0Iiwic3RhcnQiLCJjaGFuZ2UiLCJzdGFydERhdGUiLCJEYXRlIiwiYW5pbWF0ZVNjcm9sbCIsImN1cnJlbnREYXRlIiwiY3VycmVudFRpbWUiLCJ2YWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfYWRkQ2xhc3MiLCJjbHMiLCJlbCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImZvckVhY2giLCJlIiwic3BsaXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfcmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJfdG9nZ2xlQ2xhc3MiLCJjbHMxIiwiY2xzMiIsImNvbnRhaW5zIiwicmVwbGFjZSIsIl9oYXNDbGFzcyIsInJlc3VsdCIsIl9maW5kUGFyZW50IiwidGFnTmFtZSIsInRvVXBwZXJDYXNlIiwicGFyZW50Tm9kZSIsIl90cmlnZ2VyV2luZG93RXZlbnQiLCJjcmVhdGVFdmVudCIsImV2ZW50IiwiRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZmlyZUV2ZW50IiwiY3JlYXRlRXZlbnRPYmplY3QiLCJfdHJpZ2dlckV2ZW50IiwiZmlsdGVyIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImNhbGwiLCJfdXBkYXRlSW5saW5lU3R5bGUiLCJuYXZiYXJIZWlnaHQiLCJmb290ZXJIZWlnaHQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm5ld1N0eWxlIiwidGV4dENvbnRlbnQiLCJfcmVtb3ZlSW5saW5lU3R5bGUiLCJyZW1vdmVDaGlsZCIsIl9yZWRyYXdMYXlvdXRNZW51IiwiaW5uZXIiLCJwYWdlU2Nyb2xsVG9wIiwic3R5bGUiLCJkaXNwbGF5IiwiX3N1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIlFVbml0IiwiYm9keSIsImV2bnQiLCJfZ2V0TmF2YmFySGVpZ2h0IiwibGF5b3V0TmF2YmFyIiwiZ2V0TGF5b3V0TmF2YmFyIiwiaXNTbWFsbFNjcmVlbiIsImhlaWdodCIsImNsb25lZEVsIiwiY2xvbmVOb2RlIiwiaWQiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwicXVlcnlTZWxlY3RvckFsbCIsImluc2VydEJlZm9yZSIsIl9nZXRGb290ZXJIZWlnaHQiLCJsYXlvdXRGb290ZXIiLCJnZXRMYXlvdXRGb290ZXIiLCJfZ2V0QW5pbWF0aW9uRHVyYXRpb24iLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImluZGV4T2YiLCJfc2V0TWVudUhvdmVyU3RhdGUiLCJob3ZlcmVkIiwiX3NldENvbGxhcHNlZCIsImNvbGxhcHNlZCIsInNldFRpbWVvdXQiLCJfYmluZExheW91dEFuaW1hdGlvbkVuZEV2ZW50IiwibW9kaWZpZXIiLCJjYiIsIm1lbnUiLCJnZXRNZW51IiwidGFyZ2V0IiwiX3VuYmluZExheW91dEFuaW1hdGlvbkVuZEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfYmluZFdpbmRvd1Jlc2l6ZUV2ZW50IiwiX3VuYmluZFdpbmRvd1Jlc2l6ZUV2ZW50IiwiX2JpbmRNZW51TW91c2VFdmVudHMiLCJfbWVudU1vdXNlRW50ZXIiLCJfbWVudU1vdXNlTGVhdmUiLCJfd2luZG93VG91Y2hTdGFydCIsIl91bmJpbmRNZW51TW91c2VFdmVudHMiLCJzY3JvbGxUb0FjdGl2ZSIsInNldENvbGxhcHNlZCIsInRvZ2dsZUNvbGxhcHNlZCIsImlzQ29sbGFwc2VkIiwic2V0UG9zaXRpb24iLCJmaXhlZCIsIm9mZmNhbnZhcyIsInVwZGF0ZSIsImlzTGF5b3V0TmF2YmFyRnVsbCIsImlzRml4ZWQiLCJpc05hdmJhckZpeGVkIiwiaXNGb290ZXJGaXhlZCIsInNldEF1dG9VcGRhdGUiLCJlbmFibGUiLCJvbiIsIm9mZiIsImlzUnRsIiwiZ2V0QXR0cmlidXRlIiwiaXNNb2JpbGVEZXZpY2UiLCJvcmllbnRhdGlvbiIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImlzTGlnaHRTdHlsZSIsIl9ldmVudCIsIm5hbWVzcGFjZSIsImpvaW4iLCJwdXNoIiwic3BsaWNlIiwiaW5pdCIsImRvY3VtZW50TW9kZSIsImRlc3Ryb3kiLCJpbml0UGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVyIiwicHJldmVudERlZmF1bHQiLCJmb3JtUGFzc3dvcmRUb2dnbGUiLCJjbG9zZXN0IiwiZm9ybVBhc3N3b3JkVG9nZ2xlSWNvbiIsImZvcm1QYXNzd29yZFRvZ2dsZUlucHV0Iiwic2V0QXR0cmlidXRlIiwiaW5pdFNwZWVjaFRvVGV4dCIsIlNwZWVjaFJlY29nbml0aW9uIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJzcGVlY2hUb1RleHQiLCJyZWNvZ25pdGlvbiIsImxpc3RlbmluZyIsImZvY3VzIiwib25zcGVlY2hzdGFydCIsIm9uZXJyb3IiLCJvbnJlc3VsdCIsInZhbHVlIiwicmVzdWx0cyIsInRyYW5zY3JpcHQiLCJvbnNwZWVjaGVuZCIsInN0b3AiLCJhamF4Q2FsbCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0Iiwic2VuZCIsImluaXRTaWRlYmFyVG9nZ2xlIiwic2lkZWJhclRvZ2dsZXIiLCJvdmVybGF5IiwiYXBwT3ZlcmxheSIsInRhcmdldEVsIiwidGVsIiwidG9nZ2xlIiwiY3VycmVudFRhcmdldCIsImNocm9tZSIsInJlYWR5U3RhdGUiLCJvbkNvbnRlbnRMb2FkZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHLENBQUMsZUFBRCxFQUFrQixxQkFBbEIsRUFBeUMsZ0JBQXpDLENBQXJCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxZQUFELEVBQWUsZUFBZixFQUFnQyxrQkFBaEMsRUFBb0Qsa0JBQXBELEVBQXdFLGFBQXhFLENBQXpCO0FBQ0EsSUFBTUMsYUFBYSxrTUFBbkIsQyxDQVNBOztBQUNBLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCO0FBQzNCLFFBQU0sSUFBSUMsS0FBSiw2QkFBK0JELElBQUksZ0JBQVVBLElBQVYsU0FBcUIsRUFBeEQsRUFBTjtBQUNEOztBQUVELElBQU1FLE9BQU8sR0FBRztBQUNkO0FBQ0FDLFNBQU8sRUFBRSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQyxRQUFRLENBQUNDLGVBQXpDLEdBQTJELElBRnREO0FBSWQ7QUFDQUMsbUJBQWlCLEVBQUUsSUFMTDtBQU9kO0FBQ0FDLGNBQVksRUFBRSxHQVJBO0FBVWRDLGNBQVksRUFBRSxJQVZBO0FBWWRDLFVBQVEsRUFBRSxJQVpJO0FBY2Q7QUFDQUMsV0FBUyxFQUFFLElBZkc7QUFnQmRDLFVBQVEsRUFBRSxJQWhCSTtBQWlCZEMsZ0JBQWMsRUFBRSxJQWpCRjtBQWtCZEMsaUJBQWUsRUFBRSxJQWxCSDtBQW1CZEMscUJBQW1CLEVBQUUsSUFuQlA7QUFvQmRDLDRCQUEwQixFQUFFLElBcEJkO0FBcUJkQyxZQUFVLEVBQUUsRUFyQkU7QUFzQmRDLGNBQVksRUFBRSxLQXRCQTtBQXVCZEMsYUFBVyxFQUFFLEtBdkJDO0FBd0JkQyxtQkFBaUIsRUFBRSxDQXhCTDtBQTBCZDtBQUNBO0FBRUE7QUFDQTtBQUNBQyxpQkEvQmMsNkJBK0JtQztBQUFBLFFBQWpDQyxPQUFpQyx1RUFBdkIsS0FBdUI7QUFBQSxRQUFoQkMsUUFBZ0IsdUVBQUwsR0FBSztBQUMvQyxRQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUVBLFFBQUksQ0FBQ0QsVUFBTCxFQUFpQjtBQUVqQixRQUFJRSxRQUFRLEdBQUdGLFVBQVUsQ0FBQ0csYUFBWCxDQUF5QixnQ0FBekIsQ0FBZjs7QUFFQSxRQUFJRCxRQUFKLEVBQWM7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFnQjtBQUNwQ0gsU0FBQyxJQUFJRyxDQUFDLEdBQUcsQ0FBVDtBQUNBLFlBQUlILENBQUMsR0FBRyxDQUFSLEVBQVcsT0FBUUUsQ0FBQyxHQUFHLENBQUwsR0FBVUYsQ0FBVixHQUFjQSxDQUFkLEdBQWtCQyxDQUF6QjtBQUNYRCxTQUFDLElBQUksQ0FBTDtBQUNBLGVBQVEsQ0FBQ0UsQ0FBRCxHQUFLLENBQU4sSUFBWUYsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsQ0FBUixDQUFELEdBQWMsQ0FBMUIsSUFBK0JDLENBQXRDO0FBQ0QsT0FMRDs7QUFPQSxVQUFNRyxPQUFPLEdBQUcsS0FBS1IsYUFBTCxHQUFxQkUsYUFBckIsQ0FBbUMsYUFBbkMsQ0FBaEI7O0FBRUEsVUFBSSxPQUFPRCxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDQSxnQkFBUSxHQUFHckIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QkQsUUFBdkIsQ0FBWDtBQUNEOztBQUNELFVBQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQ0EsZ0JBQVEsR0FBR0EsUUFBUSxDQUFDUSxxQkFBVCxHQUFpQ0MsR0FBakMsR0FBdUNGLE9BQU8sQ0FBQ0csU0FBMUQ7QUFDRCxPQW5CVyxDQXFCWjs7O0FBQ0EsVUFBSVYsUUFBUSxHQUFHVyxRQUFRLENBQUVKLE9BQU8sQ0FBQ0ssWUFBUixHQUF1QixDQUF4QixHQUE2QixDQUE5QixFQUFpQyxFQUFqQyxDQUF2QixFQUE2RDtBQUU3RCxVQUFNQyxLQUFLLEdBQUdOLE9BQU8sQ0FBQ0csU0FBdEI7QUFDQSxVQUFNSSxNQUFNLEdBQUdkLFFBQVEsR0FBR2EsS0FBWCxHQUFtQkYsUUFBUSxDQUFDSixPQUFPLENBQUNLLFlBQVIsR0FBdUIsQ0FBeEIsRUFBMkIsRUFBM0IsQ0FBMUM7QUFDQSxVQUFNRyxTQUFTLEdBQUcsQ0FBQyxJQUFJQyxJQUFKLEVBQW5COztBQUVBLFVBQUlwQixPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsWUFBTXFCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixjQUFNQyxXQUFXLEdBQUcsQ0FBQyxJQUFJRixJQUFKLEVBQXJCO0FBQ0EsY0FBTUcsV0FBVyxHQUFHRCxXQUFXLEdBQUdILFNBQWxDO0FBQ0EsY0FBTUssR0FBRyxHQUFHbEIsYUFBYSxDQUFDaUIsV0FBRCxFQUFjTixLQUFkLEVBQXFCQyxNQUFyQixFQUE2QmpCLFFBQTdCLENBQXpCO0FBQ0FVLGlCQUFPLENBQUNHLFNBQVIsR0FBb0JVLEdBQXBCOztBQUNBLGNBQUlELFdBQVcsR0FBR3RCLFFBQWxCLEVBQTRCO0FBQzFCd0IsaUNBQXFCLENBQUNKLGFBQUQsQ0FBckI7QUFDRCxXQUZELE1BRU87QUFDTFYsbUJBQU8sQ0FBQ0csU0FBUixHQUFvQkksTUFBcEI7QUFDRDtBQUNGLFNBVkQ7O0FBV0FHLHFCQUFhO0FBQ2QsT0FiRCxNQWFPO0FBQ0xWLGVBQU8sQ0FBQ0csU0FBUixHQUFvQkksTUFBcEI7QUFDRDtBQUNGO0FBQ0YsR0FuRmE7QUFxRmQ7QUFDQTtBQUNBUSxXQXZGYyxxQkF1RkpDLEdBdkZJLEVBdUZvQjtBQUFBLFFBQW5CQyxFQUFtQix1RUFBZCxLQUFLL0MsT0FBUzs7QUFDaEMsUUFBSStDLEVBQUUsQ0FBQ0MsTUFBSCxLQUFjQyxTQUFsQixFQUE2QjtBQUMzQjtBQUNBRixRQUFFLENBQUNHLE9BQUgsQ0FBVyxVQUFBQyxDQUFDLEVBQUk7QUFDZEwsV0FBRyxDQUFDTSxLQUFKLENBQVUsR0FBVixFQUFlRixPQUFmLENBQXVCLFVBQUF0QixDQUFDO0FBQUEsaUJBQUl1QixDQUFDLENBQUNFLFNBQUYsQ0FBWUMsR0FBWixDQUFnQjFCLENBQWhCLENBQUo7QUFBQSxTQUF4QjtBQUNELE9BRkQ7QUFHRCxLQUxELE1BS087QUFDTDtBQUNBa0IsU0FBRyxDQUFDTSxLQUFKLENBQVUsR0FBVixFQUFlRixPQUFmLENBQXVCLFVBQUF0QixDQUFDO0FBQUEsZUFBSW1CLEVBQUUsQ0FBQ00sU0FBSCxDQUFhQyxHQUFiLENBQWlCMUIsQ0FBakIsQ0FBSjtBQUFBLE9BQXhCO0FBQ0Q7QUFDRixHQWpHYTtBQW1HZDtBQUNBO0FBQ0EyQixjQXJHYyx3QkFxR0RULEdBckdDLEVBcUd1QjtBQUFBLFFBQW5CQyxFQUFtQix1RUFBZCxLQUFLL0MsT0FBUzs7QUFDbkMsUUFBSStDLEVBQUUsQ0FBQ0MsTUFBSCxLQUFjQyxTQUFsQixFQUE2QjtBQUMzQjtBQUNBRixRQUFFLENBQUNHLE9BQUgsQ0FBVyxVQUFBQyxDQUFDLEVBQUk7QUFDZEwsV0FBRyxDQUFDTSxLQUFKLENBQVUsR0FBVixFQUFlRixPQUFmLENBQXVCLFVBQUF0QixDQUFDO0FBQUEsaUJBQUl1QixDQUFDLENBQUNFLFNBQUYsQ0FBWUcsTUFBWixDQUFtQjVCLENBQW5CLENBQUo7QUFBQSxTQUF4QjtBQUNELE9BRkQ7QUFHRCxLQUxELE1BS087QUFDTDtBQUNBa0IsU0FBRyxDQUFDTSxLQUFKLENBQVUsR0FBVixFQUFlRixPQUFmLENBQXVCLFVBQUF0QixDQUFDO0FBQUEsZUFBSW1CLEVBQUUsQ0FBQ00sU0FBSCxDQUFhRyxNQUFiLENBQW9CNUIsQ0FBcEIsQ0FBSjtBQUFBLE9BQXhCO0FBQ0Q7QUFDRixHQS9HYTtBQWlIZDtBQUNBNkIsY0FsSGMsMEJBa0g4QjtBQUFBLFFBQS9CVixFQUErQix1RUFBMUIsS0FBSy9DLE9BQXFCO0FBQUEsUUFBWjBELElBQVk7QUFBQSxRQUFOQyxJQUFNOztBQUMxQyxRQUFJWixFQUFFLENBQUNNLFNBQUgsQ0FBYU8sUUFBYixDQUFzQkYsSUFBdEIsQ0FBSixFQUFpQztBQUMvQlgsUUFBRSxDQUFDTSxTQUFILENBQWFRLE9BQWIsQ0FBcUJILElBQXJCLEVBQTJCQyxJQUEzQjtBQUNELEtBRkQsTUFFTztBQUNMWixRQUFFLENBQUNNLFNBQUgsQ0FBYVEsT0FBYixDQUFxQkYsSUFBckIsRUFBMkJELElBQTNCO0FBQ0Q7QUFDRixHQXhIYTtBQTBIZDtBQUNBO0FBQ0FJLFdBNUhjLHFCQTRISmhCLEdBNUhJLEVBNEhvQjtBQUFBLFFBQW5CQyxFQUFtQix1RUFBZCxLQUFLL0MsT0FBUztBQUNoQyxRQUFJK0QsTUFBTSxHQUFHLEtBQWI7QUFFQWpCLE9BQUcsQ0FBQ00sS0FBSixDQUFVLEdBQVYsRUFBZUYsT0FBZixDQUF1QixVQUFBdEIsQ0FBQyxFQUFJO0FBQzFCLFVBQUltQixFQUFFLENBQUNNLFNBQUgsQ0FBYU8sUUFBYixDQUFzQmhDLENBQXRCLENBQUosRUFBOEJtQyxNQUFNLEdBQUcsSUFBVDtBQUMvQixLQUZEO0FBSUEsV0FBT0EsTUFBUDtBQUNELEdBcElhO0FBc0lkQyxhQXRJYyx1QkFzSUZqQixFQXRJRSxFQXNJRUQsR0F0SUYsRUFzSU87QUFDbkIsUUFBS0MsRUFBRSxJQUFJQSxFQUFFLENBQUNrQixPQUFILENBQVdDLFdBQVgsT0FBNkIsTUFBcEMsSUFBK0NuQixFQUFFLENBQUNrQixPQUFILENBQVdDLFdBQVgsT0FBNkIsTUFBaEYsRUFBd0YsT0FBTyxJQUFQO0FBQ3hGbkIsTUFBRSxHQUFHQSxFQUFFLENBQUNvQixVQUFSOztBQUNBLFdBQU9wQixFQUFFLElBQUlBLEVBQUUsQ0FBQ2tCLE9BQUgsQ0FBV0MsV0FBWCxPQUE2QixNQUFuQyxJQUE2QyxDQUFDbkIsRUFBRSxDQUFDTSxTQUFILENBQWFPLFFBQWIsQ0FBc0JkLEdBQXRCLENBQXJELEVBQWlGO0FBQy9FQyxRQUFFLEdBQUdBLEVBQUUsQ0FBQ29CLFVBQVI7QUFDRDs7QUFDRHBCLE1BQUUsR0FBR0EsRUFBRSxJQUFJQSxFQUFFLENBQUNrQixPQUFILENBQVdDLFdBQVgsT0FBNkIsTUFBbkMsR0FBNENuQixFQUE1QyxHQUFpRCxJQUF0RDtBQUNBLFdBQU9BLEVBQVA7QUFDRCxHQTlJYTtBQWdKZDtBQUNBO0FBQ0FxQixxQkFsSmMsK0JBa0pNdkUsSUFsSk4sRUFrSlk7QUFDeEIsUUFBSSxPQUFPSSxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DOztBQUVuQyxRQUFJQyxRQUFRLENBQUNtRSxXQUFiLEVBQTBCO0FBQ3hCLFVBQUlDLEtBQUo7O0FBRUEsVUFBSSxPQUFPQyxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDO0FBQy9CRCxhQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVMUUsSUFBVixDQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0x5RSxhQUFLLEdBQUdwRSxRQUFRLENBQUNtRSxXQUFULENBQXFCLE9BQXJCLENBQVI7QUFDQUMsYUFBSyxDQUFDRSxTQUFOLENBQWdCM0UsSUFBaEIsRUFBc0IsS0FBdEIsRUFBNkIsSUFBN0I7QUFDRDs7QUFFREksWUFBTSxDQUFDd0UsYUFBUCxDQUFxQkgsS0FBckI7QUFDRCxLQVhELE1BV087QUFDTHJFLFlBQU0sQ0FBQ3lFLFNBQVAsYUFBc0I3RSxJQUF0QixHQUE4QkssUUFBUSxDQUFDeUUsaUJBQVQsRUFBOUI7QUFDRDtBQUNGLEdBbkthO0FBcUtkO0FBQ0E7QUFDQUMsZUF2S2MseUJBdUtBL0UsSUF2S0EsRUF1S007QUFDbEIsU0FBS3VFLG1CQUFMLGlCQUFrQ3ZFLElBQWxDOztBQUVBLFNBQUtpQixVQUFMLENBQWdCK0QsTUFBaEIsQ0FBdUIsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ1IsS0FBVCxLQUFtQnpFLElBQXZCO0FBQUEsS0FBL0IsRUFBNERxRCxPQUE1RCxDQUFvRSxVQUFBNEIsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBSjtBQUFBLEtBQTVFO0FBQ0QsR0EzS2E7QUE2S2Q7QUFDQTtBQUNBQyxvQkEvS2MsZ0NBK0t5QztBQUFBLFFBQXBDQyxZQUFvQyx1RUFBckIsQ0FBcUI7QUFBQSxRQUFsQkMsWUFBa0IsdUVBQUgsQ0FBRzs7QUFDckQsUUFBSSxDQUFDLEtBQUsxRSxRQUFWLEVBQW9CO0FBQ2xCLFdBQUtBLFFBQUwsR0FBZ0JQLFFBQVEsQ0FBQ2tGLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEI7QUFDQSxXQUFLM0UsUUFBTCxDQUFjNEUsSUFBZCxHQUFxQixVQUFyQjtBQUNBbkYsY0FBUSxDQUFDb0YsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUs5RSxRQUEvQjtBQUNEOztBQUVELFFBQU0rRSxRQUFRLEdBQUc3RixhQUFhLENBQUNrRSxPQUFkLENBQXNCLG9CQUF0QixFQUE0Q3FCLFlBQTVDLEVBQTBEckIsT0FBMUQsQ0FDZixvQkFEZSxFQUVmc0IsWUFGZSxDQUFqQjs7QUFLQSxRQUFJLEtBQUszRSxTQUFMLEtBQW1CZ0YsUUFBdkIsRUFBaUM7QUFDL0IsV0FBS2hGLFNBQUwsR0FBaUJnRixRQUFqQjtBQUNBLFdBQUsvRSxRQUFMLENBQWNnRixXQUFkLEdBQTRCRCxRQUE1QjtBQUNEO0FBQ0YsR0EvTGE7QUFpTWQ7QUFDQTtBQUNBRSxvQkFuTWMsZ0NBbU1PO0FBQ25CLFFBQUksS0FBS2pGLFFBQVQsRUFBbUJQLFFBQVEsQ0FBQ29GLElBQVQsQ0FBY0ssV0FBZCxDQUEwQixLQUFLbEYsUUFBL0I7QUFDbkIsU0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUtELFNBQUwsR0FBaUIsSUFBakI7QUFDRCxHQXZNYTtBQXlNZDtBQUNBO0FBQ0FvRixtQkEzTWMsK0JBMk1NO0FBQ2xCLFFBQU12RSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjs7QUFFQSxRQUFJRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0csYUFBWCxDQUF5QixPQUF6QixDQUFsQixFQUFxRDtBQUNuRCxVQUFNcUUsS0FBSyxHQUFHeEUsVUFBVSxDQUFDRyxhQUFYLENBQXlCLGFBQXpCLENBQWQ7QUFEbUQsVUFFM0NTLFNBRjJDLEdBRTdCNEQsS0FGNkIsQ0FFM0M1RCxTQUYyQztBQUduRCxVQUFNNkQsYUFBYSxHQUFHNUYsUUFBUSxDQUFDQyxlQUFULENBQXlCOEIsU0FBL0M7QUFFQVosZ0JBQVUsQ0FBQzBFLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCLENBTG1ELENBTW5EOztBQUNBM0UsZ0JBQVUsQ0FBQzBFLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLEVBQTNCO0FBQ0FILFdBQUssQ0FBQzVELFNBQU4sR0FBa0JBLFNBQWxCO0FBQ0EvQixjQUFRLENBQUNDLGVBQVQsQ0FBeUI4QixTQUF6QixHQUFxQzZELGFBQXJDO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBTyxLQUFQO0FBQ0QsR0E3TmE7QUErTmQ7QUFDQTtBQUNBRyx3QkFqT2Msb0NBaU9XO0FBQ3ZCLFFBQUloRyxNQUFNLENBQUNpRyxLQUFYLEVBQWtCLE9BQU8sS0FBUDtBQUVsQixRQUFNbkQsRUFBRSxHQUFHN0MsUUFBUSxDQUFDaUcsSUFBVCxJQUFpQmpHLFFBQVEsQ0FBQ0MsZUFBckM7QUFFQSxRQUFJLENBQUM0QyxFQUFMLEVBQVMsT0FBTyxLQUFQO0FBRVQsUUFBSWdCLE1BQU0sR0FBRyxLQUFiO0FBQ0FyRSxvQkFBZ0IsQ0FBQ3dELE9BQWpCLENBQXlCLFVBQUFrRCxJQUFJLEVBQUk7QUFDL0IsVUFBSSxPQUFPckQsRUFBRSxDQUFDZ0QsS0FBSCxDQUFTSyxJQUFULENBQVAsS0FBMEIsV0FBOUIsRUFBMkNyQyxNQUFNLEdBQUcsSUFBVDtBQUM1QyxLQUZEO0FBSUEsV0FBT0EsTUFBUDtBQUNELEdBOU9hO0FBZ1BkO0FBQ0E7QUFDQXNDLGtCQWxQYyw4QkFrUEs7QUFBQTs7QUFDakIsUUFBTUMsWUFBWSxHQUFHLEtBQUtDLGVBQUwsRUFBckI7QUFFQSxRQUFJLENBQUNELFlBQUwsRUFBbUIsT0FBTyxDQUFQO0FBQ25CLFFBQUksQ0FBQyxLQUFLRSxhQUFMLEVBQUwsRUFBMkIsT0FBT0YsWUFBWSxDQUFDdkUscUJBQWIsR0FBcUMwRSxNQUE1QyxDQUpWLENBTWpCOztBQUVBLFFBQU1DLFFBQVEsR0FBR0osWUFBWSxDQUFDSyxTQUFiLENBQXVCLElBQXZCLENBQWpCO0FBQ0FELFlBQVEsQ0FBQ0UsRUFBVCxHQUFjLElBQWQ7QUFDQUYsWUFBUSxDQUFDWCxLQUFULENBQWVjLFVBQWYsR0FBNEIsUUFBNUI7QUFDQUgsWUFBUSxDQUFDWCxLQUFULENBQWVlLFFBQWYsR0FBMEIsVUFBMUI7QUFFQUMsU0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQmpDLElBQXRCLENBQTJCMEIsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBM0IsRUFBd0VoRSxPQUF4RSxDQUFnRixVQUFBSCxFQUFFO0FBQUEsYUFBSSxLQUFJLENBQUNRLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJSLEVBQTFCLENBQUo7QUFBQSxLQUFsRjtBQUVBdUQsZ0JBQVksQ0FBQ25DLFVBQWIsQ0FBd0JnRCxZQUF4QixDQUFxQ1QsUUFBckMsRUFBK0NKLFlBQS9DO0FBRUEsUUFBTXBCLFlBQVksR0FBR3dCLFFBQVEsQ0FBQzNFLHFCQUFULEdBQWlDMEUsTUFBdEQ7QUFFQUMsWUFBUSxDQUFDdkMsVUFBVCxDQUFvQndCLFdBQXBCLENBQWdDZSxRQUFoQztBQUVBLFdBQU94QixZQUFQO0FBQ0QsR0F4UWE7QUEwUWQ7QUFDQTtBQUNBa0Msa0JBNVFjLDhCQTRRSztBQUNqQixRQUFNQyxZQUFZLEdBQUcsS0FBS0MsZUFBTCxFQUFyQjtBQUVBLFFBQUksQ0FBQ0QsWUFBTCxFQUFtQixPQUFPLENBQVA7QUFFbkIsV0FBT0EsWUFBWSxDQUFDdEYscUJBQWIsR0FBcUMwRSxNQUE1QztBQUNELEdBbFJhO0FBb1JkO0FBQ0E7QUFDQWMsdUJBdFJjLGlDQXNSUXhFLEVBdFJSLEVBc1JZO0FBQ3hCLFFBQU0zQixRQUFRLEdBQUduQixNQUFNLENBQUN1SCxnQkFBUCxDQUF3QnpFLEVBQXhCLEVBQTRCMEUsa0JBQTdDO0FBRUEsV0FBT0MsVUFBVSxDQUFDdEcsUUFBRCxDQUFWLElBQXdCQSxRQUFRLENBQUN1RyxPQUFULENBQWlCLElBQWpCLE1BQTJCLENBQUMsQ0FBNUIsR0FBZ0MsQ0FBaEMsR0FBb0MsSUFBNUQsQ0FBUDtBQUNELEdBMVJhO0FBNFJkO0FBQ0E7QUFDQUMsb0JBOVJjLDhCQThSS0MsT0E5UkwsRUE4UmM7QUFDMUIsU0FBS0EsT0FBTyxHQUFHLFdBQUgsR0FBaUIsY0FBN0IsRUFBNkMsbUJBQTdDO0FBQ0QsR0FoU2E7QUFrU2Q7QUFDQTtBQUNBQyxlQXBTYyx5QkFvU0FDLFNBcFNBLEVBb1NXO0FBQUE7O0FBQ3ZCLFFBQUksS0FBS3ZCLGFBQUwsRUFBSixFQUEwQjtBQUN4QixVQUFJdUIsU0FBSixFQUFlO0FBQ2IsYUFBS3hFLFlBQUwsQ0FBa0Isc0JBQWxCO0FBQ0QsT0FGRCxNQUVPO0FBQ0x5RSxrQkFBVSxDQUNSLFlBQU07QUFDSixnQkFBSSxDQUFDbkYsU0FBTCxDQUFlLHNCQUFmO0FBQ0QsU0FITyxFQUlSLEtBQUsrQyxpQkFBTCxLQUEyQixDQUEzQixHQUErQixDQUp2QixDQUFWO0FBTUQ7QUFDRjtBQUNGLEdBalRhO0FBbVRkO0FBQ0E7QUFDQXFDLDhCQXJUYyx3Q0FxVGVDLFFBclRmLEVBcVR5QkMsRUFyVHpCLEVBcVQ2QjtBQUFBOztBQUN6QyxRQUFNQyxJQUFJLEdBQUcsS0FBS0MsT0FBTCxFQUFiO0FBQ0EsUUFBTWpILFFBQVEsR0FBR2dILElBQUksR0FBRyxLQUFLYixxQkFBTCxDQUEyQmEsSUFBM0IsSUFBbUMsRUFBdEMsR0FBMkMsQ0FBaEU7O0FBRUEsUUFBSSxDQUFDaEgsUUFBTCxFQUFlO0FBQ2I4RyxjQUFRLENBQUNsRCxJQUFULENBQWMsSUFBZDtBQUNBbUQsUUFBRSxDQUFDbkQsSUFBSCxDQUFRLElBQVI7QUFDQTtBQUNEOztBQUVELFNBQUtwRSxtQkFBTCxHQUEyQixVQUFBdUMsQ0FBQyxFQUFJO0FBQzlCLFVBQUlBLENBQUMsQ0FBQ21GLE1BQUYsS0FBYUYsSUFBakIsRUFBdUI7O0FBQ3ZCLFlBQUksQ0FBQ0csOEJBQUw7O0FBQ0FKLFFBQUUsQ0FBQ25ELElBQUgsQ0FBUSxNQUFSO0FBQ0QsS0FKRDs7QUFNQXZGLGdCQUFZLENBQUN5RCxPQUFiLENBQXFCLFVBQUFDLENBQUMsRUFBSTtBQUN4QmlGLFVBQUksQ0FBQ0ksZ0JBQUwsQ0FBc0JyRixDQUF0QixFQUF5QixNQUFJLENBQUN2QyxtQkFBOUIsRUFBbUQsS0FBbkQ7QUFDRCxLQUZEO0FBSUFzSCxZQUFRLENBQUNsRCxJQUFULENBQWMsSUFBZDtBQUVBLFNBQUtuRSwwQkFBTCxHQUFrQ21ILFVBQVUsQ0FBQyxZQUFNO0FBQ2pELFlBQUksQ0FBQ3BILG1CQUFMLENBQXlCb0UsSUFBekIsQ0FBOEIsTUFBOUIsRUFBb0M7QUFBRXNELGNBQU0sRUFBRUY7QUFBVixPQUFwQztBQUNELEtBRjJDLEVBRXpDaEgsUUFGeUMsQ0FBNUM7QUFHRCxHQTlVYTtBQWdWZDtBQUNBO0FBQ0FtSCxnQ0FsVmMsNENBa1ZtQjtBQUFBOztBQUMvQixRQUFNSCxJQUFJLEdBQUcsS0FBS0MsT0FBTCxFQUFiOztBQUVBLFFBQUksS0FBS3hILDBCQUFULEVBQXFDO0FBQ25DNEgsa0JBQVksQ0FBQyxLQUFLNUgsMEJBQU4sQ0FBWjtBQUNBLFdBQUtBLDBCQUFMLEdBQWtDLElBQWxDO0FBQ0Q7O0FBRUQsUUFBSXVILElBQUksSUFBSSxLQUFLeEgsbUJBQWpCLEVBQXNDO0FBQ3BDbkIsa0JBQVksQ0FBQ3lELE9BQWIsQ0FBcUIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3hCaUYsWUFBSSxDQUFDTSxtQkFBTCxDQUF5QnZGLENBQXpCLEVBQTRCLE1BQUksQ0FBQ3ZDLG1CQUFqQyxFQUFzRCxLQUF0RDtBQUNELE9BRkQ7QUFHRDs7QUFFRCxRQUFJLEtBQUtBLG1CQUFULEVBQThCO0FBQzVCLFdBQUtBLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0Q7QUFDRixHQW5XYTtBQXFXZDtBQUNBO0FBQ0ErSCx3QkF2V2Msb0NBdVdXO0FBQUE7O0FBQ3ZCLFNBQUtDLHdCQUFMOztBQUVBLFFBQU1ULEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQU07QUFDZixVQUFJLE1BQUksQ0FBQ3pILGNBQVQsRUFBeUI7QUFDdkIrSCxvQkFBWSxDQUFDLE1BQUksQ0FBQy9ILGNBQU4sQ0FBWjtBQUNBLGNBQUksQ0FBQ0EsY0FBTCxHQUFzQixJQUF0QjtBQUNEOztBQUNELFlBQUksQ0FBQ2tFLGFBQUwsQ0FBbUIsUUFBbkI7QUFDRCxLQU5EOztBQVFBLFNBQUtqRSxlQUFMLEdBQXVCLFlBQU07QUFDM0IsVUFBSSxNQUFJLENBQUNELGNBQVQsRUFBeUIrSCxZQUFZLENBQUMsTUFBSSxDQUFDL0gsY0FBTixDQUFaO0FBQ3pCLFlBQUksQ0FBQ0EsY0FBTCxHQUFzQnNILFVBQVUsQ0FBQ0csRUFBRCxFQUFLLE1BQUksQ0FBQzlILFlBQVYsQ0FBaEM7QUFDRCxLQUhEOztBQUtBSixVQUFNLENBQUN1SSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLN0gsZUFBdkMsRUFBd0QsS0FBeEQ7QUFDRCxHQXhYYTtBQTBYZDtBQUNBO0FBQ0FpSSwwQkE1WGMsc0NBNFhhO0FBQ3pCLFFBQUksS0FBS2xJLGNBQVQsRUFBeUI7QUFDdkIrSCxrQkFBWSxDQUFDLEtBQUsvSCxjQUFOLENBQVo7QUFDQSxXQUFLQSxjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLQyxlQUFULEVBQTBCO0FBQ3hCVixZQUFNLENBQUN5SSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLL0gsZUFBMUMsRUFBMkQsS0FBM0Q7QUFDQSxXQUFLQSxlQUFMLEdBQXVCLElBQXZCO0FBQ0Q7QUFDRixHQXRZYTtBQXdZZGtJLHNCQXhZYyxrQ0F3WVM7QUFBQTs7QUFDckIsUUFBSSxLQUFLQyxlQUFMLElBQXdCLEtBQUtDLGVBQTdCLElBQWdELEtBQUtDLGlCQUF6RCxFQUE0RTtBQUU1RSxRQUFNM0gsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFDQSxRQUFJLENBQUNELFVBQUwsRUFBaUIsT0FBTyxLQUFLNEgsc0JBQUwsRUFBUDs7QUFFakIsUUFBSSxDQUFDLEtBQUtILGVBQVYsRUFBMkI7QUFDekIsV0FBS0EsZUFBTCxHQUF1QixZQUFNO0FBQzNCLFlBQUksTUFBSSxDQUFDdEMsYUFBTCxNQUF3QixNQUFJLENBQUMxQyxTQUFMLENBQWUsc0JBQWYsQ0FBNUIsRUFBb0U7QUFDbEUsaUJBQU8sTUFBSSxDQUFDOEQsa0JBQUwsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNEOztBQUVELGVBQU8sTUFBSSxDQUFDQSxrQkFBTCxDQUF3QixLQUF4QixDQUFQO0FBQ0QsT0FORDs7QUFPQXZHLGdCQUFVLENBQUNtSCxnQkFBWCxDQUE0QixZQUE1QixFQUEwQyxLQUFLTSxlQUEvQyxFQUFnRSxLQUFoRTtBQUNBekgsZ0JBQVUsQ0FBQ21ILGdCQUFYLENBQTRCLFlBQTVCLEVBQTBDLEtBQUtNLGVBQS9DLEVBQWdFLEtBQWhFO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLEtBQUtDLGVBQVYsRUFBMkI7QUFDekIsV0FBS0EsZUFBTCxHQUF1QixZQUFNO0FBQzNCLGNBQUksQ0FBQ25CLGtCQUFMLENBQXdCLEtBQXhCO0FBQ0QsT0FGRDs7QUFHQXZHLGdCQUFVLENBQUNtSCxnQkFBWCxDQUE0QixZQUE1QixFQUEwQyxLQUFLTyxlQUEvQyxFQUFnRSxLQUFoRTtBQUNEOztBQUVELFFBQUksQ0FBQyxLQUFLQyxpQkFBVixFQUE2QjtBQUMzQixXQUFLQSxpQkFBTCxHQUF5QixVQUFBN0YsQ0FBQyxFQUFJO0FBQzVCLFlBQUksQ0FBQ0EsQ0FBRCxJQUFNLENBQUNBLENBQUMsQ0FBQ21GLE1BQVQsSUFBbUIsQ0FBQyxNQUFJLENBQUN0RSxXQUFMLENBQWlCYixDQUFDLENBQUNtRixNQUFuQixFQUEyQixjQUEzQixDQUF4QixFQUFvRTtBQUNsRSxnQkFBSSxDQUFDVixrQkFBTCxDQUF3QixLQUF4QjtBQUNEO0FBQ0YsT0FKRDs7QUFLQTNILFlBQU0sQ0FBQ3VJLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLEtBQUtRLGlCQUEzQyxFQUE4RCxJQUE5RDtBQUNEO0FBQ0YsR0F6YWE7QUEyYWRDLHdCQTNhYyxvQ0EyYVc7QUFDdkIsUUFBSSxDQUFDLEtBQUtILGVBQU4sSUFBeUIsQ0FBQyxLQUFLQyxlQUEvQixJQUFrRCxDQUFDLEtBQUtDLGlCQUE1RCxFQUErRTtBQUUvRSxRQUFNM0gsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7O0FBRUEsUUFBSSxLQUFLd0gsZUFBVCxFQUEwQjtBQUN4QixVQUFJekgsVUFBSixFQUFnQjtBQUNkQSxrQkFBVSxDQUFDcUgsbUJBQVgsQ0FBK0IsWUFBL0IsRUFBNkMsS0FBS0ksZUFBbEQsRUFBbUUsS0FBbkU7QUFDQXpILGtCQUFVLENBQUNxSCxtQkFBWCxDQUErQixZQUEvQixFQUE2QyxLQUFLSSxlQUFsRCxFQUFtRSxLQUFuRTtBQUNEOztBQUNELFdBQUtBLGVBQUwsR0FBdUIsSUFBdkI7QUFDRDs7QUFFRCxRQUFJLEtBQUtDLGVBQVQsRUFBMEI7QUFDeEIsVUFBSTFILFVBQUosRUFBZ0I7QUFDZEEsa0JBQVUsQ0FBQ3FILG1CQUFYLENBQStCLFlBQS9CLEVBQTZDLEtBQUtLLGVBQWxELEVBQW1FLEtBQW5FO0FBQ0Q7O0FBQ0QsV0FBS0EsZUFBTCxHQUF1QixJQUF2QjtBQUNEOztBQUVELFFBQUksS0FBS0MsaUJBQVQsRUFBNEI7QUFDMUIsVUFBSTNILFVBQUosRUFBZ0I7QUFDZHBCLGNBQU0sQ0FBQ3VJLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLEtBQUtRLGlCQUEzQyxFQUE4RCxJQUE5RDtBQUNEOztBQUNELFdBQUtBLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0Q7O0FBRUQsU0FBS3BCLGtCQUFMLENBQXdCLEtBQXhCO0FBQ0QsR0F2Y2E7QUF5Y2Q7QUFDQTtBQUVBc0IsZ0JBNWNjLDRCQTRja0I7QUFBQSxRQUFqQi9ILE9BQWlCLHVFQUFQLEtBQU87O0FBQzlCLFNBQUtELGVBQUwsQ0FBcUJDLE9BQXJCO0FBQ0QsR0E5Y2E7QUFnZGQ7QUFDQTtBQUNBZ0ksY0FsZGMsMEJBa2R1RDtBQUFBOztBQUFBLFFBQXhEcEIsU0FBd0QsdUVBQTVDbkksYUFBYSxDQUFDLFdBQUQsQ0FBK0I7QUFBQSxRQUFoQnVCLE9BQWdCLHVFQUFOLElBQU07QUFDbkUsUUFBTUUsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFFQSxRQUFJLENBQUNELFVBQUwsRUFBaUI7O0FBRWpCLFNBQUtrSCw4QkFBTDs7QUFFQSxRQUFJcEgsT0FBTyxJQUFJLEtBQUs4RSxzQkFBTCxFQUFmLEVBQThDO0FBQzVDLFdBQUtwRCxTQUFMLENBQWUsc0JBQWY7O0FBQ0EsVUFBSWtGLFNBQUosRUFBZSxLQUFLSCxrQkFBTCxDQUF3QixLQUF4Qjs7QUFFZixXQUFLSyw0QkFBTCxDQUNFLFlBQU07QUFDSjtBQUNBLFlBQUksTUFBSSxDQUFDekIsYUFBVCxFQUF3QixNQUFJLENBQUNzQixhQUFMLENBQW1CQyxTQUFuQjtBQUN6QixPQUpILEVBS0UsWUFBTTtBQUNKLGNBQUksQ0FBQ3hFLFlBQUwsQ0FBa0Isc0JBQWxCOztBQUNBLGNBQUksQ0FBQ2EsbUJBQUwsQ0FBeUIsUUFBekI7O0FBQ0EsY0FBSSxDQUFDUSxhQUFMLENBQW1CLFFBQW5COztBQUNBLGNBQUksQ0FBQ2dELGtCQUFMLENBQXdCLEtBQXhCO0FBQ0QsT0FWSDtBQVlELEtBaEJELE1BZ0JPO0FBQ0wsV0FBSy9FLFNBQUwsQ0FBZSxzQkFBZjs7QUFDQSxVQUFJa0YsU0FBSixFQUFlLEtBQUtILGtCQUFMLENBQXdCLEtBQXhCLEVBRlYsQ0FJTDs7QUFDQSxXQUFLRSxhQUFMLENBQW1CQyxTQUFuQjs7QUFFQUMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSSxDQUFDekUsWUFBTCxDQUFrQixzQkFBbEI7O0FBQ0EsY0FBSSxDQUFDYSxtQkFBTCxDQUF5QixRQUF6Qjs7QUFDQSxjQUFJLENBQUNRLGFBQUwsQ0FBbUIsUUFBbkI7O0FBQ0EsY0FBSSxDQUFDZ0Qsa0JBQUwsQ0FBd0IsS0FBeEI7QUFDRCxPQUxTLEVBS1AsQ0FMTyxDQUFWO0FBTUQ7QUFDRixHQXZmYTtBQXlmZDtBQUNBO0FBQ0F3QixpQkEzZmMsNkJBMmZrQjtBQUFBLFFBQWhCakksT0FBZ0IsdUVBQU4sSUFBTTtBQUM5QixTQUFLZ0ksWUFBTCxDQUFrQixDQUFDLEtBQUtFLFdBQUwsRUFBbkIsRUFBdUNsSSxPQUF2QztBQUNELEdBN2ZhO0FBK2ZkO0FBQ0E7QUFDQW1JLGFBamdCYyx5QkFpZ0JzRTtBQUFBLFFBQXhFQyxLQUF3RSx1RUFBaEUzSixhQUFhLENBQUMsT0FBRCxDQUFtRDtBQUFBLFFBQXhDNEosU0FBd0MsdUVBQTVCNUosYUFBYSxDQUFDLFdBQUQsQ0FBZTs7QUFDbEYsU0FBSzJELFlBQUwsQ0FBa0IscUVBQWxCOztBQUVBLFFBQUksQ0FBQ2dHLEtBQUQsSUFBVUMsU0FBZCxFQUF5QjtBQUN2QixXQUFLM0csU0FBTCxDQUFlLHVCQUFmO0FBQ0QsS0FGRCxNQUVPLElBQUkwRyxLQUFLLElBQUksQ0FBQ0MsU0FBZCxFQUF5QjtBQUM5QixXQUFLM0csU0FBTCxDQUFlLG1CQUFmOztBQUNBLFdBQUsrQyxpQkFBTDtBQUNELEtBSE0sTUFHQSxJQUFJMkQsS0FBSyxJQUFJQyxTQUFiLEVBQXdCO0FBQzdCLFdBQUszRyxTQUFMLENBQWUsNkJBQWY7O0FBQ0EsV0FBSytDLGlCQUFMO0FBQ0Q7O0FBRUQsU0FBSzZELE1BQUw7QUFDRCxHQS9nQmE7QUFpaEJkO0FBQ0E7QUFFQW5JLGVBcGhCYywyQkFvaEJFO0FBQ2QsV0FBT3BCLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBUDtBQUNELEdBdGhCYTtBQXdoQmQ2RyxTQXhoQmMscUJBd2hCSjtBQUNSLFFBQU1oSCxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUVBLFFBQUksQ0FBQ0QsVUFBTCxFQUFpQixPQUFPLElBQVA7QUFFakIsV0FBTyxDQUFDLEtBQUt5QyxTQUFMLENBQWUsTUFBZixFQUF1QnpDLFVBQXZCLENBQUQsR0FBc0NBLFVBQVUsQ0FBQ0csYUFBWCxDQUF5QixPQUF6QixDQUF0QyxHQUEwRUgsVUFBakY7QUFDRCxHQTloQmE7QUFnaUJka0YsaUJBaGlCYyw2QkFnaUJJO0FBQ2hCLFdBQU9yRyxRQUFRLENBQUNzQixhQUFULENBQXVCLGdCQUF2QixDQUFQO0FBQ0QsR0FsaUJhO0FBb2lCZDhGLGlCQXBpQmMsNkJBb2lCSTtBQUNoQixXQUFPcEgsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixpQkFBdkIsQ0FBUDtBQUNELEdBdGlCYTtBQXdpQmQ7QUFDQTtBQUVBaUksUUEzaUJjLG9CQTJpQkw7QUFDUCxRQUNHLEtBQUtsRCxlQUFMLE9BQ0csQ0FBQyxLQUFLQyxhQUFMLEVBQUQsSUFBeUIsS0FBS2tELGtCQUFMLEVBQXpCLElBQXNELEtBQUtDLE9BQUwsRUFBdkQsSUFBMEUsS0FBS0MsYUFBTCxFQUQ1RSxDQUFELElBRUMsS0FBS3RDLGVBQUwsTUFBMEIsS0FBS3VDLGFBQUwsRUFIN0IsRUFJRTtBQUNBLFdBQUs1RSxrQkFBTCxDQUF3QixLQUFLb0IsZ0JBQUwsRUFBeEIsRUFBaUQsS0FBS2UsZ0JBQUwsRUFBakQ7QUFDRDs7QUFFRCxTQUFLeUIsb0JBQUw7QUFDRCxHQXJqQmE7QUF1akJkaUIsZUF2akJjLDJCQXVqQmtDO0FBQUE7O0FBQUEsUUFBbENDLE1BQWtDLHVFQUF6Qm5LLGFBQWEsQ0FBQyxRQUFELENBQVk7O0FBQzlDLFFBQUltSyxNQUFNLElBQUksQ0FBQyxLQUFLL0ksV0FBcEIsRUFBaUM7QUFDL0IsV0FBS2dKLEVBQUwsQ0FBUSwyQkFBUixFQUFxQztBQUFBLGVBQU0sTUFBSSxDQUFDUCxNQUFMLEVBQU47QUFBQSxPQUFyQztBQUNBLFdBQUt6SSxXQUFMLEdBQW1CLElBQW5CO0FBQ0QsS0FIRCxNQUdPLElBQUksQ0FBQytJLE1BQUQsSUFBVyxLQUFLL0ksV0FBcEIsRUFBaUM7QUFDdEMsV0FBS2lKLEdBQUwsQ0FBUywyQkFBVDtBQUNBLFdBQUtqSixXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRixHQS9qQmE7QUFpa0JkO0FBQ0E7QUFFQWtKLE9BcGtCYyxtQkFva0JOO0FBQ04sV0FDRWhLLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IySSxZQUEvQixDQUE0QyxLQUE1QyxNQUF1RCxLQUF2RCxJQUNBakssUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixNQUF2QixFQUErQjJJLFlBQS9CLENBQTRDLEtBQTVDLE1BQXVELEtBRnpEO0FBSUQsR0F6a0JhO0FBMmtCZEMsZ0JBM2tCYyw0QkEya0JHO0FBQ2YsV0FBTyxPQUFPbkssTUFBTSxDQUFDb0ssV0FBZCxLQUE4QixXQUE5QixJQUE2Q0MsU0FBUyxDQUFDQyxTQUFWLENBQW9CNUMsT0FBcEIsQ0FBNEIsVUFBNUIsTUFBNEMsQ0FBQyxDQUFqRztBQUNELEdBN2tCYTtBQStrQmRuQixlQS9rQmMsMkJBK2tCRTtBQUNkLFdBQ0UsQ0FBQ3ZHLE1BQU0sQ0FBQ3VLLFVBQVAsSUFBcUJ0SyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJzSyxXQUE5QyxJQUE2RHZLLFFBQVEsQ0FBQ2lHLElBQVQsQ0FBY3NFLFdBQTVFLElBQTJGLEtBQUtySyxpQkFEbEc7QUFHRCxHQW5sQmE7QUFxbEJkc0osb0JBcmxCYyxnQ0FxbEJPO0FBQ25CLFdBQU8sQ0FBQyxDQUFDeEosUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixvQ0FBdkIsQ0FBVDtBQUNELEdBdmxCYTtBQXlsQmQ2SCxhQXpsQmMseUJBeWxCQTtBQUNaLFFBQUksS0FBSzdDLGFBQUwsRUFBSixFQUEwQjtBQUN4QixhQUFPLENBQUMsS0FBSzFDLFNBQUwsQ0FBZSxzQkFBZixDQUFSO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFLQSxTQUFMLENBQWUsdUJBQWYsQ0FBUDtBQUNELEdBOWxCYTtBQWdtQmQ2RixTQWhtQmMscUJBZ21CSjtBQUNSLFdBQU8sS0FBSzdGLFNBQUwsQ0FBZSwrQ0FBZixDQUFQO0FBQ0QsR0FsbUJhO0FBb21CZDhGLGVBcG1CYywyQkFvbUJFO0FBQ2QsV0FDRSxLQUFLOUYsU0FBTCxDQUFlLHFCQUFmLEtBQTBDLENBQUMsS0FBSzBDLGFBQUwsRUFBRCxJQUF5QixLQUFLbUQsT0FBTCxFQUF6QixJQUEyQyxLQUFLRCxrQkFBTCxFQUR2RjtBQUdELEdBeG1CYTtBQTBtQmRHLGVBMW1CYywyQkEwbUJFO0FBQ2QsV0FBTyxLQUFLL0YsU0FBTCxDQUFlLHFCQUFmLENBQVA7QUFDRCxHQTVtQmE7QUE4bUJkNEcsY0E5bUJjLDBCQThtQkM7QUFDYixXQUFPeEssUUFBUSxDQUFDQyxlQUFULENBQXlCa0QsU0FBekIsQ0FBbUNPLFFBQW5DLENBQTRDLGFBQTVDLENBQVA7QUFDRCxHQWhuQmE7QUFrbkJkO0FBQ0E7QUFFQW9HLElBcm5CYyxnQkFxbkIyRDtBQUFBLFFBQXRFMUYsS0FBc0UsdUVBQTlEMUUsYUFBYSxDQUFDLE9BQUQsQ0FBaUQ7QUFBQSxRQUF0Q21GLFFBQXNDLHVFQUEzQm5GLGFBQWEsQ0FBQyxVQUFELENBQWM7O0FBQUEsdUJBQ3REMEUsS0FBSyxDQUFDbEIsS0FBTixDQUFZLEdBQVosQ0FEc0Q7QUFBQTtBQUFBLFFBQ2hFdUgsTUFEZ0U7O0FBQUEsd0JBRWhEckcsS0FBSyxDQUFDbEIsS0FBTixDQUFZLEdBQVosQ0FGZ0Q7QUFBQTtBQUFBLFFBRTdEd0gsU0FGNkQsMkJBR3ZFOzs7QUFDQUEsYUFBUyxHQUFHQSxTQUFTLENBQUNDLElBQVYsQ0FBZSxHQUFmLEtBQXVCLElBQW5DOztBQUVBLFNBQUsvSixVQUFMLENBQWdCZ0ssSUFBaEIsQ0FBcUI7QUFBRXhHLFdBQUssRUFBRXFHLE1BQVQ7QUFBaUJDLGVBQVMsRUFBVEEsU0FBakI7QUFBNEI3RixjQUFRLEVBQVJBO0FBQTVCLEtBQXJCO0FBQ0QsR0E1bkJhO0FBOG5CZGtGLEtBOW5CYyxpQkE4bkJzQjtBQUFBOztBQUFBLFFBQWhDM0YsS0FBZ0MsdUVBQXhCMUUsYUFBYSxDQUFDLE9BQUQsQ0FBVzs7QUFBQSx3QkFDakIwRSxLQUFLLENBQUNsQixLQUFOLENBQVksR0FBWixDQURpQjtBQUFBO0FBQUEsUUFDM0J1SCxNQUQyQjs7QUFBQSx3QkFFWHJHLEtBQUssQ0FBQ2xCLEtBQU4sQ0FBWSxHQUFaLENBRlc7QUFBQTtBQUFBLFFBRXhCd0gsU0FGd0I7O0FBR2xDQSxhQUFTLEdBQUdBLFNBQVMsQ0FBQ0MsSUFBVixDQUFlLEdBQWYsS0FBdUIsSUFBbkM7O0FBRUEsU0FBSy9KLFVBQUwsQ0FDRytELE1BREgsQ0FDVSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDUixLQUFULEtBQW1CcUcsTUFBbkIsSUFBNkI3RixRQUFRLENBQUM4RixTQUFULEtBQXVCQSxTQUF4RDtBQUFBLEtBRGxCLEVBRUcxSCxPQUZILENBRVcsVUFBQTRCLFFBQVE7QUFBQSxhQUFJLE1BQUksQ0FBQ2hFLFVBQUwsQ0FBZ0JpSyxNQUFoQixDQUF1QixNQUFJLENBQUNqSyxVQUFMLENBQWdCNkcsT0FBaEIsQ0FBd0I3QyxRQUF4QixDQUF2QixFQUEwRCxDQUExRCxDQUFKO0FBQUEsS0FGbkI7QUFHRCxHQXRvQmE7QUF3b0JkO0FBQ0E7QUFFQWtHLE1BM29CYyxrQkEyb0JQO0FBQUE7O0FBQ0wsUUFBSSxLQUFLakssWUFBVCxFQUF1QjtBQUN2QixTQUFLQSxZQUFMLEdBQW9CLElBQXBCLENBRkssQ0FJTDs7QUFDQSxTQUFLa0Usa0JBQUwsQ0FBd0IsQ0FBeEIsRUFMSyxDQU9MOzs7QUFDQSxTQUFLMEQsc0JBQUwsR0FSSyxDQVVMOzs7QUFDQSxTQUFLc0IsR0FBTCxDQUFTLGVBQVQ7QUFDQSxTQUFLRCxFQUFMLENBQVEsZUFBUixFQUF5QixZQUFNO0FBQzdCLGFBQUksQ0FBQ0MsR0FBTCxDQUFTLDRCQUFUOztBQUNBLGFBQUksQ0FBQ0QsRUFBTCxDQUFRLDRCQUFSLEVBQXNDLFlBQU07QUFDMUM7QUFDQSxlQUFJLENBQUN4RCxhQUFMLE1BQXdCLENBQUMsT0FBSSxDQUFDNkMsV0FBTCxFQUF6QixJQUErQyxPQUFJLENBQUN6RCxpQkFBTCxFQUEvQztBQUNELE9BSEQsRUFGNkIsQ0FPN0I7OztBQUNBLFVBQUksT0FBTzFGLFFBQVEsQ0FBQytLLFlBQWhCLEtBQWlDLFFBQWpDLElBQTZDL0ssUUFBUSxDQUFDK0ssWUFBVCxHQUF3QixFQUF6RSxFQUE2RTtBQUMzRSxlQUFJLENBQUNoQixHQUFMLENBQVMsaUNBQVQ7O0FBQ0EsZUFBSSxDQUFDRCxFQUFMLENBQVEsaUNBQVIsRUFBMkMsWUFBTTtBQUMvQyxjQUFJLE9BQUksQ0FBQ0wsT0FBTCxFQUFKLEVBQW9CO0FBRDJCLGNBRXZDMUgsU0FGdUMsR0FFekIvQixRQUFRLENBQUNDLGVBRmdCLENBRXZDOEIsU0FGdUM7QUFHL0MvQixrQkFBUSxDQUFDaUcsSUFBVCxDQUFjSixLQUFkLENBQW9CQyxPQUFwQixHQUE4QixNQUE5QixDQUgrQyxDQUkvQzs7QUFDQTlGLGtCQUFRLENBQUNpRyxJQUFULENBQWNKLEtBQWQsQ0FBb0JDLE9BQXBCLEdBQThCLE9BQTlCO0FBQ0E5RixrQkFBUSxDQUFDQyxlQUFULENBQXlCOEIsU0FBekIsR0FBcUNBLFNBQXJDO0FBQ0QsU0FQRDtBQVFEO0FBQ0YsS0FuQkQ7O0FBcUJBLFNBQUsyQyxhQUFMLENBQW1CLE1BQW5CO0FBQ0QsR0E3cUJhO0FBK3FCZHNHLFNBL3FCYyxxQkErcUJKO0FBQUE7O0FBQ1IsUUFBSSxDQUFDLEtBQUtuSyxZQUFWLEVBQXdCO0FBQ3hCLFNBQUtBLFlBQUwsR0FBb0IsS0FBcEI7O0FBRUEsU0FBS3dDLFlBQUwsQ0FBa0Isc0JBQWxCOztBQUNBLFNBQUttQyxrQkFBTDs7QUFDQSxTQUFLNkMsOEJBQUw7O0FBQ0EsU0FBS0ssd0JBQUw7O0FBQ0EsU0FBS0ssc0JBQUw7O0FBQ0EsU0FBS2EsYUFBTCxDQUFtQixLQUFuQjtBQUVBLFNBQUtHLEdBQUwsQ0FBUyxlQUFULEVBWFEsQ0FhUjs7QUFDQSxTQUFLbkosVUFBTCxDQUNHK0QsTUFESCxDQUNVLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNSLEtBQVQsS0FBbUIsTUFBdkI7QUFBQSxLQURsQixFQUVHcEIsT0FGSCxDQUVXLFVBQUE0QixRQUFRO0FBQUEsYUFBSSxPQUFJLENBQUNoRSxVQUFMLENBQWdCaUssTUFBaEIsQ0FBdUIsT0FBSSxDQUFDakssVUFBTCxDQUFnQjZHLE9BQWhCLENBQXdCN0MsUUFBeEIsQ0FBdkIsRUFBMEQsQ0FBMUQsQ0FBSjtBQUFBLEtBRm5CO0FBR0QsR0Foc0JhO0FBa3NCZDtBQUNBO0FBQ0FxRyxvQkFwc0JjLGdDQW9zQk87QUFDbkIsUUFBTUMsT0FBTyxHQUFHbEwsUUFBUSxDQUFDZ0gsZ0JBQVQsQ0FBMEIseUJBQTFCLENBQWhCOztBQUNBLFFBQUksT0FBT2tFLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBLE9BQU8sS0FBSyxJQUFsRCxFQUF3RDtBQUN0REEsYUFBTyxDQUFDbEksT0FBUixDQUFnQixVQUFBSCxFQUFFLEVBQUk7QUFDcEJBLFVBQUUsQ0FBQ3lGLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUFyRixDQUFDLEVBQUk7QUFDaENBLFdBQUMsQ0FBQ2tJLGNBQUY7QUFDQSxjQUFNQyxrQkFBa0IsR0FBR3ZJLEVBQUUsQ0FBQ3dJLE9BQUgsQ0FBVyx1QkFBWCxDQUEzQjtBQUNBLGNBQU1DLHNCQUFzQixHQUFHRixrQkFBa0IsQ0FBQzlKLGFBQW5CLENBQWlDLEdBQWpDLENBQS9CO0FBQ0EsY0FBTWlLLHVCQUF1QixHQUFHSCxrQkFBa0IsQ0FBQzlKLGFBQW5CLENBQWlDLE9BQWpDLENBQWhDOztBQUVBLGNBQUlpSyx1QkFBdUIsQ0FBQ3RCLFlBQXhCLENBQXFDLE1BQXJDLE1BQWlELE1BQXJELEVBQTZEO0FBQzNEc0IsbUNBQXVCLENBQUNDLFlBQXhCLENBQXFDLE1BQXJDLEVBQTZDLFVBQTdDO0FBQ0FGLGtDQUFzQixDQUFDbkksU0FBdkIsQ0FBaUNRLE9BQWpDLENBQXlDLFNBQXpDLEVBQW9ELFNBQXBEO0FBQ0QsV0FIRCxNQUdPLElBQUk0SCx1QkFBdUIsQ0FBQ3RCLFlBQXhCLENBQXFDLE1BQXJDLE1BQWlELFVBQXJELEVBQWlFO0FBQ3RFc0IsbUNBQXVCLENBQUNDLFlBQXhCLENBQXFDLE1BQXJDLEVBQTZDLE1BQTdDO0FBQ0FGLGtDQUFzQixDQUFDbkksU0FBdkIsQ0FBaUNRLE9BQWpDLENBQXlDLFNBQXpDLEVBQW9ELFNBQXBEO0FBQ0Q7QUFDRixTQWJEO0FBY0QsT0FmRDtBQWdCRDtBQUNGLEdBeHRCYTtBQTB0QmQ7QUFDQTtBQUNBOEgsa0JBNXRCYyw4QkE0dEJLO0FBQ2pCLFFBQU1DLGlCQUFpQixHQUFHM0wsTUFBTSxDQUFDMkwsaUJBQVAsSUFBNEIzTCxNQUFNLENBQUM0TCx1QkFBN0Q7QUFDQSxRQUFNQyxZQUFZLEdBQUc1TCxRQUFRLENBQUNnSCxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBckI7O0FBQ0EsUUFBSTBFLGlCQUFpQixLQUFLM0ksU0FBdEIsSUFBbUMySSxpQkFBaUIsS0FBSyxJQUE3RCxFQUFtRTtBQUNqRSxVQUFJLE9BQU9FLFlBQVAsS0FBd0IsV0FBeEIsSUFBdUNBLFlBQVksS0FBSyxJQUE1RCxFQUFrRTtBQUNoRSxZQUFNQyxXQUFXLEdBQUcsSUFBSUgsaUJBQUosRUFBcEI7QUFDQSxZQUFNUixPQUFPLEdBQUdsTCxRQUFRLENBQUNnSCxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBaEI7QUFDQWtFLGVBQU8sQ0FBQ2xJLE9BQVIsQ0FBZ0IsVUFBQUgsRUFBRSxFQUFJO0FBQ3BCLGNBQUlpSixTQUFTLEdBQUcsS0FBaEI7QUFDQWpKLFlBQUUsQ0FBQ3lGLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDakN6RixjQUFFLENBQUN3SSxPQUFILENBQVcsY0FBWCxFQUEyQi9KLGFBQTNCLENBQXlDLGVBQXpDLEVBQTBEeUssS0FBMUQ7O0FBQ0FGLHVCQUFXLENBQUNHLGFBQVosR0FBNEIsWUFBTTtBQUNoQ0YsdUJBQVMsR0FBRyxJQUFaO0FBQ0QsYUFGRDs7QUFHQSxnQkFBSUEsU0FBUyxLQUFLLEtBQWxCLEVBQXlCO0FBQ3ZCRCx5QkFBVyxDQUFDM0osS0FBWjtBQUNEOztBQUNEMkosdUJBQVcsQ0FBQ0ksT0FBWixHQUFzQixZQUFNO0FBQzFCSCx1QkFBUyxHQUFHLEtBQVo7QUFDRCxhQUZEOztBQUdBRCx1QkFBVyxDQUFDSyxRQUFaLEdBQXVCLFVBQUE5SCxLQUFLLEVBQUk7QUFDOUJ2QixnQkFBRSxDQUFDd0ksT0FBSCxDQUFXLGNBQVgsRUFBMkIvSixhQUEzQixDQUF5QyxlQUF6QyxFQUEwRDZLLEtBQTFELEdBQWtFL0gsS0FBSyxDQUFDZ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JDLFVBQXRGO0FBQ0QsYUFGRDs7QUFHQVIsdUJBQVcsQ0FBQ1MsV0FBWixHQUEwQixZQUFNO0FBQzlCUix1QkFBUyxHQUFHLEtBQVo7QUFDQUQseUJBQVcsQ0FBQ1UsSUFBWjtBQUNELGFBSEQ7QUFJRCxXQWxCRDtBQW1CRCxTQXJCRDtBQXNCRDtBQUNGO0FBQ0YsR0EzdkJhO0FBNnZCZDtBQUNBQyxVQTl2QmMsb0JBOHZCTEMsR0E5dkJLLEVBOHZCQTtBQUNaLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxVQUFNQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0FBQ0FELFNBQUcsQ0FBQ0UsSUFBSixDQUFTLEtBQVQsRUFBZ0JOLEdBQWhCOztBQUNBSSxTQUFHLENBQUNHLE1BQUosR0FBYTtBQUFBLGVBQU9ILEdBQUcsQ0FBQ0ksTUFBSixLQUFlLEdBQWYsR0FBcUJOLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDSyxRQUFMLENBQTVCLEdBQTZDTixNQUFNLENBQUNoTixLQUFLLENBQUNpTixHQUFHLENBQUNNLFVBQUwsQ0FBTixDQUExRDtBQUFBLE9BQWI7O0FBQ0FOLFNBQUcsQ0FBQ1osT0FBSixHQUFjLFVBQUFoSixDQUFDO0FBQUEsZUFBSTJKLE1BQU0sQ0FBQ2hOLEtBQUssMEJBQW1CcUQsQ0FBbkIsRUFBTixDQUFWO0FBQUEsT0FBZjs7QUFDQTRKLFNBQUcsQ0FBQ08sSUFBSjtBQUNELEtBTk0sQ0FBUDtBQU9ELEdBdHdCYTtBQXd3QmQ7QUFDQTtBQUNBQyxtQkExd0JjLCtCQTB3Qk07QUFDbEIsUUFBTUMsY0FBYyxHQUFHdE4sUUFBUSxDQUFDZ0gsZ0JBQVQsQ0FBMEIsNEJBQTFCLENBQXZCO0FBRUFzRyxrQkFBYyxDQUFDdEssT0FBZixDQUF1QixVQUFBSCxFQUFFLEVBQUk7QUFDM0JBLFFBQUUsQ0FBQ3lGLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDakMsWUFBTUYsTUFBTSxHQUFHdkYsRUFBRSxDQUFDb0gsWUFBSCxDQUFnQixhQUFoQixDQUFmO0FBQ0EsWUFBTXNELE9BQU8sR0FBRzFLLEVBQUUsQ0FBQ29ILFlBQUgsQ0FBZ0IsY0FBaEIsQ0FBaEI7QUFDQSxZQUFNdUQsVUFBVSxHQUFHeE4sUUFBUSxDQUFDZ0gsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBbkI7QUFDQSxZQUFNeUcsUUFBUSxHQUFHek4sUUFBUSxDQUFDZ0gsZ0JBQVQsQ0FBMEJvQixNQUExQixDQUFqQjtBQUVBcUYsZ0JBQVEsQ0FBQ3pLLE9BQVQsQ0FBaUIsVUFBQTBLLEdBQUcsRUFBSTtBQUN0QkEsYUFBRyxDQUFDdkssU0FBSixDQUFjd0ssTUFBZCxDQUFxQixNQUFyQjs7QUFDQSxjQUNFLE9BQU9KLE9BQVAsS0FBbUIsV0FBbkIsSUFDQUEsT0FBTyxLQUFLLElBRFosSUFFQUEsT0FBTyxLQUFLLEtBRlosSUFHQSxPQUFPQyxVQUFQLEtBQXNCLFdBSnhCLEVBS0U7QUFDQSxnQkFBSUUsR0FBRyxDQUFDdkssU0FBSixDQUFjTyxRQUFkLENBQXVCLE1BQXZCLENBQUosRUFBb0M7QUFDbEM4Six3QkFBVSxDQUFDLENBQUQsQ0FBVixDQUFjckssU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsTUFBNUI7QUFDRCxhQUZELE1BRU87QUFDTG9LLHdCQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNySyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixNQUEvQjtBQUNEOztBQUNEa0ssc0JBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2xGLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFVBQUFyRixDQUFDLEVBQUk7QUFDM0NBLGVBQUMsQ0FBQzJLLGFBQUYsQ0FBZ0J6SyxTQUFoQixDQUEwQkcsTUFBMUIsQ0FBaUMsTUFBakM7QUFDQW9LLGlCQUFHLENBQUN2SyxTQUFKLENBQWNHLE1BQWQsQ0FBcUIsTUFBckI7QUFDRCxhQUhEO0FBSUQ7QUFDRixTQWxCRDtBQW1CRCxPQXpCRDtBQTBCRCxLQTNCRDtBQTRCRDtBQXp5QmEsQ0FBaEIsQyxDQTR5QkE7QUFDQTs7QUFFQSxJQUFJLE9BQU92RCxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDRixTQUFPLENBQUNpTCxJQUFSOztBQUVBLE1BQUlqTCxPQUFPLENBQUNxSyxjQUFSLE1BQTRCbkssTUFBTSxDQUFDOE4sTUFBdkMsRUFBK0M7QUFDN0M3TixZQUFRLENBQUNDLGVBQVQsQ0FBeUJrRCxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsbUJBQXZDO0FBQ0QsR0FMZ0MsQ0FPakM7OztBQUNBLE1BQUlwRCxRQUFRLENBQUM4TixVQUFULEtBQXdCLFVBQTVCLEVBQXdDak8sT0FBTyxDQUFDMEosTUFBUixHQUF4QyxLQUVFdkosUUFBUSxDQUFDc0ksZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFNBQVN5RixlQUFULEdBQTJCO0FBQ3ZFbE8sV0FBTyxDQUFDMEosTUFBUjtBQUNBdkosWUFBUSxDQUFDd0ksbUJBQVQsQ0FBNkIsa0JBQTdCLEVBQWlEdUYsZUFBakQ7QUFDRCxHQUhEO0FBSUgsQyxDQUVEIiwiZmlsZSI6Ii4vanMvaGVscGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbnN0YW50c1xuY29uc3QgVFJBTlNfRVZFTlRTID0gWyd0cmFuc2l0aW9uZW5kJywgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAnb1RyYW5zaXRpb25FbmQnXVxuY29uc3QgVFJBTlNfUFJPUEVSVElFUyA9IFsndHJhbnNpdGlvbicsICdNb3pUcmFuc2l0aW9uJywgJ3dlYmtpdFRyYW5zaXRpb24nLCAnV2Via2l0VHJhbnNpdGlvbicsICdPVHJhbnNpdGlvbiddXG5jb25zdCBJTkxJTkVfU1RZTEVTID0gYFxuLmxheW91dC1tZW51LWZpeGVkIC5sYXlvdXQtbmF2YmFyLWZ1bGwgLmxheW91dC1tZW51LFxuLmxheW91dC1wYWdlIHtcbiAgcGFkZGluZy10b3A6IHtuYXZiYXJIZWlnaHR9cHggIWltcG9ydGFudDtcbn1cbi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbToge2Zvb3RlckhlaWdodH1weCAhaW1wb3J0YW50O1xufWBcblxuLy8gR3VhcmRcbmZ1bmN0aW9uIHJlcXVpcmVkUGFyYW0obmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciByZXF1aXJlZCR7bmFtZSA/IGA6IFxcYCR7bmFtZX1cXGBgIDogJyd9YClcbn1cblxuY29uc3QgSGVscGVycyA9IHtcbiAgLy8gUm9vdCBFbGVtZW50XG4gIFJPT1RfRUw6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogbnVsbCxcblxuICAvLyBMYXJnZSBzY3JlZW5zIGJyZWFrcG9pbnRcbiAgTEFZT1VUX0JSRUFLUE9JTlQ6IDEyMDAsXG5cbiAgLy8gUmVzaXplIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuICBSRVNJWkVfREVMQVk6IDIwMCxcblxuICBtZW51UHNTY3JvbGw6IG51bGwsXG5cbiAgbWFpbk1lbnU6IG51bGwsXG5cbiAgLy8gSW50ZXJuYWwgdmFyaWFibGVzXG4gIF9jdXJTdHlsZTogbnVsbCxcbiAgX3N0eWxlRWw6IG51bGwsXG4gIF9yZXNpemVUaW1lb3V0OiBudWxsLFxuICBfcmVzaXplQ2FsbGJhY2s6IG51bGwsXG4gIF90cmFuc2l0aW9uQ2FsbGJhY2s6IG51bGwsXG4gIF90cmFuc2l0aW9uQ2FsbGJhY2tUaW1lb3V0OiBudWxsLFxuICBfbGlzdGVuZXJzOiBbXSxcbiAgX2luaXRpYWxpemVkOiBmYWxzZSxcbiAgX2F1dG9VcGRhdGU6IGZhbHNlLFxuICBfbGFzdFdpbmRvd0hlaWdodDogMCxcblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogVXRpbGl0aWVzXG5cbiAgLy8gLS0tXG4gIC8vIFNjcm9sbCBUbyBBY3RpdmUgTWVudSBJdGVtXG4gIF9zY3JvbGxUb0FjdGl2ZShhbmltYXRlID0gZmFsc2UsIGR1cmF0aW9uID0gNTAwKSB7XG4gICAgY29uc3QgbGF5b3V0TWVudSA9IHRoaXMuZ2V0TGF5b3V0TWVudSgpXG5cbiAgICBpZiAoIWxheW91dE1lbnUpIHJldHVyblxuXG4gICAgbGV0IGFjdGl2ZUVsID0gbGF5b3V0TWVudS5xdWVyeVNlbGVjdG9yKCdsaS5tZW51LWl0ZW0uYWN0aXZlOm5vdCgub3BlbiknKVxuXG4gICAgaWYgKGFjdGl2ZUVsKSB7XG4gICAgICAvLyB0ID0gY3VycmVudCB0aW1lXG4gICAgICAvLyBiID0gc3RhcnQgdmFsdWVcbiAgICAgIC8vIGMgPSBjaGFuZ2UgaW4gdmFsdWVcbiAgICAgIC8vIGQgPSBkdXJhdGlvblxuICAgICAgY29uc3QgZWFzZUluT3V0UXVhZCA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgICAgIHQgLz0gZCAvIDJcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gKGMgLyAyKSAqIHQgKiB0ICsgYlxuICAgICAgICB0IC09IDFcbiAgICAgICAgcmV0dXJuICgtYyAvIDIpICogKHQgKiAodCAtIDIpIC0gMSkgKyBiXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldExheW91dE1lbnUoKS5xdWVyeVNlbGVjdG9yKCcubWVudS1pbm5lcicpXG5cbiAgICAgIGlmICh0eXBlb2YgYWN0aXZlRWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGFjdGl2ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhY3RpdmVFbClcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgYWN0aXZlRWwgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGFjdGl2ZUVsID0gYWN0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZWxlbWVudC5zY3JvbGxUb3BcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYWN0aXZlIGVsZW1lbnQncyB0b3AgcG9zaXRpb24gaXMgbGVzcyB0aGFuIDIvMyAoNjYlKSBvZiBtZW51IGhlaWdodCB0aGFuIGRvIG5vdCBzY3JvbGxcbiAgICAgIGlmIChhY3RpdmVFbCA8IHBhcnNlSW50KChlbGVtZW50LmNsaWVudEhlaWdodCAqIDIpIC8gMywgMTApKSByZXR1cm5cblxuICAgICAgY29uc3Qgc3RhcnQgPSBlbGVtZW50LnNjcm9sbFRvcFxuICAgICAgY29uc3QgY2hhbmdlID0gYWN0aXZlRWwgLSBzdGFydCAtIHBhcnNlSW50KGVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMiwgMTApXG4gICAgICBjb25zdCBzdGFydERhdGUgPSArbmV3IERhdGUoKVxuXG4gICAgICBpZiAoYW5pbWF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBhbmltYXRlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gK25ldyBEYXRlKClcbiAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IGN1cnJlbnREYXRlIC0gc3RhcnREYXRlXG4gICAgICAgICAgY29uc3QgdmFsID0gZWFzZUluT3V0UXVhZChjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pXG4gICAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSB2YWxcbiAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVTY3JvbGwpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gY2hhbmdlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFuaW1hdGVTY3JvbGwoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBjaGFuZ2VcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIEFkZCBjbGFzc2VzXG4gIF9hZGRDbGFzcyhjbHMsIGVsID0gdGhpcy5ST09UX0VMKSB7XG4gICAgaWYgKGVsLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBZGQgY2xhc3NlcyB0byBtdWx0aXBsZSBlbGVtZW50c1xuICAgICAgZWwuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY2xzLnNwbGl0KCcgJykuZm9yRWFjaChjID0+IGUuY2xhc3NMaXN0LmFkZChjKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBjbGFzc2VzIHRvIHNpbmdsZSBlbGVtZW50XG4gICAgICBjbHMuc3BsaXQoJyAnKS5mb3JFYWNoKGMgPT4gZWwuY2xhc3NMaXN0LmFkZChjKSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIFJlbW92ZSBjbGFzc2VzXG4gIF9yZW1vdmVDbGFzcyhjbHMsIGVsID0gdGhpcy5ST09UX0VMKSB7XG4gICAgaWYgKGVsLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBSZW1vdmUgY2xhc3NlcyB0byBtdWx0aXBsZSBlbGVtZW50c1xuICAgICAgZWwuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY2xzLnNwbGl0KCcgJykuZm9yRWFjaChjID0+IGUuY2xhc3NMaXN0LnJlbW92ZShjKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSBjbGFzc2VzIHRvIHNpbmdsZSBlbGVtZW50XG4gICAgICBjbHMuc3BsaXQoJyAnKS5mb3JFYWNoKGMgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gVG9nZ2xlIGNsYXNzZXNcbiAgX3RvZ2dsZUNsYXNzKGVsID0gdGhpcy5ST09UX0VMLCBjbHMxLCBjbHMyKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbHMxKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlcGxhY2UoY2xzMSwgY2xzMilcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlcGxhY2UoY2xzMiwgY2xzMSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIEhhcyBjbGFzc1xuICBfaGFzQ2xhc3MoY2xzLCBlbCA9IHRoaXMuUk9PVF9FTCkge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZVxuXG4gICAgY2xzLnNwbGl0KCcgJykuZm9yRWFjaChjID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYykpIHJlc3VsdCA9IHRydWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuXG4gIF9maW5kUGFyZW50KGVsLCBjbHMpIHtcbiAgICBpZiAoKGVsICYmIGVsLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ0JPRFknKSB8fCBlbC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdIVE1MJykgcmV0dXJuIG51bGxcbiAgICBlbCA9IGVsLnBhcmVudE5vZGVcbiAgICB3aGlsZSAoZWwgJiYgZWwudGFnTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnQk9EWScgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSB7XG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGVcbiAgICB9XG4gICAgZWwgPSBlbCAmJiBlbC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdCT0RZJyA/IGVsIDogbnVsbFxuICAgIHJldHVybiBlbFxuICB9LFxuXG4gIC8vIC0tLVxuICAvLyBUcmlnZ2VyIHdpbmRvdyBldmVudFxuICBfdHJpZ2dlcldpbmRvd0V2ZW50KG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuXG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICBsZXQgZXZlbnRcblxuICAgICAgaWYgKHR5cGVvZiBFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudCA9IG5ldyBFdmVudChuYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAgICAgICBldmVudC5pbml0RXZlbnQobmFtZSwgZmFsc2UsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuZmlyZUV2ZW50KGBvbiR7bmFtZX1gLCBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpKVxuICAgIH1cbiAgfSxcblxuICAvLyAtLS1cbiAgLy8gVHJpZ2dlciBldmVudFxuICBfdHJpZ2dlckV2ZW50KG5hbWUpIHtcbiAgICB0aGlzLl90cmlnZ2VyV2luZG93RXZlbnQoYGxheW91dCR7bmFtZX1gKVxuXG4gICAgdGhpcy5fbGlzdGVuZXJzLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5ldmVudCA9PT0gbmFtZSkuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lci5jYWxsYmFjay5jYWxsKG51bGwpKVxuICB9LFxuXG4gIC8vIC0tLVxuICAvLyBVcGRhdGUgc3R5bGVcbiAgX3VwZGF0ZUlubGluZVN0eWxlKG5hdmJhckhlaWdodCA9IDAsIGZvb3RlckhlaWdodCA9IDApIHtcbiAgICBpZiAoIXRoaXMuX3N0eWxlRWwpIHtcbiAgICAgIHRoaXMuX3N0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgICB0aGlzLl9zdHlsZUVsLnR5cGUgPSAndGV4dC9jc3MnXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoaXMuX3N0eWxlRWwpXG4gICAgfVxuXG4gICAgY29uc3QgbmV3U3R5bGUgPSBJTkxJTkVfU1RZTEVTLnJlcGxhY2UoL1xce25hdmJhckhlaWdodFxcfS9naSwgbmF2YmFySGVpZ2h0KS5yZXBsYWNlKFxuICAgICAgL1xce2Zvb3RlckhlaWdodFxcfS9naSxcbiAgICAgIGZvb3RlckhlaWdodFxuICAgIClcblxuICAgIGlmICh0aGlzLl9jdXJTdHlsZSAhPT0gbmV3U3R5bGUpIHtcbiAgICAgIHRoaXMuX2N1clN0eWxlID0gbmV3U3R5bGVcbiAgICAgIHRoaXMuX3N0eWxlRWwudGV4dENvbnRlbnQgPSBuZXdTdHlsZVxuICAgIH1cbiAgfSxcblxuICAvLyAtLS1cbiAgLy8gUmVtb3ZlIHN0eWxlXG4gIF9yZW1vdmVJbmxpbmVTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fc3R5bGVFbCkgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCh0aGlzLl9zdHlsZUVsKVxuICAgIHRoaXMuX3N0eWxlRWwgPSBudWxsXG4gICAgdGhpcy5fY3VyU3R5bGUgPSBudWxsXG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIFJlZHJhdyBsYXlvdXQgbWVudSAoU2FmYXJpIGJ1Z2ZpeClcbiAgX3JlZHJhd0xheW91dE1lbnUoKSB7XG4gICAgY29uc3QgbGF5b3V0TWVudSA9IHRoaXMuZ2V0TGF5b3V0TWVudSgpXG5cbiAgICBpZiAobGF5b3V0TWVudSAmJiBsYXlvdXRNZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykpIHtcbiAgICAgIGNvbnN0IGlubmVyID0gbGF5b3V0TWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1pbm5lcicpXG4gICAgICBjb25zdCB7IHNjcm9sbFRvcCB9ID0gaW5uZXJcbiAgICAgIGNvbnN0IHBhZ2VTY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG5cbiAgICAgIGxheW91dE1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgLy8gbGF5b3V0TWVudS5vZmZzZXRIZWlnaHRcbiAgICAgIGxheW91dE1lbnUuc3R5bGUuZGlzcGxheSA9ICcnXG4gICAgICBpbm5lci5zY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBwYWdlU2Nyb2xsVG9wXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIENoZWNrIGZvciB0cmFuc2l0aW9uIHN1cHBvcnRcbiAgX3N1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICBpZiAod2luZG93LlFVbml0KSByZXR1cm4gZmFsc2VcblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblxuICAgIGlmICghZWwpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlXG4gICAgVFJBTlNfUFJPUEVSVElFUy5mb3JFYWNoKGV2bnQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBlbC5zdHlsZVtldm50XSAhPT0gJ3VuZGVmaW5lZCcpIHJlc3VsdCA9IHRydWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuXG4gIC8vIC0tLVxuICAvLyBDYWxjdWxhdGUgY3VycmVudCBuYXZiYXIgaGVpZ2h0XG4gIF9nZXROYXZiYXJIZWlnaHQoKSB7XG4gICAgY29uc3QgbGF5b3V0TmF2YmFyID0gdGhpcy5nZXRMYXlvdXROYXZiYXIoKVxuXG4gICAgaWYgKCFsYXlvdXROYXZiYXIpIHJldHVybiAwXG4gICAgaWYgKCF0aGlzLmlzU21hbGxTY3JlZW4oKSkgcmV0dXJuIGxheW91dE5hdmJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblxuICAgIC8vIE5lZWRzIHNvbWUgbG9naWMgdG8gZ2V0IG5hdmJhciBoZWlnaHQgb24gc21hbGwgc2NyZWVuc1xuXG4gICAgY29uc3QgY2xvbmVkRWwgPSBsYXlvdXROYXZiYXIuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWwuaWQgPSBudWxsXG4gICAgY2xvbmVkRWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgY2xvbmVkRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG5cbiAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjbG9uZWRFbC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGFwc2Uuc2hvdycpKS5mb3JFYWNoKGVsID0+IHRoaXMuX3JlbW92ZUNsYXNzKCdzaG93JywgZWwpKVxuXG4gICAgbGF5b3V0TmF2YmFyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lZEVsLCBsYXlvdXROYXZiYXIpXG5cbiAgICBjb25zdCBuYXZiYXJIZWlnaHQgPSBjbG9uZWRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblxuICAgIGNsb25lZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmVkRWwpXG5cbiAgICByZXR1cm4gbmF2YmFySGVpZ2h0XG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIEdldCBjdXJyZW50IGZvb3RlciBoZWlnaHRcbiAgX2dldEZvb3RlckhlaWdodCgpIHtcbiAgICBjb25zdCBsYXlvdXRGb290ZXIgPSB0aGlzLmdldExheW91dEZvb3RlcigpXG5cbiAgICBpZiAoIWxheW91dEZvb3RlcikgcmV0dXJuIDBcblxuICAgIHJldHVybiBsYXlvdXRGb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIEdldCBhbmltYXRpb24gZHVyYXRpb24gb2YgZWxlbWVudFxuICBfZ2V0QW5pbWF0aW9uRHVyYXRpb24oZWwpIHtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb25cblxuICAgIHJldHVybiBwYXJzZUZsb2F0KGR1cmF0aW9uKSAqIChkdXJhdGlvbi5pbmRleE9mKCdtcycpICE9PSAtMSA/IDEgOiAxMDAwKVxuICB9LFxuXG4gIC8vIC0tLVxuICAvLyBTZXQgbWVudSBob3ZlciBzdGF0ZVxuICBfc2V0TWVudUhvdmVyU3RhdGUoaG92ZXJlZCkge1xuICAgIHRoaXNbaG92ZXJlZCA/ICdfYWRkQ2xhc3MnIDogJ19yZW1vdmVDbGFzcyddKCdsYXlvdXQtbWVudS1ob3ZlcicpXG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIFRvZ2dsZSBjb2xsYXBzZWRcbiAgX3NldENvbGxhcHNlZChjb2xsYXBzZWQpIHtcbiAgICBpZiAodGhpcy5pc1NtYWxsU2NyZWVuKCkpIHtcbiAgICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2xhc3MoJ2xheW91dC1tZW51LWV4cGFuZGVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWRkQ2xhc3MoJ2xheW91dC1tZW51LWV4cGFuZGVkJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoaXMuX3JlZHJhd0xheW91dE1lbnUoKSA/IDUgOiAwXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIEFkZCBsYXlvdXQgc2l2ZW5hdiB0b2dnbGUgYW5pbWF0aW9uRW5kIGV2ZW50XG4gIF9iaW5kTGF5b3V0QW5pbWF0aW9uRW5kRXZlbnQobW9kaWZpZXIsIGNiKSB7XG4gICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSgpXG4gICAgY29uc3QgZHVyYXRpb24gPSBtZW51ID8gdGhpcy5fZ2V0QW5pbWF0aW9uRHVyYXRpb24obWVudSkgKyA1MCA6IDBcblxuICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgIG1vZGlmaWVyLmNhbGwodGhpcylcbiAgICAgIGNiLmNhbGwodGhpcylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3RyYW5zaXRpb25DYWxsYmFjayA9IGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBtZW51KSByZXR1cm5cbiAgICAgIHRoaXMuX3VuYmluZExheW91dEFuaW1hdGlvbkVuZEV2ZW50KClcbiAgICAgIGNiLmNhbGwodGhpcylcbiAgICB9XG5cbiAgICBUUkFOU19FVkVOVFMuZm9yRWFjaChlID0+IHtcbiAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihlLCB0aGlzLl90cmFuc2l0aW9uQ2FsbGJhY2ssIGZhbHNlKVxuICAgIH0pXG5cbiAgICBtb2RpZmllci5jYWxsKHRoaXMpXG5cbiAgICB0aGlzLl90cmFuc2l0aW9uQ2FsbGJhY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl90cmFuc2l0aW9uQ2FsbGJhY2suY2FsbCh0aGlzLCB7IHRhcmdldDogbWVudSB9KVxuICAgIH0sIGR1cmF0aW9uKVxuICB9LFxuXG4gIC8vIC0tLVxuICAvLyBSZW1vdmUgbGF5b3V0IHNpdmVuYXYgdG9nZ2xlIGFuaW1hdGlvbkVuZCBldmVudFxuICBfdW5iaW5kTGF5b3V0QW5pbWF0aW9uRW5kRXZlbnQoKSB7XG4gICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudSgpXG5cbiAgICBpZiAodGhpcy5fdHJhbnNpdGlvbkNhbGxiYWNrVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RyYW5zaXRpb25DYWxsYmFja1RpbWVvdXQpXG4gICAgICB0aGlzLl90cmFuc2l0aW9uQ2FsbGJhY2tUaW1lb3V0ID0gbnVsbFxuICAgIH1cblxuICAgIGlmIChtZW51ICYmIHRoaXMuX3RyYW5zaXRpb25DYWxsYmFjaykge1xuICAgICAgVFJBTlNfRVZFTlRTLmZvckVhY2goZSA9PiB7XG4gICAgICAgIG1lbnUucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0aGlzLl90cmFuc2l0aW9uQ2FsbGJhY2ssIGZhbHNlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdHJhbnNpdGlvbkNhbGxiYWNrKSB7XG4gICAgICB0aGlzLl90cmFuc2l0aW9uQ2FsbGJhY2sgPSBudWxsXG4gICAgfVxuICB9LFxuXG4gIC8vIC0tLVxuICAvLyBCaW5kIGRlbGF5ZWQgd2luZG93IHJlc2l6ZSBldmVudFxuICBfYmluZFdpbmRvd1Jlc2l6ZUV2ZW50KCkge1xuICAgIHRoaXMuX3VuYmluZFdpbmRvd1Jlc2l6ZUV2ZW50KClcblxuICAgIGNvbnN0IGNiID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Jlc2l6ZVRpbWVvdXQpXG4gICAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVvdXQgPSBudWxsXG4gICAgICB9XG4gICAgICB0aGlzLl90cmlnZ2VyRXZlbnQoJ3Jlc2l6ZScpXG4gICAgfVxuXG4gICAgdGhpcy5fcmVzaXplQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fcmVzaXplVGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMuX3Jlc2l6ZVRpbWVvdXQpXG4gICAgICB0aGlzLl9yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChjYiwgdGhpcy5SRVNJWkVfREVMQVkpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZUNhbGxiYWNrLCBmYWxzZSlcbiAgfSxcblxuICAvLyAtLS1cbiAgLy8gVW5iaW5kIGRlbGF5ZWQgd2luZG93IHJlc2l6ZSBldmVudFxuICBfdW5iaW5kV2luZG93UmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXNpemVUaW1lb3V0KVxuICAgICAgdGhpcy5fcmVzaXplVGltZW91dCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmVzaXplQ2FsbGJhY2spIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemVDYWxsYmFjaywgZmFsc2UpXG4gICAgICB0aGlzLl9yZXNpemVDYWxsYmFjayA9IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgX2JpbmRNZW51TW91c2VFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX21lbnVNb3VzZUVudGVyICYmIHRoaXMuX21lbnVNb3VzZUxlYXZlICYmIHRoaXMuX3dpbmRvd1RvdWNoU3RhcnQpIHJldHVyblxuXG4gICAgY29uc3QgbGF5b3V0TWVudSA9IHRoaXMuZ2V0TGF5b3V0TWVudSgpXG4gICAgaWYgKCFsYXlvdXRNZW51KSByZXR1cm4gdGhpcy5fdW5iaW5kTWVudU1vdXNlRXZlbnRzKClcblxuICAgIGlmICghdGhpcy5fbWVudU1vdXNlRW50ZXIpIHtcbiAgICAgIHRoaXMuX21lbnVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc1NtYWxsU2NyZWVuKCkgfHwgdGhpcy5faGFzQ2xhc3MoJ2xheW91dC10cmFuc2l0aW9uaW5nJykpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2V0TWVudUhvdmVyU3RhdGUoZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0TWVudUhvdmVyU3RhdGUoZmFsc2UpXG4gICAgICB9XG4gICAgICBsYXlvdXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLl9tZW51TW91c2VFbnRlciwgZmFsc2UpXG4gICAgICBsYXlvdXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9tZW51TW91c2VFbnRlciwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9tZW51TW91c2VMZWF2ZSkge1xuICAgICAgdGhpcy5fbWVudU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldE1lbnVIb3ZlclN0YXRlKGZhbHNlKVxuICAgICAgfVxuICAgICAgbGF5b3V0TWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5fbWVudU1vdXNlTGVhdmUsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5fd2luZG93VG91Y2hTdGFydCkge1xuICAgICAgdGhpcy5fd2luZG93VG91Y2hTdGFydCA9IGUgPT4ge1xuICAgICAgICBpZiAoIWUgfHwgIWUudGFyZ2V0IHx8ICF0aGlzLl9maW5kUGFyZW50KGUudGFyZ2V0LCAnLmxheW91dC1tZW51JykpIHtcbiAgICAgICAgICB0aGlzLl9zZXRNZW51SG92ZXJTdGF0ZShmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl93aW5kb3dUb3VjaFN0YXJ0LCB0cnVlKVxuICAgIH1cbiAgfSxcblxuICBfdW5iaW5kTWVudU1vdXNlRXZlbnRzKCkge1xuICAgIGlmICghdGhpcy5fbWVudU1vdXNlRW50ZXIgJiYgIXRoaXMuX21lbnVNb3VzZUxlYXZlICYmICF0aGlzLl93aW5kb3dUb3VjaFN0YXJ0KSByZXR1cm5cblxuICAgIGNvbnN0IGxheW91dE1lbnUgPSB0aGlzLmdldExheW91dE1lbnUoKVxuXG4gICAgaWYgKHRoaXMuX21lbnVNb3VzZUVudGVyKSB7XG4gICAgICBpZiAobGF5b3V0TWVudSkge1xuICAgICAgICBsYXlvdXRNZW51LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLl9tZW51TW91c2VFbnRlciwgZmFsc2UpXG4gICAgICAgIGxheW91dE1lbnUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX21lbnVNb3VzZUVudGVyLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuX21lbnVNb3VzZUVudGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9tZW51TW91c2VMZWF2ZSkge1xuICAgICAgaWYgKGxheW91dE1lbnUpIHtcbiAgICAgICAgbGF5b3V0TWVudS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5fbWVudU1vdXNlTGVhdmUsIGZhbHNlKVxuICAgICAgfVxuICAgICAgdGhpcy5fbWVudU1vdXNlTGVhdmUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3dpbmRvd1RvdWNoU3RhcnQpIHtcbiAgICAgIGlmIChsYXlvdXRNZW51KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fd2luZG93VG91Y2hTdGFydCwgdHJ1ZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuX3dpbmRvd1RvdWNoU3RhcnQgPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0TWVudUhvdmVyU3RhdGUoZmFsc2UpXG4gIH0sXG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqIE1ldGhvZHNcblxuICBzY3JvbGxUb0FjdGl2ZShhbmltYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9zY3JvbGxUb0FjdGl2ZShhbmltYXRlKVxuICB9LFxuXG4gIC8vIC0tLVxuICAvLyBDb2xsYXBzZSAvIGV4cGFuZCBsYXlvdXRcbiAgc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCA9IHJlcXVpcmVkUGFyYW0oJ2NvbGxhcHNlZCcpLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxheW91dE1lbnUgPSB0aGlzLmdldExheW91dE1lbnUoKVxuXG4gICAgaWYgKCFsYXlvdXRNZW51KSByZXR1cm5cblxuICAgIHRoaXMuX3VuYmluZExheW91dEFuaW1hdGlvbkVuZEV2ZW50KClcblxuICAgIGlmIChhbmltYXRlICYmIHRoaXMuX3N1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICB0aGlzLl9hZGRDbGFzcygnbGF5b3V0LXRyYW5zaXRpb25pbmcnKVxuICAgICAgaWYgKGNvbGxhcHNlZCkgdGhpcy5fc2V0TWVudUhvdmVyU3RhdGUoZmFsc2UpXG5cbiAgICAgIHRoaXMuX2JpbmRMYXlvdXRBbmltYXRpb25FbmRFdmVudChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIENvbGxhcHNlIC8gRXhwYW5kXG4gICAgICAgICAgaWYgKHRoaXMuaXNTbWFsbFNjcmVlbikgdGhpcy5fc2V0Q29sbGFwc2VkKGNvbGxhcHNlZClcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZUNsYXNzKCdsYXlvdXQtdHJhbnNpdGlvbmluZycpXG4gICAgICAgICAgdGhpcy5fdHJpZ2dlcldpbmRvd0V2ZW50KCdyZXNpemUnKVxuICAgICAgICAgIHRoaXMuX3RyaWdnZXJFdmVudCgndG9nZ2xlJylcbiAgICAgICAgICB0aGlzLl9zZXRNZW51SG92ZXJTdGF0ZShmYWxzZSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRDbGFzcygnbGF5b3V0LW5vLXRyYW5zaXRpb24nKVxuICAgICAgaWYgKGNvbGxhcHNlZCkgdGhpcy5fc2V0TWVudUhvdmVyU3RhdGUoZmFsc2UpXG5cbiAgICAgIC8vIENvbGxhcHNlIC8gRXhwYW5kXG4gICAgICB0aGlzLl9zZXRDb2xsYXBzZWQoY29sbGFwc2VkKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2xhc3MoJ2xheW91dC1uby10cmFuc2l0aW9uJylcbiAgICAgICAgdGhpcy5fdHJpZ2dlcldpbmRvd0V2ZW50KCdyZXNpemUnKVxuICAgICAgICB0aGlzLl90cmlnZ2VyRXZlbnQoJ3RvZ2dsZScpXG4gICAgICAgIHRoaXMuX3NldE1lbnVIb3ZlclN0YXRlKGZhbHNlKVxuICAgICAgfSwgMSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIFRvZ2dsZSBsYXlvdXRcbiAgdG9nZ2xlQ29sbGFwc2VkKGFuaW1hdGUgPSB0cnVlKSB7XG4gICAgdGhpcy5zZXRDb2xsYXBzZWQoIXRoaXMuaXNDb2xsYXBzZWQoKSwgYW5pbWF0ZSlcbiAgfSxcblxuICAvLyAtLS1cbiAgLy8gU2V0IGxheW91dCBwb3NpdGlvbmluZ1xuICBzZXRQb3NpdGlvbihmaXhlZCA9IHJlcXVpcmVkUGFyYW0oJ2ZpeGVkJyksIG9mZmNhbnZhcyA9IHJlcXVpcmVkUGFyYW0oJ29mZmNhbnZhcycpKSB7XG4gICAgdGhpcy5fcmVtb3ZlQ2xhc3MoJ2xheW91dC1tZW51LW9mZmNhbnZhcyBsYXlvdXQtbWVudS1maXhlZCBsYXlvdXQtbWVudS1maXhlZC1vZmZjYW52YXMnKVxuXG4gICAgaWYgKCFmaXhlZCAmJiBvZmZjYW52YXMpIHtcbiAgICAgIHRoaXMuX2FkZENsYXNzKCdsYXlvdXQtbWVudS1vZmZjYW52YXMnKVxuICAgIH0gZWxzZSBpZiAoZml4ZWQgJiYgIW9mZmNhbnZhcykge1xuICAgICAgdGhpcy5fYWRkQ2xhc3MoJ2xheW91dC1tZW51LWZpeGVkJylcbiAgICAgIHRoaXMuX3JlZHJhd0xheW91dE1lbnUoKVxuICAgIH0gZWxzZSBpZiAoZml4ZWQgJiYgb2ZmY2FudmFzKSB7XG4gICAgICB0aGlzLl9hZGRDbGFzcygnbGF5b3V0LW1lbnUtZml4ZWQtb2ZmY2FudmFzJylcbiAgICAgIHRoaXMuX3JlZHJhd0xheW91dE1lbnUoKVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKClcbiAgfSxcblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogR2V0dGVyc1xuXG4gIGdldExheW91dE1lbnUoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQtbWVudScpXG4gIH0sXG5cbiAgZ2V0TWVudSgpIHtcbiAgICBjb25zdCBsYXlvdXRNZW51ID0gdGhpcy5nZXRMYXlvdXRNZW51KClcblxuICAgIGlmICghbGF5b3V0TWVudSkgcmV0dXJuIG51bGxcblxuICAgIHJldHVybiAhdGhpcy5faGFzQ2xhc3MoJ21lbnUnLCBsYXlvdXRNZW51KSA/IGxheW91dE1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUnKSA6IGxheW91dE1lbnVcbiAgfSxcblxuICBnZXRMYXlvdXROYXZiYXIoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQtbmF2YmFyJylcbiAgfSxcblxuICBnZXRMYXlvdXRGb290ZXIoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWZvb3RlcicpXG4gIH0sXG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqIFVwZGF0ZVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy5nZXRMYXlvdXROYXZiYXIoKSAmJlxuICAgICAgICAoKCF0aGlzLmlzU21hbGxTY3JlZW4oKSAmJiB0aGlzLmlzTGF5b3V0TmF2YmFyRnVsbCgpICYmIHRoaXMuaXNGaXhlZCgpKSB8fCB0aGlzLmlzTmF2YmFyRml4ZWQoKSkpIHx8XG4gICAgICAodGhpcy5nZXRMYXlvdXRGb290ZXIoKSAmJiB0aGlzLmlzRm9vdGVyRml4ZWQoKSlcbiAgICApIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUlubGluZVN0eWxlKHRoaXMuX2dldE5hdmJhckhlaWdodCgpLCB0aGlzLl9nZXRGb290ZXJIZWlnaHQoKSlcbiAgICB9XG5cbiAgICB0aGlzLl9iaW5kTWVudU1vdXNlRXZlbnRzKClcbiAgfSxcblxuICBzZXRBdXRvVXBkYXRlKGVuYWJsZSA9IHJlcXVpcmVkUGFyYW0oJ2VuYWJsZScpKSB7XG4gICAgaWYgKGVuYWJsZSAmJiAhdGhpcy5fYXV0b1VwZGF0ZSkge1xuICAgICAgdGhpcy5vbigncmVzaXplLkhlbHBlcnM6YXV0b1VwZGF0ZScsICgpID0+IHRoaXMudXBkYXRlKCkpXG4gICAgICB0aGlzLl9hdXRvVXBkYXRlID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoIWVuYWJsZSAmJiB0aGlzLl9hdXRvVXBkYXRlKSB7XG4gICAgICB0aGlzLm9mZigncmVzaXplLkhlbHBlcnM6YXV0b1VwZGF0ZScpXG4gICAgICB0aGlzLl9hdXRvVXBkYXRlID0gZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqIFRlc3RzXG5cbiAgaXNSdGwoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5nZXRBdHRyaWJ1dGUoJ2RpcicpID09PSAncnRsJyB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmdldEF0dHJpYnV0ZSgnZGlyJykgPT09ICdydGwnXG4gICAgKVxuICB9LFxuXG4gIGlzTW9iaWxlRGV2aWNlKCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uICE9PSAndW5kZWZpbmVkJyB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0lFTW9iaWxlJykgIT09IC0xXG4gIH0sXG5cbiAgaXNTbWFsbFNjcmVlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKSA8IHRoaXMuTEFZT1VUX0JSRUFLUE9JTlRcbiAgICApXG4gIH0sXG5cbiAgaXNMYXlvdXROYXZiYXJGdWxsKCkge1xuICAgIHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQtd3JhcHBlci5sYXlvdXQtbmF2YmFyLWZ1bGwnKVxuICB9LFxuXG4gIGlzQ29sbGFwc2VkKCkge1xuICAgIGlmICh0aGlzLmlzU21hbGxTY3JlZW4oKSkge1xuICAgICAgcmV0dXJuICF0aGlzLl9oYXNDbGFzcygnbGF5b3V0LW1lbnUtZXhwYW5kZWQnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFzQ2xhc3MoJ2xheW91dC1tZW51LWNvbGxhcHNlZCcpXG4gIH0sXG5cbiAgaXNGaXhlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzQ2xhc3MoJ2xheW91dC1tZW51LWZpeGVkIGxheW91dC1tZW51LWZpeGVkLW9mZmNhbnZhcycpXG4gIH0sXG5cbiAgaXNOYXZiYXJGaXhlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5faGFzQ2xhc3MoJ2xheW91dC1uYXZiYXItZml4ZWQnKSB8fCAoIXRoaXMuaXNTbWFsbFNjcmVlbigpICYmIHRoaXMuaXNGaXhlZCgpICYmIHRoaXMuaXNMYXlvdXROYXZiYXJGdWxsKCkpXG4gICAgKVxuICB9LFxuXG4gIGlzRm9vdGVyRml4ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0NsYXNzKCdsYXlvdXQtZm9vdGVyLWZpeGVkJylcbiAgfSxcblxuICBpc0xpZ2h0U3R5bGUoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpZ2h0LXN0eWxlJylcbiAgfSxcblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogRXZlbnRzXG5cbiAgb24oZXZlbnQgPSByZXF1aXJlZFBhcmFtKCdldmVudCcpLCBjYWxsYmFjayA9IHJlcXVpcmVkUGFyYW0oJ2NhbGxiYWNrJykpIHtcbiAgICBjb25zdCBbX2V2ZW50XSA9IGV2ZW50LnNwbGl0KCcuJylcbiAgICBsZXQgWywgLi4ubmFtZXNwYWNlXSA9IGV2ZW50LnNwbGl0KCcuJylcbiAgICAvLyBsZXQgW19ldmVudCwgLi4ubmFtZXNwYWNlXSA9IGV2ZW50LnNwbGl0KCcuJylcbiAgICBuYW1lc3BhY2UgPSBuYW1lc3BhY2Uuam9pbignLicpIHx8IG51bGxcblxuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKHsgZXZlbnQ6IF9ldmVudCwgbmFtZXNwYWNlLCBjYWxsYmFjayB9KVxuICB9LFxuXG4gIG9mZihldmVudCA9IHJlcXVpcmVkUGFyYW0oJ2V2ZW50JykpIHtcbiAgICBjb25zdCBbX2V2ZW50XSA9IGV2ZW50LnNwbGl0KCcuJylcbiAgICBsZXQgWywgLi4ubmFtZXNwYWNlXSA9IGV2ZW50LnNwbGl0KCcuJylcbiAgICBuYW1lc3BhY2UgPSBuYW1lc3BhY2Uuam9pbignLicpIHx8IG51bGxcblxuICAgIHRoaXMuX2xpc3RlbmVyc1xuICAgICAgLmZpbHRlcihsaXN0ZW5lciA9PiBsaXN0ZW5lci5ldmVudCA9PT0gX2V2ZW50ICYmIGxpc3RlbmVyLm5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKVxuICAgICAgLmZvckVhY2gobGlzdGVuZXIgPT4gdGhpcy5fbGlzdGVuZXJzLnNwbGljZSh0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciksIDEpKVxuICB9LFxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBMaWZlIGN5Y2xlXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHJldHVyblxuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBgc3R5bGVgIGVsZW1lbnRcbiAgICB0aGlzLl91cGRhdGVJbmxpbmVTdHlsZSgwKVxuXG4gICAgLy8gQmluZCB3aW5kb3cgcmVzaXplIGV2ZW50XG4gICAgdGhpcy5fYmluZFdpbmRvd1Jlc2l6ZUV2ZW50KClcblxuICAgIC8vIEJpbmQgaW5pdCBldmVudFxuICAgIHRoaXMub2ZmKCdpbml0Ll9IZWxwZXJzJylcbiAgICB0aGlzLm9uKCdpbml0Ll9IZWxwZXJzJywgKCkgPT4ge1xuICAgICAgdGhpcy5vZmYoJ3Jlc2l6ZS5fSGVscGVyczpyZWRyYXdNZW51JylcbiAgICAgIHRoaXMub24oJ3Jlc2l6ZS5fSGVscGVyczpyZWRyYXdNZW51JywgKCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIHRoaXMuaXNTbWFsbFNjcmVlbigpICYmICF0aGlzLmlzQ29sbGFwc2VkKCkgJiYgdGhpcy5fcmVkcmF3TGF5b3V0TWVudSgpXG4gICAgICB9KVxuXG4gICAgICAvLyBGb3JjZSByZXBhaW50IGluIElFIDEwXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmRvY3VtZW50TW9kZSA9PT0gJ251bWJlcicgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlIDwgMTEpIHtcbiAgICAgICAgdGhpcy5vZmYoJ3Jlc2l6ZS5fSGVscGVyczppZTEwUmVwYWludEJvZHknKVxuICAgICAgICB0aGlzLm9uKCdyZXNpemUuX0hlbHBlcnM6aWUxMFJlcGFpbnRCb2R5JywgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzRml4ZWQoKSkgcmV0dXJuXG4gICAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AgfSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fdHJpZ2dlckV2ZW50KCdpbml0JylcbiAgfSxcblxuICBkZXN0cm95KCkge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHJldHVyblxuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2VcblxuICAgIHRoaXMuX3JlbW92ZUNsYXNzKCdsYXlvdXQtdHJhbnNpdGlvbmluZycpXG4gICAgdGhpcy5fcmVtb3ZlSW5saW5lU3R5bGUoKVxuICAgIHRoaXMuX3VuYmluZExheW91dEFuaW1hdGlvbkVuZEV2ZW50KClcbiAgICB0aGlzLl91bmJpbmRXaW5kb3dSZXNpemVFdmVudCgpXG4gICAgdGhpcy5fdW5iaW5kTWVudU1vdXNlRXZlbnRzKClcbiAgICB0aGlzLnNldEF1dG9VcGRhdGUoZmFsc2UpXG5cbiAgICB0aGlzLm9mZignaW5pdC5fSGVscGVycycpXG5cbiAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBleGNlcHQgYGluaXRgXG4gICAgdGhpcy5fbGlzdGVuZXJzXG4gICAgICAuZmlsdGVyKGxpc3RlbmVyID0+IGxpc3RlbmVyLmV2ZW50ICE9PSAnaW5pdCcpXG4gICAgICAuZm9yRWFjaChsaXN0ZW5lciA9PiB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSwgMSkpXG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIEluaXQgUGFzc3dvcmQgVG9nZ2xlXG4gIGluaXRQYXNzd29yZFRvZ2dsZSgpIHtcbiAgICBjb25zdCB0b2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tcGFzc3dvcmQtdG9nZ2xlIGknKVxuICAgIGlmICh0eXBlb2YgdG9nZ2xlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9nZ2xlciAhPT0gbnVsbCkge1xuICAgICAgdG9nZ2xlci5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBjb25zdCBmb3JtUGFzc3dvcmRUb2dnbGUgPSBlbC5jbG9zZXN0KCcuZm9ybS1wYXNzd29yZC10b2dnbGUnKVxuICAgICAgICAgIGNvbnN0IGZvcm1QYXNzd29yZFRvZ2dsZUljb24gPSBmb3JtUGFzc3dvcmRUb2dnbGUucXVlcnlTZWxlY3RvcignaScpXG4gICAgICAgICAgY29uc3QgZm9ybVBhc3N3b3JkVG9nZ2xlSW5wdXQgPSBmb3JtUGFzc3dvcmRUb2dnbGUucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuXG4gICAgICAgICAgaWYgKGZvcm1QYXNzd29yZFRvZ2dsZUlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIGZvcm1QYXNzd29yZFRvZ2dsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpXG4gICAgICAgICAgICBmb3JtUGFzc3dvcmRUb2dnbGVJY29uLmNsYXNzTGlzdC5yZXBsYWNlKCdieC1zaG93JywgJ2J4LWhpZGUnKVxuICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybVBhc3N3b3JkVG9nZ2xlSW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAgIGZvcm1QYXNzd29yZFRvZ2dsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgIGZvcm1QYXNzd29yZFRvZ2dsZUljb24uY2xhc3NMaXN0LnJlcGxhY2UoJ2J4LWhpZGUnLCAnYngtc2hvdycpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gLS0tXG4gIC8vIEluaXQgU3BlZWNoIFRvIFRleHRcbiAgaW5pdFNwZWVjaFRvVGV4dCgpIHtcbiAgICBjb25zdCBTcGVlY2hSZWNvZ25pdGlvbiA9IHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb25cbiAgICBjb25zdCBzcGVlY2hUb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlZWNoLXRvLXRleHQnKVxuICAgIGlmIChTcGVlY2hSZWNvZ25pdGlvbiAhPT0gdW5kZWZpbmVkICYmIFNwZWVjaFJlY29nbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIHNwZWVjaFRvVGV4dCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3BlZWNoVG9UZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJlY29nbml0aW9uID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKClcbiAgICAgICAgY29uc3QgdG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVlY2gtdG8tdGV4dCBpJylcbiAgICAgICAgdG9nZ2xlci5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBsZXQgbGlzdGVuaW5nID0gZmFsc2VcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGVsLmNsb3Nlc3QoJy5pbnB1dC1ncm91cCcpLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRyb2wnKS5mb2N1cygpXG4gICAgICAgICAgICByZWNvZ25pdGlvbi5vbnNwZWVjaHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBsaXN0ZW5pbmcgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGlzdGVuaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZWNvZ25pdGlvbi5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWNvZ25pdGlvbi5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICBsaXN0ZW5pbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjb2duaXRpb24ub25yZXN1bHQgPSBldmVudCA9PiB7XG4gICAgICAgICAgICAgIGVsLmNsb3Nlc3QoJy5pbnB1dC1ncm91cCcpLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRyb2wnKS52YWx1ZSA9IGV2ZW50LnJlc3VsdHNbMF1bMF0udHJhbnNjcmlwdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjb2duaXRpb24ub25zcGVlY2hlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGxpc3RlbmluZyA9IGZhbHNlXG4gICAgICAgICAgICAgIHJlY29nbml0aW9uLnN0b3AoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8vIEFqYXggQ2FsbCBQcm9taXNlXG4gIGFqYXhDYWxsKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgcmVxLm9wZW4oJ0dFVCcsIHVybClcbiAgICAgIHJlcS5vbmxvYWQgPSAoKSA9PiAocmVxLnN0YXR1cyA9PT0gMjAwID8gcmVzb2x2ZShyZXEucmVzcG9uc2UpIDogcmVqZWN0KEVycm9yKHJlcS5zdGF0dXNUZXh0KSkpXG4gICAgICByZXEub25lcnJvciA9IGUgPT4gcmVqZWN0KEVycm9yKGBOZXR3b3JrIEVycm9yOiAke2V9YCkpXG4gICAgICByZXEuc2VuZCgpXG4gICAgfSlcbiAgfSxcblxuICAvLyAtLS1cbiAgLy8gU2lkZWJhclRvZ2dsZSAoVXNlZCBpbiBBcHBzKVxuICBpbml0U2lkZWJhclRvZ2dsZSgpIHtcbiAgICBjb25zdCBzaWRlYmFyVG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInNpZGViYXJcIl0nKVxuXG4gICAgc2lkZWJhclRvZ2dsZXIuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmxheScpXG4gICAgICAgIGNvbnN0IGFwcE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXBwLW92ZXJsYXknKVxuICAgICAgICBjb25zdCB0YXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KVxuXG4gICAgICAgIHRhcmdldEVsLmZvckVhY2godGVsID0+IHtcbiAgICAgICAgICB0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIG92ZXJsYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBvdmVybGF5ICE9PSBudWxsICYmXG4gICAgICAgICAgICBvdmVybGF5ICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgdHlwZW9mIGFwcE92ZXJsYXkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGVsLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgICAgICAgIGFwcE92ZXJsYXlbMF0uY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhcHBPdmVybGF5WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwT3ZlcmxheVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgICAgICAgICAgIHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICogSW5pdGlhbGl6YXRpb25cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIEhlbHBlcnMuaW5pdCgpXG5cbiAgaWYgKEhlbHBlcnMuaXNNb2JpbGVEZXZpY2UoKSAmJiB3aW5kb3cuY2hyb21lKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xheW91dC1tZW51LTEwMHZoJylcbiAgfVxuXG4gIC8vIFVwZGF0ZSBsYXlvdXQgYWZ0ZXIgcGFnZSBsb2FkXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSBIZWxwZXJzLnVwZGF0ZSgpXG4gIGVsc2VcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gb25Db250ZW50TG9hZGVkKCkge1xuICAgICAgSGVscGVycy51cGRhdGUoKVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG9uQ29udGVudExvYWRlZClcbiAgICB9KVxufVxuXG4vLyAtLS1cbmV4cG9ydCB7IEhlbHBlcnMgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///./js/helpers.js


/***/ })

/******/ })));