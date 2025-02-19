import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WorkTogetherComponent } from './work-together/work-together.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { RefSectionComponent } from './ref-section/ref-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, WorkTogetherComponent, SkillSetComponent, MyWorkComponent, MyProjectComponent,RefSectionComponent, ContactSectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {

}
