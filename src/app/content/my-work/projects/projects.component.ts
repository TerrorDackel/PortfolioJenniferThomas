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
  projects = [
    {
      name: 'Join',
      usedProgramms: ['Angular | TypeScript | HTML | CSS | Firebase'],
      description: 'Taskmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.sk manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      gitLink: 'https://github.com/TerrorDackel/Join',
      projectImg: 'assets/img/join.jpg',
      livetest: 'https://jennifer-thomas.developerakademie.net/Join/index.html'
    },
    {
      name: 'Pollo Loco',
      usedProgramms: ['JavaScript | HTML | CSS'],
      description: 'Jump’n’Run-Spiel mit Wurf-Funktion auf objektorientierter Basis. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
      gitLink: 'https://github.com/TerrorDackel/El-Pollo-Loco',
      projectImg: 'assets/img/el-pollo-loco.jpg',
      livetest: 'https://jennifer-thomas.developerakademie.net/ElPolloLoco/index.html'
    },
    {
      name: 'Pokedex',
      usedProgramms: ['JavaScript | HTML | CSS | API'],
      description: 'Basierend auf der PokéAPI – eine einfache Bibliothek zur Anzeige und Katalogisierung von Pokémon-Informationen.',
      gitLink: 'https://github.com/TerrorDackel/Pokedex',
      projectImg: 'assets/img/pokedex.jpg',
      livetest: 'https://jennifer-thomas.developerakademie.net/Pokedex160125/index.html'
    }
  ];
}
