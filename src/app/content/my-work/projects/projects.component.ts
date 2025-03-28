import { Component } from '@angular/core';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDescriptionComponent, TranslatePipe, TranslateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {
  projectImg = ['assets/img/join.png', 'assets/img/el-pollo-loco.png', 'assets/img/pokedex.png']
  name = ['Join', 'El Pollo Loco', 'Pokedex']
}
