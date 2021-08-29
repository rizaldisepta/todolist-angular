(self["webpackChunkangular_material_todo"] = self["webpackChunkangular_material_todo"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 53040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _state_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/todo */ 21056);
/* harmony import */ var _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/todo/todo.actions */ 40976);
/* harmony import */ var _state_todo_todo_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/todo/todo.model */ 75242);








let AppComponent = class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        (0,_state_todo_todo_model__WEBPACK_IMPORTED_MODULE_4__.generateToDos)().forEach(todo => this.store.dispatch(new _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__.AddToDo(todo)));
        this.completeToDos = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_state_todo__WEBPACK_IMPORTED_MODULE_2__.completeToDos));
        this.incompleteToDos = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_state_todo__WEBPACK_IMPORTED_MODULE_2__.incompleteToDos));
    }
    addToDo() {
        this.store.dispatch(new _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__.AddToDo({
            id: Math.random(),
            complete: false,
            task: this.taskContents
        }));
    }
    onAddToDoChange(e) {
        console.log(e);
        this.taskContents = e.task;
    }
    onCompleteToDo(toDo) {
        this.store.dispatch(new _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__.CompleteToDo(toDo));
    }
    onIncompleteToDo(toDo) {
        this.store.dispatch(new _state_todo_todo_actions__WEBPACK_IMPORTED_MODULE_3__.IncompleteToDo(toDo));
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'my-app',
        template: _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 78662);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ 75532);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ 63512);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ 68879);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ 73204);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ 61289);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ 81244);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo/todo.component */ 61004);
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ 42756);
/* harmony import */ var _state_state_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/state.module */ 85985);
/* harmony import */ var _components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo-form/todo-form.component */ 2045);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
            _state_state_module__WEBPACK_IMPORTED_MODULE_3__.StateModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__.TodoComponent, _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__.TodoListComponent, _components_todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_4__.TodoFormComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 2045:
/*!*************************************************************!*\
  !*** ./src/app/components/todo-form/todo-form.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoFormComponent": function() { return /* binding */ TodoFormComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./todo-form.component.html */ 53066);
/* harmony import */ var _todo_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-form.component.scss */ 11650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 22663);







let TodoFormComponent = class TodoFormComponent {
    constructor() {
        this.toDoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    ngOnInit() {
        this.task = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
        this.task.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe))
            .subscribe(value => this.toDoChange.emit({ task: value }));
    }
};
TodoFormComponent.ctorParameters = () => [];
TodoFormComponent.propDecorators = {
    toDoChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TodoFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-todo-form',
        template: _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_todo_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TodoFormComponent);



/***/ }),

/***/ 42756:
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoListComponent": function() { return /* binding */ TodoListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./todo-list.component.html */ 67340);
/* harmony import */ var _todo_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.component.scss */ 44654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let TodoListComponent = class TodoListComponent {
    constructor() {
        this.toDoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    onCompleteChange(toDo, change) {
        console.log(toDo);
        this.toDoChange.emit(Object.assign(Object.assign({}, toDo), { complete: change.checked }));
    }
};
TodoListComponent.ctorParameters = () => [];
TodoListComponent.propDecorators = {
    toDos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    toDoChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TodoListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-todo-list',
        template: _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_todo_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TodoListComponent);



/***/ }),

/***/ 61004:
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoComponent": function() { return /* binding */ TodoComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./todo.component.html */ 30601);
/* harmony import */ var _todo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.component.scss */ 88059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let TodoComponent = class TodoComponent {
    constructor() {
        this.completeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
};
TodoComponent.propDecorators = {
    toDo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    completeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TodoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-todo',
        template: _C_projects_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_todo_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TodoComponent);



/***/ }),

/***/ 85985:
/*!***************************************!*\
  !*** ./src/app/state/state.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateModule": function() { return /* binding */ StateModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ 22373);
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.reducers */ 85116);
var StateModule_1;






let StateModule = StateModule_1 = class StateModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('StateModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: StateModule_1
        };
    }
};
StateModule.ctorParameters = () => [
    { type: StateModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf }] }
];
StateModule = StateModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forRoot(_state_reducers__WEBPACK_IMPORTED_MODULE_0__.appReducers),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__.StoreDevtoolsModule.instrument()
        ],
        declarations: []
    })
], StateModule);



/***/ }),

/***/ 85116:
/*!*****************************************!*\
  !*** ./src/app/state/state.reducers.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducers": function() { return /* binding */ appReducers; }
/* harmony export */ });
/* harmony import */ var _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/todo.reducer */ 65649);

const appReducers = {
    todo: _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__.toDoReducer
};


/***/ }),

/***/ 21056:
/*!*************************************!*\
  !*** ./src/app/state/todo/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectToDoState": function() { return /* binding */ selectToDoState; },
/* harmony export */   "toDoIds": function() { return /* binding */ toDoIds; },
/* harmony export */   "toDoEntities": function() { return /* binding */ toDoEntities; },
/* harmony export */   "allToDos": function() { return /* binding */ allToDos; },
/* harmony export */   "totalToDos": function() { return /* binding */ totalToDos; },
/* harmony export */   "completeToDos": function() { return /* binding */ completeToDos; },
/* harmony export */   "incompleteToDos": function() { return /* binding */ incompleteToDos; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.reducer */ 65649);


const selectToDoState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('todo');
const { selectIds: toDoIds, selectEntities: toDoEntities, selectAll: allToDos, selectTotal: totalToDos, } = _todo_reducer__WEBPACK_IMPORTED_MODULE_0__.toDoAdapter.getSelectors(selectToDoState);
const completeToDos = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(allToDos, (toDos) => toDos.filter(toDo => toDo.complete));
const incompleteToDos = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(allToDos, (toDos) => toDos.filter(toDo => !toDo.complete));


/***/ }),

/***/ 40976:
/*!********************************************!*\
  !*** ./src/app/state/todo/todo.actions.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoActionTypes": function() { return /* binding */ ToDoActionTypes; },
/* harmony export */   "AddToDo": function() { return /* binding */ AddToDo; },
/* harmony export */   "CompleteToDo": function() { return /* binding */ CompleteToDo; },
/* harmony export */   "IncompleteToDo": function() { return /* binding */ IncompleteToDo; }
/* harmony export */ });
var ToDoActionTypes;
(function (ToDoActionTypes) {
    ToDoActionTypes["AddToDo"] = "[Todo] Add Todo";
    ToDoActionTypes["CompleteToDo"] = "[Todo] Complete Todo";
    ToDoActionTypes["IncompleteToDo"] = "[Todo] Incomplete Todo";
})(ToDoActionTypes || (ToDoActionTypes = {}));
class AddToDo {
    constructor(payload) {
        this.payload = payload;
        this.type = ToDoActionTypes.AddToDo;
    }
}
class CompleteToDo {
    constructor(payload) {
        this.payload = payload;
        this.type = ToDoActionTypes.CompleteToDo;
    }
}
class IncompleteToDo {
    constructor(payload) {
        this.payload = payload;
        this.type = ToDoActionTypes.IncompleteToDo;
    }
}


/***/ }),

/***/ 75242:
/*!******************************************!*\
  !*** ./src/app/state/todo/todo.model.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateToDos": function() { return /* binding */ generateToDos; }
/* harmony export */ });
function generateToDos() {
    return [
        {
            id: 1,
            task: 'Watch Ozark Season 2',
            complete: false
        },
        {
            id: 2,
            task: 'Use NgRx in my to-do app',
            complete: true
        }
    ];
}


/***/ }),

/***/ 65649:
/*!********************************************!*\
  !*** ./src/app/state/todo/todo.reducer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoAdapter": function() { return /* binding */ toDoAdapter; },
/* harmony export */   "initialSiteState": function() { return /* binding */ initialSiteState; },
/* harmony export */   "toDoReducer": function() { return /* binding */ toDoReducer; }
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 64283);
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ 40976);


const toDoAdapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();
const initialSiteState = toDoAdapter.getInitialState();
function toDoReducer(state = initialSiteState, action) {
    switch (action.type) {
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__.ToDoActionTypes.AddToDo:
            return toDoAdapter.addOne(action.payload, state);
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__.ToDoActionTypes.CompleteToDo:
            return toDoAdapter.updateOne({
                id: action.payload.id,
                changes: Object.assign(Object.assign({}, action.payload), { complete: true })
            }, state);
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__.ToDoActionTypes.IncompleteToDo:
            return toDoAdapter.updateOne({
                id: action.payload.id,
                changes: Object.assign(Object.assign({}, action.payload), { complete: false })
            }, state);
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 7435);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 61882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);



(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/reflect */ 61281);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es7/reflect */ 98347);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js */ 47761);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_2__);
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


/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" class=\"cards\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <div fxFlex=\"90%\" fxFlex.md=\"66.6667%\" fxFlex.gt-md=\"50%\">\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title><h2>To Do List</h2></mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <ng-container *ngIf=\"incompleteToDos | async; let toDos\">\n            <ng-container *ngIf=\"toDos.length > 0; else allDone\">\n              <app-todo-list [toDos]=\"toDos\" (toDoChange)=\"onCompleteToDo($event)\"></app-todo-list>\n            </ng-container>\n            <ng-template #allDone>\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <h4>All Done!! 🏖</h4>\n              </div>\n            </ng-template>\n          </ng-container>\n        </mat-card-content>\n      </mat-card>\n\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title><h2>Add To Do</h2></mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <app-todo-form (toDoChange)=\"onAddToDoChange($event)\"></app-todo-form>\n          <div fxLayout=\"row\" fxLayoutAlign=\"end\">\n            <button mat-button color=\"primary\" (click)=\"addToDo()\">Add To Do</button>\n          </div>\n        </mat-card-content>\n      </mat-card>\n\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title><h2>Completed 🎉</h2></mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <app-todo-list [toDos]=\"completeToDos | async\" (toDoChange)=\"onIncompleteToDo($event)\"></app-todo-list>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 53066:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/todo-form/todo-form.component.html ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <input matInput [formControl]=\"task\">\n</mat-form-field>");

/***/ }),

/***/ 67340:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/todo-list/todo-list.component.html ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list role=\"list\">\n  <app-todo *ngFor=\"let toDo of toDos\" [toDo]=\"toDo\" (completeChange)=\"onCompleteChange(toDo, $event)\"></app-todo>\n</mat-list>");

/***/ }),

/***/ 30601:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/todo/todo.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list-item [class.complete]=\"toDo?.complete\">\n  <mat-checkbox [checked]=\"toDo.complete\" (change)=\"this.completeChange.emit($event)\">{{ toDo?.task }}</mat-checkbox>\n</mat-list-item>");

/***/ }),

/***/ 53040:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = ".cards {\n  margin-top: 20px;\n}\n.cards mat-card + mat-card {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICBtYXQtY2FyZCArIG1hdC1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59Il19 */";

/***/ }),

/***/ 11650:
/*!***************************************************************!*\
  !*** ./src/app/components/todo-form/todo-form.component.scss ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ":host mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7QUFBSiIsImZpbGUiOiJ0b2RvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 44654:
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.scss ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 88059:
/*!*****************************************************!*\
  !*** ./src/app/components/todo/todo.component.scss ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = ":host .complete {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw2QkFBQTtBQUFKIiwiZmlsZSI6InRvZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jb21wbGV0ZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbn0iXX0= */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map