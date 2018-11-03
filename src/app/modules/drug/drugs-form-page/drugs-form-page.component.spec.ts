import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsFormPageComponent } from './drugs-form-page.component';

describe('DrugsFormPageComponent', () => {
  let component: DrugsFormPageComponent;
  let fixture: ComponentFixture<DrugsFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugsFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
