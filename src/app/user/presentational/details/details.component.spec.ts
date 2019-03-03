import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

const dummyUser = {
  id: '01',
  name: 'Dummy',
  email: 'dummy@whatever.com'
};

describe('User DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
