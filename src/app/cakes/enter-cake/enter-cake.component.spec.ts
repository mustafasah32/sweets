import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCakeComponent } from './enter-cake.component';

describe('InsertCakeComponent', () => {
  let component: EnterCakeComponent;
  let fixture: ComponentFixture<EnterCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
