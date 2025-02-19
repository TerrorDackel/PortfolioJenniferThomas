import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectTextButtonComponent } from './my-project-text-button.component';

describe('MyProjectTextButtonComponent', () => {
  let component: MyProjectTextButtonComponent;
  let fixture: ComponentFixture<MyProjectTextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectTextButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProjectTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
