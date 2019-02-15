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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n    constructor (array) {\n        this.array = array;\n    }\n\n    html (string){\n        if (string){\n            this.array.forEach(element => {\n                element.innerHTML = string;\n            });\n        } else {\n            return this.array[0].innerHTML\n        }\n    }\n\n    empty (){\n        this.array.forEach(element => {\n            element.innerHTML = \"\";\n        });\n    }\n\n    append (argument){\n        if (argument instanceof DomNodeCollection){\n            argument.forEach( node => {\n                let outer = node.outerHTML;\n                this.array.forEach( element => {\n                    element.innerHTML += outer;\n                })\n            });\n        } else if (argument instanceof HTMLElement){\n            let outer = argument.outerHTML;\n            this.array.forEach( element => {\n                element.innerHTML += outer;\n                // argument inner + element's outer\n                console.log(\"HTML\")\n            });\n        } else if (typeof(argument) === \"string\"){\n            this.array.forEach( element => {\n                element.innerHTML += argument;\n                console.log(\"string\")\n            });\n        } else {\n            console.log(\"none\")\n        }\n    }\n\n    attr(key, value) {\n        if (key === \"id\" && value){\n            this.array.forEach(element => {\n                element.attributes.id.value = value;\n        })\n        } else if (key === \"class\" && value){\n            this.array.forEach(element => {\n                element.attributes.class.value = value;\n        }) \n        } else if(key && value){\n            this.array.forEach(element => {\n                element.attributes[`${key}`] = value;\n        })\n        } else if (key === \"id\") {\n                return this.array[0].attributes.id.value;\n        } else if (key === \"class\") {\n            return this.array[0].attributes.class.value;\n        } else if(key){\n            return this.array[0].attributes[`${key}`];  \n        }\n    }\n\n    addClass(input) {\n        this.array.forEach(element => {\n            element.attributes.class.value += ` ${input}`;\n        })\n    }\n\n    removeClass(input){\n        if (input){\n            this.array.forEach( element => {\n                let memo = element.attributes.class.value.slice();\n                if (memo.includes(input)){\n                    memo = memo.split(\" \");\n                    for (let i = 0; i < memo.length; i++){\n                        if (input === memo[i]){\n                            memo[i] = \"\";\n                        };\n                    };\n                    element.attributes.class.value = memo.join(\" \");\n                };\n            });\n        } else {\n            this.attr(\"class\", \" \");\n        }\n    };\n\n    allchildren (){\n        let childrenArr = [];\n        if (!this.children){\n            return [];\n        } else {\n            this.children.forEach( child => {\n                childrenArr = childrenArr.push(child.allChildren())\n            })\n        }\n        return childrenArr;\n    }\n\n    parseChildren(array) {\n        for (let i = 0; i < array.length; i++){\n            if (typeof array[i] === \"object\"){\n                let keys = Object.keys(array[i]);\n            }\n        }\n    }\n\n    children(){\n        let childrenArr = this.allchildren()\n        if (childrenArr.length){\n            return new DomNodeCollection(childrenArr);\n        }\n    }\n}\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let DomNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nwindow.$1 = function(input) {\n    let holder;\n    if (typeof(input) === \"string\"){\n        holder = document.querySelectorAll(`${input}`)\n        holder = Array.from(holder);\n        return new DomNodeCollection(holder);\n    } else if (input instanceof HTMLElement){\n        return new DomNodeCollection([input]);\n    }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });