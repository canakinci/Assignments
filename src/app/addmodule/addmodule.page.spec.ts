import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddmodulePage } from './addmodule.page';

describe('AddmodulePage', () => {
  let component: AddmodulePage;
  let fixture: ComponentFixture<AddmodulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddmodulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
