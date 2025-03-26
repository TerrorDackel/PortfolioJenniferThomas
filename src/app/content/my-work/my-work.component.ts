import { Component } from '@angular/core';
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.sass'
})
export class MyWorkComponent {

}
