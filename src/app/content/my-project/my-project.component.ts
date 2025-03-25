import { Component } from '@angular/core';
import { ProjectImgComponent } from './project-img/project-img.component';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-my-project',
  standalone: true,
  imports: [ProjectImgComponent, ProjectComponent],
  templateUrl: './my-project.component.html',
  styleUrl: './my-project.component.sass'
})
export class MyProjectComponent {

}
