import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefSectionComponent } from './ref-section.component';

describe('RefSectionComponent', () => {
  let component: RefSectionComponent;
  let fixture: ComponentFixture<RefSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
