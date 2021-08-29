(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkangular_material_todo"] = self["webpackChunkangular_material_todo"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      53040);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _state_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./state/todo */
      21056);
      /* harmony import */


      var _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./state/todo/todo.actions */
      40976);
      /* harmony import */


      var _state_todo_todo_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./state/todo/todo.model */
      75242);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(store) {
          _classCallCheck(this, AppComponent);

          this.store = store;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var _this = this;

            (0, _state_todo_todo_model__WEBPACK_IMPORTED_MODULE_4__.generateToDos)().forEach(function (todo) {
              return _this.store.dispatch(new _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__.AddToDo(todo));
            });
            this.completeToDos = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_state_todo__WEBPACK_IMPORTED_MODULE_2__.completeToDos));
            this.incompleteToDos = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_state_todo__WEBPACK_IMPORTED_MODULE_2__.incompleteToDos));
          }
        }, {
          key: "addToDo",
          value: function addToDo() {
            this.store.dispatch(new _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__.AddToDo({
              id: Math.random(),
              complete: false,
              task: this.taskContents
            }));
          }
        }, {
          key: "onAddToDoChange",
          value: function onAddToDoChange(e) {
            console.log(e);
            this.taskContents = e.task;
          }
        }, {
          key: "onCompleteToDo",
          value: function onCompleteToDo(toDo) {
            this.store.dispatch(new _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__.CompleteToDo(toDo));
          }
        }, {
          key: "onIncompleteToDo",
          value: function onIncompleteToDo(toDo) {
            this.store.dispatch(new _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__.IncompleteToDo(toDo));
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'my-app',
        template: _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      78662);
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material */
      75532);
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material */
      63512);
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material */
      68879);
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material */
      73204);
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material */
      61289);
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material */
      81244);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/todo/todo.component */
      61004);
      /* harmony import */


      var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/todo-list/todo-list.component */
      42756);
      /* harmony import */


      var _state_state_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./state/state.module */
      85985);
      /* harmony import */


      var _components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/todo-form/todo-form.component */
      2045);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_material__WEBPACK_IMPORTED_MODULE_16__.MatListModule, _state_state_module__WEBPACK_IMPORTED_MODULE_3__.StateModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__.TodoComponent, _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__.TodoListComponent, _components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_4__.TodoFormComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    2045: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TodoFormComponent": function TodoFormComponent() {
          return (
            /* binding */
            _TodoFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./todo-form.component.html */
      53066);
      /* harmony import */


      var _todo_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./todo-form.component.scss */
      11650);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      22663);

      var _TodoFormComponent = /*#__PURE__*/function () {
        function TodoFormComponent() {
          _classCallCheck(this, TodoFormComponent);

          this.toDoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }

        _createClass(TodoFormComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.next();
            this.unsubscribe.complete();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.task = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
            this.task.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe)).subscribe(function (value) {
              return _this2.toDoChange.emit({
                task: value
              });
            });
          }
        }]);

        return TodoFormComponent;
      }();

      _TodoFormComponent.ctorParameters = function () {
        return [];
      };

      _TodoFormComponent.propDecorators = {
        toDoChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _TodoFormComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-todo-form',
        template: _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_todo_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _TodoFormComponent);
      /***/
    },

    /***/
    42756: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TodoListComponent": function TodoListComponent() {
          return (
            /* binding */
            _TodoListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./todo-list.component.html */
      67340);
      /* harmony import */


      var _todo_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./todo-list.component.scss */
      44654);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TodoListComponent = /*#__PURE__*/function () {
        function TodoListComponent() {
          _classCallCheck(this, TodoListComponent);

          this.toDoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(TodoListComponent, [{
          key: "onCompleteChange",
          value: function onCompleteChange(toDo, change) {
            console.log(toDo);
            this.toDoChange.emit(Object.assign(Object.assign({}, toDo), {
              complete: change.checked
            }));
          }
        }]);

        return TodoListComponent;
      }();

      _TodoListComponent.ctorParameters = function () {
        return [];
      };

      _TodoListComponent.propDecorators = {
        toDos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        toDoChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _TodoListComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-todo-list',
        template: _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_todo_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _TodoListComponent);
      /***/
    },

    /***/
    61004: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TodoComponent": function TodoComponent() {
          return (
            /* binding */
            _TodoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./todo.component.html */
      30601);
      /* harmony import */


      var _todo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./todo.component.scss */
      88059);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TodoComponent = function TodoComponent() {
        _classCallCheck(this, TodoComponent);

        this.completeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      };

      _TodoComponent.propDecorators = {
        toDo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        completeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _TodoComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-todo',
        template: _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_todo_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _TodoComponent);
      /***/
    },

    /***/
    85985: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StateModule": function StateModule() {
          return (
            /* binding */
            _StateModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      22373);
      /* harmony import */


      var _state_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./state.reducers */
      85116);

      var StateModule_1;

      var _StateModule = StateModule_1 = /*#__PURE__*/function () {
        function StateModule(parentModule) {
          _classCallCheck(this, StateModule);

          if (parentModule) {
            throw new Error('StateModule is already loaded. Import it in the AppModule only');
          }
        }

        _createClass(StateModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: StateModule_1
            };
          }
        }]);

        return StateModule;
      }();

      _StateModule.ctorParameters = function () {
        return [{
          type: _StateModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
          }]
        }];
      };

      _StateModule = StateModule_1 = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forRoot(_state_reducers__WEBPACK_IMPORTED_MODULE_0__.appReducers), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__.StoreDevtoolsModule.instrument()],
        declarations: []
      })], _StateModule);
      /***/
    },

    /***/
    85116: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "appReducers": function appReducers() {
          return (
            /* binding */
            _appReducers
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./todo/todo.reducer */
      65649);

      var _appReducers = {
        todo: _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__.toDoReducer
      };
      /***/
    },

    /***/
    21056: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "selectToDoState": function selectToDoState() {
          return (
            /* binding */
            _selectToDoState
          );
        },

        /* harmony export */
        "toDoIds": function toDoIds() {
          return (
            /* binding */
            _toDoIds
          );
        },

        /* harmony export */
        "toDoEntities": function toDoEntities() {
          return (
            /* binding */
            _toDoEntities
          );
        },

        /* harmony export */
        "allToDos": function allToDos() {
          return (
            /* binding */
            _allToDos
          );
        },

        /* harmony export */
        "totalToDos": function totalToDos() {
          return (
            /* binding */
            _totalToDos
          );
        },

        /* harmony export */
        "completeToDos": function completeToDos() {
          return (
            /* binding */
            _completeToDos
          );
        },

        /* harmony export */
        "incompleteToDos": function incompleteToDos() {
          return (
            /* binding */
            _incompleteToDos
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./todo.reducer */
      65649);

      var _selectToDoState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('todo');

      var _todo_reducer__WEBPAC = _todo_reducer__WEBPACK_IMPORTED_MODULE_0__.toDoAdapter.getSelectors(_selectToDoState),
          _toDoIds = _todo_reducer__WEBPAC.selectIds,
          _toDoEntities = _todo_reducer__WEBPAC.selectEntities,
          _allToDos = _todo_reducer__WEBPAC.selectAll,
          _totalToDos = _todo_reducer__WEBPAC.selectTotal;

      var _completeToDos = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_allToDos, function (toDos) {
        return toDos.filter(function (toDo) {
          return toDo.complete;
        });
      });

      var _incompleteToDos = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_allToDos, function (toDos) {
        return toDos.filter(function (toDo) {
          return !toDo.complete;
        });
      });
      /***/

    },

    /***/
    40976: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToDoActionTypes": function ToDoActionTypes() {
          return (
            /* binding */
            _ToDoActionTypes
          );
        },

        /* harmony export */
        "AddToDo": function AddToDo() {
          return (
            /* binding */
            _AddToDo
          );
        },

        /* harmony export */
        "CompleteToDo": function CompleteToDo() {
          return (
            /* binding */
            _CompleteToDo
          );
        },

        /* harmony export */
        "IncompleteToDo": function IncompleteToDo() {
          return (
            /* binding */
            _IncompleteToDo
          );
        }
        /* harmony export */

      });

      var _ToDoActionTypes;

      (function (ToDoActionTypes) {
        ToDoActionTypes["AddToDo"] = "[Todo] Add Todo";
        ToDoActionTypes["CompleteToDo"] = "[Todo] Complete Todo";
        ToDoActionTypes["IncompleteToDo"] = "[Todo] Incomplete Todo";
      })(_ToDoActionTypes || (_ToDoActionTypes = {}));

      var _AddToDo = function _AddToDo(payload) {
        _classCallCheck(this, _AddToDo);

        this.payload = payload;
        this.type = _ToDoActionTypes.AddToDo;
      };

      var _CompleteToDo = function _CompleteToDo(payload) {
        _classCallCheck(this, _CompleteToDo);

        this.payload = payload;
        this.type = _ToDoActionTypes.CompleteToDo;
      };

      var _IncompleteToDo = function _IncompleteToDo(payload) {
        _classCallCheck(this, _IncompleteToDo);

        this.payload = payload;
        this.type = _ToDoActionTypes.IncompleteToDo;
      };
      /***/

    },

    /***/
    75242: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "generateToDos": function generateToDos() {
          return (
            /* binding */
            _generateToDos
          );
        }
        /* harmony export */

      });

      function _generateToDos() {
        return [{
          id: 1,
          task: 'Watch Ozark Season 2',
          complete: false
        }, {
          id: 2,
          task: 'Use NgRx in my to-do app',
          complete: true
        }];
      }
      /***/

    },

    /***/
    65649: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "toDoAdapter": function toDoAdapter() {
          return (
            /* binding */
            _toDoAdapter
          );
        },

        /* harmony export */
        "initialSiteState": function initialSiteState() {
          return (
            /* binding */
            _initialSiteState
          );
        },

        /* harmony export */
        "toDoReducer": function toDoReducer() {
          return (
            /* binding */
            _toDoReducer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/entity */
      64283);
      /* harmony import */


      var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./todo.actions */
      40976);

      var _toDoAdapter = (0, _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();

      var _initialSiteState = _toDoAdapter.getInitialState();

      function _toDoReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialSiteState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _todo_actions__WEBPACK_IMPORTED_MODULE_0__.ToDoActionTypes.AddToDo:
            return _toDoAdapter.addOne(action.payload, state);

          case _todo_actions__WEBPACK_IMPORTED_MODULE_0__.ToDoActionTypes.CompleteToDo:
            return _toDoAdapter.updateOne({
              id: action.payload.id,
              changes: Object.assign(Object.assign({}, action.payload), {
                complete: true
              })
            }, state);

          case _todo_actions__WEBPACK_IMPORTED_MODULE_0__.ToDoActionTypes.IncompleteToDo:
            return _toDoAdapter.updateOne({
              id: action.payload.id,
              changes: Object.assign(Object.assign({}, action.payload), {
                complete: false
              })
            }, state);

          default:
            {
              return state;
            }
        }
      }
      /***/

    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      7435);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      36747);

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    7435: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! core-js/es6/reflect */
      61281);
      /* harmony import */


      var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! core-js/es7/reflect */
      98347);
      /* harmony import */


      var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! zone.js */
      47761);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_2__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/

      /** ALL Firefox browsers require the following to support `@angular/animation`. **/
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    75158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" class=\"cards\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <div fxFlex=\"90%\" fxFlex.md=\"66.6667%\" fxFlex.gt-md=\"50%\">\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title><h2>To Do List</h2></mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <ng-container *ngIf=\"incompleteToDos | async; let toDos\">\n            <ng-container *ngIf=\"toDos.length > 0; else allDone\">\n              <app-todo-list [toDos]=\"toDos\" (toDoChange)=\"onCompleteToDo($event)\"></app-todo-list>\n            </ng-container>\n            <ng-template #allDone>\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <h4>All Done!! 🏖</h4>\n              </div>\n            </ng-template>\n          </ng-container>\n        </mat-card-content>\n      </mat-card>\n\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title><h2>Add To Do</h2></mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <app-todo-form (toDoChange)=\"onAddToDoChange($event)\"></app-todo-form>\n          <div fxLayout=\"row\" fxLayoutAlign=\"end\">\n            <button mat-button color=\"primary\" (click)=\"addToDo()\">Add To Do</button>\n          </div>\n        </mat-card-content>\n      </mat-card>\n\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title><h2>Completed 🎉</h2></mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <app-todo-list [toDos]=\"completeToDos | async\" (toDoChange)=\"onIncompleteToDo($event)\"></app-todo-list>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    53066: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-form-field>\n  <input matInput [formControl]=\"task\">\n</mat-form-field>";
      /***/
    },

    /***/
    67340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-list role=\"list\">\n  <app-todo *ngFor=\"let toDo of toDos\" [toDo]=\"toDo\" (completeChange)=\"onCompleteChange(toDo, $event)\"></app-todo>\n</mat-list>";
      /***/
    },

    /***/
    30601: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-list-item [class.complete]=\"toDo?.complete\">\n  <mat-checkbox [checked]=\"toDo.complete\" (change)=\"this.completeChange.emit($event)\">{{ toDo?.task }}</mat-checkbox>\n</mat-list-item>";
      /***/
    },

    /***/
    53040: function _(module) {
      "use strict";

      module.exports = ".cards {\n  margin-top: 20px;\n}\n.cards mat-card + mat-card {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICBtYXQtY2FyZCArIG1hdC1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    11650: function _(module) {
      "use strict";

      module.exports = ":host mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7QUFBSiIsImZpbGUiOiJ0b2RvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    44654: function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    88059: function _(module) {
      "use strict";

      module.exports = ":host .complete {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw2QkFBQTtBQUFKIiwiZmlsZSI6InRvZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb21wbGV0ZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbn0iXX0= */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map