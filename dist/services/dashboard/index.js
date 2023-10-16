"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _task = _interopRequireDefault(require("../../models/task"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } // import Task from '../../models/task'; // Import your Task model
// const DashboardService = {
//   async getDashboardData() {
//     try {
//       // Calculate counts for different task statuses
//       const counts = {
//         totalTasks: await Task.countDocuments(),
//         pendingTasks: await Task.countDocuments({ status: 'pending' }),
//         startedTasks: await Task.countDocuments({ status: 'started' }),
//         completedTasks: await Task.countDocuments({ status: 'completed' }),
//         overduedTasks: await Task.countDocuments({ status: 'overdued' }),
//       };
//       // Calculate upcoming tasks
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
//       const tomorrow = new Date(today);
//       tomorrow.setDate(today.getDate() + 1);
//       const upcomingTasks = await Task.find({
//         $or: [
//           { startDate: tomorrow },
//           { endDate: tomorrow },
//           { endDate: { $gt: tomorrow } }, // Deadlines after tomorrow
//         ],
//       });
//       return { counts, upcomingTasks };
//     } catch (error) {
//       throw new Error('Unable to fetch dashboard data');
//     }
//   },
// };
// export default DashboardService;
// import Task from '../../models/task';
// const DashboardService = {
//   async getDashboardData() {
//     try {
//       // Calculate counts for different task statuses
//       const counts = {
//         totalTasks: await Task.countDocuments(),
//         pendingTasks: await Task.countDocuments({ status: 'pending' }),
//         startedTasks: await Task.countDocuments({ status: 'started' }),
//         completedTasks: await Task.countDocuments({ status: 'completed' }),
//         overduedTasks: await Task.countDocuments({ status: 'overdued' }),
//       };
//       // Get the current date and reset the time to 00:00:00
//       const currentDate = new Date();
//       currentDate.setHours(0, 0, 0, 0);
//       // Calculate dates for tomorrow and one week from today
//       const tomorrow = new Date(currentDate);
//       tomorrow.setDate(currentDate.getDate() + 1);
//       const oneWeekFromToday = new Date(currentDate);
//       oneWeekFromToday.setDate(currentDate.getDate() + 7);
//       // Calculate upcoming tasks for today, tomorrow, and this week
//       const upcomingStartTasksToday = await Task.find({
//         startDate: currentDate,
//       });
//       const upcomingStartTasksTomorrow = await Task.find({
//         startDate: tomorrow,
//       });
//       const upcomingStartTasksThisWeek = await Task.find({
//         startDate: {
//           $gte: tomorrow,
//           $lte: oneWeekFromToday,
//         },
//       });
//       const upcomingDeadlineTasksToday = await Task.find({
//         endDate: currentDate,
//       });
//       const upcomingDeadlineTasksTomorrow = await Task.find({
//         endDate: tomorrow,
//       });
//       const upcomingDeadlineTasksThisWeek = await Task.find({
//         endDate: {
//           $gte: tomorrow,
//           $lte: oneWeekFromToday,
//         },
//       });
//       return {
//         counts,
//         upcomingTasks: {
//           today: {
//             startTasks: upcomingStartTasksToday,
//             deadlineTasks: upcomingDeadlineTasksToday,
//           },
//           tomorrow: {
//             startTasks: upcomingStartTasksTomorrow,
//             deadlineTasks: upcomingDeadlineTasksTomorrow,
//           },
//           thisWeek: {
//             startTasks: upcomingStartTasksThisWeek,
//             deadlineTasks: upcomingDeadlineTasksThisWeek,
//           },
//         },
//       };
//     } catch (error) {
//       throw new Error('Unable to fetch dashboard data');
//     }
//   },
// };
// export default DashboardService;
// import Task from '../../models/task';
// const DashboardService = {
//   async getDashboardData() {
//     try {
//       // Calculate counts for different task statuses
//       const counts = {
//         totalTasks: await Task.countDocuments(),
//         pendingTasks: await Task.countDocuments({ status: 'pending' }),
//         startedTasks: await Task.countDocuments({ status: 'started' }),
//         completedTasks: await Task.countDocuments({ status: 'completed' }),
//         overduedTasks: await Task.countDocuments({ status: 'overdued' }),
//       };
//       // Get the current date and reset the time to 00:00:00
//       const currentDate = new Date();
//       currentDate.setHours(0, 0, 0, 0);
//       // Calculate dates for tomorrow and one week from today
//       const tomorrow = new Date(currentDate);
//       tomorrow.setDate(currentDate.getDate() + 1);
//       const oneWeekFromToday = new Date(currentDate);
//       oneWeekFromToday.setDate(currentDate.getDate() + 7);
//       // Calculate upcoming start tasks for today, tomorrow, and this week
//       const upcomingStartTasksToday = await Task.find({
//         startDate: { $gte: currentDate, $lt: tomorrow },
//         status: 'pending',
//       });
//       const upcomingStartTasksTomorrow = await Task.find({
//         startDate: { $gte: tomorrow, $lt: oneWeekFromToday },
//         status: 'pending',
//       });
//       const upcomingStartTasksThisWeek = await Task.find({
//         startDate: { $gte: currentDate, $lt: oneWeekFromToday },
//         status: 'pending',
//       });
//       // Calculate upcoming deadline tasks for today, tomorrow, and this week
//       const upcomingDeadlineTasksToday = await Task.find({
//         endDate: { $gte: currentDate, $lt: tomorrow },
//       });
//       const upcomingDeadlineTasksTomorrow = await Task.find({
//         endDate: { $gte: tomorrow, $lt: oneWeekFromToday },
//       });
//       const upcomingDeadlineTasksThisWeek = await Task.find({
//         endDate: { $gte: currentDate, $lt: oneWeekFromToday },
//       });
//       return {
//         counts,
//         upcomingTasks: {
//           today: {
//             startTasks: upcomingStartTasksToday,
//             deadlineTasks: upcomingDeadlineTasksToday,
//           },
//           tomorrow: {
//             startTasks: upcomingStartTasksTomorrow,
//             deadlineTasks: upcomingDeadlineTasksTomorrow,
//           },
//           thisWeek: {
//             startTasks: upcomingStartTasksThisWeek,
//             deadlineTasks: upcomingDeadlineTasksThisWeek,
//           },
//         },
//       };
//     } catch (error) {
//       throw new Error('Unable to fetch dashboard data');
//     }
//   },
// };
// export default DashboardService;
var DashboardService = {
  getDashboardData: function getDashboardData(userId) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var counts, currentDate, tomorrow, oneWeekFromToday, upcomingStartTasksToday, upcomingStartTasksTomorrow, upcomingStartTasksThisWeek, upcomingDeadlineTasksToday, upcomingDeadlineTasksTomorrow, upcomingDeadlineTasksThisWeek, taskCompletionRate, completedTasks, taskCompletionTimes, avgTaskCompletionTime, timeTrackingTasks, totalTrackedTime;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _task["default"].countDocuments();
          case 3:
            _context.t0 = _context.sent;
            _context.next = 6;
            return _task["default"].countDocuments({
              status: 'pending'
            });
          case 6:
            _context.t1 = _context.sent;
            _context.next = 9;
            return _task["default"].countDocuments({
              status: 'started'
            });
          case 9:
            _context.t2 = _context.sent;
            _context.next = 12;
            return _task["default"].countDocuments({
              status: 'completed'
            });
          case 12:
            _context.t3 = _context.sent;
            _context.next = 15;
            return _task["default"].countDocuments({
              status: 'overdued'
            });
          case 15:
            _context.t4 = _context.sent;
            counts = {
              totalTasks: _context.t0,
              pendingTasks: _context.t1,
              startedTasks: _context.t2,
              completedTasks: _context.t3,
              overduedTasks: _context.t4
            };
            // Get the current date and reset the time to 00:00:00
            currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);

            // Calculate dates for tomorrow and one week from today
            tomorrow = new Date(currentDate);
            tomorrow.setDate(currentDate.getDate() + 1);
            oneWeekFromToday = new Date(currentDate);
            oneWeekFromToday.setDate(currentDate.getDate() + 7);

            // Calculate upcoming start tasks for today, tomorrow, and this week
            _context.next = 25;
            return _task["default"].find({
              startDate: {
                $gte: currentDate,
                $lt: tomorrow
              },
              status: 'pending'
            });
          case 25:
            upcomingStartTasksToday = _context.sent;
            _context.next = 28;
            return _task["default"].find({
              startDate: {
                $gte: tomorrow,
                $lt: oneWeekFromToday
              },
              status: 'pending'
            });
          case 28:
            upcomingStartTasksTomorrow = _context.sent;
            _context.next = 31;
            return _task["default"].find({
              startDate: {
                $gte: currentDate,
                $lt: oneWeekFromToday
              },
              status: 'pending'
            });
          case 31:
            upcomingStartTasksThisWeek = _context.sent;
            _context.next = 34;
            return _task["default"].find({
              endDate: {
                $gte: currentDate,
                $lt: tomorrow
              }
            });
          case 34:
            upcomingDeadlineTasksToday = _context.sent;
            _context.next = 37;
            return _task["default"].find({
              endDate: {
                $gte: tomorrow,
                $lt: oneWeekFromToday
              }
            });
          case 37:
            upcomingDeadlineTasksTomorrow = _context.sent;
            _context.next = 40;
            return _task["default"].find({
              endDate: {
                $gte: currentDate,
                $lt: oneWeekFromToday
              }
            });
          case 40:
            upcomingDeadlineTasksThisWeek = _context.sent;
            // Calculate task performance statistics
            taskCompletionRate = counts.completedTasks / counts.totalTasks * 100; // Calculate average task completion time (if you have a 'completedDate' field)
            _context.next = 44;
            return _task["default"].find({
              status: 'completed'
            });
          case 44:
            completedTasks = _context.sent;
            taskCompletionTimes = completedTasks.map(function (task) {
              return task.completedDate - task.startDate;
            });
            avgTaskCompletionTime = taskCompletionTimes.reduce(function (acc, time) {
              return acc + time;
            }, 0) / taskCompletionTimes.length; // Calculate time tracking statistics (if you have a 'startTime' and 'endTime' field)
            _context.next = 49;
            return _task["default"].find({
              startTime: {
                $exists: true
              },
              endTime: {
                $exists: true
              }
            });
          case 49:
            timeTrackingTasks = _context.sent;
            totalTrackedTime = timeTrackingTasks.reduce(function (total, task) {
              return total + (task.endTime - task.startTime);
            }, 0);
            return _context.abrupt("return", {
              counts: counts,
              upcomingTasks: {
                today: {
                  startTasks: upcomingStartTasksToday,
                  deadlineTasks: upcomingDeadlineTasksToday
                },
                tomorrow: {
                  startTasks: upcomingStartTasksTomorrow,
                  deadlineTasks: upcomingDeadlineTasksTomorrow
                },
                thisWeek: {
                  startTasks: upcomingStartTasksThisWeek,
                  deadlineTasks: upcomingDeadlineTasksThisWeek
                }
              },
              performanceAnalytics: {
                completionRate: taskCompletionRate,
                averageCompletionTime: avgTaskCompletionTime
              },
              timeTracking: {
                totalTrackedTime: totalTrackedTime
              }
            });
          case 54:
            _context.prev = 54;
            _context.t5 = _context["catch"](0);
            throw new Error('Unable to fetch dashboard data');
          case 57:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 54]]);
    }))();
  }
};
var _default = exports["default"] = DashboardService;