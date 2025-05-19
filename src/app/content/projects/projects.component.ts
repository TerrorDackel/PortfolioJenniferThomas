import { Component } from '@angular/core';
import { ProjectsTxtDescriptionComponent } from './projects-txt-description/projects-txt-description.component';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [ProjectsTxtDescriptionComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.sass'
})
export class ProjectsComponent {
    projects = [
        {
            name: 'Join',
            usedProgramms: ['Angular | TypeScript | HTML | CSS | Firebase'],
            description: 'PROJECTS.JOIN.DESCRIPTION',
            gitLink: 'https://github.com/TerrorDackel/Join',
            projectImg: 'assets/img/join.png',
            livetest: 'https://jennifer-thomas.developerakademie.net/Join/index.html'
        },
        {
            name: 'Pollo Loco',
            usedProgramms: ['JavaScript | HTML | CSS'],
            description: 'PROJECTS.POLLO.DESCRIPTION',
            gitLink: 'https://github.com/TerrorDackel/El-Pollo-Loco',
            projectImg: 'assets/img/el-pollo-loco.png',
            livetest: 'https://jennifer-thomas.developerakademie.net/ElPolloLoco/index.html'
        },
        {
            name: 'Pokedex',
            usedProgramms: ['JavaScript | HTML | CSS | API'],
            description: 'PROJECTS.POKEDEX.DESCRIPTION',
            gitLink: 'https://github.com/TerrorDackel/Pokedex',
            projectImg: 'assets/img/pokedex.png',
            livetest: 'https://jennifer-thomas.developerakademie.net/Pokedex160125/index.html'
        }
    ];
}
