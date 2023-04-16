import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
// import { Router } from 'express';
// import { IonicModule } from '@ionic/angular';
// import {AppRoutingModule} from '../../app.routes'

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  // let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // imports:[IonicModule.forRoot(),
    //   AppRoutingModule]
  }));

  // router = TestBed.get(Router);

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should go to Login Page after loading', () => {
  //   component.ngOnInit();
  //   expect(router.navigate).toHaveBeenCalledWith(['login'])
  // });


});
