import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatestudentPage } from './updatestudent.page';

describe('UpdatestudentPage', () => {
  let component: UpdatestudentPage;
  let fixture: ComponentFixture<UpdatestudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatestudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
