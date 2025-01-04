import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFooterComponent } from './second-footer.component';

describe('SecondFooterComponent', () => {
  let component: SecondFooterComponent;
  let fixture: ComponentFixture<SecondFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondFooterComponent]
    });
    fixture = TestBed.createComponent(SecondFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
