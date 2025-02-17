import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNavBarHeroFooterComponent } from './icon-nav-bar-hero-footer.component';

describe('IconNavBarHeroFooterComponent', () => {
  let component: IconNavBarHeroFooterComponent;
  let fixture: ComponentFixture<IconNavBarHeroFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconNavBarHeroFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconNavBarHeroFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
