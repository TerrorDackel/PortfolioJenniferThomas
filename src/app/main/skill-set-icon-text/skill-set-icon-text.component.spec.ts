import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSetIconTextComponent } from './skill-set-icon-text.component';

describe('SkillSetIconTextComponent', () => {
  let component: SkillSetIconTextComponent;
  let fixture: ComponentFixture<SkillSetIconTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSetIconTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillSetIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
