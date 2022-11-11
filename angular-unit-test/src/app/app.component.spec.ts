import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    //@NgModule
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-unit-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-unit-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-unit-test app is running!');
  });
});
// import {AppComponent} from './app.component' //Code Under Test
// //TestSuite
// describe("AppComponent Test Suite",()=>{

//   //unit Test Code
//   it("AppComponent Instantiation",()=>{
// const instance =new AppComponent();
// expect(instance).toBeTruthy();
//   })

//   it("AppCoomponent tilte should be angular-unit-test",()=>{
//     const instance =new AppComponent();
//     expect(instance.title).toBe("angular-unit-test");
//   });
// });

