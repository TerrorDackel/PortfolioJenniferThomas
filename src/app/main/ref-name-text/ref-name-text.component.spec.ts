import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefNameTextComponent } from './ref-name-text.component';

describe('RefNameTextComponent', () => {
  let component: RefNameTextComponent;
  let fixture: ComponentFixture<RefNameTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefNameTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefNameTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
