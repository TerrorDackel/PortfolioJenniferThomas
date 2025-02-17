import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmIconTextComponent } from './i-am-icon-text.component';

describe('IAmIconTextComponent', () => {
  let component: IAmIconTextComponent;
  let fixture: ComponentFixture<IAmIconTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IAmIconTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IAmIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
