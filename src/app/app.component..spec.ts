import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from './state/todo/todo.model';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const storeStub = () => ({ dispatch: arg => ({}), pipe: arg => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [{ provide: Store, useFactory: storeStub }]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('onCompleteToDo', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      const toDoStub: ToDo = <any>{};
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.onCompleteToDo(toDoStub);
    
    });
  });

  describe('onIncompleteToDo', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      const toDoStub: ToDo = <any>{};
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.onIncompleteToDo(toDoStub);
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'initialize').and.callThrough();
      component.ngOnInit();
      expect(component.initialize).toHaveBeenCalled();
    });
  });

  describe('initialize', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'dispatch').and.callThrough();
      spyOn(storeStub, 'pipe').and.callThrough();
      component.initialize();
      expect(storeStub.dispatch).toHaveBeenCalled();
      expect(storeStub.pipe).toHaveBeenCalled();
    });
  });

  describe('addToDo', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      spyOn(storeStub, 'dispatch').and.callThrough();
      component.addToDo();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });
});
