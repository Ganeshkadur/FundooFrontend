import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlablesComponent } from './editlables.component';

describe('EditlablesComponent', () => {
  let component: EditlablesComponent;
  let fixture: ComponentFixture<EditlablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
