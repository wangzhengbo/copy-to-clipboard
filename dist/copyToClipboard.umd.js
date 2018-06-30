(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports["copyToClipboard"] = factory();
  else root["copyToClipboard"] = factory();
})(typeof self !== "undefined" ? self : this, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module"
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = "+xUi")
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ "+rLv": /***/ function(module, exports, __webpack_require__) {
        var document = __webpack_require__("dyZX").document;
        module.exports = document && document.documentElement;

        /***/
      },

      /***/ "+xUi": /***/ function(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
        var setPublicPath = __webpack_require__("HrLf");

        // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }
        // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === "function") {
              ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(
                    source,
                    sym
                  ).enumerable;
                })
              );
            }

            ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          }

          return target;
        }
        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
        var es6_promise = __webpack_require__("VRzm");

        // EXTERNAL MODULE: ./node_modules/clipboard/dist/clipboard.js
        var dist_clipboard = __webpack_require__("sxGJ");
        var clipboard_default = /*#__PURE__*/ __webpack_require__.n(
          dist_clipboard
        );

        // CONCATENATED MODULE: ./src/index.js

        /* harmony default export */ var src = function(_text, options) {
          return new Promise(function(resolve, reject) {
            var fakeButton = document.createElement("button");
            var clipboard = new clipboard_default.a(
              fakeButton,
              _objectSpread({}, options, {
                text: function text() {
                  return _text;
                }
              })
            );
            clipboard.on("success", function() {
              fakeButton = null;
              clipboard.destroy();
              resolve();
            });
            clipboard.on("error", function(err) {
              fakeButton = null;
              clipboard.destroy();
              reject(err);
            });
            fakeButton.click();
          });
        };
        // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

        /* harmony default export */ var entry_lib = (__webpack_exports__[
          "default"
        ] = src);

        /***/
      },

      /***/ "0/R4": /***/ function(module, exports) {
        module.exports = function(it) {
          return typeof it === "object"
            ? it !== null
            : typeof it === "function";
        };

        /***/
      },

      /***/ "2OiF": /***/ function(module, exports) {
        module.exports = function(it) {
          if (typeof it != "function")
            throw TypeError(it + " is not a function!");
          return it;
        };

        /***/
      },

      /***/ "3Lyj": /***/ function(module, exports, __webpack_require__) {
        var redefine = __webpack_require__("KroJ");
        module.exports = function(target, src, safe) {
          for (var key in src) redefine(target, key, src[key], safe);
          return target;
        };

        /***/
      },

      /***/ "69bn": /***/ function(module, exports, __webpack_require__) {
        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = __webpack_require__("y3w9");
        var aFunction = __webpack_require__("2OiF");
        var SPECIES = __webpack_require__("K0xU")("species");
        module.exports = function(O, D) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined
            ? D
            : aFunction(S);
        };

        /***/
      },

      /***/ "9gX7": /***/ function(module, exports) {
        module.exports = function(it, Constructor, name, forbiddenField) {
          if (
            !(it instanceof Constructor) ||
            (forbiddenField !== undefined && forbiddenField in it)
          ) {
            throw TypeError(name + ": incorrect invocation!");
          }
          return it;
        };

        /***/
      },

      /***/ GZEu: /***/ function(module, exports, __webpack_require__) {
        var ctx = __webpack_require__("m0Pp");
        var invoke = __webpack_require__("MfQN");
        var html = __webpack_require__("+rLv");
        var cel = __webpack_require__("Iw71");
        var global = __webpack_require__("dyZX");
        var process = global.process;
        var setTask = global.setImmediate;
        var clearTask = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = "onreadystatechange";
        var defer, channel, port;
        var run = function() {
          var id = +this;
          // eslint-disable-next-line no-prototype-builtins
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var listener = function(event) {
          run.call(event.data);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            var args = [];
            var i = 1;
            while (arguments.length > i) args.push(arguments[i++]);
            queue[++counter] = function() {
              // eslint-disable-next-line no-new-func
              invoke(typeof fn == "function" ? fn : Function(fn), args);
            };
            defer(counter);
            return counter;
          };
          clearTask = function clearImmediate(id) {
            delete queue[id];
          };
          // Node.js 0.8-
          if (__webpack_require__("LZWt")(process) == "process") {
            defer = function(id) {
              process.nextTick(ctx(run, id, 1));
            };
            // Sphere (JS game engine) Dispatch API
          } else if (Dispatch && Dispatch.now) {
            defer = function(id) {
              Dispatch.now(ctx(run, id, 1));
            };
            // Browsers with MessageChannel, includes WebWorkers
          } else if (MessageChannel) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = ctx(port.postMessage, port, 1);
            // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (
            global.addEventListener &&
            typeof postMessage == "function" &&
            !global.importScripts
          ) {
            defer = function(id) {
              global.postMessage(id + "", "*");
            };
            global.addEventListener("message", listener, false);
            // IE8-
          } else if (ONREADYSTATECHANGE in cel("script")) {
            defer = function(id) {
              html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
                html.removeChild(this);
                run.call(id);
              };
            };
            // Rest old browsers
          } else {
            defer = function(id) {
              setTimeout(ctx(run, id, 1), 0);
            };
          }
        }
        module.exports = {
          set: setTask,
          clear: clearTask
        };

        /***/
      },

      /***/ H6hf: /***/ function(module, exports, __webpack_require__) {
        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__("y3w9");
        module.exports = function(iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (e) {
            var ret = iterator["return"];
            if (ret !== undefined) anObject(ret.call(iterator));
            throw e;
          }
        };

        /***/
      },

      /***/ HrLf: /***/ function(module, exports, __webpack_require__) {
        // This file is imported into lib/wc client bundles.

        if (typeof window !== "undefined") {
          let i;
          if (
            (i = window.document.currentScript) &&
            (i = i.src.match(/(.+\/)[^/]+\.js$/))
          ) {
    __webpack_require__.p = i[1] // eslint-disable-line
          }
        }

        /***/
      },

      /***/ "I8a+": /***/ function(module, exports, __webpack_require__) {
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__("LZWt");
        var TAG = __webpack_require__("K0xU")("toStringTag");
        // ES3 wrong here
        var ARG =
          cof(
            (function() {
              return arguments;
            })()
          ) == "Arguments";

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (e) {
            /* empty */
          }
        };

        module.exports = function(it) {
          var O, T, B;
          return it === undefined
            ? "Undefined"
            : it === null
              ? "Null"
              : // @@toStringTag case
                typeof (T = tryGet((O = Object(it)), TAG)) == "string"
                ? T
                : // builtinTag case
                  ARG
                  ? cof(O)
                  : // ES3 arguments fallback
                    (B = cof(O)) == "Object" && typeof O.callee == "function"
                    ? "Arguments"
                    : B;
        };

        /***/
      },

      /***/ Iw71: /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__("0/R4");
        var document = __webpack_require__("dyZX").document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
          return is ? document.createElement(it) : {};
        };

        /***/
      },

      /***/ "J+6e": /***/ function(module, exports, __webpack_require__) {
        var classof = __webpack_require__("I8a+");
        var ITERATOR = __webpack_require__("K0xU")("iterator");
        var Iterators = __webpack_require__("hPIQ");
        module.exports = __webpack_require__(
          "g3g5"
        ).getIteratorMethod = function(it) {
          if (it != undefined)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };

        /***/
      },

      /***/ K0xU: /***/ function(module, exports, __webpack_require__) {
        var store = __webpack_require__("VTer")("wks");
        var uid = __webpack_require__("ylqs");
        var Symbol = __webpack_require__("dyZX").Symbol;
        var USE_SYMBOL = typeof Symbol == "function";

        var $exports = (module.exports = function(name) {
          return (
            store[name] ||
            (store[name] =
              (USE_SYMBOL && Symbol[name]) ||
              (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
          );
        });

        $exports.store = store;

        /***/
      },

      /***/ KroJ: /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__("dyZX");
        var hide = __webpack_require__("Mukb");
        var has = __webpack_require__("aagx");
        var SRC = __webpack_require__("ylqs")("src");
        var TO_STRING = "toString";
        var $toString = Function[TO_STRING];
        var TPL = ("" + $toString).split(TO_STRING);

        __webpack_require__("g3g5").inspectSource = function(it) {
          return $toString.call(it);
        };

        (module.exports = function(O, key, val, safe) {
          var isFunction = typeof val == "function";
          if (isFunction) has(val, "name") || hide(val, "name", key);
          if (O[key] === val) return;
          if (isFunction)
            has(val, SRC) ||
              hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
          if (O === global) {
            O[key] = val;
          } else if (!safe) {
            delete O[key];
            hide(O, key, val);
          } else if (O[key]) {
            O[key] = val;
          } else {
            hide(O, key, val);
          }
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
          return (
            (typeof this == "function" && this[SRC]) || $toString.call(this)
          );
        });

        /***/
      },

      /***/ LQAc: /***/ function(module, exports) {
        module.exports = false;

        /***/
      },

      /***/ LZWt: /***/ function(module, exports) {
        var toString = {}.toString;

        module.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

      /***/ M6Qj: /***/ function(module, exports, __webpack_require__) {
        // check on default Array iterator
        var Iterators = __webpack_require__("hPIQ");
        var ITERATOR = __webpack_require__("K0xU")("iterator");
        var ArrayProto = Array.prototype;

        module.exports = function(it) {
          return (
            it !== undefined &&
            (Iterators.Array === it || ArrayProto[ITERATOR] === it)
          );
        };

        /***/
      },

      /***/ MfQN: /***/ function(module, exports) {
        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function(fn, args, that) {
          var un = that === undefined;
          switch (args.length) {
            case 0:
              return un ? fn() : fn.call(that);
            case 1:
              return un ? fn(args[0]) : fn.call(that, args[0]);
            case 2:
              return un
                ? fn(args[0], args[1])
                : fn.call(that, args[0], args[1]);
            case 3:
              return un
                ? fn(args[0], args[1], args[2])
                : fn.call(that, args[0], args[1], args[2]);
            case 4:
              return un
                ? fn(args[0], args[1], args[2], args[3])
                : fn.call(that, args[0], args[1], args[2], args[3]);
          }
          return fn.apply(that, args);
        };

        /***/
      },

      /***/ Mukb: /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__("hswa");
        var createDesc = __webpack_require__("RjD/");
        module.exports = __webpack_require__("nh4g")
          ? function(object, key, value) {
              return dP.f(object, key, createDesc(1, value));
            }
          : function(object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

      /***/ RYi7: /***/ function(module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function(it) {
          return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
      },

      /***/ "RjD/": /***/ function(module, exports) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        /***/
      },

      /***/ SlkY: /***/ function(module, exports, __webpack_require__) {
        var ctx = __webpack_require__("m0Pp");
        var call = __webpack_require__("H6hf");
        var isArrayIter = __webpack_require__("M6Qj");
        var anObject = __webpack_require__("y3w9");
        var toLength = __webpack_require__("ne8i");
        var getIterFn = __webpack_require__("J+6e");
        var BREAK = {};
        var RETURN = {};
        var exports = (module.exports = function(
          iterable,
          entries,
          fn,
          that,
          ITERATOR
        ) {
          var iterFn = ITERATOR
            ? function() {
                return iterable;
              }
            : getIterFn(iterable);
          var f = ctx(fn, that, entries ? 2 : 1);
          var index = 0;
          var length, step, iterator, result;
          if (typeof iterFn != "function")
            throw TypeError(iterable + " is not iterable!");
          // fast case for arrays with default iterator
          if (isArrayIter(iterFn))
            for (length = toLength(iterable.length); length > index; index++) {
              result = entries
                ? f(anObject((step = iterable[index]))[0], step[1])
                : f(iterable[index]);
              if (result === BREAK || result === RETURN) return result;
            }
          else
            for (
              iterator = iterFn.call(iterable);
              !(step = iterator.next()).done;

            ) {
              result = call(iterator, f, step.value, entries);
              if (result === BREAK || result === RETURN) return result;
            }
        });
        exports.BREAK = BREAK;
        exports.RETURN = RETURN;

        /***/
      },

      /***/ VRzm: /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var LIBRARY = __webpack_require__("LQAc");
        var global = __webpack_require__("dyZX");
        var ctx = __webpack_require__("m0Pp");
        var classof = __webpack_require__("I8a+");
        var $export = __webpack_require__("XKFU");
        var isObject = __webpack_require__("0/R4");
        var aFunction = __webpack_require__("2OiF");
        var anInstance = __webpack_require__("9gX7");
        var forOf = __webpack_require__("SlkY");
        var speciesConstructor = __webpack_require__("69bn");
        var task = __webpack_require__("GZEu").set;
        var microtask = __webpack_require__("gHnn")();
        var newPromiseCapabilityModule = __webpack_require__("pbhE");
        var perform = __webpack_require__("nICZ");
        var userAgent = __webpack_require__("ol8x");
        var promiseResolve = __webpack_require__("vKrd");
        var PROMISE = "Promise";
        var TypeError = global.TypeError;
        var process = global.process;
        var versions = process && process.versions;
        var v8 = (versions && versions.v8) || "";
        var $Promise = global[PROMISE];
        var isNode = classof(process) == "process";
        var empty = function() {
          /* empty */
        };
        var Internal,
          newGenericPromiseCapability,
          OwnPromiseCapability,
          Wrapper;
        var newPromiseCapability = (newGenericPromiseCapability =
          newPromiseCapabilityModule.f);

        var USE_NATIVE = !!(function() {
          try {
            // correct subclassing with @@species support
            var promise = $Promise.resolve(1);
            var FakePromise = ((promise.constructor = {})[
              __webpack_require__("K0xU")("species")
            ] = function(exec) {
              exec(empty, empty);
            });
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (
              (isNode || typeof PromiseRejectionEvent == "function") &&
              promise.then(empty) instanceof FakePromise &&
              // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
              // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
              // we can't detect it synchronously, so just check versions
              v8.indexOf("6.6") !== 0 &&
              userAgent.indexOf("Chrome/66") === -1
            );
          } catch (e) {
            /* empty */
          }
        })();

        // helpers
        var isThenable = function(it) {
          var then;
          return isObject(it) && typeof (then = it.then) == "function"
            ? then
            : false;
        };
        var notify = function(promise, isReject) {
          if (promise._n) return;
          promise._n = true;
          var chain = promise._c;
          microtask(function() {
            var value = promise._v;
            var ok = promise._s == 1;
            var i = 0;
            var run = function(reaction) {
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;
              try {
                if (handler) {
                  if (!ok) {
                    if (promise._h == 2) onHandleUnhandled(promise);
                    promise._h = 1;
                  }
                  if (handler === true) result = value;
                  else {
                    if (domain) domain.enter();
                    result = handler(value); // may throw
                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError("Promise-chain cycle"));
                  } else if ((then = isThenable(result))) {
                    then.call(result, resolve, reject);
                  } else resolve(result);
                } else reject(value);
              } catch (e) {
                if (domain && !exited) domain.exit();
                reject(e);
              }
            };
            while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
            promise._c = [];
            promise._n = false;
            if (isReject && !promise._h) onUnhandled(promise);
          });
        };
        var onUnhandled = function(promise) {
          task.call(global, function() {
            var value = promise._v;
            var unhandled = isUnhandled(promise);
            var result, handler, console;
            if (unhandled) {
              result = perform(function() {
                if (isNode) {
                  process.emit("unhandledRejection", value, promise);
                } else if ((handler = global.onunhandledrejection)) {
                  handler({ promise: promise, reason: value });
                } else if ((console = global.console) && console.error) {
                  console.error("Unhandled promise rejection", value);
                }
              });
              // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
              promise._h = isNode || isUnhandled(promise) ? 2 : 1;
            }
            promise._a = undefined;
            if (unhandled && result.e) throw result.v;
          });
        };
        var isUnhandled = function(promise) {
          return promise._h !== 1 && (promise._a || promise._c).length === 0;
        };
        var onHandleUnhandled = function(promise) {
          task.call(global, function() {
            var handler;
            if (isNode) {
              process.emit("rejectionHandled", promise);
            } else if ((handler = global.onrejectionhandled)) {
              handler({ promise: promise, reason: promise._v });
            }
          });
        };
        var $reject = function(value) {
          var promise = this;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          promise._v = value;
          promise._s = 2;
          if (!promise._a) promise._a = promise._c.slice();
          notify(promise, true);
        };
        var $resolve = function(value) {
          var promise = this;
          var then;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          try {
            if (promise === value)
              throw TypeError("Promise can't be resolved itself");
            if ((then = isThenable(value))) {
              microtask(function() {
                var wrapper = { _w: promise, _d: false }; // wrap
                try {
                  then.call(
                    value,
                    ctx($resolve, wrapper, 1),
                    ctx($reject, wrapper, 1)
                  );
                } catch (e) {
                  $reject.call(wrapper, e);
                }
              });
            } else {
              promise._v = value;
              promise._s = 1;
              notify(promise, false);
            }
          } catch (e) {
            $reject.call({ _w: promise, _d: false }, e); // wrap
          }
        };

        // constructor polyfill
        if (!USE_NATIVE) {
          // 25.4.3.1 Promise(executor)
          $Promise = function Promise(executor) {
            anInstance(this, $Promise, PROMISE, "_h");
            aFunction(executor);
            Internal.call(this);
            try {
              executor(ctx($resolve, this, 1), ctx($reject, this, 1));
            } catch (err) {
              $reject.call(this, err);
            }
          };
          // eslint-disable-next-line no-unused-vars
          Internal = function Promise(executor) {
            this._c = []; // <- awaiting reactions
            this._a = undefined; // <- checked in isUnhandled reactions
            this._s = 0; // <- state
            this._d = false; // <- done
            this._v = undefined; // <- value
            this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
            this._n = false; // <- notify
          };
          Internal.prototype = __webpack_require__("3Lyj")($Promise.prototype, {
            // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
            then: function then(onFulfilled, onRejected) {
              var reaction = newPromiseCapability(
                speciesConstructor(this, $Promise)
              );
              reaction.ok =
                typeof onFulfilled == "function" ? onFulfilled : true;
              reaction.fail = typeof onRejected == "function" && onRejected;
              reaction.domain = isNode ? process.domain : undefined;
              this._c.push(reaction);
              if (this._a) this._a.push(reaction);
              if (this._s) notify(this, false);
              return reaction.promise;
            },
            // 25.4.5.1 Promise.prototype.catch(onRejected)
            catch: function(onRejected) {
              return this.then(undefined, onRejected);
            }
          });
          OwnPromiseCapability = function() {
            var promise = new Internal();
            this.promise = promise;
            this.resolve = ctx($resolve, promise, 1);
            this.reject = ctx($reject, promise, 1);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
            return C === $Promise || C === Wrapper
              ? new OwnPromiseCapability(C)
              : newGenericPromiseCapability(C);
          };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
          Promise: $Promise
        });
        __webpack_require__("fyDq")($Promise, PROMISE);
        __webpack_require__("elZq")(PROMISE);
        Wrapper = __webpack_require__("g3g5")[PROMISE];

        // statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
          // 25.4.4.5 Promise.reject(r)
          reject: function reject(r) {
            var capability = newPromiseCapability(this);
            var $$reject = capability.reject;
            $$reject(r);
            return capability.promise;
          }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
          // 25.4.4.6 Promise.resolve(x)
          resolve: function resolve(x) {
            return promiseResolve(
              LIBRARY && this === Wrapper ? $Promise : this,
              x
            );
          }
        });
        $export(
          $export.S +
            $export.F *
              !(
                USE_NATIVE &&
                __webpack_require__("XMVh")(function(iter) {
                  $Promise.all(iter)["catch"](empty);
                })
              ),
          PROMISE,
          {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var resolve = capability.resolve;
              var reject = capability.reject;
              var result = perform(function() {
                var values = [];
                var index = 0;
                var remaining = 1;
                forOf(iterable, false, function(promise) {
                  var $index = index++;
                  var alreadyCalled = false;
                  values.push(undefined);
                  remaining++;
                  C.resolve(promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                  }, reject);
                });
                --remaining || resolve(values);
              });
              if (result.e) reject(result.v);
              return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var reject = capability.reject;
              var result = perform(function() {
                forOf(iterable, false, function(promise) {
                  C.resolve(promise).then(capability.resolve, reject);
                });
              });
              if (result.e) reject(result.v);
              return capability.promise;
            }
          }
        );

        /***/
      },

      /***/ VTer: /***/ function(module, exports, __webpack_require__) {
        var core = __webpack_require__("g3g5");
        var global = __webpack_require__("dyZX");
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || (global[SHARED] = {});

        (module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
          version: core.version,
          mode: __webpack_require__("LQAc") ? "pure" : "global",
          copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        });

        /***/
      },

      /***/ XKFU: /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__("dyZX");
        var core = __webpack_require__("g3g5");
        var hide = __webpack_require__("Mukb");
        var redefine = __webpack_require__("KroJ");
        var ctx = __webpack_require__("m0Pp");
        var PROTOTYPE = "prototype";

        var $export = function(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var target = IS_GLOBAL
            ? global
            : IS_STATIC
              ? global[name] || (global[name] = {})
              : (global[name] || {})[PROTOTYPE];
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
          var key, own, out, exp;
          if (IS_GLOBAL) source = name;
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            // export native or passed
            out = (own ? target : source)[key];
            // bind timers to global for call from export context
            exp =
              IS_BIND && own
                ? ctx(out, global)
                : IS_PROTO && typeof out == "function"
                  ? ctx(Function.call, out)
                  : out;
            // extend global
            if (target) redefine(target, key, out, type & $export.U);
            // export
            if (exports[key] != out) hide(exports, key, exp);
            if (IS_PROTO && expProto[key] != out) expProto[key] = out;
          }
        };
        global.core = core;
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;

        /***/
      },

      /***/ XMVh: /***/ function(module, exports, __webpack_require__) {
        var ITERATOR = __webpack_require__("K0xU")("iterator");
        var SAFE_CLOSING = false;

        try {
          var riter = [7][ITERATOR]();
          riter["return"] = function() {
            SAFE_CLOSING = true;
          };
          // eslint-disable-next-line no-throw-literal
          Array.from(riter, function() {
            throw 2;
          });
        } catch (e) {
          /* empty */
        }

        module.exports = function(exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) return false;
          var safe = false;
          try {
            var arr = [7];
            var iter = arr[ITERATOR]();
            iter.next = function() {
              return { done: (safe = true) };
            };
            arr[ITERATOR] = function() {
              return iter;
            };
            exec(arr);
          } catch (e) {
            /* empty */
          }
          return safe;
        };

        /***/
      },

      /***/ aagx: /***/ function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

      /***/ apmT: /***/ function(module, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__("0/R4");
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (
            S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            typeof (fn = it.valueOf) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            !S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

      /***/ dyZX: /***/ function(module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = (module.exports =
          typeof window != "undefined" && window.Math == Math
            ? window
            : typeof self != "undefined" && self.Math == Math
              ? self
              : // eslint-disable-next-line no-new-func
                Function("return this")());
        if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

        /***/
      },

      /***/ eeVq: /***/ function(module, exports) {
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };

        /***/
      },

      /***/ elZq: /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var global = __webpack_require__("dyZX");
        var dP = __webpack_require__("hswa");
        var DESCRIPTORS = __webpack_require__("nh4g");
        var SPECIES = __webpack_require__("K0xU")("species");

        module.exports = function(KEY) {
          var C = global[KEY];
          if (DESCRIPTORS && C && !C[SPECIES])
            dP.f(C, SPECIES, {
              configurable: true,
              get: function() {
                return this;
              }
            });
        };

        /***/
      },

      /***/ fyDq: /***/ function(module, exports, __webpack_require__) {
        var def = __webpack_require__("hswa").f;
        var has = __webpack_require__("aagx");
        var TAG = __webpack_require__("K0xU")("toStringTag");

        module.exports = function(it, tag, stat) {
          if (it && !has((it = stat ? it : it.prototype), TAG))
            def(it, TAG, { configurable: true, value: tag });
        };

        /***/
      },

      /***/ g3g5: /***/ function(module, exports) {
        var core = (module.exports = { version: "2.5.7" });
        if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

        /***/
      },

      /***/ gHnn: /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__("dyZX");
        var macrotask = __webpack_require__("GZEu").set;
        var Observer = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var isNode = __webpack_require__("LZWt")(process) == "process";

        module.exports = function() {
          var head, last, notify;

          var flush = function() {
            var parent, fn;
            if (isNode && (parent = process.domain)) parent.exit();
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (e) {
                if (head) notify();
                else last = undefined;
                throw e;
              }
            }
            last = undefined;
            if (parent) parent.enter();
          };

          // Node.js
          if (isNode) {
            notify = function() {
              process.nextTick(flush);
            };
            // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
          } else if (
            Observer &&
            !(global.navigator && global.navigator.standalone)
          ) {
            var toggle = true;
            var node = document.createTextNode("");
            new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
            notify = function() {
              node.data = toggle = !toggle;
            };
            // environments with maybe non-completely correct, but existent Promise
          } else if (Promise && Promise.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            var promise = Promise.resolve(undefined);
            notify = function() {
              promise.then(flush);
            };
            // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessag
            // - onreadystatechange
            // - setTimeout
          } else {
            notify = function() {
              // strange IE + webpack dev server bug - use .call(global)
              macrotask.call(global, flush);
            };
          }

          return function(fn) {
            var task = { fn: fn, next: undefined };
            if (last) last.next = task;
            if (!head) {
              head = task;
              notify();
            }
            last = task;
          };
        };

        /***/
      },

      /***/ hPIQ: /***/ function(module, exports) {
        module.exports = {};

        /***/
      },

      /***/ hswa: /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__("y3w9");
        var IE8_DOM_DEFINE = __webpack_require__("xpql");
        var toPrimitive = __webpack_require__("apmT");
        var dP = Object.defineProperty;

        exports.f = __webpack_require__("nh4g")
          ? Object.defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return dP(O, P, Attributes);
                } catch (e) {
                  /* empty */
                }
              if ("get" in Attributes || "set" in Attributes)
                throw TypeError("Accessors not supported!");
              if ("value" in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

      /***/ m0Pp: /***/ function(module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__("2OiF");
        module.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function(/* ...args */) {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },

      /***/ nICZ: /***/ function(module, exports) {
        module.exports = function(exec) {
          try {
            return { e: false, v: exec() };
          } catch (e) {
            return { e: true, v: e };
          }
        };

        /***/
      },

      /***/ ne8i: /***/ function(module, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__("RYi7");
        var min = Math.min;
        module.exports = function(it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        /***/
      },

      /***/ nh4g: /***/ function(module, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__("eeVq")(function() {
          return (
            Object.defineProperty({}, "a", {
              get: function() {
                return 7;
              }
            }).a != 7
          );
        });

        /***/
      },

      /***/ ol8x: /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__("dyZX");
        var navigator = global.navigator;

        module.exports = (navigator && navigator.userAgent) || "";

        /***/
      },

      /***/ pbhE: /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // 25.4.1.5 NewPromiseCapability(C)
        var aFunction = __webpack_require__("2OiF");

        function PromiseCapability(C) {
          var resolve, reject;
          this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined)
              throw TypeError("Bad Promise constructor");
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        }

        module.exports.f = function(C) {
          return new PromiseCapability(C);
        };

        /***/
      },

      /***/ sxGJ: /***/ function(module, exports, __webpack_require__) {
        /*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
        (function webpackUniversalModuleDefinition(root, factory) {
          if (true) module.exports = factory();
          else {
          }
        })(this, function() {
          return /******/ (function(modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/ var installedModules = {}; // The require function
            /******/
            /******/ /******/ function __webpack_require__(moduleId) {
              /******/
              /******/ // Check if module is in cache
              /******/ if (installedModules[moduleId]) {
                /******/ return installedModules[moduleId].exports;
                /******/
              } // Create a new module (and put it into the cache)
              /******/ /******/ var module = (installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
                /******/
              }); // Execute the module function
              /******/
              /******/ /******/ modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
              ); // Flag the module as loaded
              /******/
              /******/ /******/ module.l = true; // Return the exports of the module
              /******/
              /******/ /******/ return module.exports;
              /******/
            } // expose the modules object (__webpack_modules__)
            /******/
            /******/
            /******/ /******/ __webpack_require__.m = modules; // expose the module cache
            /******/
            /******/ /******/ __webpack_require__.c = installedModules; // identity function for calling harmony imports with the correct context
            /******/
            /******/ /******/ __webpack_require__.i = function(value) {
              return value;
            }; // define getter function for harmony exports
            /******/
            /******/ /******/ __webpack_require__.d = function(
              exports,
              name,
              getter
            ) {
              /******/ if (!__webpack_require__.o(exports, name)) {
                /******/ Object.defineProperty(exports, name, {
                  /******/ configurable: false,
                  /******/ enumerable: true,
                  /******/ get: getter
                  /******/
                });
                /******/
              }
              /******/
            }; // getDefaultExport function for compatibility with non-harmony modules
            /******/
            /******/ /******/ __webpack_require__.n = function(module) {
              /******/ var getter =
                module && module.__esModule
                  ? /******/ function getDefault() {
                      return module["default"];
                    }
                  : /******/ function getModuleExports() {
                      return module;
                    };
              /******/ __webpack_require__.d(getter, "a", getter);
              /******/ return getter;
              /******/
            }; // Object.prototype.hasOwnProperty.call
            /******/
            /******/ /******/ __webpack_require__.o = function(
              object,
              property
            ) {
              return Object.prototype.hasOwnProperty.call(object, property);
            }; // __webpack_public_path__
            /******/
            /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
            /******/
            /******/ /******/ return __webpack_require__(
              (__webpack_require__.s = 3)
            );
            /******/
          })(
            /************************************************************************/
            /******/ [
              /* 0 */
              /***/ function(module, exports, __webpack_require__) {
                var __WEBPACK_AMD_DEFINE_FACTORY__,
                  __WEBPACK_AMD_DEFINE_ARRAY__,
                  __WEBPACK_AMD_DEFINE_RESULT__;
                (function(global, factory) {
                  if (true) {
                    !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
                      module,
                      __webpack_require__(7)
                    ]),
                    (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
                    (__WEBPACK_AMD_DEFINE_RESULT__ =
                      typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                        ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                            exports,
                            __WEBPACK_AMD_DEFINE_ARRAY__
                          )
                        : __WEBPACK_AMD_DEFINE_FACTORY__),
                    __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                      (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                  } else {
                    var mod;
                  }
                })(this, function(module, _select) {
                  "use strict";

                  var _select2 = _interopRequireDefault(_select);

                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule
                      ? obj
                      : {
                          default: obj
                        };
                  }

                  var _typeof =
                    typeof Symbol === "function" &&
                    typeof Symbol.iterator === "symbol"
                      ? function(obj) {
                          return typeof obj;
                        }
                      : function(obj) {
                          return obj &&
                            typeof Symbol === "function" &&
                            obj.constructor === Symbol &&
                            obj !== Symbol.prototype
                            ? "symbol"
                            : typeof obj;
                        };

                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  }

                  var _createClass = (function() {
                    function defineProperties(target, props) {
                      for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(
                          target,
                          descriptor.key,
                          descriptor
                        );
                      }
                    }

                    return function(Constructor, protoProps, staticProps) {
                      if (protoProps)
                        defineProperties(Constructor.prototype, protoProps);
                      if (staticProps)
                        defineProperties(Constructor, staticProps);
                      return Constructor;
                    };
                  })();

                  var ClipboardAction = (function() {
                    /**
                     * @param {Object} options
                     */
                    function ClipboardAction(options) {
                      _classCallCheck(this, ClipboardAction);

                      this.resolveOptions(options);
                      this.initSelection();
                    }

                    /**
                     * Defines base properties passed from constructor.
                     * @param {Object} options
                     */

                    _createClass(ClipboardAction, [
                      {
                        key: "resolveOptions",
                        value: function resolveOptions() {
                          var options =
                            arguments.length > 0 && arguments[0] !== undefined
                              ? arguments[0]
                              : {};

                          this.action = options.action;
                          this.container = options.container;
                          this.emitter = options.emitter;
                          this.target = options.target;
                          this.text = options.text;
                          this.trigger = options.trigger;

                          this.selectedText = "";
                        }
                      },
                      {
                        key: "initSelection",
                        value: function initSelection() {
                          if (this.text) {
                            this.selectFake();
                          } else if (this.target) {
                            this.selectTarget();
                          }
                        }
                      },
                      {
                        key: "selectFake",
                        value: function selectFake() {
                          var _this = this;

                          var isRTL =
                            document.documentElement.getAttribute("dir") ==
                            "rtl";

                          this.removeFake();

                          this.fakeHandlerCallback = function() {
                            return _this.removeFake();
                          };
                          this.fakeHandler =
                            this.container.addEventListener(
                              "click",
                              this.fakeHandlerCallback
                            ) || true;

                          this.fakeElem = document.createElement("textarea");
                          // Prevent zooming on iOS
                          this.fakeElem.style.fontSize = "12pt";
                          // Reset box model
                          this.fakeElem.style.border = "0";
                          this.fakeElem.style.padding = "0";
                          this.fakeElem.style.margin = "0";
                          // Move element out of screen horizontally
                          this.fakeElem.style.position = "absolute";
                          this.fakeElem.style[isRTL ? "right" : "left"] =
                            "-9999px";
                          // Move element to the same position vertically
                          var yPosition =
                            window.pageYOffset ||
                            document.documentElement.scrollTop;
                          this.fakeElem.style.top = yPosition + "px";

                          this.fakeElem.setAttribute("readonly", "");
                          this.fakeElem.value = this.text;

                          this.container.appendChild(this.fakeElem);

                          this.selectedText = (0, _select2.default)(
                            this.fakeElem
                          );
                          this.copyText();
                        }
                      },
                      {
                        key: "removeFake",
                        value: function removeFake() {
                          if (this.fakeHandler) {
                            this.container.removeEventListener(
                              "click",
                              this.fakeHandlerCallback
                            );
                            this.fakeHandler = null;
                            this.fakeHandlerCallback = null;
                          }

                          if (this.fakeElem) {
                            this.container.removeChild(this.fakeElem);
                            this.fakeElem = null;
                          }
                        }
                      },
                      {
                        key: "selectTarget",
                        value: function selectTarget() {
                          this.selectedText = (0, _select2.default)(
                            this.target
                          );
                          this.copyText();
                        }
                      },
                      {
                        key: "copyText",
                        value: function copyText() {
                          var succeeded = void 0;

                          try {
                            succeeded = document.execCommand(this.action);
                          } catch (err) {
                            succeeded = false;
                          }

                          this.handleResult(succeeded);
                        }
                      },
                      {
                        key: "handleResult",
                        value: function handleResult(succeeded) {
                          this.emitter.emit(succeeded ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                          });
                        }
                      },
                      {
                        key: "clearSelection",
                        value: function clearSelection() {
                          if (this.trigger) {
                            this.trigger.focus();
                          }

                          window.getSelection().removeAllRanges();
                        }
                      },
                      {
                        key: "destroy",
                        value: function destroy() {
                          this.removeFake();
                        }
                      },
                      {
                        key: "action",
                        set: function set() {
                          var action =
                            arguments.length > 0 && arguments[0] !== undefined
                              ? arguments[0]
                              : "copy";

                          this._action = action;

                          if (
                            this._action !== "copy" &&
                            this._action !== "cut"
                          ) {
                            throw new Error(
                              'Invalid "action" value, use either "copy" or "cut"'
                            );
                          }
                        },
                        get: function get() {
                          return this._action;
                        }
                      },
                      {
                        key: "target",
                        set: function set(target) {
                          if (target !== undefined) {
                            if (
                              target &&
                              (typeof target === "undefined"
                                ? "undefined"
                                : _typeof(target)) === "object" &&
                              target.nodeType === 1
                            ) {
                              if (
                                this.action === "copy" &&
                                target.hasAttribute("disabled")
                              ) {
                                throw new Error(
                                  'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                );
                              }

                              if (
                                this.action === "cut" &&
                                (target.hasAttribute("readonly") ||
                                  target.hasAttribute("disabled"))
                              ) {
                                throw new Error(
                                  'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                );
                              }

                              this._target = target;
                            } else {
                              throw new Error(
                                'Invalid "target" value, use a valid Element'
                              );
                            }
                          }
                        },
                        get: function get() {
                          return this._target;
                        }
                      }
                    ]);

                    return ClipboardAction;
                  })();

                  module.exports = ClipboardAction;
                });

                /***/
              },
              /* 1 */
              /***/ function(module, exports, __webpack_require__) {
                var is = __webpack_require__(6);
                var delegate = __webpack_require__(5);

                /**
                 * Validates all params and calls the right
                 * listener function based on its target type.
                 *
                 * @param {String|HTMLElement|HTMLCollection|NodeList} target
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Object}
                 */
                function listen(target, type, callback) {
                  if (!target && !type && !callback) {
                    throw new Error("Missing required arguments");
                  }

                  if (!is.string(type)) {
                    throw new TypeError("Second argument must be a String");
                  }

                  if (!is.fn(callback)) {
                    throw new TypeError("Third argument must be a Function");
                  }

                  if (is.node(target)) {
                    return listenNode(target, type, callback);
                  } else if (is.nodeList(target)) {
                    return listenNodeList(target, type, callback);
                  } else if (is.string(target)) {
                    return listenSelector(target, type, callback);
                  } else {
                    throw new TypeError(
                      "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                    );
                  }
                }

                /**
                 * Adds an event listener to a HTML element
                 * and returns a remove listener function.
                 *
                 * @param {HTMLElement} node
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Object}
                 */
                function listenNode(node, type, callback) {
                  node.addEventListener(type, callback);

                  return {
                    destroy: function() {
                      node.removeEventListener(type, callback);
                    }
                  };
                }

                /**
                 * Add an event listener to a list of HTML elements
                 * and returns a remove listener function.
                 *
                 * @param {NodeList|HTMLCollection} nodeList
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Object}
                 */
                function listenNodeList(nodeList, type, callback) {
                  Array.prototype.forEach.call(nodeList, function(node) {
                    node.addEventListener(type, callback);
                  });

                  return {
                    destroy: function() {
                      Array.prototype.forEach.call(nodeList, function(node) {
                        node.removeEventListener(type, callback);
                      });
                    }
                  };
                }

                /**
                 * Add an event listener to a selector
                 * and returns a remove listener function.
                 *
                 * @param {String} selector
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Object}
                 */
                function listenSelector(selector, type, callback) {
                  return delegate(document.body, selector, type, callback);
                }

                module.exports = listen;

                /***/
              },
              /* 2 */
              /***/ function(module, exports) {
                function E() {
                  // Keep this empty so it's easier to inherit from
                  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
                }

                E.prototype = {
                  on: function(name, callback, ctx) {
                    var e = this.e || (this.e = {});

                    (e[name] || (e[name] = [])).push({
                      fn: callback,
                      ctx: ctx
                    });

                    return this;
                  },

                  once: function(name, callback, ctx) {
                    var self = this;
                    function listener() {
                      self.off(name, listener);
                      callback.apply(ctx, arguments);
                    }

                    listener._ = callback;
                    return this.on(name, listener, ctx);
                  },

                  emit: function(name) {
                    var data = [].slice.call(arguments, 1);
                    var evtArr = (
                      (this.e || (this.e = {}))[name] || []
                    ).slice();
                    var i = 0;
                    var len = evtArr.length;

                    for (i; i < len; i++) {
                      evtArr[i].fn.apply(evtArr[i].ctx, data);
                    }

                    return this;
                  },

                  off: function(name, callback) {
                    var e = this.e || (this.e = {});
                    var evts = e[name];
                    var liveEvents = [];

                    if (evts && callback) {
                      for (var i = 0, len = evts.length; i < len; i++) {
                        if (
                          evts[i].fn !== callback &&
                          evts[i].fn._ !== callback
                        )
                          liveEvents.push(evts[i]);
                      }
                    }

                    // Remove event from queue to prevent memory leak
                    // Suggested by https://github.com/lazd
                    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

                    liveEvents.length ? (e[name] = liveEvents) : delete e[name];

                    return this;
                  }
                };

                module.exports = E;

                /***/
              },
              /* 3 */
              /***/ function(module, exports, __webpack_require__) {
                var __WEBPACK_AMD_DEFINE_FACTORY__,
                  __WEBPACK_AMD_DEFINE_ARRAY__,
                  __WEBPACK_AMD_DEFINE_RESULT__;
                (function(global, factory) {
                  if (true) {
                    !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
                      module,
                      __webpack_require__(0),
                      __webpack_require__(2),
                      __webpack_require__(1)
                    ]),
                    (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
                    (__WEBPACK_AMD_DEFINE_RESULT__ =
                      typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                        ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                            exports,
                            __WEBPACK_AMD_DEFINE_ARRAY__
                          )
                        : __WEBPACK_AMD_DEFINE_FACTORY__),
                    __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                      (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                  } else {
                    var mod;
                  }
                })(this, function(
                  module,
                  _clipboardAction,
                  _tinyEmitter,
                  _goodListener
                ) {
                  "use strict";

                  var _clipboardAction2 = _interopRequireDefault(
                    _clipboardAction
                  );

                  var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

                  var _goodListener2 = _interopRequireDefault(_goodListener);

                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule
                      ? obj
                      : {
                          default: obj
                        };
                  }

                  var _typeof =
                    typeof Symbol === "function" &&
                    typeof Symbol.iterator === "symbol"
                      ? function(obj) {
                          return typeof obj;
                        }
                      : function(obj) {
                          return obj &&
                            typeof Symbol === "function" &&
                            obj.constructor === Symbol &&
                            obj !== Symbol.prototype
                            ? "symbol"
                            : typeof obj;
                        };

                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  }

                  var _createClass = (function() {
                    function defineProperties(target, props) {
                      for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(
                          target,
                          descriptor.key,
                          descriptor
                        );
                      }
                    }

                    return function(Constructor, protoProps, staticProps) {
                      if (protoProps)
                        defineProperties(Constructor.prototype, protoProps);
                      if (staticProps)
                        defineProperties(Constructor, staticProps);
                      return Constructor;
                    };
                  })();

                  function _possibleConstructorReturn(self, call) {
                    if (!self) {
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    }

                    return call &&
                      (typeof call === "object" || typeof call === "function")
                      ? call
                      : self;
                  }

                  function _inherits(subClass, superClass) {
                    if (
                      typeof superClass !== "function" &&
                      superClass !== null
                    ) {
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof superClass
                      );
                    }

                    subClass.prototype = Object.create(
                      superClass && superClass.prototype,
                      {
                        constructor: {
                          value: subClass,
                          enumerable: false,
                          writable: true,
                          configurable: true
                        }
                      }
                    );
                    if (superClass)
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(subClass, superClass)
                        : (subClass.__proto__ = superClass);
                  }

                  var Clipboard = (function(_Emitter) {
                    _inherits(Clipboard, _Emitter);

                    /**
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     * @param {Object} options
                     */
                    function Clipboard(trigger, options) {
                      _classCallCheck(this, Clipboard);

                      var _this = _possibleConstructorReturn(
                        this,
                        (
                          Clipboard.__proto__ ||
                          Object.getPrototypeOf(Clipboard)
                        ).call(this)
                      );

                      _this.resolveOptions(options);
                      _this.listenClick(trigger);
                      return _this;
                    }

                    /**
                     * Defines if attributes would be resolved using internal setter functions
                     * or custom functions that were passed in the constructor.
                     * @param {Object} options
                     */

                    _createClass(
                      Clipboard,
                      [
                        {
                          key: "resolveOptions",
                          value: function resolveOptions() {
                            var options =
                              arguments.length > 0 && arguments[0] !== undefined
                                ? arguments[0]
                                : {};

                            this.action =
                              typeof options.action === "function"
                                ? options.action
                                : this.defaultAction;
                            this.target =
                              typeof options.target === "function"
                                ? options.target
                                : this.defaultTarget;
                            this.text =
                              typeof options.text === "function"
                                ? options.text
                                : this.defaultText;
                            this.container =
                              _typeof(options.container) === "object"
                                ? options.container
                                : document.body;
                          }
                        },
                        {
                          key: "listenClick",
                          value: function listenClick(trigger) {
                            var _this2 = this;

                            this.listener = (0, _goodListener2.default)(
                              trigger,
                              "click",
                              function(e) {
                                return _this2.onClick(e);
                              }
                            );
                          }
                        },
                        {
                          key: "onClick",
                          value: function onClick(e) {
                            var trigger = e.delegateTarget || e.currentTarget;

                            if (this.clipboardAction) {
                              this.clipboardAction = null;
                            }

                            this.clipboardAction = new _clipboardAction2.default(
                              {
                                action: this.action(trigger),
                                target: this.target(trigger),
                                text: this.text(trigger),
                                container: this.container,
                                trigger: trigger,
                                emitter: this
                              }
                            );
                          }
                        },
                        {
                          key: "defaultAction",
                          value: function defaultAction(trigger) {
                            return getAttributeValue("action", trigger);
                          }
                        },
                        {
                          key: "defaultTarget",
                          value: function defaultTarget(trigger) {
                            var selector = getAttributeValue("target", trigger);

                            if (selector) {
                              return document.querySelector(selector);
                            }
                          }
                        },
                        {
                          key: "defaultText",
                          value: function defaultText(trigger) {
                            return getAttributeValue("text", trigger);
                          }
                        },
                        {
                          key: "destroy",
                          value: function destroy() {
                            this.listener.destroy();

                            if (this.clipboardAction) {
                              this.clipboardAction.destroy();
                              this.clipboardAction = null;
                            }
                          }
                        }
                      ],
                      [
                        {
                          key: "isSupported",
                          value: function isSupported() {
                            var action =
                              arguments.length > 0 && arguments[0] !== undefined
                                ? arguments[0]
                                : ["copy", "cut"];

                            var actions =
                              typeof action === "string" ? [action] : action;
                            var support = !!document.queryCommandSupported;

                            actions.forEach(function(action) {
                              support =
                                support &&
                                !!document.queryCommandSupported(action);
                            });

                            return support;
                          }
                        }
                      ]
                    );

                    return Clipboard;
                  })(_tinyEmitter2.default);

                  /**
                   * Helper function to retrieve attribute value.
                   * @param {String} suffix
                   * @param {Element} element
                   */
                  function getAttributeValue(suffix, element) {
                    var attribute = "data-clipboard-" + suffix;

                    if (!element.hasAttribute(attribute)) {
                      return;
                    }

                    return element.getAttribute(attribute);
                  }

                  module.exports = Clipboard;
                });

                /***/
              },
              /* 4 */
              /***/ function(module, exports) {
                var DOCUMENT_NODE_TYPE = 9;

                /**
                 * A polyfill for Element.matches()
                 */
                if (
                  typeof Element !== "undefined" &&
                  !Element.prototype.matches
                ) {
                  var proto = Element.prototype;

                  proto.matches =
                    proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
                }

                /**
                 * Finds the closest parent that matches a selector.
                 *
                 * @param {Element} element
                 * @param {String} selector
                 * @return {Function}
                 */
                function closest(element, selector) {
                  while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                    if (
                      typeof element.matches === "function" &&
                      element.matches(selector)
                    ) {
                      return element;
                    }
                    element = element.parentNode;
                  }
                }

                module.exports = closest;

                /***/
              },
              /* 5 */
              /***/ function(module, exports, __webpack_require__) {
                var closest = __webpack_require__(4);

                /**
                 * Delegates event to a selector.
                 *
                 * @param {Element} element
                 * @param {String} selector
                 * @param {String} type
                 * @param {Function} callback
                 * @param {Boolean} useCapture
                 * @return {Object}
                 */
                function _delegate(
                  element,
                  selector,
                  type,
                  callback,
                  useCapture
                ) {
                  var listenerFn = listener.apply(this, arguments);

                  element.addEventListener(type, listenerFn, useCapture);

                  return {
                    destroy: function() {
                      element.removeEventListener(type, listenerFn, useCapture);
                    }
                  };
                }

                /**
                 * Delegates event to a selector.
                 *
                 * @param {Element|String|Array} [elements]
                 * @param {String} selector
                 * @param {String} type
                 * @param {Function} callback
                 * @param {Boolean} useCapture
                 * @return {Object}
                 */
                function delegate(
                  elements,
                  selector,
                  type,
                  callback,
                  useCapture
                ) {
                  // Handle the regular Element usage
                  if (typeof elements.addEventListener === "function") {
                    return _delegate.apply(null, arguments);
                  }

                  // Handle Element-less usage, it defaults to global delegation
                  if (typeof type === "function") {
                    // Use `document` as the first parameter, then apply arguments
                    // This is a short way to .unshift `arguments` without running into deoptimizations
                    return _delegate
                      .bind(null, document)
                      .apply(null, arguments);
                  }

                  // Handle Selector-based usage
                  if (typeof elements === "string") {
                    elements = document.querySelectorAll(elements);
                  }

                  // Handle Array-like based usage
                  return Array.prototype.map.call(elements, function(element) {
                    return _delegate(
                      element,
                      selector,
                      type,
                      callback,
                      useCapture
                    );
                  });
                }

                /**
                 * Finds closest match and invokes callback.
                 *
                 * @param {Element} element
                 * @param {String} selector
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Function}
                 */
                function listener(element, selector, type, callback) {
                  return function(e) {
                    e.delegateTarget = closest(e.target, selector);

                    if (e.delegateTarget) {
                      callback.call(element, e);
                    }
                  };
                }

                module.exports = delegate;

                /***/
              },
              /* 6 */
              /***/ function(module, exports) {
                /**
                 * Check if argument is a HTML element.
                 *
                 * @param {Object} value
                 * @return {Boolean}
                 */
                exports.node = function(value) {
                  return (
                    value !== undefined &&
                    value instanceof HTMLElement &&
                    value.nodeType === 1
                  );
                };

                /**
                 * Check if argument is a list of HTML elements.
                 *
                 * @param {Object} value
                 * @return {Boolean}
                 */
                exports.nodeList = function(value) {
                  var type = Object.prototype.toString.call(value);

                  return (
                    value !== undefined &&
                    (type === "[object NodeList]" ||
                      type === "[object HTMLCollection]") &&
                    "length" in value &&
                    (value.length === 0 || exports.node(value[0]))
                  );
                };

                /**
                 * Check if argument is a string.
                 *
                 * @param {Object} value
                 * @return {Boolean}
                 */
                exports.string = function(value) {
                  return typeof value === "string" || value instanceof String;
                };

                /**
                 * Check if argument is a function.
                 *
                 * @param {Object} value
                 * @return {Boolean}
                 */
                exports.fn = function(value) {
                  var type = Object.prototype.toString.call(value);

                  return type === "[object Function]";
                };

                /***/
              },
              /* 7 */
              /***/ function(module, exports) {
                function select(element) {
                  var selectedText;

                  if (element.nodeName === "SELECT") {
                    element.focus();

                    selectedText = element.value;
                  } else if (
                    element.nodeName === "INPUT" ||
                    element.nodeName === "TEXTAREA"
                  ) {
                    var isReadOnly = element.hasAttribute("readonly");

                    if (!isReadOnly) {
                      element.setAttribute("readonly", "");
                    }

                    element.select();
                    element.setSelectionRange(0, element.value.length);

                    if (!isReadOnly) {
                      element.removeAttribute("readonly");
                    }

                    selectedText = element.value;
                  } else {
                    if (element.hasAttribute("contenteditable")) {
                      element.focus();
                    }

                    var selection = window.getSelection();
                    var range = document.createRange();

                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range);

                    selectedText = selection.toString();
                  }

                  return selectedText;
                }

                module.exports = select;

                /***/
              }
              /******/
            ]
          );
        });

        /***/
      },

      /***/ vKrd: /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__("y3w9");
        var isObject = __webpack_require__("0/R4");
        var newPromiseCapability = __webpack_require__("pbhE");

        module.exports = function(C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C) return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };

        /***/
      },

      /***/ xpql: /***/ function(module, exports, __webpack_require__) {
        module.exports =
          !__webpack_require__("nh4g") &&
          !__webpack_require__("eeVq")(function() {
            return (
              Object.defineProperty(__webpack_require__("Iw71")("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a != 7
            );
          });

        /***/
      },

      /***/ y3w9: /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__("0/R4");
        module.exports = function(it) {
          if (!isObject(it)) throw TypeError(it + " is not an object!");
          return it;
        };

        /***/
      },

      /***/ ylqs: /***/ function(module, exports) {
        var id = 0;
        var px = Math.random();
        module.exports = function(key) {
          return "Symbol(".concat(
            key === undefined ? "" : key,
            ")_",
            (++id + px).toString(36)
          );
        };

        /***/
      }

      /******/
    }
  )["default"];
});
//# sourceMappingURL=copyToClipboard.umd.js.map
