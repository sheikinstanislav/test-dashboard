/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/components/anchor-scroll.js":
/*!***************************************************!*\
  !*** ./src/assets/js/components/anchor-scroll.js ***!
  \***************************************************/
/***/ (() => {

eval("const links = document.querySelectorAll('a[href^=\"#\"]:not(.modal-toggle)');\nlinks.forEach(nodeElement => {\n  nodeElement.addEventListener('click', function (e) {\n    e.preventDefault();\n    const href = this.getAttribute('href');\n    if (href === '#') {\n      return false;\n    } else {\n      const section = document.querySelector(href);\n      if (section) {\n        let offset = section.getBoundingClientRect().top + window.scrollY;\n        const wpAdminBar = document.getElementById('wpadminbar');\n        if (wpAdminBar) {\n          offset -= wpAdminBar.offsetHeight;\n        }\n        window.scrollTo({\n          top: offset,\n          behavior: 'smooth'\n        });\n\n        /*\r\n            $('html, body').animate({\r\n                scrollTop: offset\r\n            }, 500);\r\n        */\n      } else {\n        return false;\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYW5jaG9yLXNjcm9sbC5qcy5qcyIsIm5hbWVzIjpbImxpbmtzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm5vZGVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsIm9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJ3cEFkbWluQmFyIiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxwLTQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9hbmNob3Itc2Nyb2xsLmpzP2U4NzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXTpub3QoLm1vZGFsLXRvZ2dsZSknKVxyXG5cclxubGlua3MuZm9yRWFjaCgobm9kZUVsZW1lbnQpID0+IHtcclxuICAgIG5vZGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJylcclxuXHJcbiAgICAgICAgaWYgKGhyZWYgPT09ICcjJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZilcclxuICAgICAgICAgICAgaWYgKHNlY3Rpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgd3BBZG1pbkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cGFkbWluYmFyJylcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod3BBZG1pbkJhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCAtPSB3cEFkbWluQmFyLm9mZnNldEhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiBvZmZzZXQsIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcblxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pXHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxpQ0FBaUMsQ0FBQztBQUUxRUYsS0FBSyxDQUFDRyxPQUFPLENBQUVDLFdBQVcsSUFBSztFQUMzQkEsV0FBVyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0lBQy9DQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUVsQixNQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBRXRDLElBQUlELElBQUksS0FBSyxHQUFHLEVBQUU7TUFDZCxPQUFPLEtBQUs7SUFDaEIsQ0FBQyxNQUFNO01BQ0gsTUFBTUUsT0FBTyxHQUFHVCxRQUFRLENBQUNVLGFBQWEsQ0FBQ0gsSUFBSSxDQUFDO01BQzVDLElBQUlFLE9BQU8sRUFBRTtRQUVULElBQUlFLE1BQU0sR0FBR0YsT0FBTyxDQUFDRyxxQkFBcUIsRUFBRSxDQUFDQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBTztRQUNqRSxNQUFNQyxVQUFVLEdBQUdoQixRQUFRLENBQUNpQixjQUFjLENBQUMsWUFBWSxDQUFDO1FBRXhELElBQUlELFVBQVUsRUFBRTtVQUNaTCxNQUFNLElBQUlLLFVBQVUsQ0FBQ0UsWUFBWTtRQUNyQztRQUVBSixNQUFNLENBQUNLLFFBQVEsQ0FBQztVQUFDTixHQUFHLEVBQUVGLE1BQU07VUFBRVMsUUFBUSxFQUFFO1FBQVEsQ0FBQyxDQUFDOztRQUVsRDtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtNQUVZLENBQUMsTUFBTTtRQUNILE9BQU8sS0FBSztNQUNoQjtJQUNKO0VBRUosQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/components/anchor-scroll.js\n");

/***/ }),

/***/ "./src/assets/js/components/nav-click.js":
/*!***********************************************!*\
  !*** ./src/assets/js/components/nav-click.js ***!
  \***********************************************/
/***/ (() => {

eval("const menuItems = document.querySelectorAll('.nav-menu__item');\nmenuItems.forEach(item => {\n  item.addEventListener('click', () => {\n    menuItems.forEach(el => el.classList.remove('nav-menu__item--active'));\n    item.classList.add('nav-menu__item--active');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2LWNsaWNrLmpzLmpzIiwibmFtZXMiOlsibWVudUl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2d1bHAtNC13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdi1jbGljay5qcz9jNTMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbWVudV9faXRlbScpO1xyXG5cclxubWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbWVudUl0ZW1zLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbWVudV9faXRlbS0tYWN0aXZlJykpO1xyXG5cclxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LW1lbnVfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7QUFFOURGLFNBQVMsQ0FBQ0csT0FBTyxDQUFFQyxJQUFJLElBQUs7RUFDMUJBLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07SUFDbkNMLFNBQVMsQ0FBQ0csT0FBTyxDQUFFRyxFQUFFLElBQUtBLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUV4RUosSUFBSSxDQUFDRyxTQUFTLENBQUNFLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztFQUM5QyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/components/nav-click.js\n");

/***/ }),

/***/ "./src/assets/js/components/scrollbar-width.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/components/scrollbar-width.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var get_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-scrollbar-width */ \"./node_modules/get-scrollbar-width/index.js\");\n/* harmony import */ var get_scrollbar_width__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(get_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__);\n\nconst setScrollbarWidthCSSVariable = () => {\n  if (document.querySelector('body').offsetHeight > document.documentElement.clientHeight) {\n    document.documentElement.style.setProperty('--scroll-width', get_scrollbar_width__WEBPACK_IMPORTED_MODULE_0___default()() + 'px');\n  } else {\n    document.documentElement.style.setProperty('--scroll-width', 0 + 'px');\n  }\n};\n\n// Update Browser Windows Sizes\n['resize', 'orientationchange', 'popstate', 'hashchange', 'load'].forEach(event => {\n  window.addEventListener(event, () => {\n    setScrollbarWidthCSSVariable();\n  });\n});\nsetScrollbarWidthCSSVariable();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2Nyb2xsYmFyLXdpZHRoLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFtRDtBQUVuRCxNQUFNQyw0QkFBNEIsR0FBR0EsQ0FBQSxLQUFNO0VBQ3ZDLElBQUlDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0csZUFBZSxDQUFDQyxZQUFZLEVBQUU7SUFDckZKLFFBQVEsQ0FBQ0csZUFBZSxDQUFDRSxLQUFLLENBQUNDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRVIsMERBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUM7RUFDNUYsQ0FBQyxNQUFNO0lBQ0hFLFFBQVEsQ0FBQ0csZUFBZSxDQUFDRSxLQUFLLENBQUNDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQzFFO0FBQ0osQ0FBQzs7QUFFRDtBQUNBLENBQ0ksUUFBUSxFQUNSLG1CQUFtQixFQUNuQixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sQ0FDVCxDQUFDQyxPQUFPLENBQUNDLEtBQUssSUFBSTtFQUNmQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDRixLQUFLLEVBQUUsTUFBTTtJQUNqQ1QsNEJBQTRCLEVBQUU7RUFDbEMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUZBLDRCQUE0QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VscC00LXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2Nyb2xsYmFyLXdpZHRoLmpzPzBhMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFNjcm9sbGJhcldpZHRoIGZyb20gXCJnZXQtc2Nyb2xsYmFyLXdpZHRoXCJcclxuXHJcbmNvbnN0IHNldFNjcm9sbGJhcldpZHRoQ1NTVmFyaWFibGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLm9mZnNldEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2Nyb2xsLXdpZHRoJywgZ2V0U2Nyb2xsYmFyV2lkdGgoKSArICdweCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zY3JvbGwtd2lkdGgnLCAwICsgJ3B4JylcclxuICAgIH1cclxufVxyXG5cclxuLy8gVXBkYXRlIEJyb3dzZXIgV2luZG93cyBTaXplc1xyXG5bXHJcbiAgICAncmVzaXplJyxcclxuICAgICdvcmllbnRhdGlvbmNoYW5nZScsXHJcbiAgICAncG9wc3RhdGUnLFxyXG4gICAgJ2hhc2hjaGFuZ2UnLFxyXG4gICAgJ2xvYWQnXHJcbl0uZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xyXG4gICAgICAgIHNldFNjcm9sbGJhcldpZHRoQ1NTVmFyaWFibGUoKVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuc2V0U2Nyb2xsYmFyV2lkdGhDU1NWYXJpYWJsZSgpXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImdldFNjcm9sbGJhcldpZHRoIiwic2V0U2Nyb2xsYmFyV2lkdGhDU1NWYXJpYWJsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJmb3JFYWNoIiwiZXZlbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/components/scrollbar-width.js\n");

/***/ }),

/***/ "./src/assets/js/scripts.js":
/*!**********************************!*\
  !*** ./src/assets/js/scripts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scrollbar-width */ \"./src/assets/js/components/scrollbar-width.js\");\n/* harmony import */ var _components_anchor_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/anchor-scroll.js */ \"./src/assets/js/components/anchor-scroll.js\");\n/* harmony import */ var _components_anchor_scroll_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_anchor_scroll_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav_click_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav-click.js */ \"./src/assets/js/components/nav-click.js\");\n/* harmony import */ var _components_nav_click_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_nav_click_js__WEBPACK_IMPORTED_MODULE_2__);\n// Scrollbar Width\n\n\n// Anchor Links\n\n\n// Nav Click\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL3NjcmlwdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDc0M7O0FBRXRDO0FBQ3VDOztBQUV2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2d1bHAtNC13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2Fzc2V0cy9qcy9zY3JpcHRzLmpzPzRiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU2Nyb2xsYmFyIFdpZHRoXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Njcm9sbGJhci13aWR0aCc7XHJcblxyXG4vLyBBbmNob3IgTGlua3NcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYW5jaG9yLXNjcm9sbC5qcyc7XHJcblxyXG4vLyBOYXYgQ2xpY2tcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2LWNsaWNrLmpzJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/js/scripts.js\n");

/***/ }),

/***/ "./node_modules/get-scrollbar-width/index.js":
/*!***************************************************!*\
  !*** ./node_modules/get-scrollbar-width/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("function isServer() {\n   return !(typeof window !== 'undefined' && window.document);\n}\n\nmodule.exports = function getScrollBarWidth() {\n   // default to 15px server-side as this is true for many browsers\n   if(isServer()) return 15;\n\n   const inner = document.createElement('p');\n   inner.style.width = '100%';\n   inner.style.height = '200px';\n\n   const outer = document.createElement('div');\n   outer.style.position = 'absolute';\n   outer.style.top = '0px';\n   outer.style.left = '0px';\n   outer.style.visibility = 'hidden';\n   outer.style.width = '200px';\n   outer.style.height = '150px';\n   outer.style.overflow = 'hidden';\n   outer.appendChild(inner);\n\n   document.body.appendChild(outer);\n   const w1 = inner.offsetWidth;\n   outer.style.overflow = 'scroll';\n   var w2 = inner.offsetWidth;\n   if (w1 === w2) w2 = outer.clientWidth;\n\n   document.body.removeChild(outer);\n\n   return w1 - w2;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2V0LXNjcm9sbGJhci13aWR0aC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VscC00LXdlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvZ2V0LXNjcm9sbGJhci13aWR0aC9pbmRleC5qcz81ZDc4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGlzU2VydmVyKCkge1xuICAgcmV0dXJuICEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRTY3JvbGxCYXJXaWR0aCgpIHtcbiAgIC8vIGRlZmF1bHQgdG8gMTVweCBzZXJ2ZXItc2lkZSBhcyB0aGlzIGlzIHRydWUgZm9yIG1hbnkgYnJvd3NlcnNcbiAgIGlmKGlzU2VydmVyKCkpIHJldHVybiAxNTtcblxuICAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgIGlubmVyLnN0eWxlLmhlaWdodCA9ICcyMDBweCc7XG5cbiAgIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBvdXRlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICBvdXRlci5zdHlsZS50b3AgPSAnMHB4JztcbiAgIG91dGVyLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgIG91dGVyLnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgIG91dGVyLnN0eWxlLmhlaWdodCA9ICcxNTBweCc7XG4gICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuXG4gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgIGNvbnN0IHcxID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgdmFyIHcyID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICBpZiAodzEgPT09IHcyKSB3MiA9IG91dGVyLmNsaWVudFdpZHRoO1xuXG4gICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgcmV0dXJuIHcxIC0gdzI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/get-scrollbar-width/index.js\n");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/assets/js/scripts.js");
/******/ 	__webpack_require__("./src/assets/js/components/anchor-scroll.js");
/******/ 	__webpack_require__("./src/assets/js/components/nav-click.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/components/scrollbar-width.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
