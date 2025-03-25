import { Component } from '@angular/core';
import { ProgrammBoxComponent } from './programm-box/programm-box.component';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [ProgrammBoxComponent],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.sass'
})
export class SkillSetComponent {

}
