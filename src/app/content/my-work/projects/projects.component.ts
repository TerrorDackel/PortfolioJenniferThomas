import { Component } from '@angular/core';
import { ProjectImgComponent } from './project-img/project-img.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectImgComponent, ProjectDescriptionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {

}
