import { Component } from '@angular/core';
import { RefComponent } from './ref/ref.component';

@Component({
  selector: 'app-ref-section',
  standalone: true,
  imports: [RefComponent],
  templateUrl: './ref-section.component.html',
  styleUrl: './ref-section.component.sass'
})
export class RefSectionComponent {

}
