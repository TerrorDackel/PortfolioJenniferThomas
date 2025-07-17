import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WorkTogetherComponent } from './work-together/work-together.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ProjectsComponent } from './projects/projects.component';
import { RefSectionComponent } from './ref-section/ref-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        HeroComponent, 
        WorkTogetherComponent, 
        SkillSetComponent, 
        MyWorkComponent, 
        ProjectsComponent,
        RefSectionComponent, 
        ContactSectionComponent
    ],
    templateUrl: './content.component.html',
    styleUrl: './content.component.sass'
})
export class ContentComponent { }